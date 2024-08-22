import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmarkIcon-dark.svg';
import checkMarkIconLight from '../../assets/checkmarkIcon-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconDark : checkMarkIconLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"></SkillList>
        <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="Node"></SkillList>
        <SkillList src={checkMarkIcon} skill="Express"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"></SkillList>
        <SkillList src={checkMarkIcon} skill="Angular"></SkillList>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="Node"></SkillList>
        <SkillList src={checkMarkIcon} skill="Express"></SkillList>
      </div>
    </section>
  );
}

export default Skills