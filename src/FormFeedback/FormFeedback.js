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
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
}

const defaultProps = {
  tag: 'div',
  valid: undefined
}

class FormFeedback extends Component {
  render(props) {
    const {
      className,
      cssModule,
      valid,
      tooltip,
      tag: Tag,
      ...attributes
    } = props

    const validMode = tooltip ? 'tooltip' : 'feedback'

    const classes = mapToCssModules(
      classNames(
        className,
        valid ? `valid-${validMode}` : `invalid-${validMode}`
      ),
      cssModule
    )

    return <Tag {...attributes} className={classes} />
  }
}

FormFeedback.propTypes = propTypes
FormFeedback.defaultProps = defaultProps

export default FormFeedback