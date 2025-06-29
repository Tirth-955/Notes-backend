# Notes API

Notes API is a robust backend solution for managing your notes efficiently. Built with Node.js, Express, and MongoDB, it provides a RESTful API to perform CRUD operations on your notes.

## Features

- Create, Read, Update, and Delete notes.
- Secure API endpoints with rate limiting.
- MongoDB integration for data persistence.

## Technologies Used

- Node.js
- Express.js
- Mongoose (for MongoDB object modeling)
- Dotenv (for environment variables)
- Express-rate-limit (for rate limiting)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tirth-955/Notes-backend.git
   cd Notes-backend/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
   PORT=5001
   ```
   Replace `YOUR_MONGODB_CONNECTION_STRING` with your MongoDB connection string.

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:5001` (or the PORT you specified in `.env`).

## API Endpoints

The API base URL is `/api/notes`.

| Method | Endpoint      | Description           | Request Body (Example)                               |
| ------ | ------------- | --------------------- | ---------------------------------------------------- |
| `GET`  | `/api/notes`  | Get all notes         | None                                                 |
| `GET`  | `/api/notes/:id` | Get a note by ID      | None                                                 |
| `POST` | `/api/notes`  | Create a new note     | `{ "title": "My New Note", "content": "This is the content of my new note." }` |
| `PUT`  | `/api/notes/:id` | Update a note by ID   | `{ "title": "Updated Title", "content": "Updated content." }` |
| `DELETE`| `/api/notes/:id` | Delete a note by ID   | None                                                 |

## Note Model

A note object has the following structure:

| Field     | Type   | Description            |
| --------- | ------ | ---------------------- |
| `_id`     | `String` | Unique identifier for the note |
| `title`   | `String` | The title of the note  |
| `content` | `String` | The content of the note |
| `createdAt`| `Date`   | Timestamp of note creation |
| `updatedAt`| `Date`   | Timestamp of last update |

## Rate Limiting

To prevent abuse, the API has a rate limit of 100 requests per 15 minutes per IP address.

