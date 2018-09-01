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
      color, 
      pill, 
    } = props

    return <span 
              className={`badge badge-${(color ? color : 'primary')} badge-${pill}`} 
            >
              {children}
            </span>
  }
}