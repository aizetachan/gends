import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel } from './Dropdown';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        position: {
            control: 'select',
            options: ['top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'right-start'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Icons
const EditIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

const CopyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

const TrashIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
);

const MoreIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
    </svg>
);

const ShareIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    render: () => (
        <Dropdown trigger={<Button>Open Menu</Button>}>
            <DropdownItem icon={<EditIcon />}>Edit</DropdownItem>
            <DropdownItem icon={<CopyIcon />}>Duplicate</DropdownItem>
            <DropdownSeparator />
            <DropdownItem icon={<TrashIcon />} danger>Delete</DropdownItem>
        </Dropdown>
    ),
};

// ===== WITH SHORTCUTS =====
export const WithShortcuts: Story = {
    render: () => (
        <Dropdown trigger={<Button variant="secondary">Actions</Button>}>
            <DropdownItem icon={<EditIcon />} shortcut="⌘E">Edit</DropdownItem>
            <DropdownItem icon={<CopyIcon />} shortcut="⌘D">Duplicate</DropdownItem>
            <DropdownItem icon={<ShareIcon />} shortcut="⌘S">Share</DropdownItem>
            <DropdownSeparator />
            <DropdownItem icon={<TrashIcon />} shortcut="⌫" danger>Delete</DropdownItem>
        </Dropdown>
    ),
};

// ===== WITH LABELS =====
export const WithLabels: Story = {
    render: () => (
        <Dropdown trigger={<Button variant="secondary">Options</Button>}>
            <DropdownLabel>Actions</DropdownLabel>
            <DropdownItem>View Details</DropdownItem>
            <DropdownItem>Edit Item</DropdownItem>
            <DropdownSeparator />
            <DropdownLabel>Export</DropdownLabel>
            <DropdownItem>Export as PDF</DropdownItem>
            <DropdownItem>Export as CSV</DropdownItem>
        </Dropdown>
    ),
};

// ===== ICON BUTTON TRIGGER =====
export const IconButtonTrigger: Story = {
    render: () => (
        <Dropdown
            trigger={<IconButton icon={<MoreIcon />} aria-label="More options" />}
            position="bottom-end"
        >
            <DropdownItem icon={<EditIcon />}>Edit</DropdownItem>
            <DropdownItem icon={<CopyIcon />}>Duplicate</DropdownItem>
            <DropdownItem icon={<ShareIcon />}>Share</DropdownItem>
            <DropdownSeparator />
            <DropdownItem icon={<TrashIcon />} danger>Delete</DropdownItem>
        </Dropdown>
    ),
};

// ===== POSITIONS =====
export const Positions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', padding: '80px' }}>
            <Dropdown trigger={<Button size="sm">Bottom Start</Button>} position="bottom-start">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
            <Dropdown trigger={<Button size="sm">Bottom End</Button>} position="bottom-end">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
            <Dropdown trigger={<Button size="sm">Top Start</Button>} position="top-start">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
        </div>
    ),
};

// ===== DISABLED ITEMS =====
export const DisabledItems: Story = {
    render: () => (
        <Dropdown trigger={<Button>Options</Button>}>
            <DropdownItem>Available Action</DropdownItem>
            <DropdownItem disabled>Disabled Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
        </Dropdown>
    ),
};

// ===== FILE MENU EXAMPLE =====
export const FileMenuExample: Story = {
    render: () => (
        <div style={{
            padding: '16px',
            background: 'var(--sg-color-bg-secondary)',
            borderRadius: '8px',
            display: 'flex',
            gap: '8px'
        }}>
            <Dropdown trigger={<Button variant="ghost" size="sm">File</Button>}>
                <DropdownItem shortcut="⌘N">New File</DropdownItem>
                <DropdownItem shortcut="⌘O">Open...</DropdownItem>
                <DropdownSeparator />
                <DropdownItem shortcut="⌘S">Save</DropdownItem>
                <DropdownItem shortcut="⇧⌘S">Save As...</DropdownItem>
                <DropdownSeparator />
                <DropdownItem>Export</DropdownItem>
            </Dropdown>
            <Dropdown trigger={<Button variant="ghost" size="sm">Edit</Button>}>
                <DropdownItem shortcut="⌘Z">Undo</DropdownItem>
                <DropdownItem shortcut="⇧⌘Z">Redo</DropdownItem>
                <DropdownSeparator />
                <DropdownItem shortcut="⌘X">Cut</DropdownItem>
                <DropdownItem shortcut="⌘C">Copy</DropdownItem>
                <DropdownItem shortcut="⌘V">Paste</DropdownItem>
            </Dropdown>
        </div>
    ),
};
