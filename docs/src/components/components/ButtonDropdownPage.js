/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import { h, Component } from 'preact'
import PageTitle from './../common/PageTitle'
import Code from 'preact-prism'
import SectionTitle from './../common/SectionTitle'
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'preact-bootstrap-ui'

import ButtonDropdownExample from '../examples/ButtonDropdown';
const ButtonDropdownExampleSource = require('!!raw-loader!./../examples/ButtonDropdown')

import Example from '../examples/ButtonDropdownMulti';

import ExampleSplit from '../examples/ButtonDropdownMultiSplit';

import ButtonDropdownUncontrolledExample from '../examples/ButtonDropdownUncontrolled'
const ButtonDropdownUncontrolledExampleSource = require('!!raw-loader!./../examples/ButtonDropdownUncontrolled')

const properties = `ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};`

const singleButtonDropdowns = `<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <Button id="caret" color="primary">{this.props.text}</Button>
  <DropdownToggle caret color="primary" />
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`

const splitButtonDropdowns = `<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <Button id="caret" color="primary">{this.props.text}</Button>
  <DropdownToggle caret color="primary" />
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`

const sizing = `<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret size="lg">
    Large Button
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret size="sm">
    Small Button
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`

const uncontrolledDropdown = `<ButtonDropdown direction="up" isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
  <DropdownToggle caret>
    Dropleft
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>`

export default class ButtonDropdownPage extends Component {
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
        <PageTitle title="Button Dropdown" />
        <div className="docs-example">
          <ButtonDropdownExample />
          <Code language="javascript">{ButtonDropdownExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Single button dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <Example color="primary" text="Primary" />
            <Example color="secondary" text="Secondary" />
            <Example color="success" text="Success" />
            <Example color="info" text="Info" />
            <Example color="warning" text="Warning" />
            <Example color="danger" text="Danger" />
          </div>
          <Code language="javascript">{singleButtonDropdowns}</Code>
        </div>
        <SectionTitle>Split button dropdowns</SectionTitle>
        <div className="docs-example">
          <div>
            <ExampleSplit color="primary" text="Primary" />
            <ExampleSplit color="secondary" text="Secondary" />
            <ExampleSplit color="success" text="Success" />
            <ExampleSplit color="info" text="Info" />
            <ExampleSplit color="warning" text="Warning" />
            <ExampleSplit color="danger" text="Danger" />
          </div>
          <Code language="javascript">{splitButtonDropdowns}</Code>
        </div>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonDropdown isOpen={this.state.btnLg} toggle={() => { this.setState({ btnLg: !this.state.btnLg }); }}>
              <DropdownToggle caret size="lg">
                Large Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="mt-1">
            <ButtonDropdown isOpen={this.state.btnSm} toggle={() => { this.setState({ btnSm: !this.state.btnSm }); }}>
              <DropdownToggle caret size="sm">
                Small Button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <Code language="javascript">{sizing}</Code>
        </div>
        <SectionTitle>Uncontrolled Dropdown</SectionTitle>
        <div className="docs-example">
          <ButtonDropdownUncontrolledExample />
          <Code language="javascript">{ButtonDropdownUncontrolledExampleSource}</Code>
        </div>
        <SectionTitle>Drop direction variations</SectionTitle>
        <div className="docs-example">
          <div>
            <ButtonDropdown direction="up" isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
              <DropdownToggle caret>
                Dropup
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            {' '}
            <ButtonDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
              <DropdownToggle caret>
                Dropleft
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            {' '}
            <ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
              <DropdownToggle caret>
                Dropright
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <Code language="javascript">{uncontrolledDropdown}</Code>
        </div>
      </div>
    )
  }
}
