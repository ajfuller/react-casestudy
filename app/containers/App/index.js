/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: 1200px;
`;

function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Case Studay"
        defaultTitle="React.js Case Study"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application for case study purposes' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
