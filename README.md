# Minecraft Browser Edition

A browser-based voxel sandbox game inspired by Minecraft, built with vanilla JavaScript, Three.js, and Vite.

## Features

- **Infinite Procedurally Generated Worlds** - Explore unique biomes and terrain
- **Multiple Game Modes** - Survival, Creative, and Hardcore modes
- **Voxel Building System** - 100+ block types for unlimited creativity
- **Mining & Crafting** - Gather resources and craft tools
- **Combat System** - Fight mobs and epic bosses
- **Multiplayer Support** - Play with friends online
- **Redstone Engineering** - Build complex automated systems
- **Multiple Dimensions** - Overworld, Nether, and The End

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- A modern web browser with WebGL 2.0 support

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The game will be available at `http://localhost:5173/`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
keanu-web-game/
├── src/
│   ├── styles/
│   │   ├── main.css      # Home page styles
│   │   └── game.css      # Game page styles
│   ├── main.js           # Home page JavaScript
│   └── game.js           # Game logic and Three.js setup
├── index.html            # Home page
├── game.html             # Game page
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── GAME_DESIGN_DOCUMENT.md  # Comprehensive game design documentation

```

## Controls (Planned)

- **W/A/S/D** - Movement
- **Space** - Jump
- **Shift** - Sneak
- **E** - Inventory
- **1-9** - Hotbar selection
- **ESC** - Pause menu
- **Left Click** - Break block
- **Right Click** - Place block

## Technology Stack

- **Rendering**: Three.js (WebGL 2.0)
- **Build Tool**: Vite
- **Physics**: Custom voxel physics engine (planned)
- **Networking**: WebSockets for multiplayer (planned)
- **Storage**: IndexedDB for world data (planned)

## Development Status

This project is in early development. Currently implemented:

- Home page with feature showcase
- Basic game page with Three.js setup
- HUD elements (health, hunger, hotbar)
- Menu system
- Basic scene rendering

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## License

This project is for educational purposes. Minecraft is a trademark of Mojang Studios.

## Acknowledgments

- Inspired by Minecraft by Mojang Studios
- Built with Three.js
- Powered by Vite
