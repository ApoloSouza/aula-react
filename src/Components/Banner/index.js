import styles from "./Banner.module.css";

function Banner(){
    return (
        //Conteúdo a ser exibido
        //JSX = html + xml (html com css )
        <div className={styles.banner}>
            <h2> Aula Senac no banner </h2>
        </div>
    );
}

export default Banner;