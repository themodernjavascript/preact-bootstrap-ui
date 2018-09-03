import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'
import InputGroupText from './../InputGroupText'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div'
}

class InputGroupAddon extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      addonType,
      children,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'input-group-' + addonType
    ), cssModule)

    // Convenience to assist with transition
    if (typeof children === 'string') {
      return (
        <Tag {...attributes} className={classes}>
          <InputGroupText children={children} />
        </Tag>
      )
    }

    return (
      <Tag {...attributes} className={classes} children={children} />
    )
  }
}

InputGroupAddon.propTypes = propTypes
InputGroupAddon.defaultProps = defaultProps

export default InputGroupAddon
