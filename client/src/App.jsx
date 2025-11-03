import React, { useEffect, useState } from 'react';
import Users from './components/Users';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch('/');
            const data = await response.json();
            setMessage(data.message);
        };

        fetchMessage();
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <Users />
        </div>
    );
};

export default App;