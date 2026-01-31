import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Spacing',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const styles = {
    container: {
        padding: '32px',
        backgroundColor: 'var(--sg-color-bg-primary)',
        minHeight: '100vh',
    },
    title: {
        fontSize: '28px',
        fontWeight: 700,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '32px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--sg-color-border-default)',
    },
    bar: {
        height: '32px',
        backgroundColor: 'var(--sg-color-accent)',
        borderRadius: '4px',
        flexShrink: 0,
    },
    info: {
        flex: 1,
        minWidth: 0,
    },
    label: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '4px',
    },
    value: {
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--sg-color-text-muted)',
    },
};

// Spacing data
const spacingTokens = [
    { name: 'space-0', variable: '--sg-space-0', value: '0px' },
    { name: 'space-0-5', variable: '--sg-space-0-5', value: '2px' },
    { name: 'space-1', variable: '--sg-space-1', value: '4px' },
    { name: 'space-1-5', variable: '--sg-space-1-5', value: '6px' },
    { name: 'space-2', variable: '--sg-space-2', value: '8px' },
    { name: 'space-2-5', variable: '--sg-space-2-5', value: '10px' },
    { name: 'space-3', variable: '--sg-space-3', value: '12px' },
    { name: 'space-3-5', variable: '--sg-space-3-5', value: '14px' },
    { name: 'space-4', variable: '--sg-space-4', value: '16px' },
    { name: 'space-5', variable: '--sg-space-5', value: '20px' },
    { name: 'space-6', variable: '--sg-space-6', value: '24px' },
    { name: 'space-7', variable: '--sg-space-7', value: '28px' },
    { name: 'space-8', variable: '--sg-space-8', value: '32px' },
    { name: 'space-9', variable: '--sg-space-9', value: '36px' },
    { name: 'space-10', variable: '--sg-space-10', value: '40px' },
    { name: 'space-12', variable: '--sg-space-12', value: '48px' },
    { name: 'space-14', variable: '--sg-space-14', value: '56px' },
    { name: 'space-16', variable: '--sg-space-16', value: '64px' },
    { name: 'space-20', variable: '--sg-space-20', value: '80px' },
    { name: 'space-24', variable: '--sg-space-24', value: '96px' },
];

const SpacingCard: React.FC<{ name: string; variable: string; value: string }> = ({ name, variable, value }) => {
    const numValue = parseInt(value);
    const barWidth = Math.max(numValue, 4);

    return (
        <div style={styles.card}>
            <div style={{ ...styles.bar, width: `${barWidth}px` }} />
            <div style={styles.info}>
                <div style={styles.label}>{name}</div>
                <div style={styles.value}>{variable}</div>
                <div style={{ ...styles.value, color: 'var(--sg-color-text-secondary)' }}>{value}</div>
            </div>
        </div>
    );
};

export const AllSpacing: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>📏 Spacing Tokens</h1>
            <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                Consistent spacing scale based on 4px base unit. Use these tokens for margins, paddings, and gaps.
            </p>
            <div style={styles.grid}>
                {spacingTokens.map((token) => (
                    <SpacingCard key={token.variable} {...token} />
                ))}
            </div>
        </div>
    ),
};

// Visual scale
export const VisualScale: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>📏 Spacing Visual Scale</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {spacingTokens.map((token) => (
                    <div key={token.variable} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '120px',
                            fontSize: '12px',
                            fontFamily: 'monospace',
                            color: 'var(--sg-color-text-muted)'
                        }}>
                            {token.value}
                        </div>
                        <div style={{
                            width: `var(${token.variable})`,
                            height: '24px',
                            backgroundColor: 'var(--sg-color-accent)',
                            borderRadius: '4px',
                            minWidth: '2px',
                        }} />
                        <div style={{ fontSize: '13px', color: 'var(--sg-color-text-secondary)' }}>
                            {token.variable}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
};
