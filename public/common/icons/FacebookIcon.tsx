import styles from "./FacebookIcon.module.css";

const FacebookIcon = () => {
    return (
        <div className={styles.facebookIcon}>
            <a >
            <svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path d='M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm6.075-21.75H8.925c-.341 0-.675.334-.675.675v12.15c0 .341.333.675.675.675H15v-5.4h-1.35v-2.025H15v-1.35c.46-1.737 1.526-2.686 2.7-2.7 1.126.014 1.767.07 2.025 0V12.3h-1.35c-.646-.108-.81.294-1.35.675v1.35h2.7l-.675 2.025h-2.025v5.4h4.05c.341 0 .675-.334.675-.675V8.925c0-.341-.334-.675-.675-.675z' fill='#3C5A99' fill-rule='evenodd'/></svg>
            </a>
        </div>
    );
}

export default FacebookIcon;