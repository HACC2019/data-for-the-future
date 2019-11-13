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

const ProjectsTabIcon = props => (<Icon width={25} height={25} fill={props.focused ? '#000000' : '#b3b3b3'} name='star-outline'/>);

ProjectsTabIcon.propTypes = propTypes;
ProjectsTabIcon.defaultProps = defaultProps;

export default ProjectsTabIcon;