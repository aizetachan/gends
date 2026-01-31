import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'pills', 'underline'],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '500px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Icons
const FileIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
);

const SettingsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
);

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    render: () => (
        <Tabs defaultValue="tab1">
            <TabList>
                <Tab value="tab1">Overview</Tab>
                <Tab value="tab2">Features</Tab>
                <Tab value="tab3">Pricing</Tab>
            </TabList>
            <TabPanel value="tab1">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>
                    Overview content goes here. This is the first tab panel.
                </p>
            </TabPanel>
            <TabPanel value="tab2">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>
                    Features content goes here. This is the second tab panel.
                </p>
            </TabPanel>
            <TabPanel value="tab3">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>
                    Pricing content goes here. This is the third tab panel.
                </p>
            </TabPanel>
        </Tabs>
    ),
};

// ===== VARIANTS =====
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>Default</p>
                <Tabs defaultValue="t1" variant="default">
                    <TabList>
                        <Tab value="t1">Tab 1</Tab>
                        <Tab value="t2">Tab 2</Tab>
                        <Tab value="t3">Tab 3</Tab>
                    </TabList>
                </Tabs>
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>Pills</p>
                <Tabs defaultValue="t1" variant="pills">
                    <TabList>
                        <Tab value="t1">Tab 1</Tab>
                        <Tab value="t2">Tab 2</Tab>
                        <Tab value="t3">Tab 3</Tab>
                    </TabList>
                </Tabs>
            </div>
            <div>
                <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>Underline</p>
                <Tabs defaultValue="t1" variant="underline">
                    <TabList>
                        <Tab value="t1">Tab 1</Tab>
                        <Tab value="t2">Tab 2</Tab>
                        <Tab value="t3">Tab 3</Tab>
                    </TabList>
                </Tabs>
            </div>
        </div>
    ),
};

// ===== WITH ICONS =====
export const WithIcons: Story = {
    render: () => (
        <Tabs defaultValue="files" variant="pills">
            <TabList>
                <Tab value="files" icon={<FileIcon />}>Files</Tab>
                <Tab value="users" icon={<UserIcon />}>Users</Tab>
                <Tab value="settings" icon={<SettingsIcon />}>Settings</Tab>
            </TabList>
            <TabPanel value="files">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>Files content</p>
            </TabPanel>
            <TabPanel value="users">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>Users content</p>
            </TabPanel>
            <TabPanel value="settings">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>Settings content</p>
            </TabPanel>
        </Tabs>
    ),
};

// ===== WITH BADGES =====
export const WithBadges: Story = {
    render: () => (
        <Tabs defaultValue="inbox">
            <TabList>
                <Tab value="inbox" badge="12">Inbox</Tab>
                <Tab value="drafts" badge="3">Drafts</Tab>
                <Tab value="sent">Sent</Tab>
            </TabList>
            <TabPanel value="inbox">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>12 unread messages</p>
            </TabPanel>
            <TabPanel value="drafts">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>3 drafts</p>
            </TabPanel>
            <TabPanel value="sent">
                <p style={{ color: 'var(--sg-color-text-secondary)' }}>Sent messages</p>
            </TabPanel>
        </Tabs>
    ),
};

// ===== DISABLED TAB =====
export const DisabledTab: Story = {
    render: () => (
        <Tabs defaultValue="active">
            <TabList>
                <Tab value="active">Active</Tab>
                <Tab value="disabled" disabled>Disabled</Tab>
                <Tab value="another">Another</Tab>
            </TabList>
        </Tabs>
    ),
};

// ===== CONTROLLED =====
const ControlledTabs = () => {
    const [value, setValue] = useState('first');

    return (
        <div>
            <p style={{ color: 'var(--sg-color-text-muted)', fontSize: '12px', marginBottom: '8px' }}>
                Current tab: {value}
            </p>
            <Tabs value={value} onValueChange={setValue}>
                <TabList>
                    <Tab value="first">First</Tab>
                    <Tab value="second">Second</Tab>
                    <Tab value="third">Third</Tab>
                </TabList>
                <TabPanel value="first">First panel content</TabPanel>
                <TabPanel value="second">Second panel content</TabPanel>
                <TabPanel value="third">Third panel content</TabPanel>
            </Tabs>
        </div>
    );
};

export const Controlled: Story = {
    render: () => <ControlledTabs />,
};

// ===== SETTINGS PAGE EXAMPLE =====
export const SettingsPage: Story = {
    render: () => (
        <Tabs defaultValue="profile" variant="underline">
            <TabList>
                <Tab value="profile" icon={<UserIcon />}>Profile</Tab>
                <Tab value="account">Account</Tab>
                <Tab value="notifications" badge="2">Notifications</Tab>
                <Tab value="security">Security</Tab>
            </TabList>
            <TabPanel value="profile">
                <div style={{ paddingTop: '16px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--sg-color-text-primary)' }}>
                        Profile Settings
                    </h3>
                    <p style={{ margin: 0, color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                        Manage your public profile information.
                    </p>
                </div>
            </TabPanel>
            <TabPanel value="account">
                <div style={{ paddingTop: '16px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--sg-color-text-primary)' }}>
                        Account Settings
                    </h3>
                    <p style={{ margin: 0, color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                        Manage your account preferences.
                    </p>
                </div>
            </TabPanel>
            <TabPanel value="notifications">
                <div style={{ paddingTop: '16px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--sg-color-text-primary)' }}>
                        Notification Preferences
                    </h3>
                    <p style={{ margin: 0, color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                        Control how you receive notifications.
                    </p>
                </div>
            </TabPanel>
            <TabPanel value="security">
                <div style={{ paddingTop: '16px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--sg-color-text-primary)' }}>
                        Security Settings
                    </h3>
                    <p style={{ margin: 0, color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                        Manage your security options.
                    </p>
                </div>
            </TabPanel>
        </Tabs>
    ),
};
