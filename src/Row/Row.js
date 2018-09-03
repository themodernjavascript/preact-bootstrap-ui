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
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div'
}

class Row extends Component {
  render(props) {
    const {
      className,
      cssModule,
      noGutters,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      noGutters ? 'no-gutters' : null,
      'row'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Row.propTypes = propTypes
Row.defaultProps = defaultProps

export default Row