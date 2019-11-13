import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Icon } from 'react-native-ui-kitten';
import CustomIcon from '../CustomIcon'


const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  focused: false,
  title: '',
};

const DashboardTabIcon = props => (<CustomIcon name='icon-dashboard' size={25} color={props.focused ? '#000000' : '#b3b3b3'}/>);

DashboardTabIcon.propTypes = propTypes;
DashboardTabIcon.defaultProps = defaultProps;

export default DashboardTabIcon;