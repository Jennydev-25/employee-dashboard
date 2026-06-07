# ⚓ Crewly · Employee Admin Dashboard

_"Un buen equipo empieza por conocer a sus personas."_

---

## 📖 Descripción

Este proyecto forma parte de un ejercicio del bootcamp de desarrollo web en **Factoría F5**. El reto es construir una **aplicación web dinámica** de tipo **dashboard administrativo** para la gestión de empleados.

La aplicación permite el acceso mediante **login seguro**, muestra un **listado de empleados** obtenido de una API externa, permite **filtrarlos por la inicial del nombre** y consultar el **detalle de cada uno**. La sesión se gestiona con `localStorage`.

Lo he desarrollado con **HTML5 semántico**, **CSS3 modular con BEM y nesting nativo**, **JavaScript vanilla ES6+ con ES Modules** y tests unitarios con **Vitest** siguiendo **TDD** y tests E2E con **Playwright**, aplicando arquitectura modular, diseño **mobile-first**, **GitFlow** y gestión del proyecto con **Jira**.

---

## 🔍 Análisis

Antes de comenzar el desarrollo analicé los requisitos funcionales e identifiqué las funcionalidades principales:

- Acceso mediante login con validación de email y contraseña
- Persistencia de sesión con `localStorage` y protección de ruta
- Consumo de API REST externa con `fetch`, `async/await` y manejo de errores
- Renderizado dinámico de tarjetas de empleados con `forEach()`
- Filtrado interactivo por letra A-Z con `filter()`
- Vista de detalle completa por empleado
- Estados de carga, error y estado vacío
- Tests unitarios con Vitest (TDD) y tests E2E con Playwright

---

## 🎨 Identidad visual

Antes de empezar a programar definí la identidad visual del proyecto.

**Nombre:** Crewly — combina _crew_ (tripulación/equipo en inglés) con la terminación _-ly_, típica de productos de software modernos.

**Concepto:** Náutico = tripulación = equipo. Una estética náutica aplicada a un entorno profesional y minimalista.

**Logotipo:** Una rueda de timón vista de frente — estilo de línea limpia y geométrica, flat design. Evoca _crew_ (tripulación/equipo) por el rollo náutico.

**Paleta de color:**

| Nombre                          |    HEX    |
| :------------------------------ | :-------: |
| Teal — color principal de marca | `#0d9488` |
| Teal oscuro — hover y bordes    | `#0f766e` |
| Teal claro — fondos y estados   | `#ccfbf1` |
| Blanco — superficies            | `#ffffff` |
| Gris oscuro — textos            | `#1e293b` |
| Rojo — errores y alertas        | `#dc2626` |

**Tipografía:** Inter de Google Fonts — sans-serif moderna, limpia y muy legible en interfaces de producto.

---

## 📐 Planificación

Proyecto gestionado con **Jira** bajo metodología **Scrum** — Sprint de 1 semana.

🔗 Ver tablero en Jira → _pendiente_

📸 Capturas de Jira:

| 📋 Backlog  | 🗂️ Tablero  |
| :---------: | :---------: |
| _pendiente_ | _pendiente_ |

| 📅 Cronograma |     |
| :-----------: | :-: |
|  _pendiente_  |     |

Estructura de archivos del proyecto:

- **`index.html`** — página de login, punto de entrada de la app
- **`main.js`** — orquestador principal, detecta la página activa y lanza la lógica correspondiente
- **`package.json`** — dependencias y scripts del proyecto
- **`.env/`** — archivos de entorno locales, no se suben a GitHub:
  - `admin.json` → credenciales del administrador
  - `users.json` → datos de empleados del bootcamp
- **`config/`** — configuraciones de herramientas:
  - `vitest.config.js` → configuración de tests unitarios
  - `playwright.config.js` → configuración de tests E2E
- **`src/pages/`** — páginas adicionales:
  - `dashboard.html` → panel principal de empleados
- **`src/scripts/`** — lógica dividida por responsabilidad:
  - `auth.js` → autenticación, validación y gestión de sesión
  - `api.js` → consumo de la API REST externa
  - `ui.js` → manipulación del DOM y renderizado
  - `filter.js` → lógica de filtrado de empleados
- **`src/styles/`** — estilos modulados con metodología BEM:
  - `main.css` → punto de entrada, solo `@import`
  - `base/` → `variables.css`, `reset.css`, `typography.css`
  - `layout/` → `header.css`
  - `components/` → `button.css`, `form.css`, `card.css`, `detail.css`, `filter.css`, `loading.css`, `error.css`, `empty-state.css`
  - `pages/` → `login.css`, `dashboard.css`
- **`src/assets/imgs/`** — recursos gráficos
- **`tests/unit/`** — tests unitarios con Vitest:
  - `auth.test.js` → tests de `validateEmail` y `validatePassword`
  - `filter.test.js` → tests de `filterByLetter`
- **`tests/e2e/`** — tests de extremo a extremo con Playwright:
  - `login.spec.js` → flujo de login
  - `logout.spec.js` → flujo de logout

---

## ♿ Accesibilidad

- HTML semántico: `header`, `main`, `section`, `article`, `nav`, `footer`
- Atributos `for`, `id` y `aria-describedby` en los inputs del formulario
- `aria-live` en el contenedor de empleados para lectores de pantalla
- `aria-hidden` en iconos decorativos de Material Symbols
- `aria-label` dinámico en el toggle de contraseña
- Textos alternativos en todos los avatares
- Contraste visual adecuado
- Navegación clara y botones identificables

---

## 🗺️ Userflow

Diseñado en FigJam antes del desarrollo para mapear las tres rutas posibles del usuario.

🔗 Ver userflow en FigJam → _pendiente_

**Ruta principal:** Inicio → Login → Validación → Dashboard → Detalle → Filtro → Logout

**Ruta alternativa 1:** Sesión activa → Saltar login → Dashboard directo

**Ruta alternativa 2:** Credenciales incorrectas → Error → Volver al login

---

## 🎨 Prototipo y diseño

### Prototipos · Stitch

🔗 Ver prototipo login en Stitch → _pendiente_

🔗 Ver prototipo dashboard en Stitch → _pendiente_

| 🔐 Login · Mobile | 🔐 Login · Desktop |
| :---------------: | :----------------: |
|    _pendiente_    |    _pendiente_     |

| 📊 Dashboard · Mobile | 📊 Dashboard · Desktop |
| :-------------------: | :--------------------: |
|      _pendiente_      |      _pendiente_       |

### Mockups · Alta fidelidad

🔗 Ver mockups en Figma → _pendiente_

| 🔐 Login · Mobile | 🔐 Login · Desktop |
| :---------------: | :----------------: |
|    _pendiente_    |    _pendiente_     |

| 📊 Dashboard · Mobile | 📊 Dashboard · Desktop |
| :-------------------: | :--------------------: |
|      _pendiente_      |      _pendiente_       |

| 🃏 Detalle empleado · Mobile | 🃏 Detalle empleado · Desktop |
| :--------------------------: | :---------------------------: |
|         _pendiente_          |          _pendiente_          |

---

## 👤 Historias de usuario y criterios de aceptación

---

### HU-01 — Login con credenciales válidas

- **Como** administrador
- **Quiero** introducir mi email y contraseña para acceder al dashboard
- **Para** poder gestionar la información de los empleados de forma segura

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Login exitoso con credenciales correctas**
  - **Dado** que estoy en la página de login
  - **Cuando** introduzco el email y contraseña que están en admin.json y hago clic en el botón "Iniciar sesión"
  - **Entonces** accedo al dashboard y mi sesión queda guardada en localStorage
- **Escenario 2: Campos vacíos al intentar enviar**
  - **Dado** que estoy en la página de login
  - **Cuando** dejo el campo email o contraseña vacíos y hago clic en el botón "Iniciar sesión"
  - **Entonces** el formulario no se envía y se muestran mensajes de error en los campos vacíos

</details>

---

### HU-02 — Validación visual del formulario de login

- **Como** administrador
- **Quiero** recibir mensajes de error claros cuando mis credenciales no tienen el formato correcto
- **Para** saber exactamente qué debo corregir antes de intentar acceder

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Email con formato inválido**
  - **Dado** que estoy en la página de login
  - **Cuando** introduzco un email sin "@" o sin dominio y hago clic en "Iniciar sesión"
  - **Entonces** se muestra el mensaje "Introduce un email válido" bajo el campo email y el campo se marca con borde rojo
- **Escenario 2: Contraseña con menos de 8 caracteres**
  - **Dado** que estoy en la página de login
  - **Cuando** introduzco una contraseña con menos de 8 caracteres
  - **Entonces** se muestra el mensaje "Mínimo 8 caracteres" bajo el campo contraseña y el campo se marca con borde rojo
- **Escenario 3: Contraseña sin ningún dígito**
  - **Dado** que estoy en la página de login
  - **Cuando** introduzco una contraseña sin ningún número
  - **Entonces** se muestra el mensaje "Debe contener al menos un número" y el campo se marca con borde rojo
- **Escenario 4: Credenciales incorrectas con formato válido**
  - **Dado** que estoy en la página de login
  - **Cuando** introduzco credenciales con formato válido pero que no coinciden con admin.json
  - **Entonces** se muestra el mensaje "Credenciales incorrectas" y los campos no se limpian
- **Escenario 5: Error corregido por el usuario**
  - **Dado** que se muestra un error de validación en un campo
  - **Cuando** el usuario corrige el valor
  - **Entonces** el mensaje de error desaparece y el borde del campo vuelve a su color normal

</details>

---

### HU-03 — Persistencia de sesión y redirección automática

- **Como** administrador
- **Quiero** que si ya tengo sesión activa no me pidan volver a hacer login
- **Para** no tener que autenticarme cada vez que recargo la página

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Sesión activa al acceder a la página de login**
  - **Dado** que tengo una sesión activa guardada en localStorage
  - **Cuando** accedo directamente a la URL del login
  - **Entonces** soy redirigido automáticamente al dashboard sin ver el formulario
- **Escenario 2: Sesión activa al recargar el dashboard**
  - **Dado** que tengo una sesión activa guardada en localStorage
  - **Cuando** recargo la página del dashboard
  - **Entonces** la sesión se mantiene y sigo viendo el dashboard normalmente
- **Escenario 3: Sin sesión al recargar el dashboard**
  - **Dado** que no tengo sesión activa en localStorage
  - **Cuando** recargo la página del dashboard
  - **Entonces** soy redirigido a la página de login

</details>

---

### HU-04 — Protección de ruta del dashboard

- **Como** sistema
- **Quiero** impedir el acceso al dashboard sin sesión activa
- **Para** proteger la información de los empleados

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Acceso bloqueado sin sesión**
  - **Dado** que no tengo sesión activa en localStorage
  - **Cuando** intento acceder directamente a la URL del dashboard
  - **Entonces** soy redirigido inmediatamente a la página de login y no veo ningún dato del dashboard
- **Escenario 2: Acceso permitido con sesión válida**
  - **Dado** que tengo sesión activa en localStorage
  - **Cuando** accedo a la URL del dashboard
  - **Entonces** el dashboard carga correctamente con todos los empleados

</details>

---

### HU-05 — Cerrar sesión (logout)

- **Como** administrador autenticado
- **Quiero** cerrar sesión desde el dashboard
- **Para** que nadie más pueda usar mi sesión abierta

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Cierre de sesión correcto**
  - **Dado** que estoy en el dashboard con sesión activa
  - **Cuando** pulso el botón "Cerrar sesión"
  - **Entonces** se elimina mi sesión de localStorage y soy redirigido a la página de login
- **Escenario 2: No se puede volver atrás tras cerrar sesión**
  - **Dado** que he cerrado sesión
  - **Cuando** pulso el botón "Atrás" del navegador
  - **Entonces** soy redirigido al login y no puedo ver el dashboard

</details>

---

### HU-06 — Visualización del listado de empleados

- **Como** administrador autenticado
- **Quiero** ver el listado completo de empleados al entrar al dashboard
- **Para** poder localizar rápidamente al empleado que busco

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Carga del listado desde la API**
  - **Dado** que he accedido al dashboard con sesión activa
  - **Cuando** la página termina de cargar
  - **Entonces** veo las tarjetas de los 10 empleados obtenidos de la API
- **Escenario 2: Datos visibles en cada tarjeta**
  - **Dado** que se muestran los empleados
  - **Cuando** miro una tarjeta sin abrirla
  - **Entonces** veo el avatar, el nombre y el email del empleado
- **Escenario 3: Contador de empleados en el header**
  - **Dado** que se han cargado los empleados
  - **Cuando** miro la cabecera del dashboard
  - **Entonces** veo el número total de empleados cargados

</details>

---

### HU-07 — Detalle del empleado

- **Como** administrador autenticado
- **Quiero** pulsar sobre un empleado para ver todos sus datos completos
- **Para** consultar su información de contacto y dirección sin salir del listado

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Ver detalle al hacer clic**
  - **Dado** que veo el listado de empleados
  - **Cuando** hago clic sobre la tarjeta de un empleado
  - **Entonces** se muestra la vista de detalle con todos sus datos
- **Escenario 2: Datos completos en la vista de detalle**
  - **Dado** que he abierto el detalle de un empleado
  - **Cuando** miro la vista
  - **Entonces** veo el id, el avatar, el nombre completo, el email, la dirección completa y el teléfono
- **Escenario 3: Cerrar el detalle con el botón "Volver"**
  - **Dado** que estoy en la vista de detalle
  - **Cuando** pulso el botón "Volver"
  - **Entonces** vuelvo al listado completo de empleados

</details>

---

### HU-08 — Estado de carga al obtener empleados

- **Como** administrador autenticado
- **Quiero** ver una indicación visual mientras se cargan los empleados
- **Para** saber que la aplicación está funcionando y no se ha quedado bloqueada

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Mostrar indicador de carga**
  - **Dado** que he accedido al dashboard
  - **Cuando** la petición a la API está en curso
  - **Entonces** veo un spinner con el texto "Cargando empleados..."
- **Escenario 2: Ocultar indicador tras carga exitosa**
  - **Dado** que se estaba mostrando el indicador de carga
  - **Cuando** la API responde correctamente
  - **Entonces** el indicador desaparece y se muestran las tarjetas de empleados

</details>

---

### HU-09 — Manejo de error al fallar la API

- **Como** administrador autenticado
- **Quiero** ver un mensaje claro si los datos no se pueden cargar
- **Para** entender qué ha pasado sin que la aplicación se rompa

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Error de red o API no disponible**
  - **Dado** que estoy en el dashboard
  - **Cuando** la llamada a la API falla por error de red
  - **Entonces** veo el mensaje "No se pudieron cargar los empleados. Inténtalo de nuevo." con botón "Reintentar"
- **Escenario 2: Opción de reintentar tras un error**
  - **Dado** que se muestra el mensaje de error
  - **Cuando** pulso el botón "Reintentar"
  - **Entonces** la aplicación vuelve a intentar cargar los empleados

</details>

---

### HU-10 — Filtrado de empleados por primera letra

- **Como** administrador autenticado
- **Quiero** filtrar el listado de empleados por la primera letra del nombre
- **Para** encontrar más rápido a un empleado concreto

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Filtrar por una letra con resultados**
  - **Dado** que veo el listado completo de empleados
  - **Cuando** pulso una letra del filtro
  - **Entonces** solo se muestran los empleados cuyo nombre empieza por esa letra y la letra aparece destacada como activa
- **Escenario 2: El filtro muestra todas las letras del abecedario**
  - **Dado** que miro la barra de filtro
  - **Cuando** se genera el filtro
  - **Entonces** aparecen todas las letras de la A a la Z más el botón "Todos"
- **Escenario 3: El filtro es insensible a mayúsculas**
  - **Dado** que los nombres pueden tener cualquier capitalización
  - **Cuando** selecciono una letra del filtro
  - **Entonces** se muestran empleados sin importar si el nombre empieza en mayúscula o minúscula
- **Escenario 4: El filtro se adapta a móvil**
  - **Dado** que estoy en un dispositivo móvil
  - **Cuando** miro la barra de filtro
  - **Entonces** se muestra como un scroll horizontal

</details>

---

### HU-11 — Estado vacío al filtrar sin resultados

- **Como** administrador autenticado
- **Quiero** ver un mensaje claro cuando no hay empleados con la letra seleccionada
- **Para** entender que el filtro funciona pero no hay coincidencias

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Filtro sin resultados**
  - **Dado** que veo el listado de empleados
  - **Cuando** selecciono una letra para la que no hay ningún empleado (ej: "X")
  - **Entonces** se muestra el mensaje "No hay empleados con la letra X" y la letra aparece destacada como activa

</details>

---

### HU-12 — Restablecer el filtro

- **Como** administrador autenticado
- **Quiero** poder quitar el filtro activo y volver a ver todos los empleados
- **Para** no tener que recargar la página para resetear la búsqueda

<details>
<summary>Criterios de aceptación</summary>

- **Escenario 1: Restablecer filtro con el botón "Todos"**
  - **Dado** que tengo activo un filtro por letra
  - **Cuando** pulso el botón "Todos"
  - **Entonces** el listado vuelve a mostrar todos los empleados y el botón "Todos" aparece como activo
- **Escenario 2: Desactivar letra pulsando de nuevo**
  - **Dado** que tengo la letra "L" activa como filtro
  - **Cuando** vuelvo a pulsar el botón "L"
  - **Entonces** el filtro se desactiva y el listado vuelve a mostrar todos los empleados

</details>

---

## 🧪 Tests

### Vitest — Tests unitarios

<table>
  <thead>
    <tr>
      <th>Test</th>
      <th>Captura</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validateEmail: email válido devuelve true</td>
      <td rowspan="10" align="center"><em>pendiente</em></td>
    </tr>
    <tr><td>validateEmail: email sin arroba devuelve false</td></tr>
    <tr><td>validateEmail: email sin dominio devuelve false</td></tr>
    <tr><td>validateEmail: email vacío devuelve false</td></tr>
    <tr><td>validatePassword: contraseña válida devuelve true</td></tr>
    <tr><td>validatePassword: menos de 8 caracteres devuelve false</td></tr>
    <tr><td>validatePassword: sin dígito devuelve false</td></tr>
    <tr><td>filterByLetter: devuelve todos si letra es Todos</td></tr>
    <tr><td>filterByLetter: filtra correctamente por letra</td></tr>
    <tr><td>filterByLetter: insensible a mayúsculas</td></tr>
  </tbody>
</table>

### Playwright — Tests E2E

<table>
  <thead>
    <tr>
      <th>Test</th>
      <th>Captura</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Login con credenciales válidas redirige al dashboard</td>
      <td rowspan="5" align="center"><em>pendiente</em></td>
    </tr>
    <tr><td>Login con credenciales incorrectas muestra error</td></tr>
    <tr><td>Campos vacíos muestran errores de validación</td></tr>
    <tr><td>Logout redirige al login</td></tr>
    <tr><td>No se puede volver al dashboard tras logout</td></tr>
  </tbody>
</table>

---

## 📋 Planificación de commits

<details>
<summary><code>dev</code></summary>

- `chore`: create dev branch, init npm and setup env files
- `docs`: add project README

</details>

<details>
<summary><code>feature/login</code></summary>

- `feat`: add index.html base structure
- `feat`: add logo and favicon assets
- `feat`: add favicon links to index.html
- `feat`: add login form header
- `style`: add CSS variables
- `style`: add reset styles
- `style`: add typography styles
- `style`: add main.css with all imports and link in index.html
- `style`: add Material Symbols font import
- `style`: add login header styles
- `feat`: add login form fields
- `style`: add login form fields styles
- `feat`: add login submit button
- `style`: add button component styles
- `feat`: add login page footer
- `style`: add login footer styles
- `feat`: add main.js base module
- `chore`: setup vitest config
- `test`: add validateEmail unit tests
- `feat`: add validateEmail function
- `test`: add validatePassword unit tests
- `feat`: add validatePassword function
- `feat`: add loadCredentials function
- `feat`: add initLogin function to main.js
- `feat`: add form inputs to initLogin
- `feat`: add input error listeners
- `feat`: add form submit event listener
- `feat`: add showFieldError and clearFieldError helpers

</details>

<details>
<summary><code>feature/session</code></summary>

- `feat`: add saveSession function
- `feat`: add getSession function
- `feat`: add clearSession function
- `feat`: add session imports to main.js
- `feat`: add session check and redirect on page load

</details>

<details>
<summary><code>feature/dashboard-base</code></summary>

- `feat`: add dashboard.html base structure
- `feat`: add favicon links to dashboard.html
- `feat`: add dashboard header with logout button
- `style`: add dashboard header styles
- `feat`: add employees section container
- `style`: add dashboard page layout styles
- `feat`: add clearSession import to main.js
- `feat`: add route guard to initDashboard in main.js
- `feat`: add logout click event and redirect

</details>

<details>
<summary><code>feature/employee-list</code></summary>

- `feat`: add getEmployees function in api.js
- `feat`: add showLoading function in ui.js
- `style`: add loading spinner styles with keyframes
- `feat`: add hideLoading function in ui.js
- `feat`: add showError function with retry button
- `style`: add error component styles with BEM
- `feat`: add renderEmployees function in ui.js
- `feat`: add initDashboard logic to main.js
- `feat`: add main.js script to dashboard.html
- `style`: add card component styles mobile-first
- `fix`: match employee avatar gender to name
- `fix`: center loading spinner and adjust dashboard background gradient

</details>

<details>
<summary><code>feature/employee-detail</code></summary>

- `feat`: add employee detail section to dashboard.html
- `fix`: center error component in grid
- `feat`: add showDetail function in ui.js
- `feat`: add hideDetail function in ui.js
- `style`: add detail component styles
- `feat`: add event delegation for cards in main.js
- `feat`: add single expanded card control
- `fix`: hide detail section when hidden attribute is set

</details>

<details>
<summary><code>feature/filter</code></summary>

- `feat`: add filter nav container to dashboard.html
- `style`: add filter component styles with horizontal scroll
- `test`: add filterByLetter unit tests
- `feat`: add filterByLetter function in filter.js
- `feat`: add renderFilterButtons function in ui.js
- `feat`: add filter click event and renderEmployees call
- `feat`: add showEmptyState function in ui.js
- `style`: add empty-state component styles
- `feat`: add Todos button and reset filter logic

</details>

<details>
<summary><code>feature/password-toggle</code></summary>

- `feat`: add password toggle button to index.html
- `style`: add password toggle styles
- `feat`: add password toggle logic to main.js

</details>

<details>
<summary><code>fix/detail-back-button</code></summary>

- `fix`: style detail back button to match prototype

</details>

<details>
<summary><code>chore/e2e</code></summary>

- `chore`: setup playwright config
- `chore`: update vitest config to include test path
- `test`: add e2e login test with playwright
- `test`: add e2e logout test with playwright

</details>

<details>
<summary><code>chore/deploy</code></summary>

- `chore`: expose admin.json for GitHub Pages deployment
- `docs`: update README with final links and results

</details>

<details>
<summary><code>main</code></summary>

- `chore`: merge dev into main for deployment

</details>

---

## 🛠️ Tecnologías

- **Git & GitHub** — control de versiones con GitFlow
- **Jira** — gestión del proyecto y planificación del sprint
- **Figma** — mockups de alta fidelidad
- **Stitch** — prototipos interactivos
- **VS Code** — editor de código
- **HTML5** — estructura semántica
- **CSS3** — BEM, nesting nativo, variables, mobile-first, animaciones y transiciones
- **JavaScript ES6+ con ES Modules** — módulos, fetch, async/await, localStorage
- **Vitest** — tests unitarios con TDD (10 tests en verde)
- **Playwright** — tests E2E (5 tests en verde)
- **Material Symbols** — iconografía

---

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Jennydev-25/employee-dashboard.git

# 2. Entrar en la carpeta
cd employee-dashboard

# 3. Instalar dependencias
npm install
```

**Ejecutar el proyecto:**

Abrir `index.html` con Live Server en VS Code.

**Ejecutar tests:**

```bash
# Tests unitarios
npm test

# Tests en modo watch
npm run test-w

# Tests E2E (requiere Live Server activo en puerto 5500)
npm run test:e2e
```

---

## 🔗 Recursos

- **[MDN Web Docs](https://developer.mozilla.org/)** — documentación de referencia HTML, CSS y JavaScript
- **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)** — API externa de empleados
- **[randomuser.me](https://randomuser.me/)** — avatares de empleados por id
- **[Material Symbols](https://fonts.google.com/icons)** — iconografía
- **[Vitest Docs](https://vitest.dev/)** — documentación oficial de Vitest
- **[Playwright Docs](https://playwright.dev/)** — documentación oficial de Playwright
- **[Conventional Commits](https://www.conventionalcommits.org/)** — convención de mensajes de commit

---

## 📸 Resultado final

| 🔐 Login · Mobile | 🔐 Login · Desktop |
| :---------------: | :----------------: |
|    _pendiente_    |    _pendiente_     |

| 📊 Dashboard · Mobile | 📊 Dashboard · Desktop |
| :-------------------: | :--------------------: |
|      _pendiente_      |      _pendiente_       |

| 🃏 Detalle empleado · Mobile | 🃏 Detalle empleado · Desktop |
| :--------------------------: | :---------------------------: |
|         _pendiente_          |          _pendiente_          |

| 🔤 Filtro por letra · Mobile | 🔤 Filtro por letra · Desktop |
| :--------------------------: | :---------------------------: |
|         _pendiente_          |          _pendiente_          |

---

## 🌐 Demo en producción

👉 Ver Crewly en vivo → _pendiente_

---

## 👩‍💻 Autora

**[Jennydev-25](https://github.com/Jennydev-25)**

Training Developer · Factoría F5 Bootcamp · Asturias 2025
