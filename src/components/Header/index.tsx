import styles from './styles.module.scss';

import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.containerHeader}>
            <h1>Store</h1>
            <div className={styles.boxBuntton}>
                <button>
                    <Link href="/"> 
                        <a>Todos </a> 
                    </Link>
                </button>
                <button>
                    <Link href="./editar"> 
                        <a>Editar </a> 
                    </Link>
                </button>
            </div>
        </header>
    )
}