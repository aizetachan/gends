import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Shadows',
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
        gap: '24px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '16px',
        padding: '24px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--sg-color-border-default)',
    },
    shadowBox: {
        height: '80px',
        backgroundColor: 'var(--sg-color-bg-tertiary)',
        borderRadius: '8px',
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--sg-color-text-primary)',
    },
    variable: {
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--sg-color-text-muted)',
    },
};

const shadows = [
    { name: 'Extra Small', variable: '--sg-shadow-xs', value: '0 1px 2px rgba(0,0,0,0.05)' },
    { name: 'Small', variable: '--sg-shadow-sm', value: '0 1px 3px rgba(0,0,0,0.1)' },
    { name: 'Medium', variable: '--sg-shadow-md', value: '0 4px 6px rgba(0,0,0,0.1)' },
    { name: 'Large', variable: '--sg-shadow-lg', value: '0 10px 15px rgba(0,0,0,0.1)' },
    { name: 'Extra Large', variable: '--sg-shadow-xl', value: '0 20px 25px rgba(0,0,0,0.15)' },
    { name: '2XL', variable: '--sg-shadow-2xl', value: '0 25px 50px rgba(0,0,0,0.25)' },
    { name: 'Inner', variable: '--sg-shadow-inner', value: 'inset 0 2px 4px rgba(0,0,0,0.06)' },
];

export const AllShadows: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>🌓 Shadow Tokens</h1>
            <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                A progressive shadow scale for elevation and depth. Use lighter shadows for subtle effects and heavier shadows for floating elements.
            </p>
            <div style={styles.grid}>
                {shadows.map((shadow) => (
                    <div key={shadow.variable} style={styles.card}>
                        <div
                            style={{
                                ...styles.shadowBox,
                                boxShadow: `var(${shadow.variable})`,
                            }}
                        />
                        <div style={styles.info}>
                            <div>
                                <div style={styles.name}>{shadow.name}</div>
                                <div style={styles.variable}>{shadow.variable}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
};

export const Comparison: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>Shadow Comparison</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {shadows.slice(0, 6).map((shadow) => (
                    <div
                        key={shadow.variable}
                        style={{
                            width: '120px',
                            height: '120px',
                            backgroundColor: 'var(--sg-color-bg-secondary)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `var(${shadow.variable})`,
                        }}
                    >
                        <span style={{ fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>{shadow.name}</span>
                    </div>
                ))}
            </div>
        </div>
    ),
};
