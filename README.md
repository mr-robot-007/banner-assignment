# React App with Supabase Authentication and Banner Management

# Link - [https://banner-assignment.web.app/]


This project is a React-based web application that includes: 
- **Supabase** for admin authentication and storing banner information.
- **React Hot Toast** for user notifications.
- Dynamic banner display with opacity controls.

## Screenshots
![Screenshot 2024-08-12 171956](https://github.com/user-attachments/assets/5cf2b953-9cc4-434c-9b44-9a7210d8e290)

![Screenshot 2024-08-12 171928](https://github.com/user-attachments/assets/df4eaee8-db56-4b2c-8da6-7feda499b053)
![Screenshot 2024-08-12 171939](https://github.com/user-attachments/assets/e22ee287-5a50-44e4-a21e-56e872d75d11)

## Prerequisites
- Node.js and npm installed
## Installation Steps

<p>1. Clone the Repository:</p>

```
git clone https://github.com/mr-robot-007/banner-assignment
```

<p>2. Navigate to the project directory:</p>

```
cd flynotify-frontend
```

<p>3. Install Dependencies:</p>

```
npm install
```
## Configuration

Create a .env file and add this variable
```
- VITE_SUPABASE_URL=
- VITE_SUPABASE_KEY=
```


## Running the Project
```
npm run dev
```
## Folder Structure
```
flynotify-frontend
├── .firebase
├── .github/workflows
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── helpers
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── .env
├── .eslintrc.cjs
├── .eslintrc.json
├── .firebasesrc
├── .gitignore
├── tailwind.config.jsj
├── package.json
├── README.md
└── vite.config.js
```
## Available Scripts
```
- npm run dev: Starts the development server.
- npm run build: Builds the app for production.
- npm run preview: Previews the production build.
```
## Notes
- Make sure the backend is running and accessible at the URL specified in the .env file.
- If you encounter any CORS issues, ensure that the backend is configured to allow requests from the frontend's domain.