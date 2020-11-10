import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
   color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

//title
export const Title = styled.h1`
  text-align: center;
  display: flex;
  width: 32%;
  margin-left: auto;
  margin-right: auto;
`;

export const PlayAgain = styled.div`
  h1 {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: ${(props) => props.theme.hintColor};
  }

  h2 {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: ${(props) => props.theme.mainColor};
  }
`;

//description
export const Description = styled.h4`
  text-align: center;
  display: flex;
  width: 32%;
  margin-left: auto;
  margin-right: auto;
`;

//number
export const HiddenNumber = styled.img`
  display: flex;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
`;

//form input

export const InputField = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
`;

export const ButtonClick = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 0.5em 2em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const HintButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em 2em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.hintColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const HintMessage = styled.h4`
  text-align: center;
  display: flex;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.pink};
`;
