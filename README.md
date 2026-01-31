# 🎯 GenDS - Design System

[![Storybook](https://img.shields.io/badge/Storybook-Live-ff4785?style=flat-square&logo=storybook)](https://gends.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Yes-blue?style=flat-square)](https://github.com/css-modules/css-modules)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A comprehensive React component library built with pure CSS, CSS Modules, and CSS Variables. **No Tailwind CSS.** Full TypeScript support with dark and light themes.

## 🌐 Live Demo

**[https://gends.vercel.app](https://gends.vercel.app)**

## ✨ Features

- 🎨 **122+ Design Tokens** - Colors, spacing, typography, shadows, and more
- 📦 **30+ Components** - From buttons to complex modals and sidebars
- 🌙 **Dark & Light Themes** - Built-in theme support via CSS Variables
- 📘 **Full TypeScript** - Complete type definitions for all components
- 🎭 **CSS Modules** - Scoped styles, no class collisions
- 🚫 **No Tailwind** - Pure CSS for maximum control
- 📚 **Storybook Docs** - Complete documentation with live examples
- ♿ **Accessible** - ARIA attributes and keyboard navigation

## 📦 Installation

```bash
npm install @gends/ui
```

## 🚀 Quick Start

```tsx
import { Button, Input, Card } from '@gends/ui';
import '@gends/ui/styles';

function App() {
  return (
    <div data-theme="dark">
      <Card>
        <Input placeholder="Enter your email" />
        <Button variant="primary">Submit</Button>
      </Card>
    </div>
  );
}
```

## 🎨 Design Tokens

### Colors (122 tokens)

| Category | Examples |
|----------|----------|
| **Backgrounds** | `--sg-color-bg-primary`, `--sg-color-bg-secondary` |
| **Text** | `--sg-color-text-primary`, `--sg-color-text-muted` |
| **Borders** | `--sg-color-border-default`, `--sg-color-border-focus` |
| **Accent** | `--sg-color-accent`, `--sg-color-accent-hover` |
| **Status** | `--sg-color-success`, `--sg-color-error`, `--sg-color-warning` |
| **Extended** | `--sg-color-blue`, `--sg-color-purple`, `--sg-color-pink` |

### Spacing (20 tokens)

```css
--sg-space-0: 0;
--sg-space-1: 4px;
--sg-space-2: 8px;
--sg-space-3: 12px;
--sg-space-4: 16px;
/* ... up to --sg-space-24: 96px */
```

### Typography

```css
--sg-font-family: 'Inter', system-ui, sans-serif;
--sg-font-mono: 'Fira Code', monospace;
--sg-font-size-xs: 12px;
--sg-font-size-sm: 14px;
--sg-font-size-base: 16px;
/* ... up to --sg-font-size-4xl: 36px */
```

## 📂 Component Library

### Base Components
| Component | Description | Variants |
|-----------|-------------|----------|
| **Button** | Primary actions | `primary`, `secondary`, `ghost`, `danger`, `success` |
| **IconButton** | Icon-only buttons | 3 sizes |
| **Input** | Text input fields | With icons, states |
| **TextArea** | Multi-line input | Auto-resize option |
| **Checkbox** | Checkboxes | Indeterminate state |
| **Radio** | Radio buttons | RadioGroup included |
| **Toggle** | Switch component | 3 sizes |
| **Select** | Dropdown select | Searchable |
| **Slider** | Range slider | With marks |
| **ColorPicker** | Color selection | Presets, eyedropper |

### Feedback Components
| Component | Description |
|-----------|-------------|
| **Badge** | Status indicators |
| **Toast** | Notifications |
| **Spinner** | Loading states |
| **Skeleton** | Content placeholders |
| **EmptyState** | No data views |

### Container Components
| Component | Description |
|-----------|-------------|
| **Card** | Content container with variants |
| **Modal** | Dialog windows, multiple sizes |
| **AlertDialog** | Confirmations with danger variant |
| **Panel** | Side panels, slide-in animation |

### Navigation Components
| Component | Description |
|-----------|-------------|
| **Tabs** | Tab navigation |
| **Breadcrumb** | Path navigation |
| **Dropdown** | Menu dropdown |
| **Sidebar** | App sidebar with sections |

### Data Display Components
| Component | Description |
|-----------|-------------|
| **Avatar** | User avatars with initials |
| **Divider** | Content separator |
| **Tooltip** | Hover information |
| **FileCard** | File preview cards |
| **FolderCard** | Folder items |

### Overlay Components
| Component | Description |
|-----------|-------------|
| **Popover** | Floating content |
| **ToolBar** | Canvas toolbar |

## 🎭 Theming

### Using Themes

```tsx
// Dark theme (default)
<div data-theme="dark">
  <App />
</div>

// Light theme
<div data-theme="light">
  <App />
</div>
```

### Customizing Tokens

Override CSS variables in your global styles:

```css
:root {
  --sg-color-accent: #your-brand-color;
  --sg-color-accent-hover: #your-hover-color;
  --sg-radius-lg: 12px;
}
```

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   └── ...
├── styles/
│   ├── globals.css       # Base tokens (spacing, typography, etc.)
│   ├── index.css         # Main stylesheet
│   └── themes/
│       ├── dark.css      # Dark theme colors
│       └── light.css     # Light theme colors
├── hooks/
│   └── useTheme.ts       # Theme hook
├── utils/
│   └── cn.ts             # classNames utility
└── index.ts              # Main exports
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/aizetachan/gends.git
cd gends

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build Storybook for production |
| `npm run build` | Build library for distribution |
| `npm run typecheck` | Run TypeScript checks |

## 🏗️ Building for Production

```bash
# Build the library
npm run build

# Output will be in /dist
```

## 📝 Component API Example

### Button

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

<Button variant="primary" size="md" leftIcon={<Icon />}>
  Click me
</Button>
```

### Input

```tsx
interface InputProps {
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'error' | 'success';
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

<Input 
  placeholder="Enter email"
  leftIcon={<MailIcon />}
  state="success"
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ for StudioGen AI</p>
  <a href="https://gends.vercel.app">View Storybook</a> •
  <a href="https://github.com/aizetachan/gends/issues">Report Bug</a> •
  <a href="https://github.com/aizetachan/gends/issues">Request Feature</a>
</div>
