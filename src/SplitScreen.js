import React from 'react';
import './SplitScreen.css';

function SplitScreen({ header, children }) {
    if (!children || children.length === 0) {
        return null;
    }

    const firstChild = Array.isArray(children) ? children[0] : children;

    let otherChildrenScreen = null;
    if (children.length > 1) {
        otherChildrenScreen = (
            <div className="split__screen">{children.slice(1)}</div>
        );
    }

    return (
        <div className="split">
            {header}

            <div className="split__screens">
                <div className="split__screen">{firstChild}</div>
                {otherChildrenScreen}
            </div>
        </div>
    );
}

export default SplitScreen;
