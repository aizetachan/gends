import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

// Icons for stories
const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

const MenuIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const PlusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" />
    </svg>
);

const TrashIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
);

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'ghost', 'filled', 'danger'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        shape: {
            control: 'select',
            options: ['circular', 'square'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        icon: <CloseIcon />,
        'aria-label': 'Close',
    },
};

// ===== VARIANTS =====
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <IconButton icon={<MenuIcon />} variant="default" aria-label="Menu" />
            <IconButton icon={<MenuIcon />} variant="ghost" aria-label="Menu" />
            <IconButton icon={<MenuIcon />} variant="filled" aria-label="Menu" />
            <IconButton icon={<TrashIcon />} variant="danger" aria-label="Delete" />
        </div>
    ),
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <IconButton icon={<PlusIcon />} size="xs" aria-label="Add" />
            <IconButton icon={<PlusIcon />} size="sm" aria-label="Add" />
            <IconButton icon={<PlusIcon />} size="md" aria-label="Add" />
            <IconButton icon={<PlusIcon />} size="lg" aria-label="Add" />
        </div>
    ),
};

// ===== SHAPES =====
export const Shapes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <IconButton icon={<PlusIcon />} shape="square" variant="filled" aria-label="Add" />
            <IconButton icon={<PlusIcon />} shape="circular" variant="filled" aria-label="Add" />
        </div>
    ),
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        icon: <CloseIcon />,
        'aria-label': 'Close',
        disabled: true,
    },
};

// ===== DANGER =====
export const Danger: Story = {
    args: {
        icon: <TrashIcon />,
        variant: 'danger',
        'aria-label': 'Delete',
    },
};

// ===== ALL COMBINATIONS =====
export const AllCombinations: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '8px', fontSize: '12px' }}>Default Variant</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <IconButton icon={<PlusIcon />} variant="default" size="xs" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="default" size="sm" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="default" size="md" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="default" size="lg" aria-label="Add" />
                </div>
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '8px', fontSize: '12px' }}>Filled Variant</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <IconButton icon={<PlusIcon />} variant="filled" size="xs" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="filled" size="sm" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="filled" size="md" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="filled" size="lg" aria-label="Add" />
                </div>
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '8px', fontSize: '12px' }}>Circular Shape</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <IconButton icon={<PlusIcon />} variant="filled" shape="circular" size="xs" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="filled" shape="circular" size="sm" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="filled" shape="circular" size="md" aria-label="Add" />
                    <IconButton icon={<PlusIcon />} variant="filled" shape="circular" size="lg" aria-label="Add" />
                </div>
            </div>
        </div>
    ),
};
