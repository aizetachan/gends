import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// Icons
const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="m22 6-10 7L2 6" />
    </svg>
);

const LockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const EyeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'error', 'success', 'warning'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '320px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Input>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

// ===== WITH LABEL =====
export const WithLabel: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
    },
};

// ===== REQUIRED =====
export const Required: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
    },
};

// ===== WITH HELPER TEXT =====
export const WithHelperText: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        helperText: 'Must be at least 8 characters',
    },
};

// ===== STATES =====
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input label="Default" placeholder="Default state" />
            <Input label="Error" state="error" errorMessage="This field is required" />
            <Input label="Success" state="success" helperText="Looks good!" defaultValue="valid@email.com" />
            <Input label="Warning" state="warning" helperText="Please verify this" />
        </div>
    ),
};

// ===== ERROR STATE =====
export const Error: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter email',
        state: 'error',
        errorMessage: 'Please enter a valid email address',
    },
};

// ===== SUCCESS STATE =====
export const Success: Story = {
    args: {
        label: 'Username',
        defaultValue: 'available_username',
        state: 'success',
        helperText: 'Username is available!',
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input (default)" />
            <Input size="lg" placeholder="Large input" />
        </div>
    ),
};

// ===== WITH ICONS =====
export const WithLeftIcon: Story = {
    args: {
        leftIcon: <SearchIcon />,
        placeholder: 'Search...',
    },
};

export const WithRightIcon: Story = {
    args: {
        rightIcon: <EyeIcon />,
        type: 'password',
        placeholder: 'Enter password',
    },
};

export const WithBothIcons: Story = {
    args: {
        leftIcon: <LockIcon />,
        rightIcon: <EyeIcon />,
        type: 'password',
        placeholder: 'Enter password',
    },
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Cannot edit this',
        disabled: true,
    },
};

// ===== READONLY =====
export const Readonly: Story = {
    args: {
        label: 'Readonly Input',
        defaultValue: 'This value cannot be changed',
        readOnly: true,
    },
};

// ===== INPUT TYPES =====
export const InputTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input label="Text" type="text" placeholder="Enter text" />
            <Input label="Email" type="email" placeholder="email@example.com" leftIcon={<MailIcon />} />
            <Input label="Password" type="password" placeholder="Enter password" leftIcon={<LockIcon />} />
            <Input label="Number" type="number" placeholder="0" />
            <Input label="Search" type="search" placeholder="Search..." leftIcon={<SearchIcon />} />
        </div>
    ),
};

// ===== COMPLETE FORM EXAMPLE =====
export const FormExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                leftIcon={<MailIcon />}
                required
            />
            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                leftIcon={<LockIcon />}
                rightIcon={<EyeIcon />}
                helperText="Must be at least 8 characters"
                required
            />
        </div>
    ),
};
