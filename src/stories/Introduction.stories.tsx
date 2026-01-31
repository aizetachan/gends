import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
    title: 'Introduction',
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
        paddingBottom: '32px',
        borderBottom: '1px solid var(--sg-color-border-default)',
    },
    logo: {
        fontSize: '64px',
        marginBottom: '16px',
    },
    title: {
        fontSize: '42px',
        fontWeight: 700,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '8px',
        background: 'linear-gradient(135deg, var(--sg-color-accent) 0%, #ef4444 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    version: {
        fontSize: '14px',
        color: 'var(--sg-color-text-muted)',
        marginBottom: '16px',
    },
    subtitle: {
        fontSize: '18px',
        color: 'var(--sg-color-text-secondary)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: 1.6,
    },
    section: {
        marginBottom: '48px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 600,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
    },
    card: {
        padding: '16px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--sg-color-border-default)',
        transition: 'all 200ms ease',
    },
    cardTitle: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--sg-color-text-primary)',
        marginBottom: '4px',
    },
    cardDesc: {
        fontSize: '12px',
        color: 'var(--sg-color-text-muted)',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '48px',
    },
    statCard: {
        padding: '24px',
        backgroundColor: 'var(--sg-color-bg-secondary)',
        borderRadius: '16px',
        border: '1px solid var(--sg-color-border-default)',
        textAlign: 'center' as const,
    },
    statNumber: {
        fontSize: '36px',
        fontWeight: 700,
        color: 'var(--sg-color-accent)',
        marginBottom: '4px',
    },
    statLabel: {
        fontSize: '13px',
        color: 'var(--sg-color-text-secondary)',
    },
};

// Component data
const sections = [
    {
        icon: '🎨',
        title: 'Design Tokens',
        items: [
            { name: 'Colors', desc: '35 color tokens' },
            { name: 'Spacing', desc: '20 spacing values' },
            { name: 'Typography', desc: 'Fonts & sizes' },
            { name: 'Shadows', desc: '7 shadow levels' },
            { name: 'Border Radius', desc: '9 radius values' },
            { name: 'Transitions', desc: 'Duration & easing' },
        ],
    },
    {
        icon: '📝',
        title: 'Base Components',
        items: [
            { name: 'Button', desc: '5 variants, 3 sizes' },
            { name: 'IconButton', desc: 'Icon-only buttons' },
            { name: 'Input', desc: 'Text input with states' },
            { name: 'TextArea', desc: 'Multi-line input' },
            { name: 'Checkbox', desc: 'With indeterminate' },
            { name: 'Radio', desc: 'Radio + RadioGroup' },
            { name: 'Toggle', desc: 'Switch component' },
            { name: 'Select', desc: 'Dropdown select' },
            { name: 'Slider', desc: 'Range slider' },
            { name: 'ColorPicker', desc: 'Color selection' },
        ],
    },
    {
        icon: '💬',
        title: 'Feedback',
        items: [
            { name: 'Badge', desc: 'Status indicators' },
            { name: 'Toast', desc: 'Notifications' },
            { name: 'Spinner', desc: 'Loading states' },
            { name: 'Skeleton', desc: 'Content placeholders' },
            { name: 'EmptyState', desc: 'No data views' },
        ],
    },
    {
        icon: '📦',
        title: 'Containers',
        items: [
            { name: 'Card', desc: 'Content container' },
            { name: 'Modal', desc: 'Dialog windows' },
            { name: 'AlertDialog', desc: 'Confirmations' },
            { name: 'Panel', desc: 'Side panels' },
        ],
    },
    {
        icon: '🧭',
        title: 'Navigation',
        items: [
            { name: 'Tabs', desc: 'Tab navigation' },
            { name: 'Breadcrumb', desc: 'Path navigation' },
            { name: 'Dropdown', desc: 'Menu dropdown' },
            { name: 'Sidebar', desc: 'App sidebar' },
        ],
    },
    {
        icon: '📊',
        title: 'Data Display',
        items: [
            { name: 'Avatar', desc: 'User avatars' },
            { name: 'Divider', desc: 'Content separator' },
            { name: 'Tooltip', desc: 'Hover info' },
            { name: 'FileCard', desc: 'File preview' },
            { name: 'FolderCard', desc: 'Folder item' },
        ],
    },
    {
        icon: '🔲',
        title: 'Overlays',
        items: [
            { name: 'Popover', desc: 'Floating content' },
            { name: 'ToolBar', desc: 'Canvas toolbar' },
        ],
    },
];

const stats = [
    { number: '30', label: 'Components' },
    { number: '104', label: 'Design Tokens' },
    { number: '71', label: 'Total Items' },
    { number: '2', label: 'Themes' },
];

export const Welcome: StoryObj = {
    render: () => (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.logo}>🎯</div>
                <h1 style={styles.title}>GenDS</h1>
                <p style={styles.version}>Design System v1.0</p>
                <p style={styles.subtitle}>
                    A comprehensive React component library with pure CSS, CSS Modules, and CSS Variables.
                    No Tailwind. Full TypeScript support. Dark and Light themes.
                </p>
            </div>

            {/* Stats */}
            <div style={styles.statsGrid}>
                {stats.map((stat) => (
                    <div key={stat.label} style={styles.statCard}>
                        <div style={styles.statNumber}>{stat.number}</div>
                        <div style={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Sections */}
            {sections.map((section) => (
                <div key={section.title} style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <span>{section.icon}</span>
                        {section.title}
                    </h2>
                    <div style={styles.grid}>
                        {section.items.map((item) => (
                            <div
                                key={item.name}
                                style={styles.card}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--sg-color-accent)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--sg-color-border-default)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={styles.cardTitle}>{item.name}</div>
                                <div style={styles.cardDesc}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Footer */}
            <div style={{
                marginTop: '48px',
                paddingTop: '24px',
                borderTop: '1px solid var(--sg-color-border-default)',
                textAlign: 'center',
            }}>
                <p style={{ fontSize: '14px', color: 'var(--sg-color-text-muted)' }}>
                    Use the sidebar to explore each component and token in detail.
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    marginTop: '16px',
                    fontSize: '13px',
                }}>
                    <span style={{ color: 'var(--sg-color-text-secondary)' }}>
                        📁 <strong>CSS Modules</strong>
                    </span>
                    <span style={{ color: 'var(--sg-color-text-secondary)' }}>
                        🎨 <strong>CSS Variables</strong>
                    </span>
                    <span style={{ color: 'var(--sg-color-text-secondary)' }}>
                        📘 <strong>TypeScript</strong>
                    </span>
                    <span style={{ color: 'var(--sg-color-text-secondary)' }}>
                        ❌ <strong>No Tailwind</strong>
                    </span>
                </div>
            </div>
        </div>
    ),
};
