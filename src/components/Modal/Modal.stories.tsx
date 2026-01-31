import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter } from './Modal';
import { Button } from '../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'fullscreen'],
        },
        showCloseButton: {
            control: 'boolean',
        },
        closeOnOverlayClick: {
            control: 'boolean',
        },
        closeOnEscape: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper component for controlled modal
const ModalDemo = (props: Partial<React.ComponentProps<typeof Modal>>) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="Modal Title"
                {...props}
            >
                <ModalBody>
                    <p style={{ color: 'var(--sg-color-text-secondary)', margin: 0 }}>
                        This is the modal body content. You can put any content here.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

// ===== DEFAULT =====
export const Default: Story = {
    render: () => <ModalDemo />,
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => {
        const SizeDemo = () => {
            const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'fullscreen' | null>(null);

            return (
                <>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Button onClick={() => setSize('sm')}>Small</Button>
                        <Button onClick={() => setSize('md')}>Medium</Button>
                        <Button onClick={() => setSize('lg')}>Large</Button>
                        <Button onClick={() => setSize('xl')}>Extra Large</Button>
                        <Button onClick={() => setSize('fullscreen')}>Fullscreen</Button>
                    </div>
                    {size && (
                        <Modal
                            open={true}
                            onClose={() => setSize(null)}
                            size={size}
                            title={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
                        >
                            <ModalBody>
                                <p style={{ color: 'var(--sg-color-text-secondary)', margin: 0 }}>
                                    This is a {size} modal. The width adjusts based on the size prop.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="secondary" onClick={() => setSize(null)}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    )}
                </>
            );
        };

        return <SizeDemo />;
    },
};

// ===== WITH DESCRIPTION =====
export const WithDescription: Story = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <Button onClick={() => setOpen(true)}>Open Modal</Button>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="Delete Project"
                        description="This action cannot be undone. All data will be permanently removed."
                    >
                        <ModalBody>
                            <p style={{ color: 'var(--sg-color-text-secondary)', margin: 0 }}>
                                Are you sure you want to delete "My Project"?
                                This will remove all files, settings, and collaborators.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        };

        return <Demo />;
    },
};

// ===== FORM MODAL =====
export const FormModal: Story = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <Button onClick={() => setOpen(true)}>Create New Project</Button>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="Create Project"
                        description="Fill in the details to create a new project."
                        size="md"
                    >
                        <ModalBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <Input
                                    label="Project Name"
                                    placeholder="Enter project name"
                                    required
                                />
                                <TextArea
                                    label="Description"
                                    placeholder="Describe your project..."
                                    maxLength={200}
                                    showCharCount
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button variant="primary" onClick={() => setOpen(false)}>Create Project</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        };

        return <Demo />;
    },
};

// ===== CONFIRMATION DIALOG =====
export const ConfirmationDialog: Story = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <Button variant="danger" onClick={() => setOpen(true)}>Delete Item</Button>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="Delete Item?"
                        size="sm"
                    >
                        <ModalBody>
                            <p style={{ color: 'var(--sg-color-text-secondary)', margin: 0 }}>
                                This action cannot be undone. Are you sure you want to proceed?
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        };

        return <Demo />;
    },
};

// ===== NO CLOSE BUTTON =====
export const NoCloseButton: Story = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <Button onClick={() => setOpen(true)}>Open Modal</Button>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="Terms of Service"
                        showCloseButton={false}
                        closeOnOverlayClick={false}
                        closeOnEscape={false}
                    >
                        <ModalBody>
                            <p style={{ color: 'var(--sg-color-text-secondary)', margin: 0 }}>
                                You must accept the terms before continuing.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" onClick={() => setOpen(false)}>I Accept</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        };

        return <Demo />;
    },
};

// ===== SCROLLABLE CONTENT =====
export const ScrollableContent: Story = {
    render: () => {
        const Demo = () => {
            const [open, setOpen] = useState(false);

            return (
                <>
                    <Button onClick={() => setOpen(true)}>Open Long Modal</Button>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="Terms and Conditions"
                        size="md"
                    >
                        <ModalBody>
                            <div style={{ color: 'var(--sg-color-text-secondary)' }}>
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <p key={i}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                ))}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="secondary" onClick={() => setOpen(false)}>Decline</Button>
                            <Button variant="primary" onClick={() => setOpen(false)}>Accept</Button>
                        </ModalFooter>
                    </Modal>
                </>
            );
        };

        return <Demo />;
    },
};
