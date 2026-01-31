import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FolderCard } from './FolderCard';

const meta: Meta<typeof FolderCard> = {
    title: 'Components/FolderCard',
    component: FolderCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        color: {
            control: 'select',
            options: ['default', 'blue', 'green', 'purple', 'orange', 'red', 'yellow', 'pink'],
        },
        view: {
            control: 'select',
            options: ['list', 'grid'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof FolderCard>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        name: 'Documents',
        itemCount: 24,
        onMenuClick: () => console.log('Menu clicked'),
    },
};

// ===== COLORS =====
export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
            <FolderCard name="Default" itemCount={12} color="default" onMenuClick={() => { }} />
            <FolderCard name="Blue" itemCount={8} color="blue" onMenuClick={() => { }} />
            <FolderCard name="Green" itemCount={5} color="green" onMenuClick={() => { }} />
            <FolderCard name="Purple" itemCount={18} color="purple" onMenuClick={() => { }} />
            <FolderCard name="Orange" itemCount={3} color="orange" onMenuClick={() => { }} />
            <FolderCard name="Red" itemCount={7} color="red" onMenuClick={() => { }} />
            <FolderCard name="Yellow" itemCount={15} color="yellow" onMenuClick={() => { }} />
            <FolderCard name="Pink" itemCount={9} color="pink" onMenuClick={() => { }} />
        </div>
    ),
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
            <FolderCard name="Small Folder" itemCount={5} size="sm" onMenuClick={() => { }} />
            <FolderCard name="Medium Folder" itemCount={12} size="md" onMenuClick={() => { }} />
            <FolderCard name="Large Folder" itemCount={24} size="lg" onMenuClick={() => { }} />
        </div>
    ),
};

// ===== SELECTED =====
export const Selected: Story = {
    args: {
        name: 'Selected Folder',
        itemCount: 15,
        selected: true,
        color: 'blue',
        onMenuClick: () => { },
    },
};

// ===== GRID VIEW =====
export const GridView: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            <FolderCard name="Documents" itemCount={24} view="grid" color="blue" onMenuClick={() => { }} />
            <FolderCard name="Images" itemCount={156} view="grid" color="green" onMenuClick={() => { }} />
            <FolderCard name="Projects" itemCount={8} view="grid" color="purple" onMenuClick={() => { }} />
            <FolderCard name="Downloads" itemCount={42} view="grid" color="orange" onMenuClick={() => { }} />
            <FolderCard name="Archive" itemCount={89} view="grid" color="yellow" onMenuClick={() => { }} />
            <FolderCard name="Trash" itemCount={3} view="grid" color="red" onMenuClick={() => { }} />
        </div>
    ),
};

// ===== FILE EXPLORER EXAMPLE =====
export const FileExplorerExample: Story = {
    render: () => {
        const [selectedId, setSelectedId] = useState<string | null>(null);

        const folders = [
            { id: '1', name: 'Documents', count: 24, color: 'blue' as const },
            { id: '2', name: 'Design Assets', count: 156, color: 'purple' as const },
            { id: '3', name: 'Projects', count: 8, color: 'green' as const },
            { id: '4', name: 'Shared', count: 42, color: 'orange' as const },
        ];

        return (
            <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {folders.map((folder) => (
                    <FolderCard
                        key={folder.id}
                        name={folder.name}
                        itemCount={folder.count}
                        color={folder.color}
                        selected={selectedId === folder.id}
                        onClick={() => setSelectedId(folder.id)}
                        onDoubleClick={() => console.log('Opening', folder.name)}
                        onMenuClick={() => console.log('Menu for', folder.name)}
                    />
                ))}
            </div>
        );
    },
};
