import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Overview',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const styles = {
    container: {
        padding: '48px 32px',
        backgroundColor: 'var(--sg-color-bg-primary)',
        minHeight: '100vh',
        fontFamily: 'var(--sg-font-family)',
    },
    header: {
        textAlign: 'center' as const,
        marginBottom: '48px',
    },
    logo: {
        fontSize: '48px',
        marginBottom: '16px',
    },
    title: {
        fontSize: '36px',
        fontWeight: 700,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '12px',
    },
    subtitle: {
        fontSize: '18px',
        color: 'var(--sg-color-text-secondary)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: 1.6,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    card: {
        padding: '24px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '16px',
        border: '1px solid var(--sg-color-border-default)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        cursor: 'pointer',
    },
    cardIcon: {
        fontSize: '32px',
        marginBottom: '12px',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: 600,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '8px',
    },
    cardDesc: {
        fontSize: '14px',
        color: 'var(--sg-color-text-secondary)',
        lineHeight: 1.5,
        marginBottom: '16px',
    },
    cardTokens: {
        fontSize: '12px',
        color: 'var(--sg-color-text-muted)',
        fontFamily: 'monospace',
    },
    preview: {
        height: '48px',
        marginTop: '16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
    },
};

const tokenSections = [
    {
        icon: '🎨',
        title: 'Colors',
        description: 'Complete color palette including backgrounds, text, borders, accent, and status colors.',
        tokens: 35,
        preview: (
            <div style={{ ...styles.preview, gap: '4px' }}>
                {['#09090b', '#18181b', '#A53F35', '#22c55e', '#ef4444', '#3b82f6'].map((color) => (
                    <div key={color} style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: color }} />
                ))}
            </div>
        ),
    },
    {
        icon: '📏',
        title: 'Spacing',
        description: 'Consistent spacing scale from 0 to 96px based on a 4px base unit.',
        tokens: 20,
        preview: (
            <div style={{ ...styles.preview, justifyContent: 'flex-start', paddingLeft: '16px' }}>
                {[4, 8, 12, 16, 24, 32].map((size) => (
                    <div key={size} style={{ width: `${size}px`, height: '24px', borderRadius: '4px', backgroundColor: 'var(--sg-color-accent)' }} />
                ))}
            </div>
        ),
    },
    {
        icon: '✏️',
        title: 'Typography',
        description: 'Font families, sizes, weights, and line heights for consistent text styling.',
        tokens: 20,
        preview: (
            <div style={{ ...styles.preview, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '16px', height: 'auto', gap: '4px' }}>
                <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--sg-color-text-primary)' }}>Heading</span>
                <span style={{ fontSize: '14px', color: 'var(--sg-color-text-secondary)' }}>Body text</span>
            </div>
        ),
    },
    {
        icon: '🌓',
        title: 'Shadows',
        description: 'Progressive shadow scale for elevation and depth (xs to 2xl).',
        tokens: 7,
        preview: (
            <div style={{ ...styles.preview }}>
                <div style={{
                    width: '80px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--sg-color-bg-tertiary)',
                    boxShadow: 'var(--sg-shadow-lg)',
                }} />
            </div>
        ),
    },
    {
        icon: '⬜',
        title: 'Border Radius',
        description: 'From sharp corners (0) to pills (9999px) for various UI components.',
        tokens: 9,
        preview: (
            <div style={{ ...styles.preview, gap: '12px' }}>
                {[4, 8, 12, 9999].map((radius) => (
                    <div key={radius} style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: `${radius}px`,
                        backgroundColor: 'var(--sg-color-accent)',
                    }} />
                ))}
            </div>
        ),
    },
    {
        icon: '⚡',
        title: 'Transitions',
        description: 'Duration, easing functions, and z-index scale for animations and layering.',
        tokens: 13,
        preview: (
            <div style={{ ...styles.preview, gap: '8px' }}>
                <div style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--sg-color-success)',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500,
                }}>
                    Fast
                </div>
                <div style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--sg-color-info)',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500,
                }}>
                    Slow
                </div>
            </div>
        ),
    },
];

export const Introduction: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.logo}>🎨</div>
                <h1 style={styles.title}>GenDS Design Tokens</h1>
                <p style={styles.subtitle}>
                    A comprehensive set of design tokens that define the visual language of GenDS.
                    Use these tokens to ensure consistency across all components and applications.
                </p>
            </div>

            <div style={styles.grid}>
                {tokenSections.map((section) => (
                    <div
                        key={section.title}
                        style={styles.card}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = 'var(--sg-shadow-xl)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={styles.cardIcon}>{section.icon}</div>
                        <h2 style={styles.cardTitle}>{section.title}</h2>
                        <p style={styles.cardDesc}>{section.description}</p>
                        <div style={styles.cardTokens}>{section.tokens} tokens</div>
                        {section.preview}
                    </div>
                ))}
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '48px',
                padding: '24px',
                backgroundColor: 'var(--sg-color-bg-secondary)',
                borderRadius: '12px',
                maxWidth: '600px',
                margin: '48px auto 0',
            }}>
                <h3 style={{ fontSize: '16px', color: 'var(--sg-color-text-primary)', marginBottom: '8px' }}>
                    📂 Total Tokens: 104
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--sg-color-text-secondary)' }}>
                    Use the sidebar to explore each category in detail
                </p>
            </div>
        </div>
    ),
};
