import {Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
// const {StatusBarManager} = NativeModules;
const {width, height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${height};
  align-items: center;
  justify-content: flex-start;
  background-color: #ffa500;
`;

export const Content = styled.View`
  flex: 1;
  width: ${width * 0.8};
  align-items: center;
  justify-content: space-evenly;
  margin-top: -${height * 0.1};
`;

export const KeyboardScrollView = styled(KeyboardAwareScrollView)`
  flex: 1;
  height: ${height};
`;

export const ContentTop = styled.View`
  justify-content: flex-start;
`;

export const Logo = styled.Image`
  height: 180;
  width: 200;
`;

export const ContentBody = styled.View`
  width: 100%;
  margin-top: -${height * 0.2};
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#FEC75A',
}))`
  height: 50;
  width: 280;
  font-size: 20;
  border-bottom-width: 1;
  border-bottom-color: #ffffff;
  color: #fff;
`;

export const TextWhite = styled.Text`
  color: #fff;
  font-size: 15;
`;

export const TextOrange = styled.Text`
  color: #ffa500;
  font-size: 15;
`;

export const ButtonRemerberPassword = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  margin-left: 120;
`;

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  width: 40%;
  height: 42;
  justify-content: center;
  align-items: center;
  border-radius: 15;
  border-width: 2;
  border-color: #fff;
  background-color: ${({tranparent}) => (tranparent ? 'transparent' : '#fff')};
  margin-top: 10px;
`;
