import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Main, Login} from './pages';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Login,
  }),
);
