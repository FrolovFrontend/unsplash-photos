import React from 'react';
import styles from './author.module.css';
import classNames from 'classnames';

interface IAuthorProps {
  name?: string;
  createdAt?: string;
  avatar?: string;
  onSurface?: boolean;
  link?: string;
}

export function Author(props: IAuthorProps) {
  const {
    name,
    createdAt,
    avatar,
    link,
    onSurface,
  } = props;

  const nameClasses = classNames(
    styles.name,
    {[styles.onsurface]: onSurface},
  );

  const createdAtClasses = classNames(
    styles.createdAt,
    {[styles.onsurface]: onSurface},
  );

  return (
    <a className={styles.user} href={link} target='_blank' rel='noreferrer'>
      <div className={styles.avatarWrap}>
        <img
          className={styles.image}
          src={avatar}
          alt={name}
        />
      </div>
      <span className={nameClasses}>{name}</span>
      <span className={createdAtClasses}>{createdAt}</span>
    </a>
  );
}
