/* Escribe rfce y te genera este codigo */
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';

function Hero() {
  const { theme, toggleTheme } = useTheme(); 

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  
  return (
  <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.Hero}
          src={heroImg} 
          alt="Foto de Perfil de Miguel Angel" />
        <img 
          className={styles.colorMode}
          src={themeIcon} 
          alt="Icono para el Modo de Color" 
          onClick={toggleTheme}/>
          
      </div>
      <div className={styles.info}>
        <h1>
          Miguel
            <br></br>
          Angel 
        </h1>
        <h2>Desarrollador FrontEnd</h2>
        <span>
          <a href="https:/github.com/nimafalse" target="_blank">
            <img src={githubIcon} alt="Perfil de GitHub" />
          </a>
          <a href="https:/linkedin.com/nimafalse" target="_blank">
            <img src={linkedinIcon} alt="Perfil de LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          Apasionado Desarrollador Web Front End.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>

      </div>
    </section>
  );
}

export default Hero