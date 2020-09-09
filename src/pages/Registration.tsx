import React from "react";
import { Form, Input, Label, Button } from "../components/Forms";
import { GiFlamer } from "react-icons/gi/index";
import { Link } from "react-router-dom";
import { Root, TopLogo, Other, Title } from "../components/SignForms";

function Auth() {
  return (
    <Root>
      <TopLogo>
        <GiFlamer />
      </TopLogo>

      <Title>Регистрация</Title>

      <Form autoComplete="off">
        <Label>
          <Input type="email" placeholder="Email адрес" />
        </Label>
        <Label>
          <Input type="password" placeholder="Ваш пароль" />
        </Label>
        <Label>
          <Input type="password" placeholder="Повторите пароль" />
        </Label>

        <Button>Продолжить</Button>

        <Other>
          <Link to="/auth">Авторизация</Link>
        </Other>
      </Form>
    </Root>
  );
}

export default Auth;
