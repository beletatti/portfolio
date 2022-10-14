import styles from './Projects.module.css'

function Projects() {
    return (
        <section className={styles.myProjects_container}>
            <h2>Meus Projetos</h2>
            <ul>
                <li>
                    <div className={styles.projects}>
                        <h3>Projeto Jogo de Xadrez em Java</h3>
                        <p>"Criação de jogo de Xadrez em Java baseado em POO."</p>
                        <button className={styles.button}>
                            <a href='https://github.com/beletatti/projetoJogoXadrez'>Ver Projeto</a>
                        </button>
                    </div>
                </li>
                <li>
                    <div className={styles.projects}>
                        <h3>Design System</h3>
                        <p>"Criação do figma ao React, utilizando ferramenta StoryBook."</p>
                        <button className={styles.button}>
                            <a href='https://github.com/beletatti/ignitelab-design-system'>Ver Projeto</a>
                        </button>
                    </div>
                </li>
                <li>
                    <div className={styles.projects}>
                        <h3>Back-end Sistema de Venda em Java</h3>
                        <p>"Implementando modelo conceitual de um sistema de venda."</p>
                        <button className={styles.button}>
                            <a href='https://github.com/beletatti/project-app-of-sales'>Ver Projeto</a>
                        </button>
                    </div>
                </li>
            </ul>

            <div className={styles.partTwo}>
                <hr />
            </div>

        </section>
    )
}

export default Projects