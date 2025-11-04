import styles from "./Card.module.css";

function Card(){
    return (
        //Conteúdo a ser exibido
        //JSX = html + xml (html com css )
        <card className={styles.card}>
            <span> Aula Senac </span>
            <nav>
                <a href="#"> Home </a>
                <a href="#"> Senac </a>
            </nav>
        </card>
    );
}

export default Card;