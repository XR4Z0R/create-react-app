import React from "react";

import styles from "./App.module.css";

import logo from "%assets/images/logo.svg";


function App() {

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <img
                    alt="logo"
                    className={styles.appLogo}
                    src={logo}
                />
                <p>
                    { "Edit" }
                    <code>
                        { " src/App.js " }
                    </code>
                    { "and save to reload." }
                </p>
                <a
                    className={styles.appLink}
                    href="https://reactjs.org"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    { "Learn React" }
                </a>
            </header>
        </div>
    );

}

export default App;
