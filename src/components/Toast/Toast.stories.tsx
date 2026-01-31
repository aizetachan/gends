import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, ToastContainer, ToastProps } from './Toast';
import { Button } from '../Button';

const meta: Meta<typeof Toast> = {
    title: 'Components/Toast',
    component: Toast,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'success', 'error', 'warning', 'info'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// ===== SINGLE TOAST =====
export const Default: Story = {
    args: {
        id: '1',
        title: 'Notification',
        message: 'This is a default toast notification.',
    },
};

// ===== VARIANTS =====
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '360px' }}>
            <Toast id="1" title="Default" message="This is a default toast." variant="default" />
            <Toast id="2" title="Success" message="Your changes have been saved." variant="success" />
            <Toast id="3" title="Error" message="Something went wrong." variant="error" />
            <Toast id="4" title="Warning" message="Please review your input." variant="warning" />
            <Toast id="5" title="Info" message="A new version is available." variant="info" />
        </div>
    ),
};

// ===== SUCCESS =====
export const Success: Story = {
    args: {
        id: '1',
        title: 'Project saved',
        message: 'Your changes have been saved successfully.',
        variant: 'success',
    },
};

// ===== ERROR =====
export const Error: Story = {
    args: {
        id: '1',
        title: 'Upload failed',
        message: 'There was an error uploading your file. Please try again.',
        variant: 'error',
    },
};

// ===== WITH ACTION =====
export const WithAction: Story = {
    args: {
        id: '1',
        title: 'File deleted',
        message: 'The file has been moved to trash.',
        variant: 'default',
        action: {
            label: 'Undo',
            onClick: () => alert('Undo clicked!'),
        },
    },
};

// ===== TITLE ONLY =====
export const TitleOnly: Story = {
    args: {
        id: '1',
        title: 'Copied to clipboard!',
        variant: 'success',
    },
};

// ===== MESSAGE ONLY =====
export const MessageOnly: Story = {
    args: {
        id: '1',
        message: 'Your session will expire in 5 minutes.',
        variant: 'warning',
    },
};

// ===== INTERACTIVE DEMO =====
const InteractiveDemo = () => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    let idCounter = 0;

    const addToast = (variant: ToastProps['variant']) => {
        const id = `toast-${Date.now()}-${idCounter++}`;
        const variants = {
            success: { title: 'Success', message: 'Operation completed successfully.' },
            error: { title: 'Error', message: 'Something went wrong. Please try again.' },
            warning: { title: 'Warning', message: 'Please check your input.' },
            info: { title: 'Info', message: 'New updates are available.' },
            default: { title: 'Notification', message: 'You have a new message.' },
        };

        const { title, message } = variants[variant || 'default'];

        setToasts((prev) => [...prev, { id, title, message, variant }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button onClick={() => addToast('success')} variant="success" size="sm">Success</Button>
                <Button onClick={() => addToast('error')} variant="danger" size="sm">Error</Button>
                <Button onClick={() => addToast('warning')} variant="secondary" size="sm">Warning</Button>
                <Button onClick={() => addToast('info')} variant="secondary" size="sm">Info</Button>
                <Button onClick={() => addToast('default')} variant="ghost" size="sm">Default</Button>
            </div>
            <ToastContainer toasts={toasts} onClose={removeToast} position="top-right" />
        </div>
    );
};

export const Interactive: Story = {
    render: () => <InteractiveDemo />,
};

// ===== POSITIONS =====
const PositionDemo = () => {
    const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>('top-right');
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const showToast = () => {
        const id = `toast-${Date.now()}`;
        setToasts([{ id, title: 'Position Demo', message: `Toast at ${position}`, variant: 'info' }]);
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button onClick={() => setPosition('top-right')} variant={position === 'top-right' ? 'primary' : 'secondary'} size="sm">Top Right</Button>
                    <Button onClick={() => setPosition('top-left')} variant={position === 'top-left' ? 'primary' : 'secondary'} size="sm">Top Left</Button>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button onClick={() => setPosition('bottom-right')} variant={position === 'bottom-right' ? 'primary' : 'secondary'} size="sm">Bottom Right</Button>
                    <Button onClick={() => setPosition('bottom-left')} variant={position === 'bottom-left' ? 'primary' : 'secondary'} size="sm">Bottom Left</Button>
                </div>
                <Button onClick={showToast} variant="primary">Show Toast</Button>
            </div>
            <ToastContainer toasts={toasts} onClose={() => setToasts([])} position={position} />
        </div>
    );
};

export const Positions: Story = {
    render: () => <PositionDemo />,
};
