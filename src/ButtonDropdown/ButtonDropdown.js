import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'
import Dropdown from './../Dropdown'

const propTypes = {
  children: PropTypes.node,
}

class ButtonDropdown extends Component { 
  return (
    <Dropdown group {...props} />
  );
};

ButtonDropdown.propTypes = propTypes

export default ButtonDropdown