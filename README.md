# MyNotes - React Notes App

A simple, elegant notes application built with React and JSON Server.

## Features

- ✨ Create, read, update, and delete notes
- 🎨 Modern, dark-themed UI
- 📱 Responsive design
- ⚡ Fast and lightweight
- 💾 Persistent data storage with JSON Server

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** JSON Server
- **Styling:** CSS with custom dark theme

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd mynotes
```

2. Install dependencies:

```bash
npm install
```

3. Start the JSON Server (Terminal 1):

```bash
npm run server
```

4. Start the React app (Terminal 2):

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` - Start the React development server
- `npm run server` - Start JSON Server on port 5001
- `npm run build` - Build the app for production
- `npm run serve` - Serve the production build locally
- `npm test` - Run tests

## Project Structure

```
mynotes/
├── public/          # Static files
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── assets/      # Images and icons
│   ├── config.js    # API configuration
│   └── App.js       # Main app component
├── db.json          # JSON Server database
└── package.json     # Dependencies and scripts
```

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:5001
```

For production, set `REACT_APP_API_URL` to your deployed backend URL.

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions to various platforms:

- Vercel (Frontend) + Railway (Backend)
- Netlify (Frontend) + Render (Backend)
- Full stack on Railway
- Full stack on Render

## License

MIT
