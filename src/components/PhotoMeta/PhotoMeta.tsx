import React from 'react';
import styles from './photometa.module.css';
import { Author } from './Author';
import { LikeButton } from './LikeButton';

interface IPhotoMetaProps {
  authorLink?: string;
  avatar?: string;
  username?: string;
  createdAt?: string;
  hasButton?: boolean;
  hasLike?: boolean;
  likeCount?: number;
  onSurface?: boolean;
  onclick?: () => void;
}

export function PhotoMeta(props: IPhotoMetaProps) {
  const {
    authorLink,
    avatar,
    username,
    createdAt,
    hasButton = false,
    hasLike,
    likeCount,
    onSurface = false,
    onclick,
  } = props;

  return (
    <div className={styles.meta}>
      <Author
        name={username}
        avatar={avatar}
        link={authorLink}
        onSurface={onSurface}
        createdAt={createdAt}
      />
      {hasButton && (
        <LikeButton
          onclick={onclick}
          onSurface={onSurface}
          hasLike={hasLike}
          likeCount={likeCount}
        />
      )}
    </div>
  );
}
