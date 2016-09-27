import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import UserScreen from '../screens/UserScreen';
import DropScreen from '../screens/DropScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  map: () => MapScreen,
  user: () => UserScreen,
  drop: () => DropScreen,
  rootNavigation: () => RootNavigation,
}));
