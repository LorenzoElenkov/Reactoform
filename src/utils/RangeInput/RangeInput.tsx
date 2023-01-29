import React, { FunctionComponent, useState, useEffect } from 'react';
import { RangeInputProps } from './RangeInput.interface';
import styles from './RangeInput.module.css';

const RangeInput: FunctionComponent<RangeInputProps> = ({ options, index, onChange, isValid }) => {
  const [chosenOption, setChosenOption] = useState<number>(-1);
  const handleRangeClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    indexKey: number,
    index: number
  ) => {
    if (options) {
      setChosenOption(indexKey);
      onChange(e, index ?? -1);
    }
  };

  useEffect(() => {
    if (!isValid) {
      setChosenOption(-1);
    }
  }, [isValid]);

  return (
    <div className={styles.rangePicker}>
      <div className={styles.pickerLabels}>
        {options?.map((option: string, indexKey: number) => {
          return (
            <label
              htmlFor={`label_${indexKey}`}
              key={indexKey}
              className={`${
                chosenOption === indexKey ? `${styles.checked}` : ''
              }`}
            >
              {option}
            </label>
          );
        })}
      </div>
      <div className={styles.picker}>
        {options?.map((_, indexKey: number) => {
          return (
            <button
              value={indexKey}
              type="button"
              key={indexKey}
              id={`label_${indexKey}`}
              className={`${
                chosenOption === indexKey ? `${styles.checked}` : ''
              }`}
              onClick={e => handleRangeClick(e, indexKey, index ?? -1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RangeInput;
