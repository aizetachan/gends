import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarStack } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        status: {
            control: 'select',
            options: [undefined, 'online', 'offline', 'busy', 'away'],
        },
        shape: {
            control: 'select',
            options: ['circle', 'square'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        name: 'John Doe',
    },
};

// ===== WITH IMAGE =====
export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=1',
        alt: 'User avatar',
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar size="xs" name="XS" />
            <Avatar size="sm" name="SM" />
            <Avatar size="md" name="MD" />
            <Avatar size="lg" name="LG" />
            <Avatar size="xl" name="XL" />
            <Avatar size="xxl" name="XXL" />
        </div>
    ),
};

// ===== INITIALS =====
export const Initials: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Avatar name="John Doe" />
            <Avatar name="Jane Smith" />
            <Avatar name="Bob" />
            <Avatar name="María García" />
        </div>
    ),
};

// ===== FALLBACK =====
export const Fallback: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Avatar />
            <Avatar src="/broken-image.jpg" />
        </div>
    ),
};

// ===== WITH STATUS =====
export const WithStatus: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar name="Online" status="online" />
            <Avatar name="Offline" status="offline" />
            <Avatar name="Busy" status="busy" />
            <Avatar name="Away" status="away" />
        </div>
    ),
};

// ===== STATUS SIZES =====
export const StatusSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar size="sm" name="SM" status="online" />
            <Avatar size="md" name="MD" status="online" />
            <Avatar size="lg" name="LG" status="online" />
            <Avatar size="xl" name="XL" status="online" />
        </div>
    ),
};

// ===== SHAPES =====
export const Shapes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar name="Circle" shape="circle" size="lg" />
            <Avatar name="Square" shape="square" size="lg" />
        </div>
    ),
};

// ===== AVATAR STACK =====
export const Stack: Story = {
    render: () => (
        <AvatarStack
            avatars={[
                { name: 'John Doe', src: 'https://i.pravatar.cc/150?img=1' },
                { name: 'Jane Smith', src: 'https://i.pravatar.cc/150?img=2' },
                { name: 'Bob Wilson', src: 'https://i.pravatar.cc/150?img=3' },
                { name: 'Alice Brown' },
            ]}
            max={4}
        />
    ),
};

// ===== STACK WITH OVERFLOW =====
export const StackWithOverflow: Story = {
    render: () => (
        <AvatarStack
            avatars={[
                { name: 'User 1' },
                { name: 'User 2' },
                { name: 'User 3' },
                { name: 'User 4' },
                { name: 'User 5' },
                { name: 'User 6' },
                { name: 'User 7' },
            ]}
            max={3}
        />
    ),
};

// ===== STACK SIZES =====
export const StackSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AvatarStack
                avatars={[{ name: 'A' }, { name: 'B' }, { name: 'C' }]}
                size="sm"
            />
            <AvatarStack
                avatars={[{ name: 'A' }, { name: 'B' }, { name: 'C' }]}
                size="md"
            />
            <AvatarStack
                avatars={[{ name: 'A' }, { name: 'B' }, { name: 'C' }]}
                size="lg"
            />
        </div>
    ),
};

// ===== USER LIST EXAMPLE =====
export const UserListExample: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
                { name: 'John Doe', status: 'online' as const, role: 'Admin' },
                { name: 'Jane Smith', status: 'busy' as const, role: 'Editor' },
                { name: 'Bob Wilson', status: 'away' as const, role: 'Viewer' },
                { name: 'Alice Brown', status: 'offline' as const, role: 'Viewer' },
            ].map((user) => (
                <div key={user.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar name={user.name} status={user.status} />
                    <div>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--sg-color-text-primary)' }}>
                            {user.name}
                        </p>
                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                            {user.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    ),
};
