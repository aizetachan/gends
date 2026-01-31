import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
    title: 'Components/ColorPicker',
    component: ColorPicker,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        label: 'Fill Color',
        defaultValue: '#3b82f6',
    },
};

// ===== CONTROLLED =====
const ControlledPicker = () => {
    const [color, setColor] = useState('#ef4444');

    return (
        <div>
            <ColorPicker
                label="Background"
                value={color}
                onChange={setColor}
            />
            <div
                style={{
                    marginTop: '16px',
                    width: '100px',
                    height: '100px',
                    backgroundColor: color,
                    borderRadius: '8px',
                }}
            />
        </div>
    );
};

export const Controlled: Story = {
    render: () => <ControlledPicker />,
};

// ===== CUSTOM PRESETS =====
export const CustomPresets: Story = {
    args: {
        label: 'Brand Color',
        presets: ['#1a1a2e', '#16213e', '#0f3460', '#e94560', '#533483', '#7952b3'],
    },
};

// ===== WITHOUT INPUT =====
export const WithoutInput: Story = {
    args: {
        label: 'Quick Select',
        showInput: false,
    },
};

// ===== WITHOUT PRESETS =====
export const WithoutPresets: Story = {
    args: {
        label: 'Custom Only',
        presets: [],
    },
};

// ===== THEME COLORS EXAMPLE =====
export const ThemeColorsExample: Story = {
    render: () => {
        const [colors, setColors] = useState({
            primary: '#3b82f6',
            secondary: '#6b7280',
            accent: '#8b5cf6',
        });

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ColorPicker
                    label="Primary"
                    value={colors.primary}
                    onChange={(c) => setColors({ ...colors, primary: c })}
                />
                <ColorPicker
                    label="Secondary"
                    value={colors.secondary}
                    onChange={(c) => setColors({ ...colors, secondary: c })}
                />
                <ColorPicker
                    label="Accent"
                    value={colors.accent}
                    onChange={(c) => setColors({ ...colors, accent: c })}
                />

                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: colors.primary }} />
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: colors.secondary }} />
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: colors.accent }} />
                </div>
            </div>
        );
    },
};
