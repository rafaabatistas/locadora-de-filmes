import styles from './styles.module.scss';

import React from 'react';

type InputProps = {
  children: React.ReactNode;
  name: string;
  value: string;
  inputHandler: (e) => void;
};

export function InputDate({ children, name, value, inputHandler }: InputProps) {
  return (
    <div className={styles.boxInput}>
      <span>{children}: </span>
      <input
        onChange={(e) => inputHandler(e.target.value)}
        type="date"
        name={name}
        value={value}
        required
      />
    </div>
  );
}
