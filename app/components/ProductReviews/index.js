import React from 'react';
import ReviewItem from './ReviewItem';

import { Row, Col } from 'react-flexbox-grid';

/* TODO: Extract some of these into more subcompnents */
const ProductReviews = ({ rating, totalReviews, pro = [], con = [] }) => (
  <div>
    <Row>
      <Col xs={12}>
        <div>
          <span style={{ float: 'left' }}>{rating} overall rating</span>
          <span style={{ float: 'right' }}>{totalReviews} total reviews</span>
        </div>
      </Col>
    </Row>
    <Row style={{ background: '#efefef', borderRadius: '5px', padding: '10px', marginTop: '5px' }}>
      <Col xs={6}>
        <div style={{ clear: 'both' }}>
          <h3 style={{ fontSize: '15px', margin: '0' }}>Pro</h3>
          <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>most helpful 4-5 star review</p>
          {
            pro.map((item, index) =>
               (
                 <ReviewItem
                   key={index}
                   overallRating={item.overallRating}
                   title={item.title}
                   review={item.review}
                   screenName={item.screenName}
                   datePosted={item.datePosted}
                 />
              )
            )
          }
        </div>
      </Col>
      <Col xs={6}>
        <h3 style={{ fontSize: '15px', margin: '0' }}>Con</h3>
        <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>most helpful 1-2 star reviews</p>
        {
          con.map((item, index) =>
             (
               <ReviewItem
                 key={index}
                 overallRating={item.overallRating}
                 title={item.title}
                 review={item.review}
                 screenName={item.screenName}
                 datePosted={item.datePosted}
               />
            )
          )
        }
      </Col>
    </Row>
  </div>
);

const reviewShape = {
  overallRating: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  title: React.PropTypes.string,
  review: React.PropTypes.string,
  screenName: React.PropTypes.string,
  datePosted: React.PropTypes.string,
};

ProductReviews.propTypes = {
  rating: React.PropTypes.string,
  totalReviews: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  pro: React.PropTypes.arrayOf(React.PropTypes.shape(reviewShape)),
  con: React.PropTypes.arrayOf(React.PropTypes.shape(reviewShape)),
};

export default ProductReviews;
