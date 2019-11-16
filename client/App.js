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
import { ExploreProjectsMapView } from './components/ExploreProjectsMapView';

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
import { DashboardCat } from './pages/DashboardCat';



projectList = [
  {
      "name": "Waikiki Biking",
      "lat": 21.272508,
      "long": -157.823371,
      "image": "http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg",
      "summary": "Join us for a day in the sun consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "endsAt": "2019-12-16T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [1,5],
      "indicators": [],
      "id": 1,
      "hostid": 10,
      "people": []
  },
  {
      "name": "Restore the Forest",
      "lat": 21.313137,
      "long": -157.780748,
      "image": "http://geographicconsulting.com/wp-content/uploads/2013/04/4-02Seast-640x475.jpg",
      "summary": "Help restore the aina consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "endsAt": "2019-11-01T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [3,5],
      "indicators": [27,29,30],
      "id": 2,
      "hostid": 0,
      "people": []
  },
  {
      "name": "KCC Farmers Market",
      "lat": 21.26842,
      "long": -157.797295,
      "image": "https://www.hawaiiliving.com/blog/wp-content/uploads/2014/05/KCC-Farmers-Market-Sign.jpg",
      "summary": "Support local farmers and buy produce grown here in Hawaii  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "endsAt": "2019-11-01T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [2,5],
      "indicators": [24,21,19,18,17,22,38],
      "id": 3,
      "hostid": 10,
      "people": []
  },
  {
      "name": "Waikiki Beach Cleaup",
      "lat": 21.276717,
      "long": -157.826929,
      "image": "https://carpwc.lbdcreative.pro/wp-content/uploads/2018/03/beachcleanup_nb-940d3801.jpeg",
      "summary": "Beautify our most popular amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "endsAt": "2020-01-22T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [3,4,5],
      "indicators": [33,32,30,38,40],
      "id": 4,
      "hostid": 0,
      "people": [10]
  },
  {
      "name": "Data for the Future",
      "lat": 21.301317,
      "long": -157.74559,
      "image": "https://hknhawaii.weebly.com/uploads/7/5/3/8/7538427/published/img-0263.jpg?1571902952",
      "summary": "Improve data collection ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "endsAt": "2019-11-20T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [6],
      "indicators": [],
      "id": 5,
      "hostid": 0,
      "people": []
  },
  {
      "name": "Kaimuki HS Lunch Sorting",
      "lat": 21.276471,
      "long": -157.800865,
      "image": "http://www.lesswaste.org.uk/wp-content/uploads/2016/03/Utilise-distro-350x220.jpg",
      "summary": "Reduce food waste dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "endsAt": "2019-12-06T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [2,4],
      "indicators": [],
      "id": 6,
      "hostid": 0,
      "people": []
  },
  {
      "name": "E-Waste Collection",
      "lat": 21.323492,
      "long": -158.002396,
      "image": "http://pratisrutiplus.com/wp-content/uploads/2017/05/EWasteimg1.jpg",
      "summary": "Bring your computer amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "endsAt": "2019-12-03T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [4],
      "indicators": [],
      "id": 7,
      "hostid": 0,
      "people": []
  },
  {
      "name": "GoodWill Collection",
      "lat": 21.297585,
      "long": -157.858772,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Birw5JnZv1IqCVREL8qOou8GV4zU7slu-2CPZ_ZnLn7BIBET&s",
      "summary": "Donate used clothes amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "endsAt": "2019-12-18T10:00:00.000Z",
      "startsAt": "2019-10-31T10:00:00.000Z",
      "categories": [4],
      "indicators": [],
      "id": 8,
      "hostid": 10,
      "people": []
  }
]



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
                <Scene initial key="ExploreCategories" title="Explore Categories" component={ExploreCategories}/>
                <Scene lazy back key="ExploreCategoryProjects" title="Explore Projects" component={ExploreCategoryProjects} hideDrawerButton/>
                <Scene lazy back key="ExploreProjectsMapView" title="Explore Projects" component={ExploreProjectsMapView} hideDrawerButton/>
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
                <Scene lazy back key="DashboardCat" title="Dashboard" component={DashboardCat}/>
              </Stack>
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
