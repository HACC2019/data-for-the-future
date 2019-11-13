import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Icon } from 'react-native-ui-kitten';


const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  focused: false,
  title: '',
};

const DashboardTabIcon = props => (<Icon width={25} height={25} fill={props.focused ? '#000000' : '#b3b3b3'} name='globe-2-outline'/>);

DashboardTabIcon.propTypes = propTypes;
DashboardTabIcon.defaultProps = defaultProps;

export default DashboardTabIcon;