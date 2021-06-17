import React, { useState } from "react";
import { InputField, ButtonClick, HintButton } from "../styles";
let counter = 1;

const Input = (props) => {
  // state for the  user input
  const [textInput, settextInput] = useState();

  //Hint method
  const hint = () => {
    if (props.randomNumber % 2 === 0) {
      props.setOddOrEven("The number is EVEN");
      return props.oddOrEven;
    } else {
      props.setOddOrEven("The number is ODD");
      return props.oddOrEven;
    }
  };

  //save the input value
  const readInput = (event) => {
    settextInput(event.target.value);
  };

  //Checking the user guess
  const say = () => {
    counter += 0;
    props.setnumberOfAttempt(props.numberOfAttempt - counter);

    // Still have a chance
    if (props.numberOfAttempt >= 0) {
      // Correct Guess
      if (parseInt(textInput) === props.randomNumber) {
        props.setnumberOfAttempt(0);
        props.setWinMsg("Congratulation Legend, ");
      }

      if (parseInt(textInput) > props.randomNumber) {
        props.setWinMsg("Game Over!");
        props.setHintMsg("Try Smaller");
      }

      if (parseInt(textInput) < props.randomNumber) {
        props.setWinMsg("Game Over!");
        props.setHintMsg("Try Bigger");
      }
    }
  };

  return (
    <>
      <InputField
        type="text"
        placeholder="Enter your guess"
        onChange={readInput}
      />

      <ButtonClick onClick={say}> Enter </ButtonClick>
      <HintButton onClick={hint}>Hint</HintButton>
    </>
  );
};

export default Input;
