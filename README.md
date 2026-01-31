# 🎯 StudioGen UI

[![npm version](https://img.shields.io/npm/v/studiogen-ui?style=flat-square&color=cb3837)](https://www.npmjs.com/package/studiogen-ui)
[![npm downloads](https://img.shields.io/npm/dm/studiogen-ui?style=flat-square)](https://www.npmjs.com/package/studiogen-ui)
[![Storybook](https://img.shields.io/badge/Storybook-Live-ff4785?style=flat-square&logo=storybook)](https://gends.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A comprehensive React component library with **30+ components** and **122+ design tokens**. Built with pure CSS Modules and CSS Variables. **No Tailwind CSS.** Full TypeScript support with dark and light themes.

## 🌐 Links

| Resource | URL |
|----------|-----|
| **npm Package** | [npmjs.com/package/studiogen-ui](https://www.npmjs.com/package/studiogen-ui) |
| **Live Storybook** | [gends.vercel.app](https://gends.vercel.app) |
| **GitHub** | [github.com/aizetachan/gends](https://github.com/aizetachan/gends) |

## 📦 Installation

```bash
npm install studiogen-ui
```

## 🚀 Quick Start

```tsx
import { Button, Input, Card, Modal } from 'studiogen-ui';
import 'studiogen-ui/styles.css';

function App() {
  return (
    <div data-theme="dark">
      <Card>
        <Card.Header>
          <Card.Title>Welcome</Card.Title>
        </Card.Header>
        <Card.Content>
          <Input placeholder="Enter your email" />
          <Button variant="primary">Submit</Button>
        </Card.Content>
      </Card>
    </div>
  );
}
```

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **122+ Design Tokens** | Colors, spacing, typography, shadows, and more |
| 📦 **30+ Components** | Buttons, inputs, modals, cards, sidebars, and more |
| 🌙 **Dark & Light Themes** | Built-in theme support via CSS Variables |
| 📘 **Full TypeScript** | Complete type definitions for all components |
| 🎭 **CSS Modules** | Scoped styles, no class collisions |
| 🚫 **No Tailwind** | Pure CSS for maximum control |
| ♿ **Accessible** | ARIA attributes and keyboard navigation |

## 🎨 Theming

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

### Using the Theme Hook

```tsx
import { useTheme } from 'studiogen-ui';

function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}
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

## 📂 Component Library

### Base Components
| Component | Description |
|-----------|-------------|
| `Button` | Primary actions with variants: `primary`, `secondary`, `ghost`, `danger`, `success` |
| `IconButton` | Icon-only buttons in 3 sizes |
| `Input` | Text input fields with icons and states |
| `TextArea` | Multi-line input with auto-resize |
| `Checkbox` | Checkboxes with indeterminate state |
| `Radio` | Radio buttons with RadioGroup |
| `Toggle` | Switch component in 3 sizes |
| `Select` | Dropdown select, searchable |
| `Slider` | Range slider with marks |
| `ColorPicker` | Color selection with presets |

### Feedback Components
| Component | Description |
|-----------|-------------|
| `Badge` | Status indicators |
| `Toast` | Notifications |
| `Spinner` | Loading states |
| `Skeleton` | Content placeholders |
| `EmptyState` | No data views |

### Container Components
| Component | Description |
|-----------|-------------|
| `Card` | Content container with sub-components |
| `Modal` | Dialog windows, multiple sizes |
| `AlertDialog` | Confirmations with danger variant |
| `Panel` | Side panels with slide animation |

### Navigation Components
| Component | Description |
|-----------|-------------|
| `Tabs` | Tab navigation |
| `Breadcrumb` | Path navigation |
| `Dropdown` | Menu dropdown |
| `Sidebar` | App sidebar with sections |

### Data Display Components
| Component | Description |
|-----------|-------------|
| `Avatar` | User avatars with initials |
| `Divider` | Content separator |
| `Tooltip` | Hover information |
| `FileCard` | File preview cards |
| `FolderCard` | Folder items with colors |

### Overlay Components
| Component | Description |
|-----------|-------------|
| `Popover` | Floating content |
| `ToolBar` | Canvas toolbar |

## 🎨 Design Tokens

### Colors

```css
/* Backgrounds */
--sg-color-bg-primary
--sg-color-bg-secondary
--sg-color-bg-tertiary
--sg-color-bg-elevated

/* Text */
--sg-color-text-primary
--sg-color-text-secondary
--sg-color-text-muted

/* Status */
--sg-color-success
--sg-color-error
--sg-color-warning
--sg-color-info

/* Extended Colors */
--sg-color-blue, --sg-color-green, --sg-color-purple
--sg-color-orange, --sg-color-red, --sg-color-yellow, --sg-color-pink
```

### Spacing

```css
--sg-space-1: 4px;
--sg-space-2: 8px;
--sg-space-3: 12px;
--sg-space-4: 16px;
--sg-space-6: 24px;
--sg-space-8: 32px;
/* ... up to --sg-space-24: 96px */
```

### Typography

```css
--sg-font-family: 'Inter', system-ui, sans-serif;
--sg-font-size-xs: 12px;
--sg-font-size-sm: 14px;
--sg-font-size-base: 16px;
--sg-font-size-lg: 18px;
--sg-font-size-xl: 20px;
```

## 📝 Component API Examples

### Button

```tsx
<Button 
  variant="primary"    // 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'
  size="md"            // 'sm' | 'md' | 'lg'
  disabled={false}
  loading={false}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  onClick={() => {}}
>
  Click me
</Button>
```

### Input

```tsx
<Input
  size="md"            // 'sm' | 'md' | 'lg'
  state="default"      // 'default' | 'error' | 'success'
  placeholder="Enter text"
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
  disabled={false}
/>
```

### Modal

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  size="md"            // 'sm' | 'md' | 'lg' | 'xl'
>
  <Modal.Header>
    <Modal.Title>Modal Title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Content here
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </Modal.Footer>
</Modal>
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/aizetachan/gends.git
cd gends

# Install dependencies
npm install --legacy-peer-deps

# Start Storybook
npm run storybook
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build Storybook for production |
| `npm run build` | Build library for npm |
| `npm run typecheck` | Run TypeScript checks |

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   └── ...
├── styles/
│   ├── globals.css       # Base tokens
│   ├── index.css         # Main stylesheet
│   └── themes/
│       ├── dark.css      # Dark theme
│       └── light.css     # Light theme
├── hooks/
│   └── useTheme.ts       # Theme hook
├── utils/
│   └── cn.ts             # classNames utility
└── index.ts              # Main exports
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
  <a href="https://www.npmjs.com/package/studiogen-ui">npm</a> •
  <a href="https://gends.vercel.app">Storybook</a> •
  <a href="https://github.com/aizetachan/gends/issues">Report Bug</a>
</div>
