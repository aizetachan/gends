import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'danger', 'success'],
            description: 'Visual variant of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the button',
        },
        isLoading: {
            control: 'boolean',
            description: 'Show loading spinner',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the button',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Make button full width',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
    },
};

// ===== VARIANTS =====
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Ghost Button',
        variant: 'ghost',
    },
};

export const Danger: Story = {
    args: {
        children: 'Delete',
        variant: 'danger',
    },
};

export const Success: Story = {
    args: {
        children: 'Approve',
        variant: 'success',
    },
};

// ===== ALL VARIANTS =====
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
        </div>
    ),
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

// ===== STATES =====
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
        </div>
    ),
};

// ===== LOADING =====
export const Loading: Story = {
    args: {
        children: 'Saving...',
        isLoading: true,
    },
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};

// ===== FULL WIDTH =====
export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

// ===== WITH ICONS =====
const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export const WithLeftIcon: Story = {
    args: {
        children: 'Add Item',
        leftIcon: <PlusIcon />,
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Continue',
        rightIcon: <ArrowRightIcon />,
    },
};

export const WithBothIcons: Story = {
    args: {
        children: 'Next Step',
        leftIcon: <PlusIcon />,
        rightIcon: <ArrowRightIcon />,
    },
};

// ===== ICON ONLY =====
export const IconOnly: Story = {
    args: {
        children: <PlusIcon />,
        iconOnly: true,
        'aria-label': 'Add item',
    },
};

// ===== ALL VARIANTS DISABLED =====
export const AllVariantsDisabled: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
            <Button variant="danger" disabled>Danger</Button>
            <Button variant="success" disabled>Success</Button>
        </div>
    ),
};

// ===== DARK THEME =====
export const DarkTheme: Story = {
    decorators: [
        (Story) => (
            <div data-theme="dark" style={{ padding: '24px', background: '#09090b' }}>
                <Story />
            </div>
        ),
    ],
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
        </div>
    ),
};

// ===== LIGHT THEME =====
export const LightTheme: Story = {
    decorators: [
        (Story) => (
            <div data-theme="light" style={{ padding: '24px', background: '#ffffff' }}>
                <Story />
            </div>
        ),
    ],
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
        </div>
    ),
};
