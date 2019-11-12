import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { TestScreen } from './pages/TestScreen';


import { ExploreCategories } from './pages/ExploreCategories';
import { ExploreCategoryProjects } from './pages/ExploreCategoryProjects';
import { ProjectPage } from './pages/ProjectPage';
import { MyProjects } from './pages/MyProjects';
import { AddProject } from './pages/AddProject';
import { EditProjectPage } from './components/ProjectPage/EditProjectPage';
import { AddProjectResults} from './components/ProjectPage/AddProjectResults';
import { MyImpact } from './pages/MyImpact';
import { MyImpactCategory } from './pages/MyImpactCategory';
import { Dashboard } from './pages/Dashboard';
import { DashboardCategory } from './pages/DashboardCategory';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Router>
        <Stack key="root">
          <Scene key="TestScreen" component={TestScreen} initial/>

          <Scene key="ExploreCategories" component={ExploreCategories}/>
          <Scene key="ExploreCategoryProjects" component={ExploreCategoryProjects}/>
          <Scene key="ProjectPage" component={ProjectPage}/>
          
          <Scene key="MyProjects" component={MyProjects}/>

          <Scene key="AddProject" component={AddProject}/>
          <Scene key="EditProjectPage" component={EditProjectPage}/>
          <Scene key="AddProjectResults" component={AddProjectResults}/>
          
          <Scene key="MyImpact" component={MyImpact}/>
          <Scene key="MyImpactCategory" component={MyImpactCategory}/>
          
          <Scene key="Dashboard" component={Dashboard}/>
          <Scene key="DashboardCategory" component={DashboardCategory}/>
        </Stack>
      </Router>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
