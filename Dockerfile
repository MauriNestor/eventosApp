# Usa una imagen base de Node.js 16 o superior
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Instalar las dependencias de React Navigation y TypeScript
RUN npm install @react-navigation/native \
                react-native-screens \
                react-native-safe-area-context \
                @react-navigation/native-stack \
                @react-navigation/bottom-tabs \
                @types/react-native

# Copiar el código de la aplicación al contenedor
COPY . .

# Exponer los puertos que utiliza Expo
EXPOSE 19000 19001 19002

# Usar npx expo para iniciar el servidor Metro en LAN
CMD ["npx", "expo", "start", "--lan", "--host", "0.0.0.0"]
