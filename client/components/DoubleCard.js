import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Icon, Text, Layout } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

export const DoubleCard = ({
  name,
  description,
  date
}) => (
  <View style={[styles.shadow, styles.box]}>
    <Image
      style={{ borderRadius: 8, width: '100%', height: '40%' }}
      source={{ uri: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg' }}
    />
    <Layout style={styles.body}>
      <Layout style={{ paddingBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Layout style={{ display: 'flex', flexDirection: 'column' }}>
          <Layout>
            <Text category="h6">
              {name}
            </Text>
          </Layout>
          <Layout style={{ display: 'flex', flexDirection: 'row' }}>
            <Layout>
              <Icon name='clock-outline' width={20} height={20} fill='#3366FF' />
            </Layout>
            <Layout style={{ paddingTop: 2.5, paddingLeft: 2 }}>
              <Text appearance="hint" category="c1">
                {date}
              </Text>
            </Layout>
          </Layout>
        </Layout>
        <TouchableWithoutFeedback
          onPress={Actions.Project}
        >
          <Icon name='arrow-ios-forward-outline' width={32} height={32} fill='#FF6961' />
        </TouchableWithoutFeedback>
      </Layout>
      <Text appearance="hint">
        {description}
      </Text>
    </Layout>
  </View>
);

DoubleCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  shadow: {
    // Sweet! Android shadow!
    ...elevationShadowStyle(5)
  },
  box: {
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 10,
    width: '100%'
  },
  body: {
    padding: 10
  }
});
