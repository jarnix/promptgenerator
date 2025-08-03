import React, { Component } from 'react';

class Char extends Component {
    render() {
        return (
            <div
                className="inline-flex items-center bg-primary text-primary-foreground border border-base-300 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing m-1"
                ref={this.props.provided.innerRef}
                style={this.props.provided.draggableProps.style}
                {...this.props.provided.draggableProps}
                {...this.props.provided.dragHandleProps}
            >
                {/* Content */}
                <span className="px-3 py-1 text-xs font-medium text-primary-foreground">
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default Char;