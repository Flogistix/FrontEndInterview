import React from 'react';
import styled from 'styled-components';

const InputDiv = styled.div`
  margin: 24px;
  color: ${props => props.error ? 'red' : 'black' };

  & input {
    border-color: ${props => props.error ? 'red' : 'black' };
  }
`;

const Component = ({ subOptions, handleChange, emailError }) => {
  return (
    <div>
      <InputDiv>
        <div>
          First Name
        </div>
        <div>
          <input />
        </div>
      </InputDiv>
      <InputDiv>
        <div>
          Last Name 
        </div>
        <div>
          <input />
        </div>
      </InputDiv>
      <InputDiv error={emailError}>
        <div>
          Email Address
        </div>
        <div>
          <input />
        </div>
      </InputDiv>
      <InputDiv>
        <div>
          Phone Number 
        </div>
        <div>
          <input />
        </div>
      </InputDiv>
      <InputDiv>
        <div>
          Subscribe for:
        </div>
        <div>
          <select onChange={event => handleChange('subLength', event.target.value)}>
            { subOptions.map(s => (
              <option value={s.label}> {s.label} </option>
            ))}
          </select>
        </div>
      </InputDiv>
    </div>
  )
}

export default Component;
