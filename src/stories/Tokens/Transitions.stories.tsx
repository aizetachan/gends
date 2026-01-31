import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Transitions',
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
    section: {
        marginBottom: '48px',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 600,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--sg-color-border-default)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px',
    },
    card: {
        padding: '20px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--sg-color-border-default)',
    },
    label: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '4px',
    },
    variable: {
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--sg-color-text-muted)',
        marginBottom: '12px',
    },
};

const durations = [
    { name: 'Fast', variable: '--sg-duration-fast', value: '150ms' },
    { name: 'Base', variable: '--sg-duration-base', value: '200ms' },
    { name: 'Slow', variable: '--sg-duration-slow', value: '300ms' },
    { name: 'Slower', variable: '--sg-duration-slower', value: '500ms' },
];

const easings = [
    { name: 'Default', variable: '--sg-ease-default', value: 'ease' },
    { name: 'In', variable: '--sg-ease-in', value: 'ease-in' },
    { name: 'Out', variable: '--sg-ease-out', value: 'ease-out' },
    { name: 'In Out', variable: '--sg-ease-in-out', value: 'ease-in-out' },
];

const zIndices = [
    { name: 'Dropdown', variable: '--sg-z-dropdown', value: '40' },
    { name: 'Sticky', variable: '--sg-z-sticky', value: '45' },
    { name: 'Modal', variable: '--sg-z-modal', value: '50' },
    { name: 'Popover', variable: '--sg-z-popover', value: '55' },
    { name: 'Tooltip', variable: '--sg-z-tooltip', value: '60' },
];

export const AllTransitions: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>⚡ Transitions & Z-Index</h1>

            {/* Durations */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Duration</h2>
                <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '16px', fontSize: '14px' }}>
                    Hover over the boxes to see the transition speed
                </p>
                <div style={styles.grid}>
                    {durations.map((duration) => (
                        <div key={duration.variable} style={styles.card}>
                            <div style={styles.label}>{duration.name}</div>
                            <div style={styles.variable}>{duration.variable}</div>
                            <div style={styles.variable}>{duration.value}</div>
                            <div
                                style={{
                                    marginTop: '12px',
                                    height: '40px',
                                    backgroundColor: 'var(--sg-color-accent)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    transition: `transform var(${duration.variable}) var(--sg-ease-default)`,
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Hover me
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Easings */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Easing Functions</h2>
                <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '16px', fontSize: '14px' }}>
                    Different easing curves for animations
                </p>
                <div style={styles.grid}>
                    {easings.map((easing) => (
                        <div key={easing.variable} style={styles.card}>
                            <div style={styles.label}>{easing.name}</div>
                            <div style={styles.variable}>{easing.variable}</div>
                            <div style={styles.variable}>{easing.value}</div>
                            <div
                                style={{
                                    marginTop: '12px',
                                    height: '40px',
                                    backgroundColor: 'var(--sg-color-success)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    transition: `transform var(--sg-duration-slow) var(${easing.variable})`,
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(20px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                            >
                                Hover me
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Z-Index */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Z-Index Scale</h2>
                <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '16px', fontSize: '14px' }}>
                    Layering system for overlapping elements
                </p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    {zIndices.map((z, index) => (
                        <div
                            key={z.variable}
                            style={{
                                padding: '16px 20px',
                                backgroundColor: `hsl(${220 + index * 20}, 70%, ${50 + index * 5}%)`,
                                borderRadius: '8px',
                                color: 'white',
                                fontSize: '13px',
                                fontWeight: 500,
                                boxShadow: 'var(--sg-shadow-lg)',
                            }}
                        >
                            <div>{z.name}</div>
                            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>z: {z.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};
