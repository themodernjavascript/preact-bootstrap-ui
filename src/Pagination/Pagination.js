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
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
}

const defaultProps = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
}

class Pagination extends Component {
  render(props) {
    const {
      className,
      listClassName,
      cssModule,
      size,
      tag: Tag,
      listTag: ListTag,
      'aria-label': label,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className
    ), cssModule)

    const listClasses = mapToCssModules(classNames(
      listClassName,
      'pagination',
      {
        [`pagination-${size}`]: !!size,
      }
    ), cssModule)

    return (
      <Tag className={classes} aria-label={label}>
        <ListTag {...attributes} className={listClasses} />
      </Tag>
    )
  }
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination