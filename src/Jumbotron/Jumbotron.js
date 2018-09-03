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
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div'
}

class Jumbotron extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      fluid,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'jumbotron',
      fluid ? 'jumbotron-fluid' : false
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Jumbotron.propTypes = propTypes
Jumbotron.defaultProps = defaultProps

export default Jumbotron