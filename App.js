import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategorySelector from './screens/CategorySelector';
import StoreSelector from './screens/StoreSelector'
import StorePage from './screens/StorePage'

const RootStack = createStackNavigator({
  CategorySelector: CategorySelector,
  StoreSelector: StoreSelector,
  StorePage: StorePage,
}, {
  initialRouteName: 'CategorySelector',
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
