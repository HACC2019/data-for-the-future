import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import {
  Layout,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Text,
  Avatar
} from 'react-native-ui-kitten';
import { StatisticCard } from '../components/Project/StatisticCard';

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

export const Project = ({
  project,
  date,
  categories,
  participants,
  summary,
  report,
  statistics,
}) => {
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
      <Image
        style={{ width: '100%', height: '25%' }}
        source={{ uri: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg' }}
      />
      <Layout style={styles.outer} level="3">
        <Layout
          style={[styles.body, { height: 400 }]}
        >
          <ScrollView style={{ flex: 1 }}>
            <Text category="h2">{project}</Text>
            <Layout style={[styles.flexRow, styles.padding]}>
              <Icon name='charging-outline' width={26} height={26} fill='#FF6961' />
              <Icon name='car-outline' width={26} height={26} fill='#FF6961' />
              <Icon name='globe-2-outline' width={26} height={26} fill='#ccc' />
              <Icon name='trash-outline' width={26} height={26} fill='#ccc' />
              <Icon name='bulb-outline' width={26} height={26} fill='#ccc' />
              <Icon name='people-outline' width={26} height={26} fill='#ccc' />
            </Layout>
            <Layout style={{ paddingBottom: 10 }}>
              <Layout style={styles.flexRow}>
                <Layout>
                  <Icon name='clock-outline' width={20} height={20} fill='#3366FF' />
                </Layout>
                <Layout style={{ paddingTop: 4, paddingLeft: 2 }}>
                  <Text appearance="hint" category="c1">
                    {date}
                  </Text>
                </Layout>
              </Layout>
              <Layout style={styles.flexRow}>
                <Layout>
                  <Icon name='person-outline' width={20} height={20} fill='#3366FF' />
                </Layout>
                <Layout style={{ paddingTop: 5, paddingLeft: 2 }}>
                  <Text appearance="hint" category="c1">
                    {participants} participants
                  </Text>
                </Layout>
              </Layout>
            </Layout>
            <Text>
              {summary}
            </Text>
            <Layout>
              <Text style={styles.title} category="h5">Project Report</Text>
              <Layout>
                <Text>
                  {report}
                </Text>
              </Layout>
              <Layout>
                <Text style={styles.title}category="h5">Project Statistics</Text>
                <Layout
                  style={styles.flexRow}
                >
                  {
                    statistics.map(({
                      category,
                      metric,
                      unit,
                      description
                    }) => (
                      <StatisticCard
                        key={category}
                        category={category}
                        metric={metric}
                        unit={unit}
                        description={description}
                      />
                    ))
                  }
                </Layout>
              </Layout>
            </Layout>
          </ScrollView>
        </Layout>
      </Layout>
    </Layout>
  );
};

Project.propTypes = {
  project: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.number).isRequired,
  date: PropTypes.string.isRequired,
  participants: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  report: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    metric: PropTypes.number,
    unit: PropTypes.string,
    description: PropTypes.string
  }))
};

Project.defaultProps = {
  report: '',
  statistics: []
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, alignContent: 'center' },
  outer: {
    padding: 20,
    height: '100%'
  },
  body: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -40,
  },
  text: { marginVertical: 16 },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    paddingTop: 10
  },
});
