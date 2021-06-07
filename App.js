import React from 'react';
import { AppNavigator } from './navigation/index';
import Draftform from './Screens/Draftform';
import Formlist from './Screens/Formlist';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Submission from './Screens/Submission';
import Submittedforms from './Screens/Submittedforms';
import Welcome from './Screens/Welcome';

const App=()=>
{
  return(
  <Formlist/>
  );
}
export default App;