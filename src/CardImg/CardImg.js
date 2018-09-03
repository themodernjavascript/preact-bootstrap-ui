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
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'img'
}

class CardImg extends Component {
  render(props) {
    const {
      className,
      cssModule,
      top,
      bottom,
      tag: Tag,
      ...attributes
    } = props

    let cardImgClassName = 'card-img'
    if (top) {
      cardImgClassName = 'card-img-top'
    }
    if (bottom) {
      cardImgClassName = 'card-img-bottom'
    }

    const classes = mapToCssModules(classNames(
      className,
      cardImgClassName
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

CardImg.propTypes = propTypes
CardImg.defaultProps = defaultProps

export default CardImg