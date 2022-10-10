import styles from './Home.module.css';
import savings from '../../img/richaoLivro.jpg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao portfólio de <span>DevBeletatti</span></h1>
            <p>Se sinta a vontade, veja todos os meus projetos e curiosidade sobre mim.</p>
            <LinkButton to="/projects" text="Acessar projetos"/>
            <br/>
            <LinkButton to="/aboutme" text="Ver curiosidades sobre mim"/>
            <img src={savings}  alt="RichaoLivro"/>
        </section>    
    )
}

export default Home