import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Border Radius',
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '24px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '16px',
        padding: '24px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--sg-color-border-default)',
    },
    box: {
        width: '80px',
        height: '80px',
        backgroundColor: 'var(--sg-color-accent)',
    },
    name: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--sg-color-text-primary)',
        textAlign: 'center' as const,
    },
    variable: {
        fontSize: '11px',
        fontFamily: 'monospace',
        color: 'var(--sg-color-text-muted)',
        textAlign: 'center' as const,
    },
    value: {
        fontSize: '12px',
        color: 'var(--sg-color-text-secondary)',
        textAlign: 'center' as const,
    },
};

const radiusTokens = [
    { name: 'None', variable: '--sg-radius-none', value: '0' },
    { name: 'Small', variable: '--sg-radius-sm', value: '2px' },
    { name: 'Base', variable: '--sg-radius-base', value: '4px' },
    { name: 'Medium', variable: '--sg-radius-md', value: '6px' },
    { name: 'Large', variable: '--sg-radius-lg', value: '8px' },
    { name: 'XL', variable: '--sg-radius-xl', value: '12px' },
    { name: '2XL', variable: '--sg-radius-2xl', value: '16px' },
    { name: '3XL', variable: '--sg-radius-3xl', value: '24px' },
    { name: 'Full', variable: '--sg-radius-full', value: '9999px' },
];

export const AllRadii: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>⬜ Border Radius Tokens</h1>
            <p style={{ color: 'var(--sg-color-text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                Consistent border radius scale for UI elements. Use smaller radii for buttons and inputs, larger for cards and modals.
            </p>
            <div style={styles.grid}>
                {radiusTokens.map((radius) => (
                    <div key={radius.variable} style={styles.card}>
                        <div
                            style={{
                                ...styles.box,
                                borderRadius: `var(${radius.variable})`,
                            }}
                        />
                        <div>
                            <div style={styles.name}>{radius.name}</div>
                            <div style={styles.variable}>{radius.variable}</div>
                            <div style={styles.value}>{radius.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
};

export const UseCases: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>Border Radius Use Cases</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Buttons */}
                <div>
                    <h2 style={{ fontSize: '16px', color: 'var(--sg-color-text-primary)', marginBottom: '16px' }}>
                        Buttons & Inputs (lg - 8px)
                    </h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button style={{
                            padding: '10px 20px',
                            borderRadius: 'var(--sg-radius-lg)',
                            backgroundColor: 'var(--sg-color-accent)',
                            color: 'white',
                            border: 'none',
                            fontSize: '14px',
                            fontWeight: 500,
                        }}>
                            Button
                        </button>
                        <input
                            placeholder="Input field"
                            style={{
                                padding: '10px 16px',
                                borderRadius: 'var(--sg-radius-lg)',
                                backgroundColor: 'var(--sg-color-bg-secondary)',
                                color: 'var(--sg-color-text-primary)',
                                border: '1px solid var(--sg-color-border-default)',
                                fontSize: '14px',
                                outline: 'none',
                            }}
                        />
                    </div>
                </div>

                {/* Cards */}
                <div>
                    <h2 style={{ fontSize: '16px', color: 'var(--sg-color-text-primary)', marginBottom: '16px' }}>
                        Cards & Containers (xl - 12px)
                    </h2>
                    <div style={{
                        padding: '24px',
                        borderRadius: 'var(--sg-radius-xl)',
                        backgroundColor: 'var(--sg-color-bg-secondary)',
                        border: '1px solid var(--sg-color-border-default)',
                        maxWidth: '300px',
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--sg-color-text-primary)', marginBottom: '8px' }}>
                            Card Title
                        </div>
                        <div style={{ fontSize: '13px', color: 'var(--sg-color-text-secondary)' }}>
                            Card content goes here. This is an example of a card with xl radius.
                        </div>
                    </div>
                </div>

                {/* Pills & Tags */}
                <div>
                    <h2 style={{ fontSize: '16px', color: 'var(--sg-color-text-primary)', marginBottom: '16px' }}>
                        Pills & Tags (full - 9999px)
                    </h2>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {['Design', 'Development', 'Marketing'].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: '6px 12px',
                                    borderRadius: 'var(--sg-radius-full)',
                                    backgroundColor: 'var(--sg-color-accent-subtle)',
                                    color: 'var(--sg-color-accent)',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Avatars */}
                <div>
                    <h2 style={{ fontSize: '16px', color: 'var(--sg-color-text-primary)', marginBottom: '16px' }}>
                        Avatars (full - circle)
                    </h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {[32, 40, 48].map((size) => (
                            <div
                                key={size}
                                style={{
                                    width: size,
                                    height: size,
                                    borderRadius: 'var(--sg-radius-full)',
                                    backgroundColor: 'var(--sg-color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: size / 3,
                                    fontWeight: 600,
                                }}
                            >
                                AB
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ),
};
