import { 
  h, 
  render, 
  Component 
} from 'preact'

import PopoverHeader from './../PopoverHeader';
import { warnOnce } from './../Utils';

export default function PopoverTitle(props) {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return <PopoverHeader {...props} />;
}