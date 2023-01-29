import React, { useState, FunctionComponent, useEffect } from 'react';
import { RatingInputProps } from './RatingInput.interface';
import styles from './RatingInput.module.css';

const RatingInput: FunctionComponent<RatingInputProps> = ({ index, onChange, isValid }) => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    if (e.target instanceof Element) {
      const elementId = e.target.id;
      setRating(Number(elementId.substring(elementId.length - 1)));
      onChange(e, index ?? -1);
    }
  };

  useEffect(() => {
    if (!isValid) {
      setRating(0);
    }
  }, [isValid]);

  return (
    <div className={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_: any, indexKey: number) => (
          <button
            key={index}
            value={indexKey + 1}
            type="button"
            id={`rating_star${indexKey + 1}`}
            onClick={e => handleRatingClick(e, index ?? -1)}
            className={`${rating > indexKey ? styles.checked : ''}`}
          />
        ))}
    </div>
  );
};

export default RatingInput;
