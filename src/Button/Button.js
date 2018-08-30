import { h, render, Component } from 'preact'

class Button extends Component { 
  constructor() { 
    super(); 
  } 

  render(props) { 
    const { 
      type, 
      color, 
      children, 
      size, 
    } = props

    return <button type={type} class={`btn btn-${color} btn-${size}`}>{children}</button>
  }
}

export default Button
