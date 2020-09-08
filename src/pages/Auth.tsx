import React from "react";
import styled from "styled-components";

function Auth() {
  return (
    <div>
      {"dsghsdfhsjdsfjdfjdjdsjsdjdsjdjdjdsjdfsjfgbngisdbgoag bodsa gadsoydbgodysagbdsagadsb0gdsabg0agbad0sgbadsgbdasgiuodbygpoiadsbgipobg"
        .split("")
        .map((_: string, key: number) => (
          <div key={key}>test</div>
        ))}
    </div>
  );
}

export default Auth;
