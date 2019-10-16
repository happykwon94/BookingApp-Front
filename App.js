import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategorySelector from './screens/CategorySelector';
import StoreSelector from './screens/StoreSelector'
import StorePage from './screens/StorePage'
import Reservation from './screens/Reservation'

const RootStack = createStackNavigator({
  CategorySelector: CategorySelector,
  StoreSelector: StoreSelector,
  StorePage: StorePage,
  Reservation: Reservation,
}, {
  initialRouteName: 'CategorySelector',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
