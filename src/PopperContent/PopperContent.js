import { 
  h, 
  render, 
  Component 
} from 'preact'

import PopoverBody from './../PopoverBody'
import { warnOnce } from './../Utils'

export default function PopoverContent(props) {
  // warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return <PopoverBody {...props} />;
}