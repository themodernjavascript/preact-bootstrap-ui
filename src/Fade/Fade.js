import { 
  h, 
  render, 
  Component 
} from 'preact'
import PropTypes from 'proptypes'
import classNames from 'classnames'
import Transition from 'preact-transition-group'
import { mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts } from './../Utils'

const propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
}

const defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

class Fade extends Component { 
  constructor() { 
    super(); 
  } 

  render(props) { 
    const {
      tag: Tag,
      baseClass,
      baseClassActive,
      className,
      cssModule,
      children,
      innerRef,
      ...otherProps
    } = props

    const transitionProps = pick(otherProps, TransitionPropTypeKeys)
    const childProps = omit(otherProps, TransitionPropTypeKeys)

    return (
      <Transition {...transitionProps}>
        {(status) => {
          const isActive = status === 'entered';
          const classes = mapToCssModules(classNames(
            className,
            baseClass,
            isActive && baseClassActive
          ), cssModule);
          return (
            <Tag className={classes} {...childProps} ref={innerRef}>
              {children}
            </Tag>
          );
        }}
      </Transition>
    )
  }
}

Fade.propTypes = propTypes

Fade.defaultProps = defaultProps

export default Fade