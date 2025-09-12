# 🤖 HiringRoom Automation

🚀 Esta extensión de Chrome está diseñada para automatizar tareas repetitivas en la plataforma **HiringRoom**, específicamente en la página final de un formulario. Con esta herramienta, puedes ahorrar tiempo al completar campos y realizar acciones como seleccionar opciones, hacer clics y llenar URLs de redes sociales de manera automática.

## 🎯 ¿Qué hace esta extensión?

La extensión realiza las siguientes acciones en la página final de un formulario de HiringRoom:

1. **Selecciona la opción "Sí" en el campo `high_school_data`**: Marca automáticamente el radio button correspondiente.
2. **Añade una red social**: Simula un clic en el botón "Añadir otra red social".
3. **Completa el campo de LinkedIn**: Ingresa una URL de LinkedIn predefinida (`TU LINKEDIN URL`).
4. **Completa el campo de Website**: Ingresa una URL de sitio web predefinida (`TU WEB URL`).
5. **Muestra notificaciones**: Utiliza notificaciones tipo "toast" para informar sobre el éxito o fallo de cada acción.

La extensión es ideal para usuarios que necesitan completar formularios de manera recurrente en HiringRoom, optimizando el proceso y reduciendo errores manuales.

## 🛠️ Estructura del Proyecto

El proyecto incluye los siguientes archivos:

- **popup.html**: Interfaz básica de la extensión con un botón para ejecutar el script.
- **content.js**: Script principal que contiene la lógica de automatización, incluyendo funciones para simular clics, entradas de texto y esperar a que los elementos estén disponibles en la página.
- **popup.js**: Script que maneja la interacción con el botón de la interfaz y ejecuta `content.js` en la pestaña activa.
- **manifest.json**: Archivo de configuración de la extensión de Chrome, que define los permisos y la estructura.

## 📋 Requisitos

- Navegador **Google Chrome** o cualquier navegador basado en Chromium.
- Permisos de la extensión:
  - `activeTab`: Para interactuar con la pestaña activa.
  - `scripting`: Para inyectar y ejecutar scripts en la página.

## 🚀 Instalación

Sigue estos pasos para instalar y usar la extensión en tu navegador:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/nahuu0809/hiringroom-automation.git
   ```

2. **Carga la extensión en Chrome**:
   - Abre Chrome y ve a `chrome://extensions/`.
   - Activa el **Modo Desarrollador** (esquina superior derecha).
   - Haz clic en **Cargar descomprimida** y selecciona la carpeta del proyecto.

3. **Usa la extensión**:
   - Navega a la página de HiringRoom donde deseas ejecutar la automatización.
   - Haz clic en el ícono de la extensión en la barra de herramientas de Chrome.
   - Presiona el botón **Empezar** en el popup para ejecutar el script.

## 🖱️ Uso

1. Asegúrate de estar en la página final del formulario de HiringRoom.
2. Abre el popup de la extensión y haz clic en **Empezar**.
3. El script se ejecutará automáticamente, completando los campos mencionados y mostrando notificaciones tipo "toast" para confirmar el éxito o reportar errores.

## 🔔 Notificaciones

- **Éxito**: Se muestra un mensaje en verde cuando una acción se completa correctamente (por ejemplo, "URL LinkedIn ingresada con éxito").
- **Error**: Se muestra un mensaje en rojo si no se encuentra un elemento o falla una acción (por ejemplo, "Error: No se encontró el input de LinkedIn").

## 🔍 Detalles Técnicos

- **Espera de elementos**: La extensión utiliza la función `waitForSelector` para esperar hasta que los elementos estén disponibles en la página (con un tiempo máximo de 10 segundos).
- **Simulación realista**: Las funciones `simulateClick`, `simulateInput` y `simulateInteraction` imitan interacciones humanas (clics, entradas de texto, cambios) para garantizar compatibilidad con la plataforma.
- **Notificaciones Toast**: Se implementa un sistema de notificaciones visuales que aparecen en la esquina inferior derecha de la página y desaparecen después de 3 segundos.

## ⚠️ Notas Importantes

- La extensión está diseñada específicamente para la página final de un formulario en HiringRoom. Los selectores utilizados (por ejemplo, `input[name='high_school_data'][value='si']`) son específicos y pueden requerir ajustes si la estructura de la página cambia.
- Asegúrate de que las URLs de LinkedIn y el sitio web sean válidas y relevantes para tu caso de uso.
- Si encuentras errores, revisa la consola del navegador (`Ctrl+Shift+J` en Chrome) para obtener más detalles.

## 🌟 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar la extensión, puedes:

1. Forkear el repositorio.
2. Crear una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Hacer tus cambios y commitearlos (`git commit -m "Añade nueva funcionalidad"`).
4. Pushear la rama (`git push origin feature/nueva-funcionalidad`).
5. Crear un Pull Request en GitHub.

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

## 🙌 Agradecimientos

Gracias por usar **HiringRoom Automation**! Si tienes sugerencias o encuentras algún problema, no dudes en abrir un **issue** en el repositorio. ¡Espero que esta herramienta te ahorre tiempo y esfuerzo! 😄
