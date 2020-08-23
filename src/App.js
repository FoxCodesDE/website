import React from 'react';
import './App.css';

function legal(s) {
	switch (s) {
		case 'impressum':
			alert(`
Da es sich bei dieser Webpräsenz um ein nicht kommerzielles Projekt handelt, sind wir nach §5 TMG nicht verpflichtet ein Impressum zu führen.
        `);
			break;
		case 'links':
			alert(`
Haftung für Links

Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        `);
			break;
		case 'urheberrecht':
			alert(`
Urheberrecht

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            `);
			break;
		case 'datenschutz':
			alert(`
Datenschutz

Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
        `);
			break;
		default:
			break;
	}
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src="./foxcodes_icon.png" className="App-logo" alt="logo" />
				<p>Fionn Sperath | fsperath | FoxCodes | f94nn</p>
				<div>
					<a href="https://github.com/f94nn" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>{' '}
					{' | '}
					<a
						href="https://twitter.com/fsperath"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					{' | '}
					<a href="https://gitlab.com/f94nn" target="_blank" rel="noopener noreferrer">
						GitLab
					</a>
				</div>
				<div className="bottom">
					<a
						href="#."
						rel="noopener noreferrer"
						onClick={() => {
							legal('impressum');
						}}
						style={{ color: 'white' }}
					>
						Impressum
					</a>
					{' | '}
					<a
						href="#."
						rel="noopener noreferrer"
						onClick={() => {
							legal('links');
						}}
						style={{ color: 'white' }}
					>
						Haftung für Links
					</a>
					{' | '}
					<a
						href="#."
						rel="noopener noreferrer"
						onClick={() => {
							legal('urheberrecht');
						}}
						style={{ color: 'white' }}
					>
						Urheberrecht
					</a>
					{' | '}
					<a
						href="#."
						rel="noopener noreferrer"
						onClick={() => {
							legal('datenschutz');
						}}
						style={{ color: 'white' }}
					>
						Datenschutz
					</a>
				</div>
			</header>
		</div>
	);
}

export default App;
