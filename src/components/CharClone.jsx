import React, { Component } from 'react';

class CharClone extends Component {
    render() {
        return (
            <div className="inline-flex items-center bg-primary text-primary-foreground border border-base-300 rounded-full shadow-sm opacity-70 m-1">
                {/* Content */}
                <span className="px-3 py-1 text-xs font-medium text-primary-foreground">
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default CharClone;