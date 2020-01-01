import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// const {StatusBarManager} = NativeModules;
const {width, height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${height};
  align-items: center;
  justify-content: flex-start;
  background-color: #fbfbfb;
`;
export const Header = styled.View`
  width: 100%;
  height: 60px;
  background-color: #fff;
`;

export const HeaderText = styled.Text``;

export const Content = styled.View`
  padding: 0 24px;
`;
