import React, {useEffect} from 'react';

import {Container, LoadingContainer, Loading, TextSplashScreen} from './styles';

export default function Main({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      const {replace} = navigation;
      replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
      <TextSplashScreen>Pedigrando © 2019</TextSplashScreen>
    </Container>
  );
}
