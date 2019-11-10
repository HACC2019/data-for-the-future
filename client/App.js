import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';
import { HomeScreen } from './pages/HomeScreen';
import { Project } from './pages/Project';
import { View, Text } from 'react-native-tailwind';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Project
        project="Waikiki Biking"
        categories={[1,2,3]}
        date="Thu, Nov. 28 11:00 - 16:00"
        participants={24}
        summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Biking is great for the mind, soul and body. Experience the breeze while also exercising your thighs."
        report="A high turn out this time. We reserved about twenty bikes but needed sixty! During the time, we toured what Waikiki had to offer with its scenic Layouts, impeccable food and deceiving tourist traps."
        statistics={[
          {
            category: 'CLEAN ENERGY',
            metric: 50,
            unit: 'tons',
            description: 'of CO2 curbed'
          },
          {
            category: 'LOCAL FOOD',
            metric: 1000,
            unit: 'USD',
            description: 'into economy'
          }
        ]}
      />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
