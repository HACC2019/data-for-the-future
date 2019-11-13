import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, ScrollView, Image, Dimensions  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { CategoryHeader } from '../components/CategoryButton';
import { IndicatorStats } from '../components/IndicatorStats';

export class DashboardCategory extends React.Component {


  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
      <CategoryHeader style={{flex: 1}} categoryTitle={this.props.category.title}
      categoryDescription={this.props.category.description}
      categoryIcon={this.props.category.icon}
      categoryBg={this.props.category.bg} 
      ategoryGoal={this.props.category.goal}></CategoryHeader>

      <IndicatorStats></IndicatorStats>

        </ScrollView>
    );
  }
}

const win = Dimensions.get('window');


const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: win.width,
    height: win.height,
  },
  container: {
    flex: 1,
  }
});
