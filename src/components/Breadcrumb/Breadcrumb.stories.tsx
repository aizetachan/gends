import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Icons
const HomeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const FolderIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Projects', href: '/projects' },
            { label: 'Design System' },
        ],
    },
};

// ===== WITH ICONS =====
export const WithIcons: Story = {
    args: {
        items: [
            { label: 'Home', href: '/', icon: <HomeIcon /> },
            { label: 'Documents', href: '/documents', icon: <FolderIcon /> },
            { label: 'Report.pdf' },
        ],
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Breadcrumb
                size="sm"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects' },
                ]}
            />
            <Breadcrumb
                size="md"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects' },
                ]}
            />
            <Breadcrumb
                size="lg"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects' },
                ]}
            />
        </div>
    ),
};

// ===== TRUNCATED =====
export const Truncated: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Documents', href: '/documents' },
            { label: 'Projects', href: '/projects' },
            { label: 'Archive', href: '/archive' },
            { label: 'Q4 2024', href: '/q4' },
            { label: 'Final Report' },
        ],
        maxItems: 3,
    },
};

// ===== CUSTOM SEPARATOR =====
export const CustomSeparator: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Projects', href: '/projects' },
            { label: 'Current' },
        ],
        separator: <span style={{ color: 'var(--sg-color-text-muted)' }}>/</span>,
    },
};

// ===== WITH CLICK HANDLERS =====
export const WithClickHandlers: Story = {
    args: {
        items: [
            { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
            { label: 'Settings', onClick: () => alert('Settings clicked') },
            { label: 'Profile' },
        ],
    },
};

// ===== FILE BROWSER EXAMPLE =====
export const FileBrowserExample: Story = {
    render: () => (
        <div style={{
            padding: '16px',
            background: 'var(--sg-color-bg-secondary)',
            borderRadius: '8px',
            border: '1px solid var(--sg-color-border-default)'
        }}>
            <Breadcrumb
                size="sm"
                items={[
                    { label: 'My Drive', href: '/', icon: <HomeIcon /> },
                    { label: 'Work', href: '/work', icon: <FolderIcon /> },
                    { label: 'Designs', href: '/designs', icon: <FolderIcon /> },
                    { label: 'UI Kit v2' },
                ]}
            />
        </div>
    ),
};
