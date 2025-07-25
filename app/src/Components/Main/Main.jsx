import styles from './Main.module.css'

function Main({children, bannerURL}) {
  const bannerOn = bannerURL !== null && bannerURL !== undefined;

  return(      
        <div className={styles.main}>
          {bannerOn && (
            <div
              className={styles.background}
              style={{ backgroundImage: `url(${bannerURL})` }}
            />
          )}
          <div className={styles.content}>
            {children}
          </div>
        </div>
    );
}

export default Main;
