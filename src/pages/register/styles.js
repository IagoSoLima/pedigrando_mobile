import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import normalize from 'react-native-normalize';
import * as Animatable from 'react-native-animatable';

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
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: 'Muli-SemiBold';
  font-size: 24px;
`;

export const KeyboardScrollView = styled(KeyboardAwareScrollView)`
  width: 100%;
  padding: 0 24px;
`;

export const Content = styled.View`
  width: 100%;
  height: ${height - 60};
  justify-content: space-between;
`;

export const ListMessages = styled.View`
  flex: 4;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

export const ContainerMessage = styled.View`
  width: 100%;
  flex-direction: ${({authorBoot}) => (authorBoot ? 'row' : 'row-reverse')};
  justify-content: flex-start;
  margin: 10px 0;
`;

export const IconMessage = styled(Animatable.View)`
  background-color: ${({authorBoot}) => (authorBoot ? '#ff9900' : '#fff')};
  border: 1px solid #ff9900;
  width: ${normalize(40)}px;
  height: ${normalize(40)}px;
  border-radius: ${normalize(50)}px;
`;

export const ContentMessage = styled(Animatable.View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: ${normalize(210)}px;
  min-width: ${normalize(90)}px;
  height: 100%;
  margin: ${normalize(25)}px ${normalize(10)}px 0 ${normalize(10)}px;
  padding: 0px ${normalize(10)}px;
  position: relative;
  background-color: ${({authorBoot}) => (authorBoot ? '#ebebeb' : '#FEC75A')};
  border-top-right-radius: ${({authorBoot}) => (authorBoot ? '20px' : 0)};
  border-top-left-radius: ${({authorBoot}) => (!authorBoot ? '20px' : 0)};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const TextMessage = styled.Text`
  font-family: 'Muli-Regular';
  font-size: ${normalize(15)}px;
`;

export const ContainerActions = styled(Animatable.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${normalize(50)}px;
  margin-bottom: ${normalize(35)}px;
`;

export const Input = styled.TextInput`
  width: ${normalize(260)}px;
  height: ${normalize(50)}px;
  border: 2px solid #d1d1d1;
  border-radius: ${normalize(26)}px;
`;

export const ButtonSend = styled.TouchableOpacity`
  width: ${normalize(50)}px;
  height: ${normalize(50)}px;
  background-color: #ff9900;
  border-radius: ${normalize(50)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonsSendIcon = styled(Icon)``;
