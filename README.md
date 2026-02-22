✅ To-Do List REST API

Node.js | Express.js | RESTful Architecture

A beginner-friendly RESTful To-Do List API built using Node.js and Express.js that supports full CRUD operations (Create, Read, Update, Delete).
This project demonstrates proper routing, clean code practices, and centralized error handling using a custom HttpError class.

🚀 Features

🏠 Home route with welcome message

📋 Retrieve all to-do items

🔍 Retrieve a single to-do by ID

➕ Create a new to-do

✏️ Partially update a to-do (PATCH)

🔁 Fully replace a to-do (PUT)

❌ Delete a to-do

⚠️ Centralized custom error handling middleware

🧠 Clean, modular, and beginner-friendly structure

🛠️ Tech Stack

Runtime: Node.js

Framework: Express.js

API Style: REST

Data Storage: In-memory array (for learning purposes)

Testing Tools: Pos
tman / Thunder Client

 Postman API Testing
📸 Screenshots
HOME 

<img width="1280" height="832" alt="home" src="https://github.com/user-attachments/assets/cc78f424-3d26-4167-9f0b-5413c7f91c1b" />
UNDEFINED ROUTE HANDLING

<img width="1280" height="832" alt="route_handling" src="https://github.com/user-attachments/assets/19e55a14-21c5-4195-9a09-1a3299c8aef4" />
GET ALL TODOS

<img width="1280" height="832" alt="alltodos" src="https://github.com/user-attachments/assets/04c74b2b-82fd-4208-8120-49a3ae119057" />
GET TODO BY ID

<img width="1280" height="832" alt="getbyid" src="https://github.com/user-attachments/assets/a13f3a14-a77e-46db-9c9b-29fc271b7e9c" />
CREATE TODO

<img width="1280" height="832" alt="create-todo" src="https://github.com/user-attachments/assets/a9a29149-9db3-4472-8256-1e5519aa6eb3" />
UPDATE TODO(PATCH)

<img width="1280" height="832" alt="update-patch" src="https://github.com/user-attachments/assets/0a50069d-0da9-4fdf-b895-be041e8781f8" />

UPDATE TODO(PUT)

<img width="1280" height="832" alt="update-put" src="https://github.com/user-attachments/assets/2f555567-8311-41a9-9820-d5e013e322f7" />
DELETE TODO

<img width="1280" height="832" alt="delete" src="https://github.com/user-attachments/assets/cffccb77-9252-4d21-8219-9c152078ed62" />


📁 Project Structure
TO-DO-LIST/
│
├── middleware/
│   └── httpError.js
│
├── app.js
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/todo-api.git
2️⃣ Navigate to project folder
cd todo-api
3️⃣ Install dependencies
npm install
4️⃣ Start the server
npm run dev

Server will start at:

http://localhost:5001

📌 API Endpoints
🏠 Home Route
GET /
📋 Get All Todos
GET /todos
🔍 Get Todo by ID
GET /todos/:id
➕ Create Todo
POST /todos

Request Body (JSON)

{
  "title": "Learn Express",
  "description": "Understand routing and middleware"
}
✏️ Update Todo (PATCH)
PATCH /todos/:id

Request Body (JSON)

{
  "title": "Updated title",
  "description": "Updated description"
}
🔁 Replace Todo (PUT)
PUT /todos/:id

Request Body (JSON)

{
  "title": "New title",
  "description": "New description"
}
❌ Delete Todo
DELETE /todos/:id
🧪 API Testing

All endpoints were tested using:

Postman

Thunder Client

Screenshots of API testing are available inside the project.

🧠 Learning Outcomes

Understanding RESTful API design

Implementing CRUD operations

Using Express routing and middleware

Creating reusable custom error classes

Structuring backend projects cleanly


🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss improvements.

📄 License

This project is open-source and available under the MIT License.
