import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#09090b',
                },
                {
                    name: 'light',
                    value: '#ffffff',
                },
            ],
        },
        options: {
            storySort: {
                order: [
                    'Introduction',
                    'Tokens', ['Overview', 'Colors', 'Spacing', 'Typography', 'Shadows', 'Border Radius', 'Transitions'],
                    'Base', ['Button', 'IconButton', 'Input', 'TextArea', 'Checkbox', 'Radio', 'Toggle', 'Select', 'Slider', 'ColorPicker'],
                    'Feedback', ['Badge', 'Toast', 'Spinner', 'Skeleton', 'EmptyState'],
                    'Containers', ['Card', 'Modal', 'AlertDialog', 'Panel'],
                    'Navigation', ['Tabs', 'Breadcrumb', 'Dropdown', 'Sidebar'],
                    'Data Display', ['Avatar', 'Divider', 'Tooltip', 'FileCard', 'FolderCard'],
                    'Overlays', ['Popover', 'ToolBar'],
                ],
            },
        },
    },
    decorators: [
        (Story, context) => {
            // Apply theme based on background
            const theme = context.globals.backgrounds?.value === '#ffffff' ? 'light' : 'dark';
            return (
                <div data-theme={theme} style={{ padding: '20px' }}>
                    <Story />
                </div>
            );
        },
    ],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'dark',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: 'dark', title: 'Dark', icon: 'moon' },
                    { value: 'light', title: 'Light', icon: 'sun' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
