import { h, Component } from 'preact';
import PageTitle from './../common/PageTitle';
import Code from 'preact-prism';
import SectionTitle from './../common/SectionTitle';
import { Link } from 'preact-router/match';

import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'preact-bootstrap-ui';

import DropdownExample from '../examples/Dropdown';
const DropdownExampleSource = require('!!raw-loader!./../examples/Dropdown');

const properties = `Dropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  // For Dropdown usage inside a Nav
  nav: PropTypes.bool,
  active: PropTypes.bool,
  // For Dropdown usage inside a Navbar (disables popper)
  inNavbar: PropTypes.bool,
  tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
  toggle: PropTypes.func,
  setActiveFromChild: PropTypes.bool
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool, // default: true,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: PropTypes.object,
  persist: PropTypes.bool // presist the popper, even when closed. See #779 for reasoning
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool // default: true
};`;

const alignment = `<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    This dropdown's menu is right-aligned
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>`;

export default class DropdownsPage extends Component {
  constructor(props) {
    super(props);

    this.toggleExample2 = this.toggle.bind(this);
    this.state = {
      example2: false
    };
  }

  toggle() {
    this.setState({
      example2: !this.state.example2
    });
  }

  render() {
    return (
      <div>
        <PageTitle title="Dropdowns" />
        <p>
          The <code>Dropdown</code> component is used to pass the <code>isOpen</code> &amp; <code>toggle</code> props via context to the following components: <code>DropdownToggle</code>, <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the <code>Button</code> component internally, meaning it also accepts all the props the <Link href="/components/buttons/">Button component</Link> accepts.
        </p>
        <div className="docs-example">
          <DropdownExample />
          <Code language="javascript">{DropdownExampleSource}</Code>
        </div>
        <h4>Properties</h4>
        <Code language="javascript">{properties}</Code>
        <SectionTitle>Alignment</SectionTitle>
        <p>To align the <code>DropdownMenu</code> to the right, add a <code>right</code> prop to <code>Dropdown</code>.</p>
        <div className="docs-example">
          <div style={{ display: 'inline-block' }}>
            <Dropdown isOpen={this.state.example2} toggle={this.toggleExample2}>
              <DropdownToggle caret>
                Dropdown's menu is right-aligned
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Code language="javascript">{alignment}</Code>
        </div>
      </div>
    );
  }
}
