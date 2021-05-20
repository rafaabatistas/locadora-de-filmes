import styles from './styles.module.scss';

import React from 'react';

type InputProps = {
  name: string;
  value?: string;
  children: React.ReactNode;
  inputHandler: (e) => void;
};

export function InputTextArea({
  children,
  name,
  value,
  inputHandler,
}: InputProps) {
  return (
    <div className={styles.boxInputTextArea}>
      <span>{children}: </span>
      <textarea
        onChange={(e) => inputHandler(e.target.value)}
        name={name}
        value={value}
        required
      />
    </div>
  );
}
