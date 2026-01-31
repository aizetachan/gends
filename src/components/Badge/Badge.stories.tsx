import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'success', 'error', 'warning', 'info'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        outlined: {
            control: 'boolean',
        },
        dot: {
            control: 'boolean',
        },
        removable: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        children: 'Badge',
    },
};

// ===== VARIANTS =====
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge variant="default">DEFAULT</Badge>
            <Badge variant="success">SUCCESS</Badge>
            <Badge variant="error">ERROR</Badge>
            <Badge variant="warning">WARNING</Badge>
            <Badge variant="info">INFO</Badge>
        </div>
    ),
};

// ===== SUCCESS =====
export const Success: Story = {
    args: {
        children: 'APPROVED',
        variant: 'success',
    },
};

// ===== ERROR =====
export const Error: Story = {
    args: {
        children: 'REJECTED',
        variant: 'error',
    },
};

// ===== WARNING =====
export const Warning: Story = {
    args: {
        children: 'PENDING',
        variant: 'warning',
    },
};

// ===== INFO =====
export const Info: Story = {
    args: {
        children: 'NEW',
        variant: 'info',
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge size="sm">SMALL</Badge>
            <Badge size="md">MEDIUM</Badge>
            <Badge size="lg">LARGE</Badge>
        </div>
    ),
};

// ===== OUTLINED =====
export const Outlined: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge variant="default" outlined>DEFAULT</Badge>
            <Badge variant="success" outlined>SUCCESS</Badge>
            <Badge variant="error" outlined>ERROR</Badge>
            <Badge variant="warning" outlined>WARNING</Badge>
            <Badge variant="info" outlined>INFO</Badge>
        </div>
    ),
};

// ===== WITH DOT =====
export const WithDot: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge variant="success" dot>APPROVED</Badge>
            <Badge variant="error" dot>FAILED</Badge>
            <Badge variant="warning" dot>PENDING</Badge>
        </div>
    ),
};

// ===== REMOVABLE =====
export const Removable: Story = {
    args: {
        children: 'Tag',
        variant: 'info',
        removable: true,
        onRemove: () => alert('Remove clicked!'),
    },
};

// ===== REMOVABLE TAGS =====
export const RemovableTags: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge variant="info" removable>React</Badge>
            <Badge variant="info" removable>TypeScript</Badge>
            <Badge variant="info" removable>CSS</Badge>
        </div>
    ),
};

// ===== STATUS EXAMPLES =====
export const StatusExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', width: '80px' }}>Order:</span>
                <Badge variant="success" dot>DELIVERED</Badge>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', width: '80px' }}>Payment:</span>
                <Badge variant="warning" dot>PENDING</Badge>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', width: '80px' }}>Review:</span>
                <Badge variant="error" dot>REJECTED</Badge>
            </div>
        </div>
    ),
};

// ===== OWNERSHIP BADGES =====
export const OwnershipBadges: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge variant="info" size="sm" outlined>OWN</Badge>
            <Badge variant="success" size="sm" outlined>COLAB</Badge>
            <Badge variant="warning" size="sm" outlined>VIEW</Badge>
        </div>
    ),
};
