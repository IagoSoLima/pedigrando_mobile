import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Transition} from 'react-navigation-fluid-transitions';

import {
  Container,
  ContentTop,
  ContentBody,
  Logo,
  Input,
  TextWhite,
  TextOrange,
  ButtonRemerberPassword,
  ContainerButton,
  Button,
  Content,
  KeyboardScrollView,
} from './styles';

export default function Login({navigation}) {
  return (
    <KeyboardScrollView scrollEnabled={true} enableResetScrollToCoords={true}>
      <Transition>
        <Container>
          <Content>
            <ContentTop>
              <Logo source={require('../../assets/logovetorizado.png')} />
            </ContentTop>
            <ContentBody>
              <Input placeholder="Usuário" />
              <Input placeholder="Senha" />
              <ButtonRemerberPassword>
                <TextWhite>Esqueci minha Senha</TextWhite>
              </ButtonRemerberPassword>
              <ContainerButton>
                <Button
                  style={styles.button}
                  onPress={() => navigation.navigate('Register')}
                  tranparent>
                  <TextWhite>Cadastre-se</TextWhite>
                </Button>
                <Button style={styles.button}>
                  <TextOrange>Entrar</TextOrange>
                </Button>
              </ContainerButton>
            </ContentBody>
          </Content>
        </Container>
      </Transition>
    </KeyboardScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {},
  buttonEsqueciSenha: {},
  textButtonEsqueciMinhaSenha: {},
  button: {},
  containerButton: {},
});
