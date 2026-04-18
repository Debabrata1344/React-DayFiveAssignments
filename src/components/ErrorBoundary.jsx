import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={errorContainer}>
                    <h2>⚠️ Gallery Error</h2>
                    <p>{this.state.error?.message || "Could not load users."}</p>
                    <button onClick={() => window.location.reload()} style={btnStyle}>
                        Try Again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

const errorContainer = { padding: '40px', textAlign: 'center', background: '#fff5f5', borderRadius: '12px', border: '1px solid #feb2b2', margin: '20px' };
const btnStyle = { padding: '10px 20px', background: '#e53e3e', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default ErrorBoundary;