import React from 'react';
import MenuItem from '../menu-item/menu-item';
import { sections } from './directory.data';
import { Directory as DirectoryInterface } from './directory.interface';
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
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
