// Función auxiliar para esperar X ms
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Esperar a que un selector esté presente
async function waitForSelector(selector, timeout = 15000) {
  const interval = 100;
  let elapsed = 0;
  while (elapsed < timeout) {
    const el = document.querySelector(selector);
    if (el) return el;
    await wait(interval);
    elapsed += interval;
  }
  console.error(`❌ No se encontró el elemento con selector: ${selector}`);
  return null;
}

// Simular un click realista
function simulateClick(element) {
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
}

// Simular una secuencia de interacción
function simulateInteraction(element) {
  element.focus();
  simulateClick(element);
  const changeEvent = new Event("change", { bubbles: true });
  element.dispatchEvent(changeEvent);
}

// Simular un input realista
function simulateInput(element, value) {
  element.value = value;
  const inputEvent = new Event("input", { bubbles: true });
  element.dispatchEvent(inputEvent);
  const changeEvent = new Event("change", { bubbles: true });
  element.dispatchEvent(changeEvent);
}

// Función para mostrar notificación toast
function showToast(message, isSuccess = true) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${isSuccess ? "#4CAF50" : "#f44336"};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1000;
    font-family: Arial, sans-serif;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}

(async function () {
  console.log("🚀 Script iniciado en página final...");
  console.log(`📍 URL actual: ${window.location.href}`);

  // --- 1) CHECKBOX Términos y Condiciones
  console.log("🔍 Buscando checkbox 'termsConditions.hiring'...");
  let checkbox = await waitForSelector("input[name='termsConditions.hiring']");
  if (checkbox) {
    console.log("✅ Checkbox encontrado. Estado inicial:", checkbox.checked, "Valor inicial:", checkbox.value);
    checkbox.checked = true;
    simulateClick(checkbox);
    simulateInteraction(checkbox);
    await wait(500); // Breve espera para que la página procese
    // Verificar que el checkbox esté marcado
    if (checkbox.checked) {
      console.log("✅ Checkbox 'Términos y Condiciones' marcado correctamente");
      showToast("Checkbox 'Términos y Condiciones' marcado con éxito", true);
    } else {
      console.error("❌ El checkbox 'Términos y Condiciones' no se marcó correctamente. Estado:", checkbox.checked);
      showToast("Error: No se pudo marcar el checkbox 'Términos y Condiciones'", false);
      return;
    }
  } else {
    console.error("❌ No se encontró el checkbox 'Términos y Condiciones'");
    showToast("Error: No se encontró el checkbox 'Términos y Condiciones'", false);
    return;
  }
  await wait(1000);

  // --- 2) BOTÓN "Mis archivos"
  console.log("🔍 Buscando botón 'Mis archivos'...");
  let fileButton = await waitForSelector("button.sc-iemWCZ.hPrUnF.dropbox-button");
  if (fileButton) {
    simulateClick(fileButton);
    console.log("✅ Click en 'Mis archivos' realizado");
    showToast("Click en 'Mis archivos' realizado. Por favor, selecciona el archivo manualmente.", true);
  } else {
    console.error("❌ No se encontró el botón 'Mis archivos'");
    showToast("Error: No se encontró el botón 'Mis archivos'", false);
    return;
  }
  await wait(1000);

  // --- 3) RADIO BUTTON (Sí en high_school_data)
  let radio = await waitForSelector("input[name='high_school_data'][value='si']");
  if (radio) {
    radio.checked = true;
    simulateInput(radio, radio.value);
    console.log("✅ Radio 'Sí' seleccionado");
    showToast("Radio 'Sí' seleccionado con éxito", true);
  } else {
    console.error("❌ No se encontró el radio button 'Sí'");
    showToast("Error: No se encontró el radio button 'Sí'", false);
    return;
  }
  await wait(1000);

  // --- 4) BOTÓN "Añadir otra red social"
  let addSocial = await waitForSelector("h5.sc-iqAclL.sc-hBMUJo.sc-csTbgd.cTvCPN.liylkT.kzXarH");
  if (addSocial) {
    simulateClick(addSocial);
    console.log("✅ Click en '+ Añadir otra red social'");
    showToast("Click en 'Añadir otra red social' realizado", true);
  } else {
    console.error("❌ No se encontró el botón 'Añadir otra red social'");
    showToast("Error: No se encontró el botón 'Añadir otra red social'", false);
    return;
  }
  await wait(1000);

  // --- 5) INPUT LinkedIn
  let linkedin = await waitForSelector("input#url_linkedin");
  if (linkedin) {
    simulateInput(linkedin, "TU LINKEDIN RUL");
    console.log("✅ URL LinkedIn ingresada");
    showToast("URL LinkedIn ingresada con éxito", true);
  } else {
    console.error("❌ No se encontró el input de LinkedIn");
    showToast("Error: No se encontró el input de LinkedIn", false);
    return;
  }
  await wait(1000);

  // --- 6) INPUT Website
  let website = await waitForSelector("input#url_website");
  if (website) {
    simulateInput(website, "TU WEB URL");
    console.log("✅ URL Website ingresada");
    showToast("URL Website ingresada con éxito", true);
  } else {
    console.error("❌ No se encontró el input de Website");
    showToast("Error: No se encontró el input de Website", false);
    return;
  }

  console.log("🎉 Script completado en página final");
  showToast("Script completado con éxito", true);
})();