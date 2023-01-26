import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <div className={styles.firstNavbarContainer}>
                <div className={styles.firstNavbar}>
                    <span>logo</span>
                    <span>women</span>
                    <span>men</span>
                    <span>searchbar</span>
                    <span>profile</span>
                    <span>liked</span>
                    <span>cart</span>
                </div>
            </div>
            <div className={styles.secondNavbarContainer}>
                <div className={styles.secondNavbar}>
                    <span>category</span>
                    <span>category</span>
                    <span>category</span>
                    <span>category</span>
                    <span>category</span>
                    <span>category</span>
                    <span>category</span>
                </div>
            </div>
            <div className={styles.thirdNavbarContainer}>
                <div className={styles.thirdNavbar}>
                    <span>women</span>
                    <span>promo code</span>
                    <span>men</span>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;