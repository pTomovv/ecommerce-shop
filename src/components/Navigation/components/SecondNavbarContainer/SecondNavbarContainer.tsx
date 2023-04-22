import { useState } from 'react'
import styles from './SecondNavbarContainer.module.css'
import { menuData } from '../../data'
type Props = {
    isMen: string
}

const SecondNavbarContainer = ({ isMen }: Props) => {
    const [active, setActive] = useState(false)
    const [subCategory, setSubCategory] = useState<string>('')

    function showMenu() {
        setActive(true)
    }
    function hideMenu() {
        setActive(false)
    }

    return (
        <div className={styles.secondNavbarContainer}>
            <div className={styles.secondNavbar}>
                {menuData
                    .find((el) => el.key === isMen)
                    ?.subCategories.map((el) => (
                        <button
                            key={el.key}
                            onMouseEnter={() => {
                                showMenu()
                                setSubCategory(el.key)
                            }}
                            onMouseLeave={hideMenu}
                            className={styles.navbarButton}
                        >
                            {el.subCategoryName}
                        </button>
                    ))}
            </div>

            <div
                onMouseEnter={showMenu}
                onMouseLeave={hideMenu}
                className={active ? styles.dropMenu : styles.dropMenuHidden}
            >
                {menuData
                    .find((el) => el.key === isMen)
                    ?.subCategories.find((el) => el.key === subCategory)
                    ?.items.map((el) => (
                        <div key={el.key}>{el.itemName}</div>
                    ))}
            </div>
        </div>
    )
}

export default SecondNavbarContainer
