import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Tokens/Colors',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

// Styles
const styles = {
    container: {
        padding: '32px',
        backgroundColor: 'var(--sg-color-bg-primary)',
        minHeight: '100vh',
    },
    section: {
        marginBottom: '48px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 600,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--sg-color-border-default)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
    },
    colorCard: {
        display: 'flex',
        flexDirection: 'column' as const,
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--sg-color-border-default)',
    },
    colorSwatch: {
        height: '80px',
        width: '100%',
    },
    colorInfo: {
        padding: '12px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
    },
    colorName: {
        fontSize: '13px',
        fontWeight: 500,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '4px',
    },
    colorValue: {
        fontSize: '11px',
        fontFamily: 'monospace',
        color: 'var(--sg-color-text-muted)',
    },
};

// Color Card Component
const ColorCard: React.FC<{ name: string; variable: string; value: string }> = ({ name, variable, value }) => (
    <div style={styles.colorCard}>
        <div style={{ ...styles.colorSwatch, backgroundColor: `var(${variable})` }} />
        <div style={styles.colorInfo}>
            <div style={styles.colorName}>{name}</div>
            <div style={styles.colorValue}>{variable}</div>
            <div style={{ ...styles.colorValue, marginTop: '2px' }}>{value}</div>
        </div>
    </div>
);

// Color Section Component
const ColorSection: React.FC<{ title: string; colors: Array<{ name: string; variable: string; value: string }> }> = ({ title, colors }) => (
    <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <div style={styles.grid}>
            {colors.map((color) => (
                <ColorCard key={color.variable} {...color} />
            ))}
        </div>
    </div>
);

// Color data
const backgroundColors = [
    { name: 'Primary', variable: '--sg-color-bg-primary', value: '#09090b' },
    { name: 'Secondary', variable: '--sg-color-bg-secondary', value: '#18181b' },
    { name: 'Tertiary', variable: '--sg-color-bg-tertiary', value: '#27272a' },
    { name: 'Elevated', variable: '--sg-color-bg-elevated', value: '#3f3f46' },
    { name: 'Inverse', variable: '--sg-color-bg-inverse', value: '#ffffff' },
    { name: 'Overlay', variable: '--sg-color-bg-overlay', value: 'rgba(0,0,0,0.8)' },
    { name: 'Backdrop', variable: '--sg-color-bg-backdrop', value: 'rgba(0,0,0,0.5)' },
];

const textColors = [
    { name: 'Primary', variable: '--sg-color-text-primary', value: '#fafafa' },
    { name: 'Secondary', variable: '--sg-color-text-secondary', value: '#a1a1aa' },
    { name: 'Muted', variable: '--sg-color-text-muted', value: '#52525b' },
    { name: 'Inverse', variable: '--sg-color-text-inverse', value: '#09090b' },
    { name: 'Link', variable: '--sg-color-text-link', value: '#60a5fa' },
    { name: 'Link Hover', variable: '--sg-color-text-link-hover', value: '#93c5fd' },
];

const borderColors = [
    { name: 'Default', variable: '--sg-color-border-default', value: 'rgba(255,255,255,0.1)' },
    { name: 'Hover', variable: '--sg-color-border-hover', value: 'rgba(255,255,255,0.2)' },
    { name: 'Focus', variable: '--sg-color-border-focus', value: '#3b82f6' },
    { name: 'Error', variable: '--sg-color-border-error', value: '#ef4444' },
    { name: 'Success', variable: '--sg-color-border-success', value: '#22c55e' },
];

const accentColors = [
    { name: 'Accent', variable: '--sg-color-accent', value: '#A53F35' },
    { name: 'Accent Hover', variable: '--sg-color-accent-hover', value: '#8B3529' },
    { name: 'Accent Active', variable: '--sg-color-accent-active', value: '#722C21' },
    { name: 'Accent Subtle', variable: '--sg-color-accent-subtle', value: 'rgba(165,63,53,0.1)' },
];

const statusColors = [
    { name: 'Success', variable: '--sg-color-success', value: '#22c55e' },
    { name: 'Success BG', variable: '--sg-color-success-bg', value: 'rgba(34,197,94,0.1)' },
    { name: 'Success Text', variable: '--sg-color-success-text', value: '#4ade80' },
    { name: 'Error', variable: '--sg-color-error', value: '#ef4444' },
    { name: 'Error BG', variable: '--sg-color-error-bg', value: 'rgba(239,68,68,0.1)' },
    { name: 'Error Text', variable: '--sg-color-error-text', value: '#f87171' },
    { name: 'Warning', variable: '--sg-color-warning', value: '#eab308' },
    { name: 'Warning BG', variable: '--sg-color-warning-bg', value: 'rgba(234,179,8,0.1)' },
    { name: 'Warning Text', variable: '--sg-color-warning-text', value: '#facc15' },
    { name: 'Info', variable: '--sg-color-info', value: '#3b82f6' },
    { name: 'Info BG', variable: '--sg-color-info-bg', value: 'rgba(59,130,246,0.1)' },
    { name: 'Info Text', variable: '--sg-color-info-text', value: '#60a5fa' },
];

const interactiveColors = [
    { name: 'Hover', variable: '--sg-color-hover', value: 'rgba(255,255,255,0.05)' },
    { name: 'Active', variable: '--sg-color-active', value: 'rgba(255,255,255,0.1)' },
    { name: 'Selected', variable: '--sg-color-selected', value: 'rgba(255,255,255,0.15)' },
    { name: 'Focus Ring', variable: '--sg-color-focus-ring', value: 'rgba(59,130,246,0.5)' },
    { name: 'Disabled BG', variable: '--sg-color-disabled-bg', value: 'rgba(255,255,255,0.05)' },
    { name: 'Disabled Text', variable: '--sg-color-disabled-text', value: '#52525b' },
];

// Story
export const AllColors: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--sg-color-text-primary)', marginBottom: '32px' }}>
                🎨 Color Tokens
            </h1>
            <ColorSection title="Backgrounds" colors={backgroundColors} />
            <ColorSection title="Text" colors={textColors} />
            <ColorSection title="Borders" colors={borderColors} />
            <ColorSection title="Accent (Brand)" colors={accentColors} />
            <ColorSection title="Status" colors={statusColors} />
            <ColorSection title="Interactive States" colors={interactiveColors} />
        </div>
    ),
};

export const Backgrounds: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <ColorSection title="Background Colors" colors={backgroundColors} />
        </div>
    ),
};

export const Text: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <ColorSection title="Text Colors" colors={textColors} />
        </div>
    ),
};

export const Status: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <ColorSection title="Status Colors" colors={statusColors} />
        </div>
    ),
};
