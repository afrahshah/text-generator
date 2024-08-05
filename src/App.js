import React, { useState } from 'react';
import './App.css';

function App() {
    const [length, setLength] = useState(100);
    const [temperature, setTemperature] = useState(0.5);
    const [generatedText, setGeneratedText] = useState('');

    const handleGenerate = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ length, temperature }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setGeneratedText(data.text);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div className="App">
            <h1>Text Generator</h1>
            <div>
                <label>Length:</label>
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Temperature:</label>
                <input
                    type="number"
                    step="0.01"
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                />
            </div>
            <button onClick={handleGenerate}>Generate Text</button>
            <div className="output-box">
                {generatedText}
            </div>
        </div>
    );
}

export default App;

