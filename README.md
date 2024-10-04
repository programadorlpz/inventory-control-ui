
# Aplicación Angular - Sistema de Inventario Automotriz

Esta aplicación Angular permite gestionar el inventario automotriz, ofreciendo interfaces para roles de administrador, asesor de ventas y soporte.

## Requisitos Previos
- Node.js y npm (o Yarn).
- Angular CLI.

## Instalación del Proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/inventory-control-app.git
   cd inventory-control-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración del Proyecto
1. Asegúrate de que el API web está corriendo en `http://localhost:8080`.
2. Configura el archivo `environment.ts` si es necesario para la URL base de la API.

## Ejecución del Proyecto
1. Ejecuta la aplicación:
   ```bash
   ng serve
   ```

2. Accede a la aplicación en `http://localhost:4200`.

## Características
- **Administrador**: Gestiona usuarios, roles y productos.
- **Asesor de Ventas**: Asigna mercancías a clientes.
- **Soporte**: Gestiona solicitudes de soporte.

## Estructura del Proyecto
```
src/
├── app/
│   ├── components/
│   │   ├── administrator/
│   │   ├── sales-advisor/
│   │   └── support/
│   └── services/
│       └── api.service.ts
└── assets/
```

## Licencia
Este proyecto está bajo la Licencia MIT.
