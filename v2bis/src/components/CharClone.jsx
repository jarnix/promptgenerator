import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Char from './Char.jsx';
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';
import './Char.css';


// border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #000')};


class CharClone extends Component {

    /*
     <Item
        innerRef={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        isDragging={snapshot.isDragging}
        style={
            provided.draggableProps
                .style
        }>
        {item.content}
    </Item>
    
    */

    render() {
        return (
            <div className="badge badge-error badge-lg gap-2 p-3 opacity-70">
                <ViewfinderCircleIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium">{this.props.children}</span>
            </div>
        );
    }
}

export default CharClone;