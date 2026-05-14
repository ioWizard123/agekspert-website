# Teta Stranica

A website built with Ruflo coordination.

## Project Structure

```
├── src/
│   ├── index.html      # Main HTML file
│   ├── styles/         # CSS files
│   └── js/             # JavaScript files
├── scripts/            # Build & development scripts
├── tests/              # Test files
├── dist/               # Build output
├── .claude/            # Claude Code configuration
└── package.json        # Project metadata
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000`

### Build

```bash
npm run build
```

Output goes to `dist/`

### Production

```bash
npm start
```

Serves the built files from `dist/`

### Testing

```bash
npm test
```

## Ruflo Integration

This project uses Ruflo for coordinated multi-agent development:

- **Swarm Topology**: hierarchical-mesh (anti-drift)
- **Max Agents**: 8
- **Memory**: HNSW vector search enabled
- **Strategy**: Specialized agent routing

### Agent Workflows

For complex features, use coordinated agents:

```
researcher → architect → coder → tester → reviewer
```

All agents coordinate via SendMessage, not polling.

## Configuration

- `.claude/settings.json` — Ruflo & Claude Code settings
- `package.json` — Dependencies & scripts

## Next Steps

1. Customize `src/index.html`, `src/styles/main.css`, `src/js/main.js`
2. Add dependencies as needed: `npm install [package]`
3. For complex features, use Ruflo agent coordination
4. Build and deploy to `dist/`
