import React, { useEffect, useState } from 'react';
import CountryForm from './components/CountryForm';
import CountryInfo from './components/CountryInfo';
import './App.css';

interface Country {
    name: string;
    alpha3Code: string;
}

const App: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all?fields=alpha3Code,name')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div className="container">
            <header className="header">
                <h1>Country Info App</h1>
            </header>
            <CountryForm countries={countries} onSelect={setSelectedCountry} />
            <CountryInfo countryCode={selectedCountry} />
            <footer className="footer">
                <p>© 2024 Country Info App</p>
            </footer>
        </div>
    );
};

export default App;
