import React, { FC, useState, MouseEvent, FormEvent } from "react";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledFieldSet,
  StyledErrorMessage,
  StyledButton,
} from "../styles/FormComponents.style";

interface InitialState {
  name: string;
  race: string;
  class: string;
  background: string;
  gender: string;
}

const initialState: InitialState = {
  name: "",
  race: "",
  class: "",
  background: "",
  gender: "",
};

const CharacterForm: FC = () => {
  const [state, setState] = useState<InitialState>(initialState);
  const [errors, setErrors] = useState("");

  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors("");
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.name;
    const value = event.currentTarget.value;

    setState((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onClick={handleSubmit}>
          <h2>Character Form</h2>
          <label htmlFor="name">Name:</label>
          <StyledInput
            name="name"
            type="text"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="race">Race:</label>
          <StyledInput
            type="text"
            name="race"
            value={state.race}
            onChange={handleInput}
          />
          <label htmlFor="class">Class:</label>
          <StyledInput
            type="text"
            name="class"
            value={state.class}
            onChange={handleInput}
          />
          <label htmlFor="background">Background:</label>
          <StyledInput
            type="text"
            name="background"
            value={state.background}
            onChange={handleInput}
          />
          <StyledFieldSet>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={state.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={state.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
          </StyledFieldSet>
          {errors && (
            <StyledErrorMessage>
              <p>{errors}</p>
            </StyledErrorMessage>
          )}
          <StyledButton type="submit">Submit Character</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default CharacterForm;
