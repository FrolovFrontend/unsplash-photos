import React from 'react';
import styles from './author.module.css';
import classNames from 'classnames';

interface IAuthorProps {
  name?: string;
  avatar?: string;
  onSurface?: boolean;
  link?: string;
}

export function Author(props: IAuthorProps) {
  const {
    name,
    avatar,
    link,
    onSurface,
  } = props;

  const nameClasses = classNames(
    styles.name,
    {[styles.onsurface]: onSurface},
  );

  return (
    <a className={styles.user} href={link} target='_blank'>
      <div className={styles.avatarWrap}>
        <img
          className={styles.image}
          src={avatar}
          alt={name}
        />
      </div>
      <span className={nameClasses}>{name}</span>
    </a>
  );
}
