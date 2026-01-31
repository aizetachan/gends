# GenDS - Design System

Design System para StudioGen AI. Librería de componentes React con CSS puro (sin Tailwind).

## 🚀 Inicio Rápido

### Instalación de dependencias

```bash
npm install
```

### Desarrollo con Storybook

```bash
npm run storybook
```

Abre [http://localhost:6006](http://localhost:6006) para ver los componentes.

### Build de la librería

```bash
npm run build
```

## 📦 Estructura

```
src/
├── components/     # Componentes UI
│   ├── Button/
│   ├── Input/
│   └── ...
├── styles/         # CSS Variables y themes
│   ├── globals.css
│   └── themes/
├── hooks/          # Custom hooks
└── utils/          # Utilidades
```

## 🎨 Sistema de Theming

### Dark Theme (default)
```html
<div data-theme="dark">
  <!-- Componentes -->
</div>
```

### Light Theme
```html
<div data-theme="light">
  <!-- Componentes -->
</div>
```

### Hook useTheme
```tsx
import { useTheme } from '@gends/ui';

function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

## 🧩 Componentes Disponibles

- [x] Button
- [ ] IconButton
- [ ] Input
- [ ] ... (ver task.md)

## 📝 Licencia

MIT
