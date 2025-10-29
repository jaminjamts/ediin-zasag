# News Service API

A RESTful API service built with Express.js for managing news articles and users.

## Features

- 🚀 Express.js backend with modern middleware
- 📰 News article management (CRUD operations)
- 👥 User management system
- 🔒 Security headers with Helmet
- 🌐 CORS enabled
- 📊 Request logging with Morgan
- 🏥 Health check endpoint
- 📝 Environment configuration

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base Routes
- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api` - API information

### News Endpoints
- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get specific article
- `POST /api/news` - Create new article
- `PUT /api/news/:id` - Update article
- `DELETE /api/news/:id` - Delete article

### User Endpoints
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Query Parameters

### News API
- `category` - Filter by category
- `limit` - Number of results (default: 10)
- `offset` - Skip results (default: 0)

### Users API
- `role` - Filter by role
- `limit` - Number of results (default: 10)
- `offset` - Skip results (default: 0)

## Example Usage

### Get all news articles
```bash
curl http://localhost:3000/api/news
```

### Get news with pagination
```bash
curl "http://localhost:3000/api/news?limit=5&offset=0"
```

### Create a new article
```bash
curl -X POST http://localhost:3000/api/news \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Breaking News",
    "content": "This is the article content...",
    "author": "John Doe",
    "category": "Technology"
  }'
```

## Project Structure

```
service/
├── routes/
│   ├── index.js      # Main router
│   ├── news.js       # News routes
│   └── users.js      # User routes
├── server.js         # Main server file
├── package.json      # Dependencies and scripts
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

## Development

The project uses nodemon for automatic server restarts during development. Any changes to the server files will automatically restart the server.

## Security

- Helmet.js for security headers
- CORS enabled for cross-origin requests
- Input validation on all endpoints
- Error handling middleware

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication and authorization
- Rate limiting
- API documentation with Swagger
- Unit and integration tests
- Docker containerization
