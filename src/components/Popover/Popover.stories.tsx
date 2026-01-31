import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverFooter } from './Popover';
import { Button } from '../Button';
import { Input } from '../Input';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
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
type Story = StoryObj<typeof Popover>;

// ===== DEFAULT =====
export const Default: Story = {
    render: () => (
        <Popover trigger={<Button>Open Popover</Button>} title="Popover Title">
            <p style={{ margin: 0 }}>
                This is a popover with some content. You can put anything here.
            </p>
        </Popover>
    ),
};

// ===== POSITIONS =====
export const Positions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', padding: '120px' }}>
            <Popover trigger={<Button variant="secondary">Top</Button>} title="Top" position="top">
                <p style={{ margin: 0 }}>Popover on top</p>
            </Popover>
            <Popover trigger={<Button variant="secondary">Bottom</Button>} title="Bottom" position="bottom">
                <p style={{ margin: 0 }}>Popover on bottom</p>
            </Popover>
            <Popover trigger={<Button variant="secondary">Left</Button>} title="Left" position="left">
                <p style={{ margin: 0 }}>Popover on left</p>
            </Popover>
            <Popover trigger={<Button variant="secondary">Right</Button>} title="Right" position="right">
                <p style={{ margin: 0 }}>Popover on right</p>
            </Popover>
        </div>
    ),
};

// ===== WITHOUT ARROW =====
export const WithoutArrow: Story = {
    render: () => (
        <Popover
            trigger={<Button>No Arrow</Button>}
            title="Clean Look"
            showArrow={false}
        >
            <p style={{ margin: 0 }}>This popover has no arrow.</p>
        </Popover>
    ),
};

// ===== WITHOUT CLOSE BUTTON =====
export const WithoutCloseButton: Story = {
    render: () => (
        <Popover
            trigger={<Button>No Close</Button>}
            title="Info"
            showCloseButton={false}
        >
            <p style={{ margin: 0 }}>Click outside to close this popover.</p>
        </Popover>
    ),
};

// ===== WITH FOOTER =====
export const WithFooter: Story = {
    render: () => (
        <Popover trigger={<Button>With Actions</Button>} title="Confirm Action">
            <p style={{ margin: 0 }}>Are you sure you want to proceed with this action?</p>
            <PopoverFooter>
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button variant="primary" size="sm">Confirm</Button>
            </PopoverFooter>
        </Popover>
    ),
};

// ===== SHARE POPOVER EXAMPLE =====
export const ShareExample: Story = {
    render: () => (
        <Popover trigger={<Button>Share</Button>} title="Share this project">
            <Input
                label="Email address"
                placeholder="Enter email..."
                size="sm"
            />
            <PopoverFooter>
                <Button variant="secondary" size="sm">Copy Link</Button>
                <Button variant="primary" size="sm">Send Invite</Button>
            </PopoverFooter>
        </Popover>
    ),
};

// ===== INFO POPOVER EXAMPLE =====
export const InfoExample: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--sg-color-text-primary)' }}>Storage Used</span>
            <Popover
                trigger={
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '16px',
                            height: '16px',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--sg-color-text-muted)',
                            cursor: 'pointer',
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4M12 8h.01" />
                        </svg>
                    </button>
                }
                title="Storage Information"
                position="right"
            >
                <p style={{ margin: 0 }}>
                    Your current plan includes 10GB of storage.
                    You've used 7.5GB so far. Upgrade to get more space.
                </p>
                <PopoverFooter>
                    <Button variant="primary" size="sm">Upgrade Plan</Button>
                </PopoverFooter>
            </Popover>
        </div>
    ),
};
