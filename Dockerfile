FROM node:20

WORKDIR /app

# Copy only package files first
COPY package.json package-lock.json ./

# Install dependencies inside container
RUN npm install

# Now copy the rest of the project
COPY . .

# Build Vite app
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
