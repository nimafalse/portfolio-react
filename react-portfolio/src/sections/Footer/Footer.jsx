import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 Miguel Angel. <br />
        Todos los Derechos Reservados
        </p>
    </section>
  )
}

export default Footer