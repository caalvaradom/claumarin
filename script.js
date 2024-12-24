// main.js

// Al cargar la ventana, mostramos un mensaje en la consola
window.addEventListener("load", () => {
  console.log("¡Bienvenido a Claudia Marin Inmobiliaria!");

  // Ejemplo de una pequeña interacción (opcional):
  // Cambiar el fondo de la sección 'Quiénes Somos' al hacer clic en el encabezado
  const quienesSomosSection = document.querySelector("section h2");
  if (quienesSomosSection) {
    quienesSomosSection.addEventListener("click", () => {
      quienesSomosSection.style.backgroundColor = "var(--color-secundario)"; 
      quienesSomosSection.style.color = "var(--color-apoyo)"; // Texto en blanco
    });
  }
});