import { h, Component } from 'preact'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'preact-bootstrap-ui'

export default class Example extends Component {
  render() {
    return (
      <UncontrolledButtonDropdown>
        <DropdownToggle caret>
          Dropdown
            </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  }
}