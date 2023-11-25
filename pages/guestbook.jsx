import { useState, useEffect } from 'react';

const Home = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetch('/api/guestbook')
            .then((res) => res.json())
            .then((data) => setEntries(data));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('/api/guestbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, comment }),
        });
        setName('');
        setComment('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your Message"></textarea>
                <button type="submit">Submit</button>
            </form>

            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.name}</strong>: {entry.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
