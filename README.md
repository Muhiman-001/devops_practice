# Node.js MongoDB Docker Application

A containerized Node.js API with MongoDB using Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. Clone this repository:
```bash
git clone <your-repo-url>
cd <repo-directory>
```

2. Start the application:
```bash
docker compose up -d
```

This will start:
- MongoDB container on port 27017
- Node.js API container on port 3000

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Returns a hello message
- `GET /api/newtwo` - Returns "New Two" message
- `GET /api/newapi` - Returns a new hello message

## Test the API

```bash
# Health check
curl http://localhost:3000/health

# Hello endpoint
curl http://localhost:3000/api/hello

# Other endpoints
curl http://localhost:3000/api/newtwo
curl http://localhost:3000/api/newapi
```

## MongoDB Connection

The MongoDB container is configured with:
- Username: admin
- Password: password
- Database: mydatabase
- Port: 27017

Connection string: `mongodb://admin:password@localhost:27017/mydatabase?authSource=admin`

## Docker Images

Images are available on Docker Hub:
- API: `muhiman/node-mongo-api:latest`
- MongoDB: `mongodb/mongodb-community-server:latest`

## Project Structure

```
.
├── docker-compose.yml
├── Dockerfile
├── package.json
├── mongo-init.js
└── src/
    └── index.js
```

## Useful Commands

```bash
# Start containers
docker compose up -d

# Stop containers
docker compose down

# View logs
docker compose logs api
docker compose logs mongodb

# Access MongoDB shell
docker exec -it mongodb mongosh -u admin -p password

# Rebuild containers
docker compose up -d --build
```

## Environment Variables

- `PORT` - API port (default: 3000)
- `MONGODB_URI` - MongoDB connection string

## Development

To modify the application:
1. Update the code in `src/`
2. Rebuild the containers: `docker compose up -d --build`
3. Check the logs: `docker compose logs api`

## Troubleshooting

1. If MongoDB connection fails:
   - Check if MongoDB container is running
   - Verify credentials in docker-compose.yml
   - Check MongoDB logs

2. If API container fails:
   - Check API logs
   - Verify environment variables
   - Ensure all files are in correct locations