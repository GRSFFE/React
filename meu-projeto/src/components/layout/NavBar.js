import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li className={styles.item}>
          <Link to="/empresa">Empresa</Link>
        </li>
      </ul>
      <ul>
        <li className={styles.item}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;