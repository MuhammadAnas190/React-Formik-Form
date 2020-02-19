import React from 'react';
import Index from "./views/";
import Container from '@material-ui/core/Container';
/* 
  This form is build using Formik
  - https://jaredpalmer.com/formik/docs/overview
  Yup for handling validations
  - https://github.com/jquense/yup
  And used Material Ui for developing the UI 
  - https://material-ui.com/ v4.9.3
*/
function App() {
  return (
    <Container maxWidth="md">
      <Index />
    </Container>
  );
}

export default App;
