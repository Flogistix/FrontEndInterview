import React from 'react';
import Container from './Container';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2> Interview Project </h2>
      <p> 1. Container.js is a class based component. Convert this into a function component using Hooks </p>
      <p> 2. Component.js does not handle the state correctly. Improve it so that it will set the form data properly </p>
      <p> 3. When form is submitted, we should see a welcome message based on the form data. </p>
      <p> 4. Freestyle - Improve the code of Component.js however you see fit </p>
      <Container />
    </div>
  );
}

export default App;
