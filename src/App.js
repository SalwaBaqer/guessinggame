import "./App.css";
import React, { useState } from "react";

//components
import Input from "./components/Input";

//styles
import {
  Title,
  Description,
  HiddenNumber,
  GlobalStyle,
  ButtonClick,
  HintMessage,
  PlayAgain,
} from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    mainColor: "RoyalBlue", // main font color
    backgroundColor: "AliceBlue", // main background color
    hintColor: "MidnightBlue",
    blue: "DarkSlateBlue",
  };

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101)
  );
  const [numberOfAttempt, setnumberOfAttempt] = useState(5); //five attempts

  const [hintMsg, setHintMsg] = useState(); // try smaller or bigger

  const [oddOrEven, setOddOrEven] = useState(); //Hint: the random is odd or even
  const [winMsg, setWinMsg] = useState(); //Hint: the random is odd or even

  const setView = () => {
    setHintMsg("");
    setOddOrEven("");
    setnumberOfAttempt(5);
    setRandomNumber(Math.floor(Math.random() * 101));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {numberOfAttempt === 0 ? (
          <>
            <PlayAgain>
              <h1>{winMsg}</h1>
              <h2>Do you want to play again</h2>
            </PlayAgain>

            <ButtonClick onClick={setView}>yes</ButtonClick>
          </>
        ) : (
          <>
            <Title> The Amazing Guessing Game </Title>
            <HiddenNumber
              src="https://www.pinclipart.com/picdir/big/124-1246958_button-tanda-tanya-png-clipart.png"
              alt="question mark image"
            />
            <Description>
              Try to guess a number from 0-100, you have {numberOfAttempt}{" "}
              attempts {hintMsg}. Good luck!
            </Description>

            <HintMessage>{oddOrEven}</HintMessage>
            <Input
              randomNumber={randomNumber}
              numberOfAttempt={numberOfAttempt}
              setnumberOfAttempt={setnumberOfAttempt}
              hintMsg={hintMsg}
              setHintMsg={setHintMsg}
              oddOrEven={oddOrEven}
              setOddOrEven={setOddOrEven}
              winMsg={winMsg}
              setWinMsg={setWinMsg}
            />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
