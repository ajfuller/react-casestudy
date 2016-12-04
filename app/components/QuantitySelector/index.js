/**
 *
 * QuantitySelector.js
 *
 */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button';

function QuantitySelector({ quantity = 1, updateQuantity }) {
  return (
    <Row middle="xs">
      <Col xs style={{flex: "0 0 33px"}}>
        <Button 
          style={{borderRadius: '50%'}}
          onClick={() => updateQuantity(-1)}
          aria-label="decrease quantity"
        >
          -
        </Button>
      </Col>
      <Col xs style={{flex: "0 0 33px"}}>
        <span style={{textAlign: "center"}}>{quantity}</span>
      </Col>
      <Col xs style={{flex: "0 0 33px"}}>
        <Button
          style={{borderRadius: '50%'}}
          onClick={() => updateQuantity(1)}
          aria-label="increase quantity"
        >
          +
        </Button>
      </Col>
    </Row>
  );
}

export default QuantitySelector;
