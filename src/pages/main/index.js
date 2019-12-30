import React, {useEffect} from 'react';
import {Container, TextSplashScreen} from './styles';

export default function Main({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      const {navigate} = navigation;
      navigate('Login');
    }, 2000);
  }, []);

  return (
    <Container>
      {/* <Image
          style={styles.image}
          source={require('../assets/gifSplash.gif')}
        /> */}
      <TextSplashScreen>Pedigrando © 2019</TextSplashScreen>
    </Container>
  );
}
