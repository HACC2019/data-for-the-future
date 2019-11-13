import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Layout, Icon, Text } from 'react-native-ui-kitten';
import { IndicatorStats } from '../components/ProjectPage/IndicatorStats';


export class ProjectPage extends React.Component {


  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
      <Image
        style={{ width: '100%', height: 225 }}
        source={{ uri: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg' }}
      />
      <Layout style={styles.outer} level="2">
        <Layout style={styles.body}>
          <ScrollView >
            <Text category="h4">{this.props.project}</Text>
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
                    {this.props.date}
                  </Text>
                </Layout>
              </Layout>
              <Layout style={styles.flexRow}>
                <Layout>
                  <Icon name='person-outline' width={20} height={20} fill='#3366FF' />
                </Layout>
                <Layout style={{ paddingTop: 5, paddingLeft: 2 }}>
                  <Text appearance="hint" category="c1">
                    {this.props.participants} participants
                  </Text>
                </Layout>
              </Layout>
            </Layout>
          </ScrollView>
        </Layout>
              <View>
              <Text style={{marginTop:15}}>
              {this.props.summary}
            </Text>
            <Text style={styles.title} category="h6">Project Report</Text>
                <Text>
                  {this.props.report}
                </Text>
              </View>
              <View>
                <Text style={styles.title}category="h6">Project Statistics</Text>
                <View style={styles.flexRow}>
                  {this.props.statistics.map(({category, metric, unit, description}) => (
                      <IndicatorStats key={category} category={category} metric={metric} unit={unit} description={description}/>
                    ))}
                </View>
            </View>
      </Layout>
      </ScrollView>
    );
  }
}

ProjectPage.propTypes = {
  project: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.number).isRequired,
  date: PropTypes.string.isRequired,
  participants: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  report: PropTypes.string,
  image: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    metric: PropTypes.number,
    unit: PropTypes.string,
    description: PropTypes.string
  }))
};

ProjectPage.defaultProps = {
  report: '',
  statistics: [],
  participants: 0,
  summary: "Description of the event goes here.",
  categories: [1],
  project: "Data for the Future"
};

const styles = StyleSheet.create({
  container: { flex: 1, alignContent: 'center' },
  outer: {
    padding: 15,
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
