import styles from './styles.module.scss';

export type InputProps = {
    name: string;
    value?: string;
    children: React.ReactNode;
    isRequired?: boolean;
    inputHandler: (e) => void;
}

export function InputText({children, name, value, inputHandler, isRequired}: InputProps) {
    return (
        <div className={styles.boxInput}>
            <span>{children}: </span>
            <input onChange={e => inputHandler(e.target.value)} type="text" name={name} value={value} required={isRequired} />
        </div>
    )
}