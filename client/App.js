import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import { Router, Stack, Scene } from 'react-native-router-flux';


import { AddProject } from './pages/AddProject';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Router>
        <Stack key="root">
          <Scene key="AddProject" component={AddProject} initial/>
        </Stack>
      </Router>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
