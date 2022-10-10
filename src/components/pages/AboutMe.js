import styles from './AboutMe.module.css'

import savings from '../../img/richaoPose.JPG';
import ibmIcon from '../../img/ibm.jpg';
import cietIcon from '../../img/ciet.jpg'
import azureIcon from '../../img/azure.jpg';
import wydenIcon from '../../img/wyden.JPG';

function AboutMe() {
    return (
        <section className={styles.aboutme_container}>
            <img className={styles.imgOne} src={savings} align="left" alt="richaoPose" />

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
                        <img className={styles.icon} src={ibmIcon} align="right" alt="ibmIcon" />
                        <p>Início: Fevereiro de 2021 | Término: Maio 2022</p>
                        <p>Desenvolvendo novas implementações no sistema do cliente. Utilizando Java 8. Com base
                            no sistema Banco de Dados DB2 e Linux para teste unitário.</p>
                    </div>
                    <p><span>_________</span></p>
                    <div className={styles.experienceTwo}>
                        <img className={styles.icon} src={cietIcon} align="right" alt="cietIcon" />
                        <h3>Ci&T</h3>
                        <p>Início: Janeiro de 2019 | Término: Janeiro 2020</p>
                        <p>Estimativas, confecção e execução, sobre o funcionamento de metodologia Scrum, e estudos sobre a Linguagem Java(POO e Spring Boot), Git e a utilização da IDE Eclipse.</p>
                    </div>
                </div>
            </div>
            <p>________________________________________________________</p>
            
            <div className={styles.formation}>
            <img className={styles.wyden} src={wydenIcon} align="right" alt="wydenIcon" />
                <h3>Formação</h3>
                <p>Análise Desenvolvimento de Sistemas</p>
                <p>Centro Universitário UniMetrocamp Wyden</p>
                <p>Ano de início: Julho de 2018 | Ano de término: Dezembro de 2020</p>
            </div>

            <p>________________________________________________________</p>
            <div className={styles.certificate}>
                <h3>Certificação</h3>
                <div className={styles.textThree}>
                    <img className={styles.azure} src={azureIcon} align="right" alt="azureIcon" />
                    <h4>Microsoft Certified: Azure Fundamentals</h4>
                    <p>Concluido: 23 de abril de 2022</p>
                    <p>Clique na imagem para acessar a certificação.</p>
                </div>
            </div>
            <p>________________________________________________________</p>

            <div className={styles.training}>
                <h3>Treinamentos</h3>
                <h4>Linux conceitos e principais comandos</h4>
                <p>Ano de início: 2021 | Ano de término: 2021</p>
                <p>Udemy</p>
                <p><span>_________</span></p>
                <h4>Git completo: Do Básico ao Avançado</h4>
                <p>Ano de início: 2020 | Ano de término: 2020</p>
                <p>Udemy</p>
                <p><span>_________</span></p>
                <h4>Spring Boot, Hibernate, REST, MySQL, MongoDB</h4>
                <p>Ano de início: 2020 | Ano de término: 2020</p>
                <p>Udemy</p>
                <p><span>_________</span></p>
                <h4>Java Programação Orientação a Objetos</h4>
                <p>Ano de início: 2019 | Ano de término: 2019</p>
                <p>Udemy</p>
                <p>________________________________________________________</p>
            </div>
        </section>

    )
}

export default AboutMe