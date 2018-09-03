import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

const defaultProps = {
  tag: 'li',
}

const PaginationItem = (props) => {
  const {
    active,
    className,
    cssModule,
    disabled,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(classNames(
    className,
    'page-item',
    {
      active,
      disabled,
    }
  ), cssModule)

  return (
    <Tag {...attributes} className={classes} />
  )
}

PaginationItem.propTypes = propTypes
PaginationItem.defaultProps = defaultProps

export default PaginationItem