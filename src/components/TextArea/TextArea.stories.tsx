import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
    title: 'Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'error', 'success'],
        },
        disabled: {
            control: 'boolean',
        },
        noResize: {
            control: 'boolean',
        },
        showCharCount: {
            control: 'boolean',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        placeholder: 'Enter your text here...',
    },
};

// ===== WITH LABEL =====
export const WithLabel: Story = {
    args: {
        label: 'Description',
        placeholder: 'Enter a description...',
    },
};

// ===== REQUIRED =====
export const Required: Story = {
    args: {
        label: 'Bio',
        placeholder: 'Tell us about yourself...',
        required: true,
    },
};

// ===== WITH HELPER TEXT =====
export const WithHelperText: Story = {
    args: {
        label: 'Comments',
        placeholder: 'Leave a comment...',
        helperText: 'Your comment will be visible to everyone',
    },
};

// ===== WITH CHARACTER COUNT =====
export const WithCharacterCount: Story = {
    args: {
        label: 'Tweet',
        placeholder: 'What\'s happening?',
        showCharCount: true,
        maxLength: 280,
    },
};

// ===== STATES =====
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextArea label="Default" placeholder="Default state" />
            <TextArea label="Error" state="error" errorMessage="This field is required" />
            <TextArea label="Success" state="success" helperText="Looks good!" defaultValue="Valid content here..." />
        </div>
    ),
};

// ===== ERROR =====
export const Error: Story = {
    args: {
        label: 'Message',
        state: 'error',
        errorMessage: 'Please enter at least 10 characters',
    },
};

// ===== SUCCESS =====
export const Success: Story = {
    args: {
        label: 'Feedback',
        state: 'success',
        helperText: 'Thank you for your feedback!',
        defaultValue: 'Great product!',
    },
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        label: 'Notes',
        placeholder: 'Cannot edit',
        disabled: true,
    },
};

// ===== READONLY =====
export const Readonly: Story = {
    args: {
        label: 'Terms',
        defaultValue: 'These are the terms and conditions that you agreed to when signing up for this service...',
        readOnly: true,
    },
};

// ===== NO RESIZE =====
export const NoResize: Story = {
    args: {
        label: 'Fixed Size',
        placeholder: 'This textarea cannot be resized...',
        noResize: true,
    },
};

// ===== LONG FORM EXAMPLE =====
export const LongFormExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextArea
                label="Title"
                placeholder="Enter a title..."
                required
            />
            <TextArea
                label="Description"
                placeholder="Describe your project in detail..."
                helperText="Be as descriptive as possible"
                showCharCount
                maxLength={500}
            />
        </div>
    ),
};
