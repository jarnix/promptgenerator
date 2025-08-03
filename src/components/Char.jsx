import React, { Component } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

class Char extends Component {
    render() {
        return (
            <div
                className="flex items-center bg-base-100 border border-base-300 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer m-1 overflow-hidden"
                ref={this.props.provided.innerRef}
                style={this.props.provided.draggableProps.style}
                {...this.props.provided.draggableProps}
            >
                {/* Cross Handle */}
                <div
                    {...this.props.provided.dragHandleProps}
                    className="bg-base-content text-base-100 p-2 cursor-grab active:cursor-grabbing flex-shrink-0"
                >
                    <PlusIcon className="w-3 h-3 rotate-45" />
                </div>
                {/* Content */}
                <span className="px-3 py-2 text-sm font-medium text-base-content flex-1 text-center">
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default Char;