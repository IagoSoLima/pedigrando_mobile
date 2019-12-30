import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
} from './styles';

export default class Login extends Component {
  render() {
    return (
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
              <Button style={styles.button} tranparent>
                <TextWhite>Cadastre-se</TextWhite>
              </Button>
              <Button style={styles.button}>
                <TextOrange>Entrar</TextOrange>
              </Button>
            </ContainerButton>
          </ContentBody>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {},
  buttonEsqueciSenha: {},
  textButtonEsqueciMinhaSenha: {},
  button: {},
  containerButton: {},
});
