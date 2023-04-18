import { useState } from "react";
import styles from "./SecondNavbarContainer.module.css"
const SecondNavbarContainer = () => {

    const [ active, setActive ] = useState(false);
     function showMenu() {
        setActive(true);
     }
     function hideMenu(){
        setActive(false);
     }
    return (
        <div className={styles.secondNavbarContainer}>
                <div onMouseEnter={showMenu} onMouseLeave={hideMenu} className={active ? styles.dropMenu : styles.dropMenuHidden}>
                    asd
                </div>
                <div  className={styles.secondNavbar}>
                    <button onMouseEnter={showMenu} onMouseLeave={hideMenu} className={styles.navbarButton}>Clothing</button>
                    <button onMouseEnter={showMenu} onMouseLeave={hideMenu} className={styles.navbarButton}>Accessories</button>
                    <button onMouseEnter={showMenu} onMouseLeave={hideMenu} className={styles.navbarButton}>Shoes</button>
                    <button onMouseEnter={showMenu} onMouseLeave={hideMenu} className={styles.navbarButton}>Sportswear</button>
                    <button onMouseEnter={showMenu} onMouseLeave={hideMenu} className={styles.navbarButton}>Jeans</button>
                </div>
            </div>
    );
}
 
export default SecondNavbarContainer;