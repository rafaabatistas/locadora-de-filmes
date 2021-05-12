import styles from './styles.module.scss';

import Link from 'next/link';

export function Header() {
    return (
        <nav className={styles.containerHeader}>
            <h1>Store</h1>
            <div className={styles.boxBuntton}>
                <Link href="/"> 
                    <a>
                        <button>Todos </button>
                    </a> 
                </Link>
                <Link href="./editar"> 
                    <a>
                        <button>Editar</button> 
                    </a> 
                </Link>
            </div>
        </nav>
    )
}