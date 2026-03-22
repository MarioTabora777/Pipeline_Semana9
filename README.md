# Pipeline Demo

![CI Pipeline](https://github.com/MarioTabora777/Pipeline_Semana9/actions/workflows/ci.yml/badge.svg)

Proyecto demostrativo de CI/CD con GitHub Actions para la clase de Sistemas Operativos.

## Requisitos

- Node.js 18 o 20
- npm

## Instalacion

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
cd TU-REPOSITORIO

# Instalar dependencias
npm install
```

## Ejecucion Local

### Ejecutar pruebas
```bash
npm test
```

### Ejecutar pruebas con cobertura
```bash
npm run test:coverage
```

### Ejecutar linting
```bash
npm run lint
```

## Estructura del Proyecto

```
Pipeline_Semana9/
├── .github/
│   └── workflows/
│       └── ci.yml        # Workflow de CI
├── src/
│   └── utils.js          # Funciones de utilidad
├── tests/
│   └── utils.test.js     # Pruebas unitarias
├── package.json
├── jest.config.js
└── .eslintrc.js
```

## Pipeline CI/CD

El workflow se ejecuta en:
- Push a la rama `main`
- Pull requests hacia `main`

### Jobs

| Job | Descripcion |
|-----|-------------|
| **lint** | Valida el codigo con ESLint |
| **test** | Ejecuta pruebas en matriz (Node 18/20 + Ubuntu/Windows) |
| **build** | Verifica que el proyecto compile correctamente |

## Cobertura de Pruebas

El proyecto mantiene una cobertura minima del 80%.
