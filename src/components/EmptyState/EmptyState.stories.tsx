import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button';

const meta: Meta<typeof EmptyState> = {
    title: 'Components/EmptyState',
    component: EmptyState,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// Icons
const FileIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15h6" />
    </svg>
);

const FolderIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
);

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
    </svg>
);

const InboxIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        icon: <FileIcon />,
        title: 'No files yet',
        description: 'Upload your first file to get started.',
        actions: <Button>Upload File</Button>,
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <EmptyState
                size="sm"
                icon={<FileIcon />}
                title="No files"
                description="Upload a file to get started."
                actions={<Button size="sm">Upload</Button>}
            />
            <EmptyState
                size="md"
                icon={<FileIcon />}
                title="No files yet"
                description="Upload your first file to get started with your project."
                actions={<Button>Upload File</Button>}
            />
            <EmptyState
                size="lg"
                icon={<FileIcon />}
                title="No files in your workspace"
                description="Get started by uploading your first file. You can upload images, documents, and more."
                actions={<Button size="lg">Upload File</Button>}
            />
        </div>
    ),
};

// ===== NO RESULTS =====
export const NoResults: Story = {
    args: {
        icon: <SearchIcon />,
        title: 'No results found',
        description: 'Try adjusting your search or filter to find what you\'re looking for.',
        actions: <Button variant="secondary">Clear Filters</Button>,
    },
};

// ===== EMPTY FOLDER =====
export const EmptyFolder: Story = {
    args: {
        icon: <FolderIcon />,
        title: 'This folder is empty',
        description: 'Add files to this folder to organize your work.',
        actions: (
            <>
                <Button variant="secondary">Create Subfolder</Button>
                <Button>Add Files</Button>
            </>
        ),
    },
};

// ===== EMPTY INBOX =====
export const EmptyInbox: Story = {
    args: {
        icon: <InboxIcon />,
        title: 'Inbox zero!',
        description: 'Great job! You\'ve processed all your notifications.',
    },
};

// ===== WITHOUT ICON =====
export const WithoutIcon: Story = {
    args: {
        title: 'No data available',
        description: 'There\'s nothing to show here at the moment.',
    },
};

// ===== IN CARD =====
export const InCard: Story = {
    render: () => (
        <div style={{
            width: '400px',
            background: 'var(--sg-color-bg-secondary)',
            border: '1px solid var(--sg-color-border-default)',
            borderRadius: '12px'
        }}>
            <EmptyState
                size="sm"
                icon={<FileIcon />}
                title="No recent files"
                description="Files you work on will appear here."
                actions={<Button size="sm">Browse Files</Button>}
            />
        </div>
    ),
};
