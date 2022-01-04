import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MenuItem } from '../';
import { selectDirectorySections } from '../directory.selectors';
import '../styles/DirectoryPage.styles.scss';
import { AppState, Types } from '../../shared';

interface StateProps {
  sections?: Types.DirectoryItem[];
}

type Props = Readonly<StateProps>;

const Directory: FC<Props> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(props => (
        <MenuItem key={props.id} {...props} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  sections: selectDirectorySections,
});

export default connect<StateProps>(mapStateToProps)(Directory);
