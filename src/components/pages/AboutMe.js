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
            <div className={styles.aboutme}>
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
            </div>

            <div className={styles.experience}>
                <hr />
                <h1>Experiência</h1>
                <img className={styles.icon} src={ibmIcon} align="left" alt="ibmIcon" />
                <div className={styles.experienceArea}>
                    <h3>IBM</h3>
                    <p>Início: Fevereiro de 2021 | Término: Maio 2022</p>
                </div>

                <img className={styles.icon} src={cietIcon} align="left" alt="cietIcon" sizes='(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px'/>
                <div className={styles.experienceArea}>
                    <h3>Ci&T</h3>
                    <p>Início: Janeiro de 2019 | Término: Janeiro 2020</p>
                </div>
            </div>

            <div className={styles.formation}>
                <hr />
                <img className={styles.wyden} src={wydenIcon} align="right" alt="wydenIcon" />
                <div className={styles.experienceArea}>
                    <h3>Formação</h3>
                    <h4>Análise Desenvolvimento de Sistemas</h4>
                    <p>Centro Universitário UniMetrocamp Wyden</p>
                    <p>Ano de início: Julho de 2018 | Ano de término: Dezembro de 2020</p>
                </div>
            </div>

            <div className={styles.certificate}>
                <hr />
                <img className={styles.azure} src={azureIcon} align="right" alt="azureIcon" />
                <div className={styles.experienceArea}>
                    <h3>Certificação</h3>
                    <h4>Microsoft Certified: Azure Fundamentals</h4>
                    <p>Concluido: 23 de abril de 2022</p>
                </div>
            </div>
            

            
         

            <div className={styles.training}>
                <hr />
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
                <hr />
            </div>

           

        </section>
    )
}

export default AboutMe