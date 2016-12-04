/**
 *
 * ProductCarousel.js
 *
 */

import React from 'react';

const carouselStyles = {
  margin: '15px -15px',
  display: 'block',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
};

const thumbnailStyles = {
  width: '80px',
  height: '100%',
};

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
    };
    this.updateImage = this.updateImage.bind(this);
  }

  updateImage(newIndex) {
    this.setState({
      selectedItem: newIndex,
    });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="carousel--selectedImage">
          <img src={this.props.images[selectedItem]} height="500" width="500" alt="" />
        </div>
        <div style={carouselStyles}>
          {this.props.images.map((image, index) => (
            <a
              key={index}
              href={`#carousel-${index}`}
              onClick={() => this.updateImage(index)}
            >
              <img src={image} height="120" width="120" alt="" style={thumbnailStyles} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

ProductCarousel.propTypes = {
  images: React.PropTypes.array,
};

export default ProductCarousel;
