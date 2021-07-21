import React from 'react';
import { MenuItem, sections, DirectoryItem } from '../';
import '../styles/Directory.styles.scss';

interface State {
  sections: DirectoryItem[];
}

class Directory extends React.Component<{}, State> {
  private readonly sections: DirectoryItem[];
  constructor(props) {
    super(props);

    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(props => (
          <MenuItem key={props.id} {...props} />
        ))}
      </div>
    );
  }
}

export default Directory;
