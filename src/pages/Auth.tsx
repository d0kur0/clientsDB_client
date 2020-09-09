import React from "react";
import { Form, Input, Label, Button } from "../components/Forms";
import { GiFlowerTwirl } from "react-icons/gi/index";
import { Link } from "react-router-dom";
import { Root, TopLogo, VKButton, Other, Title } from "../components/SignForms";

function Auth() {
  return (
    <Root>
      <TopLogo>
        <GiFlowerTwirl />
      </TopLogo>

      <Title>Авторизация</Title>

      <Form>
        <Label>
          <Input type="email" placeholder="Email адрес" />
        </Label>
        <Label>
          <Input type="password" placeholder="Ваш пароль" />
        </Label>

        <Button>Продолжить</Button>
        <VKButton>Войти через vk</VKButton>

        <Other>
          <Link to="/registration">Регистрация аккаунта</Link>
        </Other>
        <Other>
          <Link to="/passwordRecovery">Забыли пароль?</Link>
        </Other>
      </Form>
    </Root>
  );
}

export default Auth;
