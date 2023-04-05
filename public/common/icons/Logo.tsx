import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <a className={styles.logo}>
            <svg width="80" height="24" xmlns="http://www.w3.org/2000/svg"><symbol id="a" viewBox="0 0 23 24"><path d="M5.076 12.017c0-3.814 2.328-7.509 6.521-7.509 4.194 0 6.522 3.695 6.522 7.51 0 10.098-13.043 10.095-13.043 0Zm17.918-7.521V.603h-4.875v1.514C16.127.683 13.967.013 11.63 0h-.033L11.564 0C8.742.016 6.178.988 3.857 3.11 2.58 4.291 1.607 5.635.964 7.114.327 8.588 0 10.239 0 12.015c0 1.658.288 3.211.853 4.616.566 1.405 1.426 2.705 2.56 3.863 1.134 1.16 2.401 2.042 3.766 2.62 1.336.565 2.807.858 4.369.87h.05l.049.001c1.562-.013 3.033-.306 4.369-.871.73-.31 1.433-.707 2.103-1.187v1.455h4.875V4.496Z"/></symbol><symbol id="b" viewBox="0 0 57 24"><path d="M50.964 19.316c-1.018 1.009-3.495 1.405-5.282.251-1.06-.684-1.801-1.913-1.798-3.198l-4.559-.002c.498-1.335.75-2.798.75-4.352 0-.348-.012-.69-.037-1.028.3.376.651.721 1.058 1.022 2.495 1.833 5.65 1.726 8.405 2.867.644.267 1.283.619 1.705 1.186.86 1.159.806 2.215-.242 3.254Zm-29.007-7.299c0-3.814 2.328-7.51 6.521-7.51S35 8.204 35 12.018c0 10.1-13.042 10.096-13.042 0Zm-6.136-.003c-2.495-1.833-5.65-1.725-8.405-2.866-.645-.267-1.284-.62-1.705-1.187-.703-.946-.593-2.427.241-3.253 1.015-1.006 3.492-1.408 5.282-.252 1.06.685 1.802 1.914 1.798 3.198l4.596.002c-.494 1.333-.747 2.798-.747 4.359 0 .363.015.722.042 1.075a5.692 5.692 0 0 0-1.102-1.076ZM.194 9.548a5.733 5.733 0 0 0 1.9 2.466c2.495 1.833 5.65 1.725 8.405 2.867.645.267 1.284.618 1.705 1.186.703.946.593 2.427-.242 3.253-1.017 1.01-3.495 1.406-5.281.252-1.06-.685-1.802-1.913-1.798-3.198l-4.689-.002m0 2.278c.494 1.391 1.375 2.64 2.532 3.526 2.149 1.647 5.008 1.98 7.683 1.765 1.648-.132 3.317-.464 4.745-1.317 1.785-1.067 2.836-3.02 3.016-5.043a12.12 12.12 0 0 0 2.124 2.913c1.134 1.16 2.402 2.042 3.766 2.62 1.336.565 2.807.858 4.369.87v.001h.099c1.562-.013 3.033-.306 4.368-.871 1.365-.578 2.633-1.46 3.766-2.62a12.078 12.078 0 0 0 2.207-3.075c.337 1.872 1.37 3.612 2.858 4.753 2.15 1.647 5.008 1.98 7.683 1.765 2.078-.168 3.26-.43 4.746-1.318 3.62-2.163 4.22-7.975.666-10.61-2.495-1.832-5.65-1.725-8.405-2.866-.645-.267-1.284-.619-1.705-1.186-.702-.947-.592-2.427.242-3.254 1.015-1.006 3.492-1.408 5.282-.252 1.06.685 1.801 1.914 1.798 3.198l5.13.003c-.085-2.258-1.208-4.452-2.973-5.805C52.04.2 49.182-.133 46.508.082 44.86.215 43.19.547 41.762 1.4c-1.778 1.062-2.815 2.98-3.01 4.97-.625-1.188-1.473-2.28-2.533-3.26C33.898.987 31.334.015 28.51 0h-.066c-2.822.016-5.386.988-7.707 3.11-1.146 1.06-2.044 2.249-2.681 3.55-.327-1.893-1.365-3.656-2.868-4.808C13.04.205 10.181-.128 7.506.087 5.858.22 4.19.55 2.76 1.405 1.552 2.127.686 3.244.194 4.51"/></symbol><use href="#a" width="23"/><use href="#b" x="22.8" width="57"/></svg>
        </a>
    );
}

export default Logo;