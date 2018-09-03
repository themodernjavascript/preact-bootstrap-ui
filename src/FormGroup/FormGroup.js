import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
}

class FormGroup extends Component {
  render(props) {
    const {
      className,
      cssModule,
      row,
      disabled,
      check,
      inline,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'position-relative',
      row ? 'row' : false,
      check ? 'form-check' : 'form-group',
      check && inline ? 'form-check-inline' : false,
      check && disabled ? 'disabled' : false
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
};

FormGroup.propTypes = propTypes
FormGroup.defaultProps = defaultProps

export default FormGroup