# # Usa una imagen base de Node.js 16 o superior
# FROM node:16

# # Establecer el directorio de trabajo dentro del contenedor
# WORKDIR /app

# # Copiar el archivo package.json y package-lock.json al contenedor
# COPY package*.json ./

# # Instalar las dependencias del proyecto
# RUN npm install

# # Copiar el resto del código de la aplicación al contenedor
# COPY . .

# # Exponer los puertos que utiliza Expo
# EXPOSE 19000 19001 19002

# # Usar npx expo para iniciar el servidor Metro en modo túnel
# CMD ["npx", "expo", "start", "--tunnel"]
