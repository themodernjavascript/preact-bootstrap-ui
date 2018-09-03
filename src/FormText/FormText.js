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
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'small',
  color: 'muted',
}

class FormText extends Component {
  render(props) {
    const {
      className,
      cssModule,
      inline,
      color,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      !inline ? 'form-text' : false,
      color ? `text-${color}` : false
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

FormText.propTypes = propTypes
FormText.defaultProps = defaultProps

export default FormText