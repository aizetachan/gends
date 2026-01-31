import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Typography',
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
    table: {
        width: '100%',
        borderCollapse: 'collapse' as const,
    },
    th: {
        textAlign: 'left' as const,
        padding: '12px 16px',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--sg-color-text-muted)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        borderBottom: '1px solid var(--sg-color-border-default)',
    },
    td: {
        padding: '16px',
        borderBottom: '1px solid var(--sg-color-border-default)',
    },
    token: {
        fontSize: '13px',
        fontFamily: 'monospace',
        color: 'var(--sg-color-text-muted)',
    },
    value: {
        fontSize: '13px',
        color: 'var(--sg-color-text-secondary)',
    },
};

// Font sizes
const fontSizes = [
    { name: 'xs', variable: '--sg-font-size-xs', value: '12px' },
    { name: 'sm', variable: '--sg-font-size-sm', value: '14px' },
    { name: 'base', variable: '--sg-font-size-base', value: '16px' },
    { name: 'lg', variable: '--sg-font-size-lg', value: '18px' },
    { name: 'xl', variable: '--sg-font-size-xl', value: '20px' },
    { name: '2xl', variable: '--sg-font-size-2xl', value: '24px' },
    { name: '3xl', variable: '--sg-font-size-3xl', value: '30px' },
    { name: '4xl', variable: '--sg-font-size-4xl', value: '36px' },
];

const fontWeights = [
    { name: 'normal', variable: '--sg-font-weight-normal', value: '400' },
    { name: 'medium', variable: '--sg-font-weight-medium', value: '500' },
    { name: 'semibold', variable: '--sg-font-weight-semibold', value: '600' },
    { name: 'bold', variable: '--sg-font-weight-bold', value: '700' },
];

const lineHeights = [
    { name: 'none', variable: '--sg-line-height-none', value: '1' },
    { name: 'tight', variable: '--sg-line-height-tight', value: '1.25' },
    { name: 'snug', variable: '--sg-line-height-snug', value: '1.375' },
    { name: 'normal', variable: '--sg-line-height-normal', value: '1.5' },
    { name: 'relaxed', variable: '--sg-line-height-relaxed', value: '1.625' },
    { name: 'loose', variable: '--sg-line-height-loose', value: '2' },
];

export const AllTypography: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>✏️ Typography Tokens</h1>

            {/* Font Family */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Font Family</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{
                        padding: '20px',
                        backgroundColor: 'var(--sg-color-bg-secondary)',
                        borderRadius: '12px',
                        border: '1px solid var(--sg-color-border-default)'
                    }}>
                        <div style={{ fontFamily: 'var(--sg-font-family)', fontSize: '24px', marginBottom: '8px', color: 'var(--sg-color-text-primary)' }}>
                            Inter - The quick brown fox jumps over the lazy dog
                        </div>
                        <div style={styles.token}>--sg-font-family</div>
                    </div>
                    <div style={{
                        padding: '20px',
                        backgroundColor: 'var(--sg-color-bg-secondary)',
                        borderRadius: '12px',
                        border: '1px solid var(--sg-color-border-default)'
                    }}>
                        <div style={{ fontFamily: 'var(--sg-font-mono)', fontSize: '18px', marginBottom: '8px', color: 'var(--sg-color-text-primary)' }}>
                            Fira Code - const greeting = "Hello, World!";
                        </div>
                        <div style={styles.token}>--sg-font-mono</div>
                    </div>
                </div>
            </div>

            {/* Font Sizes */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Font Sizes</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {fontSizes.map((size) => (
                        <div
                            key={size.variable}
                            style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '24px',
                                padding: '12px 16px',
                                backgroundColor: 'var(--sg-color-bg-secondary)',
                                borderRadius: '8px',
                            }}
                        >
                            <div style={{ width: '60px', fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                                {size.value}
                            </div>
                            <div style={{
                                flex: 1,
                                fontSize: `var(${size.variable})`,
                                color: 'var(--sg-color-text-primary)',
                            }}>
                                The quick brown fox
                            </div>
                            <div style={{ ...styles.token, width: '180px' }}>{size.variable}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Weights */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Font Weights</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {fontWeights.map((weight) => (
                        <div
                            key={weight.variable}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '24px',
                                padding: '12px 16px',
                                backgroundColor: 'var(--sg-color-bg-secondary)',
                                borderRadius: '8px',
                            }}
                        >
                            <div style={{ width: '60px', fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                                {weight.value}
                            </div>
                            <div style={{
                                flex: 1,
                                fontSize: '18px',
                                fontWeight: `var(${weight.variable})` as unknown as number,
                                color: 'var(--sg-color-text-primary)',
                            }}>
                                {weight.name.charAt(0).toUpperCase() + weight.name.slice(1)} weight text
                            </div>
                            <div style={{ ...styles.token, width: '220px' }}>{weight.variable}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Line Heights */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Line Heights</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                    {lineHeights.map((lh) => (
                        <div
                            key={lh.variable}
                            style={{
                                padding: '16px',
                                backgroundColor: 'var(--sg-color-bg-secondary)',
                                borderRadius: '12px',
                                border: '1px solid var(--sg-color-border-default)',
                            }}
                        >
                            <div style={{
                                fontSize: '14px',
                                lineHeight: `var(${lh.variable})`,
                                color: 'var(--sg-color-text-primary)',
                                marginBottom: '12px',
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={styles.token}>{lh.variable}</div>
                                <div style={styles.value}>{lh.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};

export const FontSizes: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={styles.title}>Font Sizes</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {fontSizes.map((size) => (
                    <div
                        key={size.variable}
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '24px',
                            padding: '12px 16px',
                            backgroundColor: 'var(--sg-color-bg-secondary)',
                            borderRadius: '8px',
                        }}
                    >
                        <div style={{ width: '60px', fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                            {size.value}
                        </div>
                        <div style={{
                            flex: 1,
                            fontSize: `var(${size.variable})`,
                            color: 'var(--sg-color-text-primary)',
                        }}>
                            The quick brown fox jumps over the lazy dog
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
};
