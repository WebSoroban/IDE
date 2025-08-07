# WebSoroban IDE

A web-based IDE for developing Stellar Rust Soroban smart contracts, built with Next.js, Monaco Editor, and Node.js backend.

## Features

- **File Explorer**: Browse and edit project files
- **Monaco Editor**: Full-featured code editor with Rust syntax highlighting
- **Project Management**: Create, edit, and manage multiple projects
- **Compilation**: Mock compilation with detailed logs
- **Deployment**: Mock deployment to Soroban network
- **Real-time Saving**: Automatic file saving to backend
- **Project History**: Track deployment history and contract addresses

## Tech Stack

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Monaco Editor** - Code editor
- **Radix UI** - Component library
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin support

## Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- npm or pnpm

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd websoroban-ide
npm run install:all
```

2. **Set up environment variables:**
```bash
# Backend
cd backend
cp env.example .env
# Edit .env with your MongoDB URI
```

3. **Start MongoDB** (if running locally):
```bash
# macOS with Homebrew
brew services start mongodb-community

# Or use MongoDB Atlas (cloud)
```

4. **Start the development servers:**
```bash
# Start both frontend and backend
npm run dev

# Or start individually:
npm run dev:frontend  # Frontend on http://localhost:3000
npm run dev:backend   # Backend on http://localhost:3001
```

## Project Structure

```
websoroban-ide/
├── frontend/                 # Next.js frontend
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── navbar.tsx      # Top navigation
│   │   ├── sidebar.tsx     # File explorer
│   │   ├── editor-panel.tsx # Monaco editor
│   │   ├── right-panel.tsx # Project info
│   │   └── bottom-panel.tsx # Logs/output
│   ├── lib/                # Utilities and API
│   └── styles/             # Global styles
├── backend/                 # Node.js backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   │   ├── projects.js     # Project CRUD
│   │   ├── compile.js      # Compilation API
│   │   └── deploy.js       # Deployment API
│   └── server.js           # Express server
└── README.md
```

## API Endpoints

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get single project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Compilation
- `POST /api/compile` - Mock compilation (returns logs and WASM URL)

### Deployment
- `POST /api/deploy` - Mock deployment (returns logs and contract address)

## Usage

1. **Create a Project**: Use the project selector in the navbar to create a new project
2. **Edit Files**: Click on files in the sidebar to edit them in the Monaco editor
3. **Save Changes**: Files are automatically saved as you type
4. **Compile**: Click the "Compile" button to compile your Rust code
5. **Deploy**: Click the "Deploy" button to deploy your contract
6. **View Logs**: Check the bottom panel for compilation and deployment logs
7. **Project Info**: View project metadata and deployment history in the right panel

## Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

### Database
The backend uses MongoDB. You can use:
- **Local MongoDB**: Install and run locally
- **MongoDB Atlas**: Cloud-hosted MongoDB
- **Docker**: `docker run -d -p 27017:27017 mongo:latest`

## Future Enhancements

- **Real Rust Compilation**: Dockerized Rust worker with Soroban SDK
- **Real Deployment**: Integration with Soroban CLI and Horizon API
- **Wallet Integration**: Freighter wallet connection for Stellar accounts
- **Multi-file Support**: Better project structure with Cargo.toml
- **Testing**: Unit and integration tests for Soroban contracts
- **User Authentication**: User accounts and project ownership
- **Collaboration**: Real-time collaboration features
- **Soroban Network Integration**: Support for both testnet and mainnet

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

