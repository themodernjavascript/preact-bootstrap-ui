import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  color: 'secondary',
  tag: 'button',
}

class Button extends Component { 
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render(props) {
    const {
      active,
      block,
      className,
      cssModule,
      color,
      outline,
      size,
      tag: Tag,
      innerRef,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'btn',
      `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      block ? 'btn-block' : false,
      { active, disabled: this.props.disabled }
    ), cssModule)

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
      />
    )
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button