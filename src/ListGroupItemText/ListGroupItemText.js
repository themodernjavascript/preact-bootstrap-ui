import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'p'
}

class ListGroupItemText extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'list-group-item-text'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

ListGroupItemText.propTypes = propTypes
ListGroupItemText.defaultProps = defaultProps

export default ListGroupItemText