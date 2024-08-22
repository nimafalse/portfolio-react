import styles from './ProjectsStyle.module.css';
import movieLogo from '../../assets/movieLogo.jpg';
import brandLogo from '../../assets/brandLogo.jpg';
import petStoreLogo from '../../assets/virtualPetStore.jpg'; 
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={movieLogo} 
                link="https://github.com/nimafalse/Marvel-MovieApp"
                h3="Marvel Movies"
                p="Movie App">
            </ProjectCard>
            <ProjectCard 
                src={brandLogo} 
                link="https://github.com/Lapso-Distopico/Brand"
                h3="Brand Website"
                p="Lading Brand Page">
            </ProjectCard>
            <ProjectCard 
                src={petStoreLogo} 
                link="https://github.com/nimafalse/MascotasApp/blob/main/index.html"
                h3="Pet Store"
                p="Pet Store App">
            </ProjectCard>
        </div>
    </section>
  );
}

export default Projects