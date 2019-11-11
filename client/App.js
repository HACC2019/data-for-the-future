import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { HomeScreen } from './pages/HomeScreen';
import { Project } from './pages/Project';
import { ExploreCategories } from './pages/ExploreCategories';
import { ExploreProjects } from './pages/ExploreProjects';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Router>
        <Stack key="root">
          <Scene key="ExploreProjects" component={ExploreProjects} />
          <Scene key="HomeScreen" component={HomeScreen} initial />
          <Scene key="Project" component={Project} />
          <Scene key="ExploreCategories" component={ExploreCategories} />
        </Stack>
      </Router>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
