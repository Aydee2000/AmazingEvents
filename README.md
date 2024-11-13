# Amazing Events

**Amazing Events** es una plataforma interactiva para explorar eventos en tu ciudad. A través de una interfaz moderna, los usuarios pueden ver, buscar, filtrar y descubrir eventos pasados y futuros en diferentes categorías como música, arte, comida, entre otros.

## Características

- **Página principal interactiva**: Muestra una lista de eventos con una funcionalidad de búsqueda y filtrado.
- **Filtros por categoría**: Los usuarios pueden seleccionar categorías para ver eventos específicos.
- **Carrusel de imágenes**: Presentación de banners visuales de eventos destacados.
- **Eventos detallados**: Acceso a detalles adicionales sobre cada evento con precios, descripciones y enlaces a páginas específicas.
- **Sección de contacto**: Formulario para contactar al equipo detrás del proyecto.
- **Estadísticas**: Página de estadísticas para mostrar datos relevantes sobre los eventos.
- **Diseño adaptativo**: Usando **Bootstrap**, el diseño es totalmente responsivo para diferentes dispositivos.

## Tecnologías Utilizadas

- **HTML5**: Estructura base de la página web.
- **CSS3**: Estilos personalizados para la página.
- **JavaScript**: Funcionalidad de interacción en el frontend.
- **Bootstrap**: Framework para diseño y disposición responsiva.
- **Fetch API**: Para obtener datos de eventos desde un archivo `JSON` o API externa.
- **JSON**: Para almacenar los datos de los eventos (ej. nombre, descripción, precio, etc.).

## Estructura del Proyecto

```plaintext
amazing-events/
│
├── assets/                  # Contiene los recursos como imágenes, estilos y scripts.
│   ├── images/              # Imágenes usadas en la interfaz.
│   ├── styles/              # Estilos CSS personalizados.
│   ├── js/                  # Scripts JavaScript.
│   │   └── data.json        # Datos de eventos (puede ser una API real en el futuro).
│   └── pages/               # Páginas adicionales.
│   │   ├── upcoming.html    # Página con los eventos próximos.
│   │   ├── past.html        # Página con los eventos pasados.
│   │   ├── details.html     # Página con los detalles de un evento específico.
│   │   ├── stats.html       # Página de estadísticas.
│   │   └── contact.html     # Página de contacto.
│
├── index.html               # Página principal donde se muestra el filtro y los eventos.
├── README.md                # Este archivo.

