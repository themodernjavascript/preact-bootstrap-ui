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
  tag: 'div'
}

class CardImgOverlay extends Component{
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'card-img-overlay'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

CardImgOverlay.propTypes = propTypes
CardImgOverlay.defaultProps = defaultProps

export default CardImgOverlay
