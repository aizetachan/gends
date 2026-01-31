import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
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
        error: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Radio>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        label: 'Option',
        name: 'default',
    },
};

// ===== CHECKED =====
export const Checked: Story = {
    args: {
        label: 'Selected option',
        name: 'checked',
        checked: true,
    },
};

// ===== WITH DESCRIPTION =====
export const WithDescription: Story = {
    args: {
        label: 'Premium Plan',
        description: 'Best for large teams with advanced needs',
        name: 'plan',
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Radio size="sm" label="Small radio" name="size-demo" value="sm" />
            <Radio size="md" label="Medium radio (default)" name="size-demo" value="md" />
            <Radio size="lg" label="Large radio" name="size-demo" value="lg" />
        </div>
    ),
};

// ===== STATES =====
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Radio label="Unchecked" name="states1" />
            <Radio label="Checked" name="states2" checked />
            <Radio label="Disabled unchecked" name="states3" disabled />
            <Radio label="Disabled checked" name="states4" checked disabled />
            <Radio label="Error state" name="states5" error />
        </div>
    ),
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        label: 'Disabled option',
        name: 'disabled',
        disabled: true,
    },
};

// ===== RADIO GROUP =====
const ControlledRadioGroup = () => {
    const [selected, setSelected] = useState('medium');

    return (
        <RadioGroup label="Select size">
            <Radio
                name="size"
                value="small"
                label="Small"
                checked={selected === 'small'}
                onChange={() => setSelected('small')}
            />
            <Radio
                name="size"
                value="medium"
                label="Medium"
                checked={selected === 'medium'}
                onChange={() => setSelected('medium')}
            />
            <Radio
                name="size"
                value="large"
                label="Large"
                checked={selected === 'large'}
                onChange={() => setSelected('large')}
            />
        </RadioGroup>
    );
};

export const Group: Story = {
    render: () => <ControlledRadioGroup />,
};

// ===== HORIZONTAL GROUP =====
const HorizontalRadioGroup = () => {
    const [selected, setSelected] = useState('light');

    return (
        <RadioGroup label="Theme" horizontal>
            <Radio
                name="theme"
                value="light"
                label="Light"
                checked={selected === 'light'}
                onChange={() => setSelected('light')}
            />
            <Radio
                name="theme"
                value="dark"
                label="Dark"
                checked={selected === 'dark'}
                onChange={() => setSelected('dark')}
            />
            <Radio
                name="theme"
                value="system"
                label="System"
                checked={selected === 'system'}
                onChange={() => setSelected('system')}
            />
        </RadioGroup>
    );
};

export const HorizontalGroup: Story = {
    render: () => <HorizontalRadioGroup />,
};

// ===== PRICING EXAMPLE =====
const PricingExample = () => {
    const [plan, setPlan] = useState('pro');

    return (
        <RadioGroup label="Select a plan">
            <Radio
                name="plan"
                value="free"
                label="Free"
                description="Basic features for personal use"
                checked={plan === 'free'}
                onChange={() => setPlan('free')}
            />
            <Radio
                name="plan"
                value="pro"
                label="Pro"
                description="Advanced features for professionals"
                checked={plan === 'pro'}
                onChange={() => setPlan('pro')}
            />
            <Radio
                name="plan"
                value="team"
                label="Team"
                description="Collaboration features for teams"
                checked={plan === 'team'}
                onChange={() => setPlan('team')}
            />
            <Radio
                name="plan"
                value="enterprise"
                label="Enterprise"
                description="Custom solutions for large organizations"
                disabled
                checked={plan === 'enterprise'}
                onChange={() => setPlan('enterprise')}
            />
        </RadioGroup>
    );
};

export const PricingPlans: Story = {
    render: () => <PricingExample />,
};
