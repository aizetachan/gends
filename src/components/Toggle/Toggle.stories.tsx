import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        checked: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        labelLeft: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        label: 'Enable notifications',
    },
};

// ===== CHECKED =====
export const Checked: Story = {
    args: {
        label: 'Enabled',
        checked: true,
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle size="sm" label="Small toggle" />
            <Toggle size="md" label="Medium toggle (default)" />
            <Toggle size="lg" label="Large toggle" />
        </div>
    ),
};

// ===== STATES =====
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle label="Off" />
            <Toggle label="On" checked />
            <Toggle label="Disabled off" disabled />
            <Toggle label="Disabled on" checked disabled />
        </div>
    ),
};

// ===== LABEL POSITION =====
export const LabelPosition: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle label="Label on right (default)" />
            <Toggle label="Label on left" labelLeft />
        </div>
    ),
};

// ===== WITHOUT LABEL =====
export const WithoutLabel: Story = {
    args: {},
};

// ===== CONTROLLED =====
const ControlledToggle = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Toggle
            label={checked ? 'Enabled' : 'Disabled'}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    );
};

export const Controlled: Story = {
    render: () => <ControlledToggle />,
};

// ===== SETTINGS EXAMPLE =====
export const SettingsExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Dark mode</span>
                <Toggle checked />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Notifications</span>
                <Toggle />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-primary)', fontSize: '14px' }}>Auto-save</span>
                <Toggle checked />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--sg-color-text-muted)', fontSize: '14px' }}>Beta features</span>
                <Toggle disabled />
            </div>
        </div>
    ),
};
