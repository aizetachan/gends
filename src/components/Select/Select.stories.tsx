import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
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
    decorators: [
        (Story) => (
            <div style={{ width: '280px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
];

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        options: defaultOptions,
        placeholder: 'Select a framework',
    },
};

// ===== WITH LABEL =====
export const WithLabel: Story = {
    args: {
        options: defaultOptions,
        label: 'Framework',
        placeholder: 'Select a framework',
    },
};

// ===== REQUIRED =====
export const Required: Story = {
    args: {
        options: defaultOptions,
        label: 'Framework',
        placeholder: 'Select a framework',
        required: true,
    },
};

// ===== WITH HELPER TEXT =====
export const WithHelperText: Story = {
    args: {
        options: defaultOptions,
        label: 'Framework',
        placeholder: 'Select a framework',
        helperText: 'Choose your preferred frontend framework',
    },
};

// ===== WITH DEFAULT VALUE =====
export const WithDefaultValue: Story = {
    args: {
        options: defaultOptions,
        label: 'Framework',
        defaultValue: 'vue',
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select options={defaultOptions} size="sm" placeholder="Small" />
            <Select options={defaultOptions} size="md" placeholder="Medium (default)" />
            <Select options={defaultOptions} size="lg" placeholder="Large" />
        </div>
    ),
};

// ===== ERROR =====
export const Error: Story = {
    args: {
        options: defaultOptions,
        label: 'Framework',
        placeholder: 'Select a framework',
        errorMessage: 'Please select a framework',
    },
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        options: defaultOptions,
        label: 'Framework',
        placeholder: 'Select a framework',
        disabled: true,
    },
};

// ===== WITH DISABLED OPTIONS =====
export const WithDisabledOptions: Story = {
    args: {
        options: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue', disabled: true },
            { value: 'angular', label: 'Angular' },
            { value: 'svelte', label: 'Svelte', disabled: true },
        ],
        label: 'Framework',
        placeholder: 'Select a framework',
    },
};

// ===== CONTROLLED =====
const ControlledSelect = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <Select
                options={defaultOptions}
                value={value}
                onChange={setValue}
                label="Controlled Select"
                placeholder="Select a framework"
            />
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                Selected: {value || 'None'}
            </p>
        </div>
    );
};

export const Controlled: Story = {
    render: () => <ControlledSelect />,
};

// ===== COUNTRY EXAMPLE =====
export const CountryExample: Story = {
    args: {
        options: [
            { value: 'us', label: '🇺🇸 United States' },
            { value: 'uk', label: '🇬🇧 United Kingdom' },
            { value: 'es', label: '🇪🇸 Spain' },
            { value: 'fr', label: '🇫🇷 France' },
            { value: 'de', label: '🇩🇪 Germany' },
            { value: 'jp', label: '🇯🇵 Japan' },
        ],
        label: 'Country',
        placeholder: 'Select your country',
    },
};

// ===== FORM EXAMPLE =====
export const FormExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
                options={[
                    { value: 'personal', label: 'Personal' },
                    { value: 'business', label: 'Business' },
                    { value: 'enterprise', label: 'Enterprise' },
                ]}
                label="Account Type"
                required
            />
            <Select
                options={[
                    { value: 'free', label: 'Free - $0/mo' },
                    { value: 'pro', label: 'Pro - $9/mo' },
                    { value: 'team', label: 'Team - $29/mo' },
                ]}
                label="Plan"
                helperText="You can change this later"
                required
            />
        </div>
    ),
};
