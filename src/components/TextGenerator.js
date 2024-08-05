import React, { useState } from 'react';
import axios from 'axios';

const TextGenerator = () => {
    const [text, setText] = useState('');
    const [length, setLength] = useState(300);
    const [temperature, setTemperature] = useState(0.5);

    const generateText = async () => {
        try {
            const response = await axios.get('http://localhost:8001/generate', {
                params: { length, temperature }
            });
            setText(response.data.text);
        } catch (error) {
            console.error('Error generating text:', error);
        }
    };

    return (
        <div>
            <h1>Generated Text</h1>
            <textarea
                rows="10"
                cols="50"
                value={text}
                readOnly
            />
            <div>
                <button onClick={generateText}>Generate Text</button>
                <div>
                    <label>
                        Length:
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </label>
                    <label>
                        Temperature:
                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="1"
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TextGenerator;
