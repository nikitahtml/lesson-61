import React from 'react';

interface CountryFormProps {
    countries: { name: string; alpha3Code: string }[];
    onSelect: (code: string) => void;
}

const CountryForm: React.FC<CountryFormProps> = ({ countries, onSelect }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
    };

    return (
        <div className="country-form">
            <h2>Выберите страну</h2>
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>Выберите страну</option>
                {countries.map(country => (
                    <option key={country.alpha3Code} value={country.alpha3Code}>
                        {country.name}
                    </option>
                ))}

            </select>

        </div>
    );
};

export default CountryForm;
