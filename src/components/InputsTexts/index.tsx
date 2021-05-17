import styles from './styles.module.scss';

type InputProps = {
    name: string;
    value?: string;
    children: React.ReactNode;
    inputHandler: (e) => void;
}

export function InputText({children, name, value, inputHandler}: InputProps) {
    return (
        <div className={styles.boxInput}>
            <span>{children}: </span>
            <input onChange={e => inputHandler(e.target.value)} type="text" name={name} id={name} value={value} required />
        </div>
    )
}