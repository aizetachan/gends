import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FileCard } from './FileCard';

const meta: Meta<typeof FileCard> = {
    title: 'Components/FileCard',
    component: FileCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        cardSize: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        view: {
            control: 'select',
            options: ['grid', 'list'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof FileCard>;

// ===== DEFAULT =====
export const Default: Story = {
    args: {
        name: 'design-mockup.png',
        fileType: 'png',
        size: '2.4 MB',
        modifiedAt: '2 hours ago',
        onMenuClick: () => console.log('Menu clicked'),
    },
};

// ===== WITH THUMBNAIL =====
export const WithThumbnail: Story = {
    args: {
        name: 'hero-image.jpg',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
        fileType: 'jpg',
        size: '1.8 MB',
        modifiedAt: 'Yesterday',
        onMenuClick: () => { },
    },
};

// ===== SELECTED =====
export const Selected: Story = {
    args: {
        name: 'presentation.pdf',
        fileType: 'pdf',
        size: '4.2 MB',
        modifiedAt: '3 days ago',
        selected: true,
        onMenuClick: () => { },
    },
};

// ===== SIZES =====
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <FileCard
                name="small.png"
                fileType="png"
                size="1 MB"
                cardSize="sm"
                onMenuClick={() => { }}
            />
            <FileCard
                name="medium.png"
                fileType="png"
                size="2 MB"
                cardSize="md"
                onMenuClick={() => { }}
            />
            <FileCard
                name="large.png"
                fileType="png"
                size="3 MB"
                cardSize="lg"
                onMenuClick={() => { }}
            />
        </div>
    ),
};

// ===== LIST VIEW =====
export const ListView: Story = {
    render: () => (
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <FileCard
                name="document.pdf"
                fileType="pdf"
                size="2.4 MB"
                modifiedAt="Today"
                view="list"
                onMenuClick={() => { }}
            />
            <FileCard
                name="spreadsheet.xlsx"
                fileType="xlsx"
                size="856 KB"
                modifiedAt="Yesterday"
                view="list"
                onMenuClick={() => { }}
            />
            <FileCard
                name="presentation.pptx"
                fileType="pptx"
                size="5.2 MB"
                modifiedAt="Last week"
                view="list"
                selected
                onMenuClick={() => { }}
            />
        </div>
    ),
};

// ===== GRID LAYOUT =====
export const GridLayout: Story = {
    render: () => {
        const [selectedId, setSelectedId] = useState<string | null>(null);

        const files = [
            { id: '1', name: 'image-01.jpg', thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop', fileType: 'jpg', size: '2.4 MB' },
            { id: '2', name: 'image-02.jpg', thumbnail: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop', fileType: 'jpg', size: '1.8 MB' },
            { id: '3', name: 'design.png', fileType: 'png', size: '3.2 MB' },
            { id: '4', name: 'video.mp4', fileType: 'mp4', size: '24.5 MB' },
        ];

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                width: '440px'
            }}>
                {files.map((file) => (
                    <FileCard
                        key={file.id}
                        name={file.name}
                        thumbnail={file.thumbnail}
                        fileType={file.fileType}
                        size={file.size}
                        selected={selectedId === file.id}
                        onClick={() => setSelectedId(file.id)}
                        onDoubleClick={() => console.log('Opening', file.name)}
                        onMenuClick={() => console.log('Menu for', file.name)}
                    />
                ))}
            </div>
        );
    },
};
