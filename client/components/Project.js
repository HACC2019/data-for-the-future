import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Text
} from 'react-native-ui-kitten';

import { View, Text as T } from 'react-native-tailwind'

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back'/>
);

const EditIcon = (style) => (
  <Icon {...style} name='edit'/>
);

const MenuIcon = (style) => (
  <Icon {...style} name='more-vertical'/>
);

const BackAction = (props) => (
  <TopNavigationAction {...props} icon={BackIcon}/>
);

const EditAction = (props) => (
  <TopNavigationAction {...props} icon={EditIcon}/>
);

const MenuAction = (props) => (
  <TopNavigationAction {...props} icon={MenuIcon}/>
);

export const Project = () => {
  const onBackPress = () => {
  };

  const renderLeftControl = () => (
    <BackAction onPress={onBackPress}/>
  );

  const renderRightControls = () => [
    <EditAction/>,
    <MenuAction/>,
  ];

  return (
    <Layout style={styles.container}>
      <TopNavigation
        style={styles.navigation}
        title='Project Summary'
        leftControl={renderLeftControl()}
        rightControls={renderRightControls()}
      />
      <Layout
        style={styles.body}
      >
        <Text category='h2'>Waikiki Biking</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Biking is great for the mind, soul and body. Experience the breeze while also exercising your thighs.
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, alignContent: 'center' },
  body: { paddingHorizontal: 20, paddingVertical: 10 },
  text: { marginVertical: 16 },
});
