import { unstable_noStore as noStore } from 'next/cache';

import styles from './index.module.css';

export default async function Home() {
    noStore();

    return (
        <main className={styles.main}>
            <h1>Hello, World!</h1>
        </main>
    );
}
