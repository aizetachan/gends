import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Spinner, LoadingDots, Progress, ProgressCircular } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// ===== SPINNER DEFAULT =====
export const Default: Story = {
    args: {},
};

// ===== SPINNER SIZES =====
export const SpinnerSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
        </div>
    ),
};

// ===== SPINNER COLORS =====
export const SpinnerColors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Spinner color="primary" />
            <div style={{ padding: '16px', background: 'var(--sg-color-accent)', borderRadius: '8px' }}>
                <Spinner color="white" />
            </div>
            <div style={{ color: 'var(--sg-color-success)' }}>
                <Spinner color="current" />
            </div>
        </div>
    ),
};

// ===== LOADING DOTS =====
export const DotsDefault: Story = {
    render: () => <LoadingDots />,
};

// ===== LOADING DOTS SIZES =====
export const DotsSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <LoadingDots size="xs" />
            <LoadingDots size="sm" />
            <LoadingDots size="md" />
            <LoadingDots size="lg" />
        </div>
    ),
};

// ===== PROGRESS LINEAR =====
export const ProgressDefault: Story = {
    render: () => <Progress value={60} />,
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

// ===== PROGRESS SIZES =====
export const ProgressSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Progress value={60} size="sm" />
            <Progress value={60} size="md" />
            <Progress value={60} size="lg" />
        </div>
    ),
};

// ===== PROGRESS COLORS =====
export const ProgressColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Progress value={60} color="primary" />
            <Progress value={80} color="success" />
            <Progress value={40} color="warning" />
            <Progress value={20} color="error" />
        </div>
    ),
};

// ===== PROGRESS WITH LABEL =====
export const ProgressWithLabel: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <Progress value={75} label="Uploading file..." showValue />
        </div>
    ),
};

// ===== PROGRESS INDETERMINATE =====
export const ProgressIndeterminate: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <Progress indeterminate label="Loading..." />
        </div>
    ),
};

// ===== PROGRESS ANIMATED =====
const AnimatedProgress = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 10));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return <Progress value={value} showValue />;
};

export const ProgressAnimated: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <AnimatedProgress />
        </div>
    ),
};

// ===== PROGRESS CIRCULAR =====
export const CircularDefault: Story = {
    render: () => <ProgressCircular value={75} showValue />,
};

// ===== PROGRESS CIRCULAR SIZES =====
export const CircularSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <ProgressCircular value={75} size={32} strokeWidth={3} />
            <ProgressCircular value={75} size={48} strokeWidth={4} />
            <ProgressCircular value={75} size={64} strokeWidth={5} showValue />
            <ProgressCircular value={75} size={96} strokeWidth={6} showValue />
        </div>
    ),
};

// ===== PROGRESS CIRCULAR COLORS =====
export const CircularColors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <ProgressCircular value={75} color="primary" showValue />
            <ProgressCircular value={100} color="success" showValue />
            <ProgressCircular value={50} color="warning" showValue />
            <ProgressCircular value={25} color="error" showValue />
        </div>
    ),
};

// ===== PROGRESS CIRCULAR INDETERMINATE =====
export const CircularIndeterminate: Story = {
    render: () => <ProgressCircular indeterminate />,
};

// ===== ALL LOADING STATES =====
export const AllLoadingStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px', textAlign: 'center' }}>Spinner</p>
                <Spinner />
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px', textAlign: 'center' }}>Loading Dots</p>
                <LoadingDots />
            </div>
            <div style={{ width: '200px' }}>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px', textAlign: 'center' }}>Progress Linear</p>
                <Progress value={65} showValue />
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px', textAlign: 'center' }}>Progress Circular</p>
                <ProgressCircular value={65} showValue />
            </div>
        </div>
    ),
};
