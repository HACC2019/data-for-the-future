import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Layout, Icon, Text, Button } from 'react-native-ui-kitten';
import { IndicatorStats } from '../components/ProjectPage/IndicatorStats';
import { ProjectPageLocation } from '../components/ProjectPage/ProjectPageLocation';


export class ProjectPage extends React.Component {


  buttonStatus = ((this.props.host == 10) ? 'success': (this.props.people.includes(10)) ? 'warning' : 'primary')

  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
      <Image style={{ width: '100%', height: 225 }}
        source={{ uri: this.props.image }}/>
      
      <Layout style={styles.outer} level="2">
        <Layout style={styles.body}>
          <View>
            <Text style={{flex:1, flexWrap:'wrap'}}category="h4">{this.props.projectName}</Text>

            <View style={{flex:1, flexDirection:'row', paddingTop:5}}>
              <View style={{flex:1, paddingRight:20, paddingTop:20}}>
              <Button size='medium'
                status={this.buttonStatus}>
                {((this.props.host == 10) ? 'EDIT': (this.props.people.includes(10)) ? 'LEAVE' : 'JOIN')}
              </Button>
              </View>

              <View style={{flex:2}}>
              <Layout style={[styles.flexRow, styles.padding]}>         
                  <Icon name='charging-outline' width={28} height={28}
                  fill={this.props.categories.includes(1) ? '#94B717' : '#b3b3b3'} />
                  <Icon name='car-outline' width={28} height={28}
                  fill={this.props.categories.includes(2) ? '#94B717' : '#b3b3b3'} />
                  <Icon name='globe-2-outline' width={28} height={28}
                    fill={this.props.categories.includes(3) ? '#0B9343' : '#b3b3b3'}/>
                  <Icon name='trash-outline' width={28} height={28}
                  fill={this.props.categories.includes(4) ? '#D55C23' : '#b3b3b3'} />
                  <Icon name='bulb-outline' width={28} height={28}
                  fill={this.props.categories.includes(5) ? '#46C0D3' : '#b3b3b3'} />
                  <Icon name='people-outline' width={28} height={28}
                  fill={this.props.categories.includes(6) ? '#5E6CB4' : '#b3b3b3'} />
              </Layout>

              <Layout style={{ paddingBottom: 5, marginTop:2, }}>
                <Layout style={styles.flexRow}>
                  <Layout>
                    <Icon name='clock-outline' width={20} height={20} fill='#000000' />
                  </Layout>
                  <Layout style={{ paddingTop: 4, paddingLeft: 2 }}>
                    <Text appearance="hint" category="p1">
                      {this.props.date}
                    </Text>
                  </Layout>
                </Layout>
                <Layout style={styles.flexRow}>
                  <Layout>
                    <Icon name='person-outline' width={20} height={20} fill='#000000' />
                  </Layout>
                  <Layout style={{ paddingTop: 5, paddingLeft: 2 }}>
                    <Text appearance="hint" category="p1">
                      {this.props.people.length} participants
                    </Text>
                  </Layout>
                </Layout>
              </Layout>
            </View>
            </View>
            </View>
          </Layout>


            <View>
              <Text style={{marginTop:20}}category="h6">Project Details</Text>
              <Text style={{marginTop:5}} category="p1"> {this.props.summary} </Text>

              {/* <Text style={styles.title} category="h6">Project Report</Text>
              <Text> {this.props.report} </Text> */}
            </View>

              { this.props.stats.length > 0 &&
            <View>
              <Text style={styles.title}category="h6">Project Indicators</Text>
              <View style={{flex: 1, padding: 10,}}>
                {this.stats.map((item) => (
                    <Indicator key={item.indId} id={item.indId} value={item.value}/>
                ))}
              </View>
            </View>
              }
              <Text style={{paddingTop:10}}category="h6"></Text>
              <ProjectPageLocation lat={this.props.lat} long={this.props.long} projectName={this.props.projectName}/>

          </Layout>
      </ScrollView>
    );
  }
}

ProjectPage.propTypes = {
  projectName: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.number).isRequired,
  date: PropTypes.string.isRequired,
  people: PropTypes.array,
  summary: PropTypes.string.isRequired,
  report: PropTypes.string,
  stats: PropTypes.array,
  lat: PropTypes.number,
  long: PropTypes.number,
  image: PropTypes.string,
  host: PropTypes.number,
  id: PropTypes.number,
  // statistics: PropTypes.arrayOf(PropTypes.shape({
  //   category: PropTypes.string,
  //   metric: PropTypes.number,
  //   unit: PropTypes.string,
  //   description: PropTypes.string
  // }))
};

ProjectPage.defaultProps = {
  people: 0,
  date: 'Nov 11',
  projectName: 'Waikiki Biking',
  report: '',
  stats: []
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
  padding:{
    paddingTop:5
  }
});
