import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        label: 'Volume',
        defaultValue: 50,
    },
};

// ===== CONTROLLED =====
const ControlledSlider = () => {
    const [value, setValue] = useState(30);

    return (
        <div>
            <Slider
                label="Brightness"
                value={value}
                onChange={setValue}
                formatValue={(v) => `${v}%`}
            />
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                Value: {value}%
            </p>
        </div>
    );
};

export const Controlled: Story = {
    render: () => <ControlledSlider />,
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Slider label="Small" size="sm" defaultValue={30} />
            <Slider label="Medium" size="md" defaultValue={50} />
            <Slider label="Large" size="lg" defaultValue={70} />
        </div>
    ),
};

// ===== CUSTOM RANGE =====
export const CustomRange: Story = {
    args: {
        label: 'Temperature',
        min: -20,
        max: 40,
        defaultValue: 20,
        formatValue: (v) => `${v}°C`,
    },
};

// ===== WITH STEP =====
export const WithStep: Story = {
    args: {
        label: 'Quantity',
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 50,
    },
};

// ===== WITH MARKS =====
export const WithMarks: Story = {
    args: {
        label: 'Quality',
        min: 0,
        max: 100,
        defaultValue: 50,
        marks: [
            { value: 0, label: 'Low' },
            { value: 50, label: 'Medium' },
            { value: 100, label: 'High' },
        ],
    },
};

// ===== DISABLED =====
export const Disabled: Story = {
    args: {
        label: 'Disabled Slider',
        defaultValue: 40,
        disabled: true,
    },
};

// ===== WITHOUT VALUE =====
export const WithoutValue: Story = {
    args: {
        label: 'Without Value Display',
        defaultValue: 60,
        showValue: false,
    },
};

// ===== OPACITY EXAMPLE =====
export const OpacityExample: Story = {
    render: () => {
        const [opacity, setOpacity] = useState(100);

        return (
            <div>
                <div
                    style={{
                        width: '100%',
                        height: '80px',
                        marginBottom: '16px',
                        background: 'var(--sg-color-accent)',
                        borderRadius: '8px',
                        opacity: opacity / 100,
                    }}
                />
                <Slider
                    label="Opacity"
                    value={opacity}
                    onChange={setOpacity}
                    min={0}
                    max={100}
                    formatValue={(v) => `${v}%`}
                />
            </div>
        );
    },
};

// ===== ZOOM EXAMPLE =====
export const ZoomExample: Story = {
    render: () => {
        const [zoom, setZoom] = useState(100);

        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                    onClick={() => setZoom(Math.max(10, zoom - 10))}
                    style={{
                        width: '32px',
                        height: '32px',
                        border: '1px solid var(--sg-color-border-default)',
                        borderRadius: '8px',
                        background: 'var(--sg-color-bg-secondary)',
                        color: 'var(--sg-color-text-primary)',
                        cursor: 'pointer',
                    }}
                >
                    −
                </button>
                <div style={{ flex: 1 }}>
                    <Slider
                        value={zoom}
                        onChange={setZoom}
                        min={10}
                        max={200}
                        step={10}
                        showValue
                        formatValue={(v) => `${v}%`}
                    />
                </div>
                <button
                    onClick={() => setZoom(Math.min(200, zoom + 10))}
                    style={{
                        width: '32px',
                        height: '32px',
                        border: '1px solid var(--sg-color-border-default)',
                        borderRadius: '8px',
                        background: 'var(--sg-color-bg-secondary)',
                        color: 'var(--sg-color-text-primary)',
                        cursor: 'pointer',
                    }}
                >
                    +
                </button>
            </div>
        );
    },
};
