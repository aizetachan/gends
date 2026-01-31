import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
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
        indeterminate: {
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
type Story = StoryObj<typeof Checkbox>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        label: 'Accept terms and conditions',
    },
};

// ===== CHECKED =====
export const Checked: Story = {
    args: {
        label: 'I agree',
        checked: true,
    },
};

// ===== INDETERMINATE =====
export const Indeterminate: Story = {
    args: {
        label: 'Select all',
        indeterminate: true,
    },
};

// ===== WITH HELPER TEXT =====
export const WithHelperText: Story = {
    args: {
        label: 'Subscribe to newsletter',
        helperText: 'You can unsubscribe at any time',
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox size="sm" label="Small checkbox" />
            <Checkbox size="md" label="Medium checkbox (default)" />
            <Checkbox size="lg" label="Large checkbox" />
        </div>
    ),
};

// ===== STATES =====
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" checked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" checked disabled />
            <Checkbox label="Error state" error helperText="This field is required" />
        </div>
    ),
};

// ===== ERROR =====
export const Error: Story = {
    args: {
        label: 'Required field',
        error: true,
        helperText: 'You must accept the terms',
    },
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        label: 'Disabled option',
        disabled: true,
    },
};

// ===== CONTROLLED =====
const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox
            label={checked ? 'Checked' : 'Unchecked'}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    );
};

export const Controlled: Story = {
    render: () => <ControlledCheckbox />,
};

// ===== CHECKBOX GROUP =====
export const CheckboxGroup: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', marginBottom: '4px' }}>
                Select your interests:
            </p>
            <Checkbox label="Design" />
            <Checkbox label="Development" />
            <Checkbox label="Marketing" />
            <Checkbox label="Business" />
        </div>
    ),
};

// ===== SELECT ALL EXAMPLE =====
const SelectAllExample = () => {
    const [items, setItems] = useState([false, false, false]);

    const allChecked = items.every(Boolean);
    const someChecked = items.some(Boolean);

    const handleSelectAll = () => {
        setItems(items.map(() => !allChecked));
    };

    const handleItemChange = (index: number) => {
        const newItems = [...items];
        newItems[index] = !newItems[index];
        setItems(newItems);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
                label="Select all"
                checked={allChecked}
                indeterminate={someChecked && !allChecked}
                onChange={handleSelectAll}
            />
            <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Checkbox label="Option 1" checked={items[0]} onChange={() => handleItemChange(0)} />
                <Checkbox label="Option 2" checked={items[1]} onChange={() => handleItemChange(1)} />
                <Checkbox label="Option 3" checked={items[2]} onChange={() => handleItemChange(2)} />
            </div>
        </div>
    );
};

export const SelectAll: Story = {
    render: () => <SelectAllExample />,
};
