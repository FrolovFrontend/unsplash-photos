import React from 'react';
import styles from './likebutton.module.css';
import classNames from 'classnames';

interface ILikeButtonProps {
  hasLike?: boolean;
  onSurface?: boolean;
  onclick?: () => void;
  likeCount?: number;
}

export function LikeButton(props: ILikeButtonProps) {
  const {hasLike, onSurface, onclick, likeCount} = props;

  const valueClasses = classNames(
    styles.value,
    {[styles.onsurface]: onSurface},
  );
  const svgClasses = classNames(
    styles.svg,
    {[styles.active]: hasLike},
  );
  const buttonClasses = classNames(
    styles.likeBtn,
    {[styles.active]: hasLike},
    {[styles.onsurface]: onSurface},
  );

  return (
    <div className={styles.likes}>
      <span className={valueClasses}>{likeCount}</span>
      <button className={buttonClasses} onClick={onclick}>
        <svg
          width="32"
          height="32"
          className={svgClasses}
          version="1.1"
          viewBox="0 0 32 32"
          aria-hidden="false"
        >
          <path
            d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"
          />
        </svg>
      </button>
    </div>
  );
}
