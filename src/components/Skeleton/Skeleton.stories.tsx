import type { Meta, StoryObj } from '@storybook/react';
import {
    Skeleton,
    SkeletonText,
    SkeletonAvatar,
    SkeletonCard,
    SkeletonListItem
} from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['text', 'circle', 'rectangle'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        variant: 'text',
        width: 200,
        height: 16,
    },
};

// ===== VARIANTS =====
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>Text</p>
                <Skeleton variant="text" width={200} height={16} />
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>Circle</p>
                <Skeleton variant="circle" width={48} height={48} />
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>Rectangle</p>
                <Skeleton variant="rectangle" width={200} height={120} />
            </div>
        </div>
    ),
};

// ===== TEXT LINES =====
export const TextLines: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <SkeletonText lines={3} />
        </div>
    ),
};

// ===== AVATAR =====
export const AvatarSkeleton: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <SkeletonAvatar size={32} />
            <SkeletonAvatar size={40} />
            <SkeletonAvatar size={48} />
            <SkeletonAvatar size={64} />
        </div>
    ),
};

// ===== AVATAR WITH TEXT =====
export const AvatarWithText: Story = {
    render: () => <SkeletonAvatar size={48} withText />,
};

// ===== CARD SKELETON =====
export const CardSkeleton: Story = {
    render: () => (
        <div style={{ width: '280px' }}>
            <SkeletonCard />
        </div>
    ),
};

// ===== CARD WITHOUT IMAGE =====
export const CardWithoutImage: Story = {
    render: () => (
        <div style={{ width: '280px' }}>
            <SkeletonCard withImage={false} />
        </div>
    ),
};

// ===== LIST ITEMS =====
export const ListItems: Story = {
    render: () => (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SkeletonListItem />
            <SkeletonListItem />
            <SkeletonListItem />
        </div>
    ),
};

// ===== LOADING GRID =====
export const LoadingGrid: Story = {
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            width: '100%',
            maxWidth: '900px'
        }}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    ),
};

// ===== DASHBOARD LOADING =====
export const DashboardLoading: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '600px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Skeleton variant="text" width={150} height={24} />
                <Skeleton variant="rectangle" width={100} height={36} />
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                        padding: '16px',
                        background: 'var(--sg-color-bg-secondary)',
                        borderRadius: '12px',
                        border: '1px solid var(--sg-color-border-default)'
                    }}>
                        <Skeleton variant="text" width="60%" height={14} />
                        <Skeleton variant="text" width="40%" height={28} style={{ marginTop: '8px' }} />
                    </div>
                ))}
            </div>

            {/* List */}
            <div>
                <Skeleton variant="text" width={100} height={18} style={{ marginBottom: '16px' }} />
                <SkeletonListItem />
                <SkeletonListItem />
                <SkeletonListItem />
            </div>
        </div>
    ),
};
