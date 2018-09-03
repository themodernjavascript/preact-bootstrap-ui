import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import Button from './../Button';
import InputGroupAddon from './../InputGroupAddon';
import { warnOnce } from './../Utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  groupClassName: PropTypes.string,
  groupAttributes: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const InputGroupButton = (props) => {
  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".')

  let {
    children,
    groupClassName,
    groupAttributes,
    ...propsWithoutGroup
  } = props

  if (typeof children === 'string') {
    let {
      cssModule,
      tag,
      addonType,
      ...attributes
    } = propsWithoutGroup

    const allGroupAttributes = {
      ...groupAttributes,
      cssModule,
      tag,
      addonType
    }

    return (
      <InputGroupAddon {...allGroupAttributes} className={groupClassName}>
        <Button {...attributes} children={children} />
      </InputGroupAddon>
    )
  }

  return (
    <InputGroupAddon {...props} children={children} />
  )
}

InputGroupButton.propTypes = propTypes

export default InputGroupButton