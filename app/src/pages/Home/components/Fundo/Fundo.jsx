import styles from './Fundo.module.css'

function Fundo({children, bannerURL}) {
  const bannerOn = bannerURL !== null && bannerURL !== undefined;

  return(      
        <div className={`${styles.main}`}>
            <div className={styles.background}>
              {/* exibe a imagem de fundo se haver uma url*/}
              {bannerOn && (
                <img src={bannerURL} alt="Banner" />
              )}
            </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
    );
}

export default Fundo;
