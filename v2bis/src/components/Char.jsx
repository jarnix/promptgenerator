import React, { Component } from 'react';
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';
import './Char.css';


class Char extends Component {
    render() {
        return (
            <div
                className="badge badge-outline badge-lg gap-2 p-3 m-1 cursor-pointer hover:badge-primary transition-colors"
                ref={this.props.provided.innerRef}
                style={this.props.provided.draggableProps.style}
                {...this.props.provided.draggableProps}
            /*onClick={() => this.props.setCurrentCharIndex(this.props.charIndex)}*/
            >
                <div
                    {...this.props.provided.dragHandleProps}
                    className="cursor-grab active:cursor-grabbing"
                >
                    <ViewfinderCircleIcon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                </div>
                <span className="text-sm font-medium">
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default Char;