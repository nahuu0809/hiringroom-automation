document.getElementById("runScript").addEventListener("click", async () => {
  // Inyecta el script en la pestaña activa
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
    console.log("✅ Script inyectado y ejecutándose...");
  } catch (error) {
    console.error("❌ Error al inyectar el script:", error);
  }
});