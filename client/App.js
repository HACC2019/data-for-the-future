import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import { HomeScreen } from './components/HomeScreen';
import { Project } from './components/Project';
import { View, Text } from 'react-native-tailwind';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Project />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
