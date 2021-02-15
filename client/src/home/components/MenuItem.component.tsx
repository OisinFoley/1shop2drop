import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { DirectoryItem } from '../';
import '../styles/MenuItem.styles.scss';

interface Props extends RouteComponentProps, DirectoryItem {}

const MenuItem: FC<Props> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
