import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="./foxcodes_icon.png" className="App-logo" alt="logo" />
                <p>
                    Fionn Sperath | fsperath | FoxCodes
                </p>
                <div>
                    <a
                        href="https://github.com/FoxCodesDE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a> {" | "}
                    <a
                        href="https://twitter.com/fsperath"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>{" | "}
                    <a
                        href="https://gitlab.com/FoxCodesDE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitLab
                    </a>
                </div>
            </header>
        </div>
    );
}

export default App;
