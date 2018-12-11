import React from 'react';
import styled from 'styled-components';

const image404 = require('../assets/404.gif');

const Div = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RouteNotFound = () => (
  <Div>
    <img src={image404} alt="lain" style={{ height: '90%' }} />
  </Div>
);

export default RouteNotFound;
