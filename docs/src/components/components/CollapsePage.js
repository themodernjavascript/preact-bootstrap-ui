import { h, Component } from 'preact';
import PageTitle from './../common/PageTitle';
import Code from 'preact-prism';
import SectionTitle from './../common/SectionTitle';

import CollapseExample from '../examples/Collapse';

export default class CollapsePage extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Collapse" />
        <div className="docs-example">
          <CollapseExample />
        </div>
      </div>
    );
  }
}
