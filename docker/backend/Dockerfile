# ======================================
# Run time image (production)
# ======================================

FROM node:18-alpine

# ------ Security: Create non-root user ------

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# ------ Set working directory -----

WORKDIR /app

# ------ Copy dependency metadata first (layer caching) ------
    
COPY package*.json ./

# ------ install only production dependency ------

RUN npm install --production && npm chace clean --force

# ------ Copy the application source code -------

COPY backend/src ./src

# ------ Fix the permission for non-root user ------

RUN chown -R appuser:appgroup /app

# ------ Drop root privileges ------

USER appuser

# ------ Expose application port ------

EXPOSE 5000

# ------ Start the application ------

CMD ["node", "src/server.js"]