/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import dataFixture from '../../data/pdp.json';

import { Grid, Row, Col } from 'react-flexbox-grid';
import ProductCarousel from '../../components/ProductCarousel';
import QuantitySelector from '../../components/QuantitySelector';
import ProductReviews from '../../components/ProductReviews';


import Button from '../../components/Button';

function createMarkup(content) {
  return {__html: content};
}


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(modifier = 1) {
    const newQuantity = this.state.quantity + modifier;
    // Do not allow to select 0 or negative quantity
    if (newQuantity < 1) {
      return
    }
    this.setState({
      quantity: newQuantity
    })
  }
  
  addToCart(item, quantity = 1) {
    alert(`added ${quantity} of ${item} to cart`)
  }
  
  pickUpInStore(item, quantity = 1) {
    alert(`added ${quantity} of ${item} to cart for eventual pick up in store`)
  }

  render() {
    const itemData = dataFixture.CatalogEntryView[0];
    const item = {
      price: itemData.Offers[0].OfferPrice[0].formattedPriceValue,
      priceQualifier: itemData.Offers[0].OfferPrice[0].priceQualifier,
      images: [itemData.Images[0].PrimaryImage[0].image].concat(itemData.Images[0].AlternateImages.map(alt => alt.image)),
      promos: itemData.Promotions.map(promo => (
        promo.Description[0].shortDescription
      )),
      reviews: {
        totalReviews: itemData.CustomerReview[0].totalReviews,
        rating: itemData.CustomerReview[0].consolidatedOverallRating,
        con: itemData.CustomerReview[0].Con,
        pro: itemData.CustomerReview[0].Pro,
      },
      itemDescription: itemData.ItemDescription[0].features,
      partNumber: itemData.partNumber,
      inventoryCode: Number(itemData.inventoryCode),
    }

    return (
      <Grid fluid style={{margin: '0 auto'}}>
        <Row>
          <Col xs={12} md={6}>
            <Col xs={12}>
              <h2>{itemData.title}</h2>
            </Col>
            <Col xs={12}>
              <ProductCarousel>
                {
                  item.images.map((image, index) => {
                    return <img key={`${image}${index}`} src={image} height="300" width="300" alt="" />
                  })
                }
              </ProductCarousel>
            </Col>
          </Col>
          <Col xs={12} md={6}>
            <Col xs={12}>
              <span>
                <h2 style={{display: 'inline'}}>{item.price}</h2>
                <span style={{marginLeft: '5px'}}>{item.priceQualifier}</span>
              </span>
            </Col>
            <hr />
            <Col xs={12}>
              <ul style={{color: '#c00'}}>
              {
                item.promos.map((promo, index) => {
                  return <li key={index}>{promo}</li>
                })
              }
              </ul>
            </Col>
            <hr />
            <Col xs={12} md={6}>
              <span style={{margiBottom: '5px'}}>Quantity</span>
              <QuantitySelector
                quantity={this.state.quantity}
                updateQuantity={this.updateQuantity}
              />
            </Col>
            <Col xs={12} style={{marginTop: '15px'}}>
              <Row>
              { 
                (item.inventoryCode === 0 || item.inventoryCode === 2) ?
                  <Col xs={6} md={6}>
                    <Button onClick={() => this.pickUpInStore(item.partNumber, this.state.quantity)}>
                      PICK UP IN STORE
                    </Button>
                  </Col> : null
              }
              {
                (item.inventoryCode === 0 || item.inventoryCode === 1) ?
                  <Col xs={6} md={6}>
                    <Button onClick={() => this.addToCart(item.partNumber, this.state.quantity)}>
                      ADD TO CART
                    </Button>
                  </Col> : null
              }
              </Row>
            </Col>
            <Col xs={12} style={{margin: '15px 0'}}>
              <Row middle="xs">
                <Col xs={2} style={{fontSize: '19px', maxWidth: '220px'}}>Returns</Col>
                <Col xs={10} style={{borderLeft: '1px solid #666'}}>
                  <div style={{fontSize: '12px', paddingLeft: '5px'}} dangerouslySetInnerHTML={createMarkup(itemData.ReturnPolicy[0].legalCopy)} />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={4}><Button>add to registry</Button></Col>
                <Col xs={4}><Button>add to list</Button></Col>
                <Col xs={4}><Button>add to share</Button></Col>
              </Row>
            </Col>
            <Col xs={12}>
              <h2>Product Highlights</h2>
              <ul>
              {
                item.itemDescription.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={createMarkup(item)} />
                ))
              }
              </ul>
            </Col>
          </Col>
          <Col xs={12} md={6}>
            <ProductReviews
              rating={item.reviews.rating}
              totalReviews={item.reviews.totalReviews}
              pro={item.reviews.pro}
              con={item.reviews.con}
            />
          </Col>
      </Row>
    </Grid>
    );
  }
}
