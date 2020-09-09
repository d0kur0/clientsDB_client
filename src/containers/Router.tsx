import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

type RouterProps = {
  children: ReactElement;
};

function Router({ children }: RouterProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default Router;
