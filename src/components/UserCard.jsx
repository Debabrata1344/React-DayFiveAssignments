import React from 'react';

const UserCard = ({ user }) => {
    if (!user) return null;

    const {
        name,
        username,
        email,
        phone,
        website,
        company,
        address,
    } = user;

    return (
        <div style={cardStyle}>
            <div style={avatarCircle}>
                <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`}
                    alt={`${name} avatar`}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            <h2 style={nameStyle}>{name}</h2>

            <div style={infoContainer}>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>Company:</strong> {company?.name || 'N/A'}</p>
                <p><strong>Department (BS):</strong> {company?.bs || 'N/A'}</p>
                <p><strong>City:</strong> {address?.city || 'N/A'}</p>
            </div>
        </div>
    );
};

const cardStyle = {
    background: '#f1f1f1',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const avatarCircle = {
    width: '100px',
    height: '100px',
    margin: '0 auto 15px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid white',
};

const nameStyle = {
    fontSize: '1.2rem',
    margin: '10px 0',
};

const infoContainer = {
    textAlign: 'left',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginTop: '15px',
};

export default UserCard;