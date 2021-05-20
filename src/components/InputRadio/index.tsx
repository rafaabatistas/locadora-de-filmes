import styles from './styles.module.scss';

import React from 'react';

type InputProps = {
  name: string;
  value?: boolean;
  isChecked: string;
  children: React.ReactNode;
  inputHandler: (e) => void;
};

export function InputRadio({
  children,
  inputHandler,
  isChecked,
  name,
}: InputProps) {
  return (
    <div className={styles.boxInput}>
      <span>{children}: </span>

      <input
        onChange={(e) => inputHandler(e.target.value)}
        type="radio"
        name={name}
        value={'true'}
        checked={isChecked === 'true'}
      />
      <label htmlFor="Sim">Sim</label>

      <input
        onChange={(e) => inputHandler(e.target.value)}
        type="radio"
        name={name}
        value={'false'}
        checked={isChecked === 'false'}
      />
      <label htmlFor="Não">Não</label>
    </div>
  );
}
