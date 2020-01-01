import styled from 'styled-components/native';
import {WaveIndicator} from 'react-native-indicators';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffa500;
`;

export const LoadingContainer = styled.View`
  width: 70px;
  height: 70px;
`;

export const Loading = styled(WaveIndicator).attrs(() => ({
  color: 'white',
  size: 40,
  waveFactor: 0.54,
  waveMode: 'outline',
}))``;

export const TextSplashScreen = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20;
`;
