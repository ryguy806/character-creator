import React, { FC } from "react";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledFieldSet,
  StyledErrorMessage,
  StyledButton,
} from "../styles/FormComponents.style";

const CharacterForm: FC = () => {
  return (
    <>
      <StyledFormWrapper>
        <StyledForm>
          <h2>Character Form</h2>
          <label htmlFor="name">Name:</label>
          <StyledInput name="name" type="text" />
          <label htmlFor="race">Race:</label>
          <StyledInput type="text" name="race" />
          <label htmlFor="class">Class:</label>
          <StyledInput type="text" name="class" />
          <label htmlFor="background">Background:</label>
          <StyledInput type="text" name="background" />
          <StyledFieldSet>
            <legend>Gender</legend>
            <label>
              <input type="radio" name="gender" value="female" /> Female
              <input type="radio" name="gender" value="male" /> Male
            </label>
          </StyledFieldSet>
          <StyledErrorMessage>
            <p>Error message here...</p>
          </StyledErrorMessage>
          <StyledButton type="submit">Submit Character</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default CharacterForm;
