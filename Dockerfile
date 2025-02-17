# Etapa 1: Compilación
FROM node:20-alpine AS dev-deps

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Producción
FROM nginx:alpine
COPY --from=dev-deps /app/dist/manga-man/browser /usr/share/nginx/html

# Verificar si el archivo index.csr.html existe y renombrarlo a index.html
RUN if [ -f /usr/share/nginx/html/index.csr.html ]; then mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html; fi

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
