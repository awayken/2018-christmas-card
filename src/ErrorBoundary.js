import React, { Component } from 'react';
import './ErrorBoundary.css';

export function ProblemChild() {
    throw new Error('I am a problem!');
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <p className="error">
                    Ho Ho Hold up! Something went wrong. Sorry about that!
                </p>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
