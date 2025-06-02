# Setup Guide

1. Clone the repository
2. Run backend services using Docker:
   ```
   cd backend
   docker compose up -d
   ```

3. Build and serve the frontend:
   ```
   cd frontend
   npm install
   npm run build
   npm install -g serve
   serve -s build -l 3000
   ```

4. Access services:
   - Frontend: http://localhost:3000
   - Kibana: http://localhost:5601
   - TheHive: http://localhost:9000
   - Cortex: http://localhost:9001
