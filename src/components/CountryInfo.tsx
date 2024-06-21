import React, { useEffect, useState } from 'react';

interface CountryInfoProps {
    countryCode: string | null;
}

interface Country {
    name: string;
    capital: string;
    region: string;
    population: number;
    borders: string[];
    flag: string;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ countryCode }) => {
    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        if (countryCode) {
            fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                .then(response => response.json())
                .then(data => setCountry(data))
                .catch(error => console.error('Error fetching country info:', error));
        }
    }, [countryCode]);

    if (!countryCode) {
        return <div className="country-info">Выберите страну</div>;
    }

    if (!country) {
        return <div className="country-info">Загрузка...</div>;
    }

    const bordersText = country.borders && country.borders.length > 0 ? country.borders.join(', ') : 'Нет граничащих стран';

    return (
        <div className="country-info">
            <h3>{country.name}</h3>
            <img src={country.flag} alt={`Flag of ${country.name}`} width="200" />
            <p><strong>Столица:</strong> {country.capital}</p>
            <p><strong>Регион:</strong> {country.region}</p>
            <p><strong>Население:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Граничащие страны:</strong> {bordersText}</p>
        </div>
    );
};

export default CountryInfo;