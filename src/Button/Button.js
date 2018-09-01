import { 
  h, 
  render, 
  Component 
} from 'preact'

export default class Button extends Component { 
  constructor() { 
    super(); 
  } 

  render(props) { 
    const { 
      children, 
      variant, 
      type, 
      color, 
      size, 
      fullWidth,
      disabled,
      style, 
      classes, 
      onClick, 
    } = props

    return <button 
              type={type} 
              className={`btn btn-${((variant && variant === 'outline') ? (variant + '-' + color) : color)} btn-${size} btn-${(fullWidth ? 'block' : '' )} ${classes}`} 
              disabled={disabled}
              onClick={onClick}
              style={style}
            >
              {children}
            </button>
  }
}