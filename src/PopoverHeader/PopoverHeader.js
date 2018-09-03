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
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'h3'
}

class PopoverHeader extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'popover-header'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

PopoverHeader.propTypes = propTypes
PopoverHeader.defaultProps = defaultProps

export default PopoverHeader