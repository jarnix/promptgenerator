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
        workspace: [],
        searchTerm: '',
    };

    setActiveCategory = (category) => {
        this.setState({ activeCategory: category });
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
            <div className="min-h-screen bg-base-200">
                {/* Header */}
                <div className="container mx-auto px-6 pt-0 pb-6 space-y-6">
                    <div className="navbar shadow-lg navbar-gradient rounded-2xl">
                        <div className="navbar-center">
                            <h1 className="text-3xl font-bold text-white">🐧 PromptGen</h1>
                        </div>

                        <div className="navbar-end">
                            <a
                                href="https://github.com/yourusername/promptgenerator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-sm text-white hover:bg-white/20"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 space-y-6">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {/* Blocks Library */}
                        <div className="card bg-base-100 shadow-xl border-primary/30 rounded-2xl backdrop-blur-sm card-gradient">
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
                                <div className="tabs tabs-boxed bg-base-200/50 p-1 mb-6 rounded-2xl">
                                    {Object.keys(BLOCK_CATEGORIES).map(category => (
                                        <button
                                            key={category}
                                            className={`tab tab-lg font-medium transition-all duration-300 rounded-xl ${this.state.activeCategory === category
                                                ? 'tab-active bg-primary text-primary-content shadow-lg'
                                                : 'hover:bg-base-300/50 text-base-content/70'
                                                }`}
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
                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary/30 rounded-2xl backdrop-blur-sm card-gradient">
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary/30 rounded-2xl backdrop-blur-sm card-gradient">
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary/30 rounded-2xl backdrop-blur-sm card-gradient">
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
                        <div className="card bg-base-100 shadow-xl border-2 border-primary/30 rounded-2xl backdrop-blur-sm card-gradient">
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