import { 
  h, 
  render, 
  Component 
} from 'preact'
import { warnOnce } from './../Utils'
import CardBody from './../CardBody'

export default class CardBlock extends Component {
  render(props) {
    warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".')
    return <CardBody {...props} />
  }
}