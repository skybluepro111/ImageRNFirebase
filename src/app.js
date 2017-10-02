import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Item from './components/item'
import ItemDetail from './components/item-detail'

const App = () => (
    <Router>
      <Scene key="root">
        <Scene key="item" component={Item} hideNavBar/>
        <Scene key="itemDetail" hideNavBar component={ItemDetail}/>
      </Scene>
    </Router>
  );

  export default App;