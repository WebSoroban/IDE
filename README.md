# Web Soroban IDE

<div align="center">

![Web Soroban IDE](https://img.shields.io/badge/Web%20Soroban-IDE-blue?style=for-the-badge&logo=stellar)
![Stellar](https://img.shields.io/badge/Stellar-Soroban-green?style=for-the-badge&logo=stellar)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

**The Professional IDE for Stellar Soroban Smart Contract Development**

[![GitHub stars](https://img.shields.io/github/stars/WebSoroban/IDE?style=social)](https://github.com/WebSoroban/IDE)
[![GitHub forks](https://img.shields.io/github/forks/WebSoroban/IDE?style=social)](https://github.com/WebSoroban/IDE)
[![GitHub issues](https://img.shields.io/github/issues/WebSoroban/IDE)](https://github.com/WebSoroban/IDE/issues)
[![GitHub license](https://img.shields.io/github/license/WebSoroban/IDE)](https://github.com/WebSoroban/IDE/blob/main/LICENSE)

[🌐 Live Demo](https://websoroban.vercel.app) • [📖 Documentation](https://docs.websoroban.com) • [🐛 Report Bug](https://github.com/WebSoroban/IDE/issues)

</div>

---

## 🚀 Features

### ✨ Core Development Features
- **🖥️ Professional Code Editor**: Monaco Editor with Rust syntax highlighting and IntelliSense
- **📁 Advanced File Management**: Create, edit, delete, and organize project files with custom naming
- **🔧 Real-time Compilation**: Cloud-based WASM compilation with detailed build logs
- **🚀 One-click Deployment**: Deploy directly to Stellar testnet with automated configuration
- **💾 Auto-save**: Real-time file saving with project synchronization
- **📊 Project Analytics**: Track deployment history, contract addresses, and project statistics

### 🤖 AI-Powered Features
- **AI Copilot**: Intelligent code completion and contract generation
- **Smart Contract Templates**: Pre-audited templates for DeFi, NFTs, and governance
- **Security Audits**: AI-powered vulnerability detection and static analysis
- **Code Suggestions**: Context-aware recommendations for Soroban patterns

### 🧪 Testing & Quality Assurance
- **Inline Testing**: Run unit and integration tests directly in the browser
- **Dynamic Test Analysis**: Real-time contract structure analysis and validation
- **Performance Monitoring**: Gas estimation and optimization suggestions
- **Security Checks**: Comprehensive security validation and vulnerability scanning

### 🔗 Stellar Integration
- **Wallet Connection**: Seamless integration with Freighter and other Stellar wallets
- **Network Management**: Support for testnet and mainnet deployment
- **Contract Verification**: Automatic contract verification on Stellar Expert
- **Transaction History**: Complete deployment and transaction tracking

### 🛠️ Developer Experience
- **Modern UI**: Professional dark theme with responsive design
- **Real-time Logs**: Live compilation and deployment logs with syntax highlighting
- **Project Dashboard**: Comprehensive project information and statistics
- **Mobile Responsive**: Full functionality on desktop and mobile devices

## 🏗️ Architecture

### Frontend Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Monaco Editor** - Professional code editor
- **Radix UI** - Accessible component library
- **Sonner** - Toast notifications
- **Lucide React** - Beautiful icons

### Backend Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Docker** - Containerized compilation environment

### Stellar Integration
- **Soroban SDK** - Stellar smart contract development
- **Stellar CLI** - Command-line interface for deployment
- **Horizon API** - Stellar network interaction
- **Freighter API** - Wallet integration

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** - JavaScript runtime
- **MongoDB** - Database (local or cloud)
- **npm/pnpm** - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/WebSoroban/IDE.git
cd IDE
```

2. **Install dependencies:**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Set up environment variables:**
```bash
# Backend environment
cd backend
cp env.example .env
# Edit .env with your MongoDB URI and other configurations
```

4. **Start MongoDB:**
```bash
# Option 1: Local MongoDB
brew services start mongodb-community  # macOS
# or
sudo systemctl start mongod           # Linux

# Option 2: MongoDB Atlas (recommended)
# Create a free cluster at https://cloud.mongodb.com
```

5. **Start the development servers:**
```bash
# From the root directory
npm run dev

# Or start individually:
npm run dev:frontend  # Frontend on http://localhost:3000
npm run dev:backend   # Backend on http://localhost:3001
```

6. **Open your browser:**
```
Frontend: http://localhost:3000
Backend API: http://localhost:3001
```

## 📁 Project Structure

```
IDE/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── page.tsx        # Landing page
│   │   ├── ide/            # IDE pages
│   │   └── globals.css     # Global styles
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── navbar.tsx      # Top navigation bar
│   │   ├── sidebar.tsx     # File explorer sidebar
│   │   ├── editor-panel.tsx # Monaco editor component
│   │   ├── right-panel.tsx # Project info panel
│   │   └── bottom-panel.tsx # Logs and output panel
│   ├── lib/                # Utilities and API clients
│   ├── hooks/              # Custom React hooks
│   └── public/             # Static assets
├── backend/                 # Node.js backend server
│   ├── models/             # MongoDB schemas
│   │   └── Project.js      # Project model
│   ├── routes/             # API routes
│   │   ├── projects.js     # Project CRUD operations
│   │   ├── compile.js      # Compilation API
│   │   └── deploy.js       # Deployment API
│   ├── services/           # Business logic
│   │   ├── compilationService.js
│   │   └── deploymentService.js
│   ├── scripts/            # Build and deployment scripts
│   └── server.js           # Express server entry point
├── .gitignore              # Git ignore rules
├── package.json            # Root package configuration
└── README.md              # Project documentation
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

## 🔌 API Reference

### Projects API
```http
GET    /api/projects          # List all projects
POST   /api/projects          # Create new project
GET    /api/projects/:id      # Get single project
PUT    /api/projects/:id      # Update project
DELETE /api/projects/:id      # Delete project
```

### Compilation API
```http
POST /api/compile             # Compile Rust to WASM
```
**Request Body:**
```json
{
  "projectId": "string",
  "files": [
    {
      "name": "lib.rs",
      "content": "#![no_std]..."
    }
  ]
}
```

### Deployment API
```http
POST /api/deploy              # Deploy contract to Stellar
```
**Request Body:**
```json
{
  "projectId": "string",
  "wasmBase64": "string",
  "network": "testnet"
}
```

## 🎯 Usage Guide

### Getting Started
1. **Visit the IDE**: Navigate to `http://localhost:3000/ide`
2. **Create a Project**: Use the project selector in the navbar to create a new project
3. **Edit Files**: Click on files in the sidebar to edit them in the Monaco editor
4. **Custom File Names**: Use the "New File" button to create files with custom names
5. **Auto-save**: Files are automatically saved as you type

### Development Workflow
1. **Write Code**: Use the Monaco editor with Rust syntax highlighting
2. **Test Contracts**: Use the "Test Contract" feature in the right panel
3. **Compile**: Click the "Compile" button to compile your Rust code to WASM
4. **Deploy**: Click the "Deploy" button to deploy your contract to Stellar testnet
5. **Monitor**: Check the bottom panel for real-time compilation and deployment logs
6. **Track**: View project metadata and deployment history in the right panel

### Advanced Features
- **File Management**: Create, edit, delete files with custom naming
- **Project Analytics**: Track deployment history, contract addresses, and statistics
- **Network Status**: Monitor Stellar network connectivity
- **Wallet Integration**: Connect with Freighter wallet for deployments
- **Real-time Logs**: Live compilation and deployment feedback

## 🛠️ Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start Next.js development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend
npm run dev          # Start Express development server
npm run start        # Start production server
npm run test         # Run tests
```

### Database Setup
The backend uses MongoDB. You can use:
- **Local MongoDB**: Install and run locally
- **MongoDB Atlas**: Cloud-hosted MongoDB (recommended)
- **Docker**: `docker run -d -p 27017:27017 mongo:latest`

### Environment Variables
Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/websoroban
PORT=3001
NODE_ENV=development
```

## 🚧 Current Status

### ✅ Implemented Features
- **Professional IDE Interface**: Modern dark theme with responsive design
- **File Management**: Create, edit, delete files with custom naming
- **Real-time Compilation**: Cloud-based WASM compilation with detailed logs
- **Deployment System**: Deploy contracts to Stellar testnet
- **Project Analytics**: Track deployment history and contract addresses
- **Wallet Integration**: Connect with Freighter wallet
- **Testing Framework**: Dynamic contract testing and validation
- **Mobile Responsive**: Full functionality on all devices

### 🔄 In Progress
- **AI Copilot**: Intelligent code completion and suggestions
- **Security Audits**: AI-powered vulnerability detection
- **Template Marketplace**: Pre-audited contract templates
- **Performance Optimization**: Enhanced compilation and deployment speed

### 📋 Planned Features
- **Real-time Collaboration**: Multi-user editing and collaboration
- **Advanced Testing**: Comprehensive test suites and debugging
- **Mainnet Support**: Production deployment capabilities
- **User Authentication**: User accounts and project ownership
- **API Documentation**: Comprehensive API documentation
- **Plugin System**: Extensible architecture for custom features
- **Advanced Analytics**: Detailed project metrics and insights

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests if applicable
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines
- **Code Style**: Follow the existing code style and conventions
- **Testing**: Add tests for new features and ensure all tests pass
- **Documentation**: Update documentation for any new features
- **Commits**: Use conventional commit messages
- **Issues**: Check existing issues before creating new ones

### Areas for Contribution
- **Frontend**: React components, UI/UX improvements
- **Backend**: API endpoints, business logic, database models
- **Stellar Integration**: Soroban SDK integration, wallet features
- **Documentation**: API docs, tutorials, guides
- **Testing**: Unit tests, integration tests, E2E tests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Stellar Development Foundation** for the Soroban platform
- **Next.js Team** for the amazing React framework
- **Monaco Editor** for the professional code editing experience
- **Tailwind CSS** for the utility-first CSS framework
- **All Contributors** who help make this project better

## 📞 Support

- **Documentation**: [docs.websoroban.com](https://docs.websoroban.com)
- **Issues**: [GitHub Issues](https://github.com/WebSoroban/IDE/issues)
- **Discussions**: [GitHub Discussions](https://github.com/WebSoroban/IDE/discussions)
- **Discord**: [Join our community](https://discord.gg/websoroban)

---

<div align="center">

**Made with ❤️ by the Web Soroban Team**

[![GitHub stars](https://img.shields.io/github/stars/WebSoroban/IDE?style=social)](https://github.com/WebSoroban/IDE)
[![GitHub forks](https://img.shields.io/github/forks/WebSoroban/IDE?style=social)](https://github.com/WebSoroban/IDE)
[![GitHub issues](https://img.shields.io/github/issues/WebSoroban/IDE)](https://github.com/WebSoroban/IDE/issues)
[![GitHub license](https://img.shields.io/github/license/WebSoroban/IDE)](https://github.com/WebSoroban/IDE/blob/main/LICENSE)

</div>

