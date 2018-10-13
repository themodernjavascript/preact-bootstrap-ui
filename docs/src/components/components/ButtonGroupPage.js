/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact';
import PageTitle from './../common/PageTitle';
import Code from 'preact-prism';
import SectionTitle from './../common/SectionTitle';

import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'preact-bootstrap-ui';

import ButtonGroupExample from '../examples/ButtonGroup';
const ButtonGroupExampleSource = require('!!raw-loader!./../examples/ButtonGroup');

import ButtonToolbarExample from '../examples/ButtonToolbar';
const ButtonToolbarExampleSource = require('!!raw-loader!./../examples/ButtonToolbar');

const properties =  `ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};`;

const sizing = `<ButtonGroup size="lg">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

<ButtonGroup size="sm">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>`;

const nesting = `<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>`;

const verticalVariation = `<ButtonGroup vertical>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>`;

export default class ButtonGroupPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <PageTitle title="Button Group" />
        <div className="docs-example">
          <div>
            <ButtonGroupExample />
            <Code language="javascript">{ButtonGroupExampleSource}</Code>
          </div>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Button Toolbar</SectionTitle>
        <div className="docs-example">
          <ButtonToolbarExample />
          <Code language="javascript">{ButtonToolbarExampleSource}</Code>
        </div>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonGroup size="lg">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup className="mt-1">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup size="sm" className="mt-1">
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </div>
          <Code language="javascript">{sizing}</Code>
        </div>
        <SectionTitle>Nesting</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dropdown Link</DropdownItem>
                  <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </ButtonGroup>
            <Code language="javascript">{nesting}</Code>
          </div>
        </div>
        <SectionTitle>Vertical variation</SectionTitle>
        <div className="docs-example">
          <ButtonGroup vertical>
            <Button>1</Button>
            <Button>2</Button>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <Code language="javascript">{verticalVariation}</Code>
        </div>
      </div>
    )
  }
}
