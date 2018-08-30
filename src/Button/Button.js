import { h, render, Component } from 'preact'

class Button extends Component { 
  constructor() { 
    super(); 
  } 

  render(props) { 
    const { 
      children, 
      type, 
      color, 
      size, 
      disabled, 
      fullWidth, 
    } = props

    return <button type={type} class={`btn btn-${color} btn-${size} btn-${(fullWidth ? 'block' : '' )}`} disabled={disabled}>{children}</button>
  }
}

export default Button
