import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts } from './../Utils'
import PreactCSSTransitionGroup from 'preact-css-transition-group'

var style = `.randomTransition-leave {
  animation: fadeOut 500ms ease forwards 1;
}
@keyframes fadeOut {
  100% { opacity: 0; }
}

.randomTransition-enter {
  animation: fadeIn 500ms ease forwards 1;
}
@keyframes fadeIn {
  0% { opacity: 0; }
}`

const propTypes = {
  // ...Transition.propTypes,
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
  // ...Transition.defaultProps,
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
}

class Fade extends Component {
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

    // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
    // empty object "{}". This is the result of the `react-transition-group` babel
    // configuration settings. Therefore, to ensure that production builds work without
    // error, we can either explicitly define keys or use the Transition.defaultProps.
    // Using the Transition.defaultProps excludes any required props. Thus, the best
    // solution is to explicitly define required props in our utilities and reference these.
    // This also gives us more flexibility in the future to remove the prop-types
    // dependency in distribution builds (Similar to how `react-transition-group` does).
    // Note: Without omitting the `react-transition-group` props, the resulting child
    // Tag component would inherit the Transition properties as attributes for the HTML
    // element which results in errors/warnings for non-valid attributes.
    const transitionProps = pick(otherProps, TransitionPropTypeKeys)
    const childProps = omit(otherProps, TransitionPropTypeKeys)

    const isActive = status === 'entered';
    const classes = mapToCssModules(classNames(
      className,
      baseClass,
      isActive && baseClassActive
    ), cssModule)

    return (
      <div>
        <style>{style}</style>
        <PreactCSSTransitionGroup 
          transitionName="randomTransition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {props.in ? <div key="randomComponent">{children}</div> : <Tag className={classes}>{children}</Tag> }
        </PreactCSSTransitionGroup>
      </div>
    )
  }
}

Fade.propTypes = propTypes
Fade.defaultProps = defaultProps

export default Fade