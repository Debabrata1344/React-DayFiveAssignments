import React, { use } from 'react';
import UserCard from './UserCard';

const Gallery = ({ usersPromise }) => {
    // Unwrapping the promise
    const users = use(usersPromise);

    return (
        <div style={gridStyle}>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px'
};

export default Gallery;