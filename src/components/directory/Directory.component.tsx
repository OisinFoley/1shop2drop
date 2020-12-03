import React from 'react';
import MenuItem from '../menu-item/Menu-item';
import { sections } from './Directory.data';
import { Directory as DirectoryInterface } from './Directory.interface';
import './directory.styles.scss';

interface State {
  sections: DirectoryInterface[];
}

class Directory extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProp }) => (
          <MenuItem key={id} {...otherSectionsProp} />
        ))}
      </div>
    );
  }
}

export default Directory;
