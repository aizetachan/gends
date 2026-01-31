import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
        },
        spacing: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {},
};

// ===== HORIZONTAL =====
export const Horizontal: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <p style={{ color: 'var(--sg-color-text-primary)' }}>Content above</p>
            <Divider />
            <p style={{ color: 'var(--sg-color-text-primary)' }}>Content below</p>
        </div>
    ),
};

// ===== VERTICAL =====
export const Vertical: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', height: '40px', gap: '16px' }}>
            <span style={{ color: 'var(--sg-color-text-primary)' }}>Left</span>
            <Divider orientation="vertical" spacing="none" />
            <span style={{ color: 'var(--sg-color-text-primary)' }}>Right</span>
        </div>
    ),
};

// ===== SPACING =====
export const Spacing: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px' }}>spacing="sm"</p>
            <Divider spacing="sm" />
            <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px' }}>spacing="md" (default)</p>
            <Divider spacing="md" />
            <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px' }}>spacing="lg"</p>
            <Divider spacing="lg" />
            <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px' }}>End</p>
        </div>
    ),
};

// ===== WITH LABEL =====
export const WithLabel: Story = {
    args: {
        label: 'OR',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

// ===== LOGIN EXAMPLE =====
export const LoginExample: Story = {
    render: () => (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button style={{
                padding: '10px',
                background: 'var(--sg-color-bg-secondary)',
                border: '1px solid var(--sg-color-border-default)',
                borderRadius: '8px',
                color: 'var(--sg-color-text-primary)',
                cursor: 'pointer'
            }}>
                Continue with Google
            </button>
            <Divider label="or continue with email" />
            <input
                type="email"
                placeholder="Email"
                style={{
                    padding: '10px',
                    background: 'var(--sg-color-bg-secondary)',
                    border: '1px solid var(--sg-color-border-default)',
                    borderRadius: '8px',
                    color: 'var(--sg-color-text-primary)',
                }}
            />
        </div>
    ),
};

// ===== IN MENU =====
export const InMenu: Story = {
    render: () => (
        <div style={{
            width: '200px',
            padding: '8px',
            background: 'var(--sg-color-bg-secondary)',
            border: '1px solid var(--sg-color-border-default)',
            borderRadius: '8px'
        }}>
            <div style={{ padding: '8px', color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Edit</div>
            <div style={{ padding: '8px', color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Duplicate</div>
            <Divider spacing="sm" />
            <div style={{ padding: '8px', color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Share</div>
            <div style={{ padding: '8px', color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Export</div>
            <Divider spacing="sm" />
            <div style={{ padding: '8px', color: 'var(--sg-color-error)', fontSize: '14px' }}>Delete</div>
        </div>
    ),
};
