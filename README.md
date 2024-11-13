# Amazing Events
# 🌟 Amazing Events 🌟

**Amazing Events** es una plataforma interactiva para explorar eventos en tu ciudad. A través de una interfaz moderna, los usuarios pueden ver, buscar, filtrar y descubrir eventos pasados y futuros en diferentes categorías como música, arte, comida, entre otros.
**Amazing Events** es una plataforma interactiva y moderna diseñada para explorar y descubrir eventos en tu ciudad. Con una interfaz intuitiva, los usuarios pueden buscar, filtrar y visualizar eventos pasados y futuros en categorías como música 🎵, arte 🎨, gastronomía 🍣 y mucho más.

## Características
Este proyecto fue desarrollado como parte de los conocimientos adquiridos durante el **Bootcamp de Minhub**, con el objetivo de aplicar lo aprendido en desarrollo web frontend utilizando tecnologías como **HTML5**, **CSS3**, **JavaScript**, y frameworks como **Bootstrap**.

- **Página principal interactiva**: Muestra una lista de eventos con una funcionalidad de búsqueda y filtrado.
- **Filtros por categoría**: Los usuarios pueden seleccionar categorías para ver eventos específicos.
- **Carrusel de imágenes**: Presentación de banners visuales de eventos destacados.
- **Eventos detallados**: Acceso a detalles adicionales sobre cada evento con precios, descripciones y enlaces a páginas específicas.
- **Sección de contacto**: Formulario para contactar al equipo detrás del proyecto.
- **Estadísticas**: Página de estadísticas para mostrar datos relevantes sobre los eventos.
- **Diseño adaptativo**: Usando **Bootstrap**, el diseño es totalmente responsivo para diferentes dispositivos.
## 🚀 Características

## Tecnologías Utilizadas
- **Página principal interactiva**: Visualiza una lista de eventos con funcionalidades de búsqueda 🔍 y filtrado 🗂️.
- **Filtros por categoría**: Los usuarios pueden seleccionar entre diversas categorías (música, arte, gastronomía, etc.) para ver eventos específicos.
- **Carrusel de imágenes**: Presentación atractiva de banners visuales de eventos destacados 🖼️.
- **Eventos detallados**: Accede a información completa de cada evento, incluyendo precios 💰, descripciones 📃 y enlaces a páginas específicas 🔗.
- **Sección de contacto**: Formulario para que los usuarios puedan ponerse en contacto con el equipo de desarrollo 📧.
- **Estadísticas de eventos**: Página dedicada a mostrar estadísticas interesantes sobre los eventos registrados 📊.
- **Diseño responsivo**: Gracias a **Bootstrap**, el diseño se adapta a diferentes tamaños de pantalla 📱💻, proporcionando una experiencia óptima tanto en móviles como en desktop.

- **HTML5**: Estructura base de la página web.
- **CSS3**: Estilos personalizados para la página.
- **JavaScript**: Funcionalidad de interacción en el frontend.
- **Bootstrap**: Framework para diseño y disposición responsiva.
- **Fetch API**: Para obtener datos de eventos desde un archivo `JSON` o API externa.
- **JSON**: Para almacenar los datos de los eventos (ej. nombre, descripción, precio, etc.).
## 💻 Tecnologías Utilizadas

## Estructura del Proyecto
Este proyecto hace uso de las siguientes tecnologías:
- **HTML5**: Estructura base de la página web 🏗️.
- **CSS3**: Estilos personalizados para el diseño de la interfaz 🎨.
- **JavaScript**: Funcionalidad y dinámica en el frontend ⚡.
- **Bootstrap**: Framework CSS para garantizar un diseño moderno y responsivo 📐.
- **Fetch API**: Para obtener y procesar datos de eventos desde un archivo `JSON` o una API externa 🌍.
- **JSON**: Almacenamiento de los datos de los eventos (nombre, descripción, fecha, etc.) de manera local o futura API 🗂️.
## 📁 Estructura del Proyecto
A continuación, se detalla la estructura de carpetas y archivos del proyecto:

```plaintext
amazing-events/
│
├── assets/                  
│   ├── images/              
│   ├── styles/              
│   ├── js/                  
│   │   ├── data.json        # Datos de eventos (puede ser una API real en el futuro).
│   │   ├── upcoming.js      # Script para la página de eventos próximos.
│   │   ├── past.js          # Script para la página de eventos pasados.
│   │   ├── details.js       # Script para la página de detalles de un evento.
│   │   ├── stats.js         # Script para la página de estadísticas.
│   │   ├── contact.js       # Script para la página de contacto.
│   └── pages/               
│       ├── upcoming.html    # Página con los eventos próximos.
│       ├── past.html        # Página con los eventos pasados.
│       ├── details.html     # Página con los detalles de un evento específico.
│       ├── stats.html       # Página de estadísticas.
│       └── contact.html     # Página de contacto.
│
├── index.html               # Página principal donde se muestra el filtro y los eventos.
├── index.js                 # Script de la página principal.
├── README.md                # Este archivo.

