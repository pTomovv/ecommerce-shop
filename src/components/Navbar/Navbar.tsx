import Liked from "public/common/icons/Liked";
import Logo from "public/common/icons/Logo";
import ProfileIcon from "public/common/icons/Profile";
import SearchButton from "public/common/icons/SearchButton";
import ShoppingCart from "public/common/icons/ShoppingCart";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <div className={styles.firstNavbarContainer}>
                <div className={styles.firstNavbar}>
                    <div className={styles.navbarLogo}>
                        <Logo />
                    </div>
                    <div className={styles.womenOrMenCategory}>
                        WOMEN
                    </div>
                    <div className={styles.womenOrMenCategory}>
                        MEN
                    </div>
                    <div className={styles.searchbarContainer}>
                        <input type="text" className={styles.searchbar} placeholder="Search for items and brands"/>
                        <button className={styles.searchButton}>
                            <SearchButton />
                        </button>
                    </div>
                    <div className={styles.profile}>
                        <ProfileIcon />
                    </div>
                    <div className={styles.liked}>
                        <Liked />
                    </div>
                    <div className={styles.cart}>
                        <ShoppingCart />
                    </div>
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