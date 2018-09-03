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
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'a'
}

class CardLink extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      innerRef,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'card-link'
    ), cssModule)

    return (
      <Tag {...attributes} ref={innerRef} className={classes} />
    )
  }
}

CardLink.propTypes = propTypes
CardLink.defaultProps = defaultProps

export default CardLink