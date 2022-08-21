import React from "react";
import styles from './preloader.module.scss';

const Preloader: React.FunctionComponent = () => {
    return (
        <div className={styles.preloaderWrapper}>
            <div className={styles.preloader}/>
        </div>
    )
}
export default Preloader;