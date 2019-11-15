import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

import ExploreTabIcon from './components/Tabs/ExploreTabIcon';
import AddTabIcon from './components/Tabs/AddTabIcon';
import DashboardTabIcon from './components/Tabs/DashboardTabIcon';
import ProjectsTabIcon from './components/Tabs/ProjectsTabIcon';
import ImpactTabIcon from './components/Tabs/ImpactTabIcon';

import { AddProjectLocationPicker } from './components/AddProject/AddProjectLocationPicker';
import ExploreProjectsMapView from './components/ExploreProjectsMapView';



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
        <Stack key="root"  titleStyle={{ alignSelf: 'center' }}>
          <Scene hideNavBar panHandlers={null}>
            <Tabs key="tabbar" routeName="tabbar" backToInitial >
              <Stack initial key="Explore" title="Explore"
              inactiveBackgroundColor="#919191" activeBackgroundColor="#000000" icon={ExploreTabIcon}>
                <Scene lazy back key="ExploreCategories" title="Explore Categories" component={ExploreCategories}/>
                <Scene lazy back key="ExploreProjectsMapView" title="Explore Projects" component={ExploreProjectsMapView} hideDrawerButton/>
                <Scene initial key="ExploreCategoryProjects" title="Explore Projects" component={ExploreCategoryProjects} hideDrawerButton/>
                <Scene lazy back key="ProjectPage" title="Project Details" component={ProjectPage} hideDrawerButton/>
              </Stack>

              <Stack key="Projects" title="Projects" 
              inactiveBackgroundColor="#919191" activeBackgroundColor="#000000" icon={ProjectsTabIcon} hideDrawerButton>
                <Scene initial key="MyProjects" title="My Projects" component={MyProjects}/>
                <Scene lazy back key="ProjectPage" title="Project Details" component={ProjectPage}/>
                <Scene lazy back key="EditProjectPage" title="Edit Project" component={EditProjectPage}/>
                <Scene lazy back key="AddProjectResults" title="Add Results"  component={AddProjectResults}/>
              </Stack>

              <Stack key="Add" title="Add a Project" tabBarLabel= "Add"
              inactiveBackgroundColor="#919191" activeBackgroundColor="#000000" icon={AddTabIcon} hideDrawerButton>
                <Scene initial key="AddProject" title="Add a Project" component={AddProject}/>
                <Scene lazy back key="AddProjectLocationPicker" title="Pick a Location" component={AddProjectLocationPicker}/>
              </Stack>
              
              <Stack key="Impact" title="My Impact"
              inactiveBackgroundColor="#919191" activeBackgroundColor="#000000" icon={ImpactTabIcon} hideDrawerButton>
                <Scene initial key="MyImpact" title="My Impact" component={MyImpact}/>
                <Scene lazy back key="MyImpactCategory" title="My Impact"  component={MyImpactCategory}/>
              </Stack>

              <Stack key="Dash" title="Dashboard" 
              inactiveBackgroundColor="#919191" activeBackgroundColor="#000000" icon={DashboardTabIcon} hideDrawerButton>
                <Scene initial key="Dashboard" title="Dashboard" component={Dashboard}/>
                <Scene lazy back key="DashboardCategory" title="Dashboard" component={DashboardCategory}/>
              </Stack>
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
