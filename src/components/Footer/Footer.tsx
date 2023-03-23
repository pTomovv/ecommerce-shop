import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={styles.firstFooterRow}>

                <div className={styles.footerSocials}>
                    socials
                </div>
                <div className={styles.footerPayment}>
                    payment
                </div>

            </div>

            <div className={styles.secondFooterRowContainer}>
                <div className={styles.secondFooterRow}>
                    <ul className={styles.Footercolumn}>
                        <p className={styles.firstListItem}>
                            HELP & INFORMATION
                        </p>
                        <li>
                            <a>Help</a>
                        </li>
                        <li>
                            <a>Track order</a>
                        </li>
                        <li>
                            <a>Delivery & returns</a>
                        </li>
                        <li>
                            <a>Sitemap</a>
                        </li>
                    </ul>
                    <ul className={styles.Footercolumn}>
                        <p className={styles.firstListItem}>
                            ABOUT ASOS
                        </p>
                        <li>
                            <a>About us</a>
                        </li>
                        <li>
                            <a>Careers at ASOS</a>
                        </li>
                        <li>
                            <a>Corporate Responsibility</a>
                        </li>
                        <li>
                            <a>Investor's site</a>
                        </li>
                    </ul>
                    <ul className={styles.Footercolumn}>
                        <p className={styles.firstListItem}>
                            MORE FROM ASOS
                        </p>
                        <li>
                            <a>Mobile and ASOS apps</a>
                        </li>
                        <li>
                            <a>ASOS Marketplace</a>
                        </li>
                        <li>
                            <a>Gift vouchers</a>
                        </li>
                        <li>
                            <a>Black Friday</a>
                        </li>
                        <li>
                            <a>ASOS x Trift+</a>
                        </li>
                    </ul>
                    {/* <ul className={styles.Footercolumn}>
                        <li className={styles.firstListItem}>
                            <a>SHOPPING FROM</a>
                        </li>
                        <li></li>
                    </ul> */}
                </div>
            </div>

            <div className={styles.thirdFooterRowContainer}>
                <div className={styles.thirdFooterRow}>
                    <p>© 2023 ASOS</p>
                    <div className={styles.footerSmallContainer}>
                        <a>ASOS details</a>
                        <p>|</p>
                        <a>Privacy & Cookies</a>
                        <p>|</p>
                        <a>Ts&Cs</a>
                        <p>|</p>
                        <a>Accessibility</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;