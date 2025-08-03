import React, { Component } from 'react';
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';

class CharClone extends Component {
    render() {
        return (
            <div className="badge badge-error badge-lg gap-2 p-3 opacity-70">
                <ViewfinderCircleIcon className="w-4 h-4 text-error flex-shrink-0" />
                <span className="text-sm font-medium">{this.props.children}</span>
            </div>
        );
    }
}

export default CharClone;