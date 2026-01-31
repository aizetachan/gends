import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter, CardImage } from './Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outlined', 'elevated', 'ghost'],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
        interactive: {
            control: 'boolean',
        },
        selected: {
            control: 'boolean',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '360px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Icons
const MoreIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
    </svg>
);

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        padding: 'md',
        children: 'Card content goes here',
    },
};

// ===== VARIANTS =====
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Card variant="default" padding="md">Default Card</Card>
            <Card variant="outlined" padding="md">Outlined Card</Card>
            <Card variant="elevated" padding="md">Elevated Card</Card>
            <Card variant="ghost" padding="md">Ghost Card</Card>
        </div>
    ),
};

// ===== WITH HEADER =====
export const WithHeader: Story = {
    render: () => (
        <Card>
            <CardHeader title="Card Title" subtitle="Card subtitle or description" />
            <CardBody>
                <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                    This is the card body content. You can put any content here.
                </p>
            </CardBody>
        </Card>
    ),
};

// ===== WITH HEADER ACTION =====
export const WithHeaderAction: Story = {
    render: () => (
        <Card>
            <CardHeader
                title="Recent Projects"
                subtitle="Last updated 2 hours ago"
                action={
                    <IconButton icon={<MoreIcon />} aria-label="More options" />
                }
            />
            <CardBody>
                <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                    Project content and details would go here.
                </p>
            </CardBody>
        </Card>
    ),
};

// ===== WITH FOOTER =====
export const WithFooter: Story = {
    render: () => (
        <Card>
            <CardHeader title="Confirm Action" />
            <CardBody>
                <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                    Are you sure you want to proceed with this action? This cannot be undone.
                </p>
            </CardBody>
            <CardFooter>
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button variant="primary" size="sm">Confirm</Button>
            </CardFooter>
        </Card>
    ),
};

// ===== COMPLETE CARD =====
export const CompleteCard: Story = {
    render: () => (
        <Card>
            <CardImage
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop"
                alt="Abstract colorful design"
                style={{ height: '160px' }}
            />
            <CardHeader
                title="Design System"
                subtitle="Complete component library"
                action={<Badge variant="success">NEW</Badge>}
            />
            <CardBody>
                <p style={{ color: 'var(--sg-color-text-secondary)', fontSize: '14px' }}>
                    A comprehensive design system built with React and CSS Modules.
                    Includes dark and light themes.
                </p>
            </CardBody>
            <CardFooter align="space-between">
                <span style={{ fontSize: '12px', color: 'var(--sg-color-text-muted)' }}>
                    Updated 3 days ago
                </span>
                <Button variant="primary" size="sm">View Details</Button>
            </CardFooter>
        </Card>
    ),
};

// ===== INTERACTIVE =====
export const Interactive: Story = {
    args: {
        variant: 'elevated',
        padding: 'md',
        interactive: true,
        children: 'Click or hover on this card',
        onClick: () => alert('Card clicked!'),
    },
};

// ===== SELECTED =====
export const Selected: Story = {
    args: {
        padding: 'md',
        selected: true,
        children: 'This card is selected',
    },
};

// ===== PADDING SIZES =====
export const PaddingSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Card padding="none">
                <div style={{ padding: '16px', borderBottom: '1px solid var(--sg-color-border-default)' }}>
                    padding="none" (custom)
                </div>
            </Card>
            <Card padding="sm">padding="sm"</Card>
            <Card padding="md">padding="md"</Card>
            <Card padding="lg">padding="lg"</Card>
        </div>
    ),
};

// ===== FILE CARD EXAMPLE =====
export const FileCardExample: Story = {
    render: () => (
        <Card interactive>
            <CardBody>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--sg-color-bg-elevated)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px'
                    }}>
                        📄
                    </div>
                    <div>
                        <p style={{
                            margin: 0,
                            fontWeight: 500,
                            color: 'var(--sg-color-text-primary)',
                            fontSize: '14px'
                        }}>
                            document.pdf
                        </p>
                        <p style={{
                            margin: 0,
                            fontSize: '12px',
                            color: 'var(--sg-color-text-muted)'
                        }}>
                            2.4 MB • 3 days ago
                        </p>
                    </div>
                </div>
            </CardBody>
        </Card>
    ),
};

// ===== GRID OF CARDS =====
export const GridOfCards: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '720px' }}>
                <Story />
            </div>
        ),
    ],
    render: () => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
        }}>
            {['Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta'].map((name) => (
                <Card key={name} interactive variant="elevated">
                    <CardBody>
                        <p style={{
                            margin: 0,
                            fontWeight: 600,
                            color: 'var(--sg-color-text-primary)',
                            marginBottom: '8px'
                        }}>
                            {name}
                        </p>
                        <p style={{
                            margin: 0,
                            fontSize: '13px',
                            color: 'var(--sg-color-text-secondary)'
                        }}>
                            Last edited 2 hours ago
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    ),
};
