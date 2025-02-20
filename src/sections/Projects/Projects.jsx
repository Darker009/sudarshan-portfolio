import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={viberr} 
          link="https://github.com/Darker009/Employee-Management-System" 
          h3="Viberr" 
          p="Streaming App"
        />

        <ProjectCard 
          src={freshBurger} 
          link="https://github.com/Darker009/Employee-Management-System" 
          h3="Burger" 
          p="Darker Restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;