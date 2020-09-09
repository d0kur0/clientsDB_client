import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Gilroy", sans-serif;
    font-size: 0.9em;
    margin: auto;
    background-color: #FBFBFE;
    color: #1f1f1f;
    
    --navbar-height: 50px;
    --title-height: 50px;
    --based-padding: 15px;
    
    @media (max-width: 720px) {
      --navbar-height: 55px;
      --title-height: 55px;
    }
  }
  
  a, button { 
    color: #269AFF;
    transition: 0.3s;
  }
  
  a:hover, button:hover {
    color: #3d81c2;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #67adff;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #1e73c6;
  }
`;
