import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Icon
const InfoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        content: 'This is a tooltip',
        children: <Button>Hover me</Button>,
    },
};

// ===== POSITIONS =====
export const Positions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', padding: '60px' }}>
            <Tooltip content="Top tooltip" position="top">
                <Button variant="secondary">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" position="bottom">
                <Button variant="secondary">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" position="left">
                <Button variant="secondary">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" position="right">
                <Button variant="secondary">Right</Button>
            </Tooltip>
        </div>
    ),
};

// ===== ON ICON BUTTON =====
export const OnIconButton: Story = {
    render: () => (
        <Tooltip content="More information">
            <IconButton icon={<InfoIcon />} aria-label="Info" />
        </Tooltip>
    ),
};

// ===== MULTILINE =====
export const Multiline: Story = {
    args: {
        content: 'This is a longer tooltip message that wraps to multiple lines for more detailed information.',
        multiline: true,
        children: <Button>Hover for details</Button>,
    },
};

// ===== WITH DELAY =====
export const WithDelay: Story = {
    args: {
        content: 'This appears after 500ms',
        delay: 500,
        children: <Button>Hover and wait</Button>,
    },
};

// ===== KEYBOARD FOCUS =====
export const KeyboardFocus: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Tooltip content="Press Tab to see this">
                <Button>Focus me</Button>
            </Tooltip>
        </div>
    ),
};

// ===== PRACTICAL EXAMPLE =====
export const PracticalExample: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Tooltip content="Edit">
                <IconButton
                    icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    }
                    aria-label="Edit"
                />
            </Tooltip>
            <Tooltip content="Delete">
                <IconButton
                    variant="danger"
                    icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                    }
                    aria-label="Delete"
                />
            </Tooltip>
            <Tooltip content="Share">
                <IconButton
                    icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                    }
                    aria-label="Share"
                />
            </Tooltip>
        </div>
    ),
};
