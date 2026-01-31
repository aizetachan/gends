import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarSection,
    SidebarNavItem,
    SidebarDivider
} from './Sidebar';
import { IconButton } from '../IconButton';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        position: {
            control: 'select',
            options: ['left', 'right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Icons
const HomeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const FolderIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
);

const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const TrashIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42" />
    </svg>
);

const MenuIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    render: () => {
        const [active, setActive] = useState('home');

        return (
            <div style={{ display: 'flex', height: '500px', background: 'var(--sg-color-bg-primary)' }}>
                <Sidebar>
                    <SidebarHeader
                        title="StudioGen"
                        actions={<IconButton icon={<MenuIcon />} size="sm" aria-label="Menu" />}
                    />
                    <SidebarContent>
                        <SidebarSection>
                            <SidebarNavItem
                                icon={<HomeIcon />}
                                label="Home"
                                active={active === 'home'}
                                onClick={() => setActive('home')}
                            />
                            <SidebarNavItem
                                icon={<FolderIcon />}
                                label="Projects"
                                badge="12"
                                active={active === 'projects'}
                                onClick={() => setActive('projects')}
                            />
                            <SidebarNavItem
                                icon={<StarIcon />}
                                label="Favorites"
                                active={active === 'favorites'}
                                onClick={() => setActive('favorites')}
                            />
                        </SidebarSection>

                        <SidebarDivider />

                        <SidebarSection title="Workspace">
                            <SidebarNavItem
                                icon={<FolderIcon />}
                                label="Design System"
                                active={active === 'ds'}
                                onClick={() => setActive('ds')}
                            />
                            <SidebarNavItem
                                icon={<FolderIcon />}
                                label="Marketing"
                                active={active === 'marketing'}
                                onClick={() => setActive('marketing')}
                            />
                        </SidebarSection>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarNavItem
                            icon={<SettingsIcon />}
                            label="Settings"
                            active={active === 'settings'}
                            onClick={() => setActive('settings')}
                        />
                    </SidebarFooter>
                </Sidebar>
                <div style={{ flex: 1, padding: '20px' }}>
                    <h1 style={{ color: 'var(--sg-color-text-primary)' }}>Content Area</h1>
                </div>
            </div>
        );
    },
};

// ===== COLLAPSED =====
export const Collapsed: Story = {
    render: () => {
        const [collapsed, setCollapsed] = useState(true);
        const [active, setActive] = useState('home');

        return (
            <div style={{ display: 'flex', height: '400px', background: 'var(--sg-color-bg-primary)' }}>
                <Sidebar collapsed={collapsed}>
                    <SidebarHeader
                        logo={<div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--sg-color-accent)' }} />}
                        title="Studio"
                        actions={<IconButton icon={<MenuIcon />} size="sm" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle" />}
                    />
                    <SidebarContent>
                        <SidebarNavItem icon={<HomeIcon />} label="Home" active={active === 'home'} onClick={() => setActive('home')} />
                        <SidebarNavItem icon={<FolderIcon />} label="Projects" active={active === 'projects'} onClick={() => setActive('projects')} />
                        <SidebarNavItem icon={<StarIcon />} label="Favorites" active={active === 'favorites'} onClick={() => setActive('favorites')} />
                        <SidebarNavItem icon={<TrashIcon />} label="Trash" active={active === 'trash'} onClick={() => setActive('trash')} />
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarNavItem icon={<SettingsIcon />} label="Settings" />
                    </SidebarFooter>
                </Sidebar>
                <div style={{ flex: 1, padding: '20px' }}>
                    <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                        Click the menu icon to expand/collapse
                    </p>
                </div>
            </div>
        );
    },
};
