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
                <div className="bottom">
                    Da es sich bei dieser Webpräsenz um ein nicht kommerzielles Projekt handelt, sind wir nach §5 TMG nicht verpflichtet ein Impressum zu führen.
                </div>
            </header>
        </div>
    );
}

export default App;
