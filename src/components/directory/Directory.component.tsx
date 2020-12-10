import React from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import { sections } from './Directory.data';
import { DirectoryItem } from './DirectoryItem.types';
import './Directory.styles.scss';

interface State {
  sections: DirectoryItem[];
}

class Directory extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((props) => (
          <MenuItem key={props.id} {...props} />
        ))}
      </div>
    );
  }
}

export default Directory;
