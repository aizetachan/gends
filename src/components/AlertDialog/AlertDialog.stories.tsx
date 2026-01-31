import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AlertDialog } from './AlertDialog';
import { Button } from '../Button';

const meta: Meta<typeof AlertDialog> = {
    title: 'Components/AlertDialog',
    component: AlertDialog,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['danger', 'warning', 'info'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

// Interactive component
const AlertDialogDemo = (args: any) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <AlertDialog
                {...args}
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                    console.log('Confirmed!');
                    setOpen(false);
                }}
            />
        </>
    );
};

// ===== DEFAULT =====
export const Default: Story = {
    render: () => (
        <AlertDialogDemo
            title="Delete Item"
            description="Are you sure you want to delete this item? This action cannot be undone."
            confirmLabel="Delete"
        />
    ),
};

// ===== DANGER =====
export const Danger: Story = {
    render: () => (
        <AlertDialogDemo
            variant="danger"
            title="Delete Project"
            description="This will permanently delete the project and all its files. This action cannot be undone."
            confirmLabel="Delete Project"
        />
    ),
};

// ===== WARNING =====
export const Warning: Story = {
    render: () => (
        <AlertDialogDemo
            variant="warning"
            title="Unsaved Changes"
            description="You have unsaved changes. Are you sure you want to leave this page?"
            confirmLabel="Leave"
            cancelLabel="Stay"
        />
    ),
};

// ===== INFO =====
export const Info: Story = {
    render: () => (
        <AlertDialogDemo
            variant="info"
            title="Update Available"
            description="A new version is available. Would you like to update now?"
            confirmLabel="Update"
            cancelLabel="Later"
        />
    ),
};

// ===== WITHOUT ICON =====
export const WithoutIcon: Story = {
    render: () => (
        <AlertDialogDemo
            showIcon={false}
            title="Confirm Action"
            description="Are you sure you want to proceed?"
            confirmLabel="Proceed"
        />
    ),
};

// ===== STACKED BUTTONS =====
export const StackedButtons: Story = {
    render: () => (
        <AlertDialogDemo
            variant="danger"
            title="Delete Account"
            description="This will permanently delete your account and all associated data."
            confirmLabel="Yes, Delete My Account"
            cancelLabel="No, Keep My Account"
            stackButtons
        />
    ),
};

// ===== LOADING STATE =====
const LoadingDemo = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 2000);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Delete with Loading</Button>
            <AlertDialog
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={handleConfirm}
                loading={loading}
                title="Deleting..."
                description="Please wait while we delete your data."
                confirmLabel="Delete"
                variant="danger"
            />
        </>
    );
};

export const WithLoading: Story = {
    render: () => <LoadingDemo />,
};

// ===== LOGOUT EXAMPLE =====
export const LogoutExample: Story = {
    render: () => (
        <AlertDialogDemo
            variant="warning"
            title="Log Out"
            description="Are you sure you want to log out of your account?"
            confirmLabel="Log Out"
            cancelLabel="Cancel"
        />
    ),
};
