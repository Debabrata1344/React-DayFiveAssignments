const UserSkeleton = () => (
    <div style={{ ...cardStyle, backgroundColor: '#eee', height: '350px', animate: 'pulse 1.5s infinite' }}>
        <div style={{ ...avatarCircle, backgroundColor: '#ddd' }}></div>
        <div style={{ height: '20px', background: '#ddd', margin: '10px 0' }}></div>
        <div style={{ height: '100px', background: '#ddd' }}></div>
    </div>
);

// Use this in your Suspense fallback!