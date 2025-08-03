import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
    MagnifyingGlassIcon,
    ShareIcon,
    ClipboardDocumentIcon,
    PencilIcon
} from '@heroicons/react/24/outline';
import {
    generalBlocks,
    gitBlocks,
    ponctuationCharacters,
    boxDrawingCharacters,
    blockElements,
    emoji
} from './elements.jsx';

import Char from './Char.jsx';
import CharClone from './CharClone.jsx';

// Utility functions for drag and drop
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];
    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
};

const remove = (droppableElements, indexToRemove) => {
    const droppableElementsClone = Array.from(droppableElements);
    droppableElementsClone.splice(indexToRemove, 1);
    return droppableElementsClone;
};

// Import and organize block categories from elements.jsx
const BLOCK_CATEGORIES = {
    general: generalBlocks,
    punctuation: ponctuationCharacters,
    git: gitBlocks,
    boxDrawing: boxDrawingCharacters,
    blockElements: blockElements,
    emoji: emoji,

};

class App extends Component {
    state = {
        activeCategory: 'general',
        activeTool: 'prompt', // 'prompt' or 'window'
        workspace: [],
        searchTerm: '',
    };

    setActiveCategory = (category) => {
        this.setState({ activeCategory: category });
    };

    setActiveTool = (tool) => {
        this.setState({ activeTool: tool });
    };

    onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === 'blocks' && destination.droppableId === 'workspace') {
            const category = this.state.activeCategory;
            const blocks = BLOCK_CATEGORIES[category];
            const newWorkspace = copy(blocks, this.state.workspace, source, destination);
            this.setState({ workspace: newWorkspace });
        } else if (source.droppableId === 'workspace' && destination.droppableId === 'workspace') {
            const reorderedWorkspace = reorder(this.state.workspace, source.index, destination.index);
            this.setState({ workspace: reorderedWorkspace });
        } else if (destination.droppableId === 'trash') {
            const newWorkspace = remove(this.state.workspace, source.index);
            this.setState({ workspace: newWorkspace });
        }
    };

    generatePreview = () => {
        if (this.state.workspace.length === 0) return 'Drop blocks to see preview...';

        return this.state.workspace.map(block => {
            // Handle both formats: elements.jsx format and the simple format
            if (block.html) {
                return block.html;
            } else if (block.emoji && block.emoji !== block.desc) {
                return `${block.desc} ${block.emoji}`;
            }
            return block.desc;
        }).join(' ');
    };

    generateCode = () => {
        if (this.state.workspace.length === 0) return '';

        const codes = this.state.workspace.map(block => block.code).join(' ');
        return `PS1="${codes} \\$ "`;
    };

    copyToClipboard = () => {
        const code = this.generateCode();
        navigator.clipboard.writeText(code);
    };

    render() {
        const currentBlocks = BLOCK_CATEGORIES[this.state.activeCategory] || [];

        return (
            <div className="min-h-screen bg-base-200" data-theme="night">
                {/* Header */}
                <div className="navbar bg-base-100 shadow-lg">
                    <div className="navbar-start">
                        <h1 className="text-xl font-bold">🐧 PromptGen</h1>
                    </div>

                    <div className="navbar-center">
                        <div className="tabs tabs-boxed">
                            <button
                                className={`tab ${this.state.activeTool === 'prompt' ? 'tab-active' : ''}`}
                                onClick={() => this.setActiveTool('prompt')}
                            >
                                Prompt
                            </button>
                            <button
                                className={`tab ${this.state.activeTool === 'window' ? 'tab-active' : ''}`}
                                onClick={() => this.setActiveTool('window')}
                            >
                                Window Title
                            </button>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-sm">
                            <ShareIcon className="w-4 h-4 mr-2" />
                            Share: prompt...
                        </button>
                    </div>
                </div>

                <div className="container mx-auto p-6 space-y-6">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {/* Blocks Library */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="card-title text-2xl">BLOCKS LIBRARY</h2>
                                    <div className="form-control">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                placeholder="Search blocks..."
                                                className="input input-bordered input-sm"
                                                value={this.state.searchTerm}
                                                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                                            />
                                            <button className="btn btn-square btn-sm">
                                                <MagnifyingGlassIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Category Tabs */}
                                <div className="tabs tabs-bordered mb-4">
                                    {Object.keys(BLOCK_CATEGORIES).map(category => (
                                        <button
                                            key={category}
                                            className={`tab tab-lg ${this.state.activeCategory === category ? 'tab-active' : ''}`}
                                            onClick={() => this.setActiveCategory(category)}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </button>
                                    ))}
                                </div>

                                {/* Blocks Grid */}
                                <Droppable droppableId="blocks" isDropDisabled={true}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3"
                                        >
                                            {currentBlocks.map((block, index) => (
                                                <Draggable key={block.id} draggableId={block.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div>
                                                            <Char
                                                                provided={provided}
                                                                isDragging={snapshot.isDragging}
                                                            >
                                                                {block.desc}
                                                            </Char>
                                                            {snapshot.isDragging && (
                                                                <CharClone>
                                                                    {block.desc}
                                                                </CharClone>
                                                            )}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>

                        {/* Workspace / Drop Zone */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl">DROP ZONE / WORKSPACE</h2>

                                <Droppable droppableId="workspace">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className={`min-h-32 p-6 border-2 border-dashed rounded-lg transition-colors ${snapshot.isDraggingOver
                                                ? 'border-primary bg-primary/10'
                                                : 'border-base-300 bg-base-50'
                                                }`}
                                        >
                                            {this.state.workspace.length === 0 ? (
                                                <div className="text-center text-base-content/50 py-8">
                                                    Drop blocks here or reorder existing ones
                                                </div>
                                            ) : (
                                                <div className="flex flex-wrap gap-2">
                                                    {this.state.workspace.map((block, index) => (
                                                        <Draggable key={block.id} draggableId={block.id} index={index}>
                                                            {(provided) => (
                                                                <div className="flex items-center gap-1">
                                                                    <Char provided={provided}>
                                                                        {block.desc}
                                                                    </Char>
                                                                    <button className="btn btn-xs btn-ghost">
                                                                        <PencilIcon className="w-3 h-3" />
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                </div>
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>

                                {/* Trash Zone */}
                                <Droppable droppableId="trash">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center transition-colors ${snapshot.isDraggingOver
                                                ? 'border-error bg-error/10 text-error'
                                                : 'border-base-300 text-base-content/50'
                                                }`}
                                        >
                                            🗑️ Drop here to remove
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>

                        {/* Live Preview */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl">LIVE PREVIEW</h2>
                                <div className="mockup-code">
                                    <pre className="text-success">
                                        <code>{this.generatePreview()}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Generated Output */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title text-2xl">GENERATED OUTPUT</h2>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={this.copyToClipboard}
                                        disabled={!this.generateCode()}
                                    >
                                        <ClipboardDocumentIcon className="w-4 h-4 mr-2" />
                                        Copy
                                    </button>
                                </div>
                                <div className="mockup-code">
                                    <pre>
                                        <code>{this.generateCode() || 'Add blocks to generate code...'}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Examples */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl">EXAMPLES</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                    <button className="btn btn-outline btn-sm">Minimal</button>
                                    <button className="btn btn-outline btn-sm">Powerline</button>
                                    <button className="btn btn-outline btn-sm">Nerd Font</button>
                                    <button className="btn btn-outline btn-sm">Matrix</button>
                                    <button className="btn btn-outline btn-sm">Cyberpunk</button>
                                    <button className="btn btn-outline btn-sm">More</button>
                                </div>
                            </div>
                        </div>
                    </DragDropContext>
                </div>
            </div>
        );
    }
}

export default App;