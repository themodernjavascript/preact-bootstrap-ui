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

class CardGroup extends Component {
  render(props) {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = props;
    const classes = mapToCssModules(classNames(
      className,
      'card-group'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

CardGroup.propTypes = propTypes
CardGroup.defaultProps = defaultProps

export default CardGroup
