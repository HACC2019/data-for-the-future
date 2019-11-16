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
      <Image style={{ width: '100%', height: 225 }}
        source={{ uri: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg' }}/>
      
      <Layout style={styles.outer} level="2">
        <Layout style={styles.body}>
          <ScrollView>
            <Text style={{flex:1, flexWrap:'wrap'}}category="h4">{this.props.name}</Text>

            <Layout style={[styles.flexRow, styles.padding]}>         
                <Icon name='charging-outline' width={26} height={26}
                fill={this.props.categories.includes(1) ? '#000000' : '#b3b3b3'} />
                <Icon name='car-outline' width={26} height={26}
                fill={this.props.categories.includes(2) ? '#000000' : '#b3b3b3'} />
                <Icon name='globe-2-outline' width={26} height={26}
                  fill={this.props.categories.includes(3) ? '#000000' : '#b3b3b3'}/>
                <Icon name='trash-outline' width={26} height={26}
                fill={this.props.categories.includes(4) ? '#000000' : '#b3b3b3'} />
                <Icon name='bulb-outline' width={26} height={26}
                fill={this.props.categories.includes(5) ? '#000000' : '#b3b3b3'} />
                <Icon name='people-outline' width={26} height={26}
                fill={this.props.categories.includes(6) ? '#000000' : '#b3b3b3'} />
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
                    {this.props.people.length} participants
                  </Text>
                </Layout>
              </Layout>
            </Layout>
          </ScrollView>
        </Layout>


            <View>
              <Text style={{marginTop:20}}> {this.props.summary} </Text>

              {/* <Text style={styles.title} category="h6">Project Report</Text>
              <Text> {this.props.report} </Text> */}
            </View>

              { this.stats.length > 0 &&
            <View>
              <Text style={styles.title}category="h6">Project Indicators</Text>
              <View style={{flex: 1, padding: 10,}}>
                {this.stats.map((item) => (
                    <Indicator key={item.indId} id={item.indId} value={item.value}/>
                ))}
              </View>
            </View>
              }

          </Layout>
      </ScrollView>
    );
  }
}

ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.number).isRequired,
  date: PropTypes.string.isRequired,
  participants: PropTypes.number,
  summary: PropTypes.string.isRequired,
  report: PropTypes.string,
  stats: PropTypes.array,
  lat: PropTypes.number,
  long: PropTypes.number,
  image: PropTypes.string,
  people: PropTypes.array
  // statistics: PropTypes.arrayOf(PropTypes.shape({
  //   category: PropTypes.string,
  //   metric: PropTypes.number,
  //   unit: PropTypes.string,
  //   description: PropTypes.string
  // }))
};

ProjectPage.defaultProps = {
  report: '',
  statistics: []
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
