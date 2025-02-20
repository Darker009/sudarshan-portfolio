import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';

function Skills() {
  return (
    <section id="Skills" className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <span>
                <img src={checkMarkIcon} alt="CheckMarkIcon" />
            </span>
        </div>        
    </section>


  )
}

export default Skills