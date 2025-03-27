# NoteNest---The-Note-Taking-App
The NoteNest App back-end is designed to offer users a reliable and secure environment for managing their personal notes.

NoteNest Backend

Overview
The backend for NoteNest is built using Node.js, Express.js, and MongoDB. It provides user authentication, note management, and secure API endpoints.

Features
User authentication (Register/Login) with JWT  
CRUD operations for notes (Create, Read, Update, Delete)  
Secure routes with middleware  
MongoDB with Mongoose for database management  
Express-validator for request validation  
Error handling for smooth user experience  

NoteNest Frontend

Overview
The frontend is built with React.js to interact with the backend API for managing user notes securely.

Features
User authentication (Login/Register)  
Secure API calls using JWT  
Add, view, and manage notes  
Responsive UI for easy navigation
frontend/
│── src/
│   │── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── NoteList.js
│   │   ├── AddNote.js
│   │── App.js
│   │── index.js
│   │── styles.css
│── public/
│── package.json
│── README.md
