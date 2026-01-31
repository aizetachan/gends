import type { Meta, StoryObj } from '@storybook/react';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    PanelSection,
    CollapsibleSection
} from './Panel';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Input } from '../Input';
import { Toggle } from '../Toggle';

const meta: Meta<typeof Panel> = {
    title: 'Components/Panel',
    component: Panel,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof Panel>;

// Icons
const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    render: () => (
        <div style={{ width: '280px', height: '400px' }}>
            <Panel>
                <PanelHeader
                    title="Properties"
                    actions={
                        <IconButton icon={<CloseIcon />} size="sm" aria-label="Close" />
                    }
                />
                <PanelBody>
                    <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                        Panel content goes here.
                    </p>
                </PanelBody>
            </Panel>
        </div>
    ),
};

// ===== WITH SECTIONS =====
export const WithSections: Story = {
    render: () => (
        <div style={{ width: '280px', height: '500px' }}>
            <Panel>
                <PanelHeader title="Layer Properties" />
                <PanelBody noPadding>
                    <PanelSection title="Position">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            <Input label="X" size="sm" defaultValue="100" />
                            <Input label="Y" size="sm" defaultValue="200" />
                        </div>
                    </PanelSection>
                    <PanelSection title="Size">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            <Input label="W" size="sm" defaultValue="400" />
                            <Input label="H" size="sm" defaultValue="300" />
                        </div>
                    </PanelSection>
                    <PanelSection title="Appearance">
                        <Toggle label="Visible" defaultChecked />
                    </PanelSection>
                </PanelBody>
            </Panel>
        </div>
    ),
};

// ===== COLLAPSIBLE SECTIONS =====
export const CollapsibleSections: Story = {
    render: () => (
        <div style={{ width: '280px', height: '500px' }}>
            <Panel>
                <PanelHeader title="Layers" />
                <PanelBody noPadding>
                    <CollapsibleSection title="Background" defaultOpen={true}>
                        <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', margin: 0 }}>
                            Background layer properties
                        </p>
                    </CollapsibleSection>
                    <CollapsibleSection title="Content" defaultOpen={true}>
                        <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', margin: 0 }}>
                            Content layer properties
                        </p>
                    </CollapsibleSection>
                    <CollapsibleSection title="Overlay" defaultOpen={false}>
                        <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px', margin: 0 }}>
                            Overlay layer properties
                        </p>
                    </CollapsibleSection>
                </PanelBody>
            </Panel>
        </div>
    ),
};

// ===== WITH FOOTER =====
export const WithFooter: Story = {
    render: () => (
        <div style={{ width: '280px', height: '400px' }}>
            <Panel>
                <PanelHeader title="Export Settings" />
                <PanelBody>
                    <Input label="File Name" size="sm" defaultValue="design-export" />
                    <div style={{ marginTop: '12px' }}>
                        <Toggle label="Include layers" />
                    </div>
                </PanelBody>
                <PanelFooter>
                    <Button variant="secondary" size="sm">Cancel</Button>
                    <Button variant="primary" size="sm">Export</Button>
                </PanelFooter>
            </Panel>
        </div>
    ),
};

// ===== SETTINGS PANEL =====
export const SettingsPanel: Story = {
    render: () => (
        <div style={{ width: '280px', height: '500px' }}>
            <Panel>
                <PanelHeader
                    title="Settings"
                    actions={
                        <IconButton icon={<SettingsIcon />} size="sm" aria-label="Settings" />
                    }
                />
                <PanelBody noPadding>
                    <PanelSection title="General">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Toggle label="Auto-save" defaultChecked />
                            <Toggle label="Dark mode" defaultChecked />
                            <Toggle label="Show grid" />
                        </div>
                    </PanelSection>
                    <PanelSection title="Editor">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Toggle label="Snap to grid" defaultChecked />
                            <Toggle label="Show rulers" />
                            <Toggle label="Show guides" defaultChecked />
                        </div>
                    </PanelSection>
                </PanelBody>
            </Panel>
        </div>
    ),
};
