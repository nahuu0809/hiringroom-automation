# 🤖 HiringRoom Automation

¡Bienvenidos al proyecto **HiringRoom Automation**! 🚀 Esta extensión de Chrome está diseñada para automatizar tareas repetitivas en la página final de un formulario en la plataforma **HiringRoom**. Con esta herramienta, puedes ahorrar tiempo al completar campos, realizar clics y abrir diálogos de selección de archivos de manera automática, optimizando el proceso y reduciendo errores manuales.

## 🎯 ¿Qué hace esta extensión?

La extensión realiza las siguientes acciones en la página final de un formulario de HiringRoom:

1. **Marca el checkbox de Términos y Condiciones**: Selecciona automáticamente el checkbox de aceptación de la Política de Privacidad.
2. **Clic en el botón "Mis archivos"**: Simula un clic en el botón para abrir el diálogo de selección de archivos (el usuario debe seleccionar el archivo manualmente).
3. **Selecciona la opción "Sí" en el campo `high_school_data`**: Marca automáticamente el radio button correspondiente.
4. **Añade una red social**: Simula un clic en el botón "Añadir otra red social".
5. **Completa el campo de LinkedIn**: Ingresa una URL de LinkedIn predefinida (`https://www.linkedin.com/in/nahuel-diaz`).
6. **Completa el campo de Website**: Ingresa una URL de sitio web predefinida (`https://nahueldiazcv.vercel.app`).
7. **Muestra notificaciones**: Utiliza notificaciones tipo "toast" para informar sobre el éxito o fallo de cada acción.

Esta extensión es ideal para usuarios que necesitan completar formularios de manera recurrente en HiringRoom, agilizando tareas repetitivas.

## 🛠️ Estructura del Proyecto

El proyecto incluye los siguientes archivos:

- **popup.html**: Interfaz básica de la extensión con un botón para ejecutar el script.
- **content.js**: Script principal que contiene la lógica de automatización, incluyendo funciones para simular clics, entradas de texto, esperar elementos en la página y abrir diálogos de selección de archivos.
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
   git clone https://github.com/tu-usuario/hiringroom-automation.git
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
3. El script se ejecutará automáticamente, completando las acciones mencionadas:
   - Marca el checkbox de Términos y Condiciones.
   - Simula un clic en el botón "Mis archivos" (deberás seleccionar el archivo manualmente en el diálogo que se abre).
   - Marca el radio button "Sí" en `high_school_data`.
   - Hace clic en "Añadir otra red social".
   - Completa los campos de LinkedIn y Website.
4. Se mostrarán notificaciones tipo "toast" para confirmar el éxito o reportar errores.

## 🔔 Notificaciones

- **Éxito**: Se muestra un mensaje en verde cuando una acción se completa correctamente (por ejemplo, "Checkbox 'Términos y Condiciones' marcado con éxito").
- **Error**: Se muestra un mensaje en rojo si no se encuentra un elemento o falla una acción (por ejemplo, "Error: No se encontró el botón 'Mis archivos'").
- **Nota para "Mis archivos"**: Después de hacer clic en el botón "Mis archivos", aparecerá un mensaje que te pedirá seleccionar el archivo manualmente, ya que las extensiones de Chrome no pueden predefinir un path en el diálogo de selección de archivos.

## 🔍 Detalles Técnicos

- **Espera de elementos**: La extensión utiliza la función `waitForSelector` para esperar hasta que los elementos estén disponibles en la página (con un tiempo máximo de 15 segundos).
- **Simulación realista**: Las funciones `simulateClick`, `simulateInput` y `simulateInteraction` imitan interacciones humanas (clics, entradas de texto, cambios) para garantizar compatibilidad con la plataforma.
- **Notificaciones Toast**: Se implementa un sistema de notificaciones visuales que aparecen en la esquina inferior derecha de la página y desaparecen después de 3 segundos.
- **Selección de archivos**: Debido a restricciones de seguridad del navegador, el script solo puede simular un clic en el botón "Mis archivos" para abrir el diálogo de selección de archivos. El usuario debe seleccionar el archivo manualmente.

## ⚠️ Notas Importantes

- La extensión está diseñada específicamente para la página final de un formulario en HiringRoom. Los selectores utilizados (por ejemplo, `input[name='termsConditions.hiring']`, `button.sc-iemWCZ.hPrUnF.dropbox-button`) son específicos y pueden requerir ajustes si la estructura de la página cambia.
- Asegúrate de que las URLs de LinkedIn y el sitio web sean válidas y relevantes para tu caso de uso.
- La selección automática de un archivo específico (por ejemplo, `C:\Nahuel\Documents\File.pdf`) no es posible debido a restricciones de seguridad del navegador. Deberás seleccionar el archivo manualmente en el diálogo que se abre tras hacer clic en "Mis archivos".
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