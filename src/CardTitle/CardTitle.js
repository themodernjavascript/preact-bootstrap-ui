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
  tag: 'h5'
}

class CardTitle extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'card-title'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

CardTitle.propTypes = propTypes
CardTitle.defaultProps = defaultProps

export default CardTitle