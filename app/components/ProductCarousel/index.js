/**
 *
 * ProductCarousel.js
 *
 */

import React from 'react';
import 'style!css!./ProductCarousel.css';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: 0
    }
    this.updateImage = this.updateImage.bind(this);
  }

  updateImage(newIndex) {
    this.setState({
      selectedItem: newIndex
    })
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <div style={{textAlign: 'center'}}>
        <div className="carousel--selectedImage">
          {this.props.children[selectedItem]}
        </div>
        <div className="carousel--thumbnails">
          {this.props.children.map((child, index) => (
            <a
              key={index}
              className="carousel--thumbnail"
              href="#"
              onClick={() => this.updateImage(index)}
            >
              {child}
            </a>
          ))}
        </div>
      </div>
    )
  };
}

export default ProductCarousel;
