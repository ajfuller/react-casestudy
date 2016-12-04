/**
 * Test the HomePage
 */

import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

import HomePage from '../index';
// Our component is already consuming the fixture data
// Otherwise we would pass that here into the component to simulate the way
// that redux would be passing through as props
describe('<HomePage />', () => {
  it('should render the base component', () => {
    const renderedComponent = mount(
      <HomePage />
    );
    expect(
      renderedComponent
        .html()
        .indexOf('Professional Blender')
      ).toBeGreaterThan(-1);
  });

  it('should render the "add to cart" component when the inventoryCode is 0 or 1', () => {
    const renderedComponent = mount(
      <HomePage inventoryCode="0" />
    );
    expect(renderedComponent.find('#addToCart')).toExist();
  });

  it('should not render the "add to cart" component when the inventoryCode is 2', () => {
    const renderedComponent = mount(
      <HomePage inventoryCode="2" />
    );
    expect(renderedComponent.find('#addToCart').isEmpty()).toBe(true);
  });

  it('should render the "pick up in store" button when the inventoryCode is 0 or 2', () => {
    const renderedComponent = mount(
      <HomePage inventoryCode="0" />
    );
    expect(renderedComponent.find('#pickupInStore')).toExist();
  });

  it('should not render the "pick up in store" component when the inventoryCode is 1', () => {
    const renderedComponent = mount(
      <HomePage inventoryCode="1" />
    );
    expect(renderedComponent.find('#pickupInStore').isEmpty()).toBe(true);
  });
});
