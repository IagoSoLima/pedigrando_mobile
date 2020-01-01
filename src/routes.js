import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {FluidNavigator} from 'react-navigation-fluid-transitions';
import {Main, Login, Register} from './pages';

export default createAppContainer(
  FluidNavigator({
    Main,
    Login,
    Register,
  }),
);
