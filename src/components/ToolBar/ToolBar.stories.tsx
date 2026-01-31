import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToolBar, ToolButton, ToolDivider, ToolGroup } from './ToolBar';

const meta: Meta<typeof ToolBar> = {
    title: 'Components/ToolBar',
    component: ToolBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['floating', 'inline'],
        },
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToolBar>;

// Icons
const SelectIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    </svg>
);

const MoveIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
    </svg>
);

const RectIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
);

const CircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
    </svg>
);

const TextIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
);

const PenIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18" />
    </svg>
);

const ImageIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
);

const ZoomInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
);

const ZoomOutIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    render: () => {
        const [activeTool, setActiveTool] = useState('select');

        return (
            <ToolBar>
                <ToolGroup>
                    <ToolButton icon={<SelectIcon />} label="Select" active={activeTool === 'select'} onClick={() => setActiveTool('select')} />
                    <ToolButton icon={<MoveIcon />} label="Move" active={activeTool === 'move'} onClick={() => setActiveTool('move')} />
                </ToolGroup>

                <ToolDivider />

                <ToolGroup>
                    <ToolButton icon={<RectIcon />} label="Rectangle" active={activeTool === 'rect'} onClick={() => setActiveTool('rect')} />
                    <ToolButton icon={<CircleIcon />} label="Circle" active={activeTool === 'circle'} onClick={() => setActiveTool('circle')} />
                    <ToolButton icon={<TextIcon />} label="Text" active={activeTool === 'text'} onClick={() => setActiveTool('text')} />
                </ToolGroup>

                <ToolDivider />

                <ToolGroup>
                    <ToolButton icon={<PenIcon />} label="Pen" active={activeTool === 'pen'} onClick={() => setActiveTool('pen')} />
                    <ToolButton icon={<ImageIcon />} label="Image" active={activeTool === 'image'} onClick={() => setActiveTool('image')} />
                </ToolGroup>
            </ToolBar>
        );
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <ToolBar size="sm">
                <ToolButton icon={<SelectIcon />} label="Select" active />
                <ToolButton icon={<MoveIcon />} label="Move" />
                <ToolButton icon={<RectIcon />} label="Rectangle" />
            </ToolBar>
            <ToolBar size="md">
                <ToolButton icon={<SelectIcon />} label="Select" active />
                <ToolButton icon={<MoveIcon />} label="Move" />
                <ToolButton icon={<RectIcon />} label="Rectangle" />
            </ToolBar>
            <ToolBar size="lg">
                <ToolButton icon={<SelectIcon />} label="Select" active />
                <ToolButton icon={<MoveIcon />} label="Move" />
                <ToolButton icon={<RectIcon />} label="Rectangle" />
            </ToolBar>
        </div>
    ),
};

// ===== ZOOM CONTROLS =====
export const ZoomControls: Story = {
    render: () => (
        <ToolBar>
            <ToolButton icon={<ZoomOutIcon />} label="Zoom Out" />
            <span style={{
                padding: '0 8px',
                fontSize: '12px',
                color: 'var(--sg-color-text-secondary)',
                fontVariantNumeric: 'tabular-nums'
            }}>
                100%
            </span>
            <ToolButton icon={<ZoomInIcon />} label="Zoom In" />
        </ToolBar>
    ),
};

// ===== CANVAS EXAMPLE =====
export const CanvasExample: Story = {
    render: () => {
        const [activeTool, setActiveTool] = useState('select');

        return (
            <div style={{
                position: 'relative',
                width: '600px',
                height: '400px',
                background: 'var(--sg-color-bg-tertiary)',
                borderRadius: '12px'
            }}>
                {/* Canvas grid pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '20px 20px'
                }} />

                {/* Floating toolbar */}
                <ToolBar variant="floating" position="bottom">
                    <ToolButton icon={<SelectIcon />} label="Select (V)" active={activeTool === 'select'} onClick={() => setActiveTool('select')} />
                    <ToolButton icon={<MoveIcon />} label="Hand (H)" active={activeTool === 'move'} onClick={() => setActiveTool('move')} />
                    <ToolDivider />
                    <ToolButton icon={<RectIcon />} label="Rectangle (R)" active={activeTool === 'rect'} onClick={() => setActiveTool('rect')} />
                    <ToolButton icon={<CircleIcon />} label="Ellipse (O)" active={activeTool === 'circle'} onClick={() => setActiveTool('circle')} />
                    <ToolButton icon={<TextIcon />} label="Text (T)" active={activeTool === 'text'} onClick={() => setActiveTool('text')} />
                    <ToolDivider />
                    <ToolButton icon={<PenIcon />} label="Pen (P)" active={activeTool === 'pen'} onClick={() => setActiveTool('pen')} />
                </ToolBar>
            </div>
        );
    },
};
