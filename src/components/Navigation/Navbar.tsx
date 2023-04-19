import Liked from "src/components/common/icons/Liked";
import Logo from "src/components/common/icons/Logo";
import ProfileIcon from "src/components/common/icons/ProfileIcon";
import SearchButton from "src/components/common/icons/SearchButton";
import ShoppingCart from "src/components/common/icons/ShoppingCart";
import styles from "./Navbar.module.css"
import SecondNavbarContainer from "./components/SecondNavbarContainer/SecondNavbarContainer";
import { useState } from "react";

const Navbar = () => {
    const [isMen, setIsMen] = useState("men");
    function selectMenOrWomen(value: string){
        setIsMen(value);
    }

    return (
        <>
            <div className={styles.firstNavbarContainer}>
                <div className={styles.firstNavbar}>
                    <div className={styles.navbarLogo}>
                        <Logo />
                    </div>
                    <div onClick={() => selectMenOrWomen("women")} className={styles.womenOrMenCategory}>
                        WOMEN
                    </div>
                    <div onClick={() => selectMenOrWomen("men")} className={styles.womenOrMenCategory}>
                        MEN
                    </div>
                    <div className={styles.searchbarContainer}>
                        <input type="text" className={styles.searchbar} placeholder="Search for items and brands" />
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
            <SecondNavbarContainer isMen={isMen}/>
            {/* <div className={styles.thirdNavbarContainer}>
                <div className={styles.thirdNavbar}>
                    <span>women</span>
                    <span>promo code</span>
                    <span>men</span>
                </div>
            </div> */}
        </>
    );
}

export default Navbar;