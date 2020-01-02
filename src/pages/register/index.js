import React from 'react';
import {View} from 'react-native';

import {
  KeyboardScrollView,
  Container,
  Header,
  HeaderText,
  Content,
  ListMessages,
  ContainerMessage,
  IconMessage,
  ContentMessage,
  TextMessage,
  ContainerActions,
  Input,
  ButtonSend,
  ButtonsSendIcon,
} from './styles';

export default function Register() {
  return (
    <Container>
      <Header>
        <HeaderText>Cadastro</HeaderText>
      </Header>
      <KeyboardScrollView
        scrollEnabled={true}
        enableResetScrollToCoords={true}
        onAndroidEnabled={true}>
        <Content>
          <ListMessages>
            <ContainerMessage authorBoot={true}>
              <IconMessage
                authorBoot={true}
                animation={'fadeInUp'}
                duration={2000}
              />
              <ContentMessage
                authorBoot={true}
                animation="fadeInUp"
                duration={2000}
                delay={1000}>
                <TextMessage>
                  Seja Bem vindo ao .... {'\n'}
                  Vamos iniciar seu cadastro
                </TextMessage>
              </ContentMessage>
            </ContainerMessage>
            <ContainerMessage authorBoot={false}>
              <IconMessage
                authorBoot={false}
                animation={'fadeInUp'}
                delay={2000}
                duration={2000}
              />
              <ContentMessage
                authorBoot={false}
                animation="fadeInUp"
                duration={2000}
                delay={3000}>
                <TextMessage>Soluço</TextMessage>
              </ContentMessage>
            </ContainerMessage>
          </ListMessages>
          <ContainerActions
            animation="fadeInUpBig"
            duration={3000}
            delay={3000}>
            <Input />
            <ButtonSend>
              <ButtonsSendIcon name="send" size={30} color="white" />
            </ButtonSend>
          </ContainerActions>
        </Content>
      </KeyboardScrollView>
    </Container>
  );
}
