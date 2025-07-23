# CogniFlow – Task Manager Frontend

A modern, full-featured task and project management web application built with React, Vite, and a modular, scalable architecture.

---

## 🚀 Features

- **User Authentication**: Secure signup, login, password reset, and role-based access control (admin, user).
- **Dashboard**: Centralized admin dashboard for managing users, workspaces, projects, and tickets.
- **Workspaces**: Create, view, update, and delete collaborative workspaces.
- **Projects**: Organize workspaces into projects, with full CRUD support.
- **Tickets**: Track issues, tasks, and bugs within projects. Assign, update, and resolve tickets.
- **User Management**: Admins can manage users, roles, and permissions.
- **Responsive UI**: Clean, modern interface with reusable components and context-driven state management.
- **Error Handling**: Custom error pages for 401, 403, and 404 states.
- **File Uploads**: Upload and manage user profile pictures.
- **Protected & Public Routes**: Route guards for authentication and role-based access.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, React Router
- **State Management**: React Context API, custom hooks
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Build Tool**: Vite

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/           # Static images and icons
│   ├── components/       # Reusable UI components
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page-level components (auth, dashboard, error, etc.)
│   ├── routes/           # App route definitions
│   ├── services/         # API and backend service logic
│   ├── utils/            # Utility functions and helpers
│   └── index.css         # Global styles
├── index.html            # Main HTML entry point
├── package.json          # Project metadata and scripts
└── vite.config.js        # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/arunav999/CogniFlow-frontend.git
   cd CogniFlow-frontend/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and configure backend URLs and keys as needed.

### Running the App

```sh
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

---

## 📦 Scripts

- `dev` – Start the development server
- `build` – Build for production
- `preview` – Preview the production build
- `lint` – Run ESLint

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

---

## 📝 License

This project is licensed under the MIT License.

---

## 👤 Author

- Arunav ([@arunav999](https://github.com/arunav999))

---

## 🌐 Backend

See the [CogniFlow backend repository](https://github.com/arunav999/CogniFlow-backend) for API and server details.

---

## 📣 Acknowledgements

- React, Vite, and the open-source community
- All contributors and testers
