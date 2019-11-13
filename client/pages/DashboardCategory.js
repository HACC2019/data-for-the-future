import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, ScrollView, View  } from 'react-native';
import { CategoryHeader } from '../components/CategoryHeader';
import { IndicatorStats } from '../components/ProjectPage/IndicatorStats';



export class DashboardCategory extends React.Component {

  stats = [
    {
      category: 'CLEAN ENERGY',
      metric: 50,
      unit: 'tons',
      description: 'of CO2 offset'
    },
    {
      category: 'LOCAL FOOD',
      metric: 1000,
      unit: 'USD',
      description: 'into economy'
    }
  ];

  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
          <CategoryHeader style={{flex: 1}} categoryTitle={this.props.category.title}
          categoryDescription={this.props.category.description}
          categoryIcon={this.props.category.icon}
          categoryBg={this.props.category.bg} 
          ategoryGoal={this.props.category.goal}></CategoryHeader>
        <View style={styles.flexRow}>
          {this.stats.map(({category, metric, unit, description}) => (
            <IndicatorStats key={category} category={category} metric={metric} unit={unit} description={description}/>
          ))}
          </View>
          </ScrollView>

    );
  }
}



DashboardCategory.propTypes = {
  category: PropTypes.object
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
});
