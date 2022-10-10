import styles from './AboutMe.module.css'

import savings from '../../img/richaoPose.JPG';
import ibmIcon from '../../img/ibm.jpg';

function AboutMe() {
    return (
        <section className={styles.aboutme_container}>
            <img className={styles.imgOne} src={savings} align="left" />
            <div className={styles.textOne}>
                <h1>Sobre mim</h1>
                <p>Meu nome é Richard Beletatti,
                    sou programador Júnior Back-end com Java, e React com Front-end.
                    Com experiência de mercado pela IBM e Ci&T. Hoje estou em busca de
                    nova oportunidade como desenvolvedor de software. Com a
                    experiência obtida, pude entender melhor na teoria a visão do todo, em ser
                    programador de software, entendendo desde planejamento do Projeto
                    passando pela fase de desenvolvimento, testes, homologação e implantação
                    em produção. Hoje busco aperfeiçoamento e novos conhecimentos na
                    prática.
                </p>
                <p><span>______________________________________________</span></p>
                <div className={styles.textTwo}>
                    <p><span>______________________________________________</span></p>
                    <h1>Experiência</h1>
                    <div className={styles.experienceOne}>
                        <h3>IBM</h3>
                        <img className={styles.ibmIcon} src={ibmIcon} align="right" />
                        <p>Início: Fevereiro de 2021 | Término: Maio 2022</p>
                        <p>Desenvolvendo novas implementações no sistema do cliente. Utilizando Java 8. Com base
                            no sistema Banco de Dados DB2 e Linux para teste unitário.</p>
                    </div>
                    <p><span>_________</span></p>
                    <div className={styles.experienceTwo}>
                        <h3>Ci&T</h3>
                        <p>Início: Janeiro de 2019 | Término: Janeiro 2020</p>
                        <p>Estimativas, confecção e execução, sobre o funcionamento de metodologia Scrum, e
                            estudos sobre a Linguagem Java(POO e Spring Boot), Git e a utilização da IDE Eclipse.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutMe