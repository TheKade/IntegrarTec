
# 🧮 Proyecto de Calculadora

Una calculadora moderna y responsiva construida con un enfoque en **HTML Semántico**, **Lógica basada en Estados** y **Expresiones Regulares** para un manejo matemático preciso.
## 🚀 Funcionalidades Clave

*   **Soporte de Expresiones Complejas**: Permite concatenar múltiples operaciones (ej. `5 + 10 * 2`) utilizando un motor de evaluación dinámico.
*   **Cambio de Signo Inteligente (+/-)**: Utiliza **Expresiones Regulares (RegEx)** para identificar y cambiar el signo únicamente del *último* número ingresado.
*   **Actualizaciones Dinámicas**: Implementa un sistema de "Fuente única de verdad" donde la pantalla siempre refleja el estado interno del objeto.
*   **Diseño con CSS Grid**: Teclado organizado en una cuadrícula de 4 columnas totalmente responsiva.
*   **Borrado Inteligente (Backspace)**: Maneja la eliminación carácter por carácter y restablece a "0" automáticamente.

---

## 🔄 Evolución y Refactorización
Este proyecto fue mejorado significativamente para cumplir con estandares:

### 🏛️ Arquitectura
*   **Antes**: Valores fijos en HTML y múltiples escuchadores de eventos manuales.
*   **Después**: **Delegación de Eventos** y un objeto de estado centralizado (`calculatorState`) para mayor escalabilidad.

### 🛠️ Lógica Técnica
*   **Manejo de Signos**: Se implementó el patrón `/(-?\d+\.?\d*)$/` para localizar el último bloque numérico sin afectar el resto de la operación.
*   **Control de Evaluación**: Uso de la bandera `isEvaluated` para gestionar el flujo después de obtener un resultado.

### 🎨 Interfaz de Usuario (UI)
*   **Feedback Visual**: Botones de borrado (**C** y **<-**) resaltados en color rojo (`#dc2626`) para mejorar la experiencia de usuario.
*   **Accesibilidad**: Uso de etiquetas semánticas `<main>`, `<section>` y `<output>`.

---

## 🛠️ Tecnologías Utilizadas
*   **HTML5** (Semántica y ARIA).
*   **CSS3** (Grid, Flexbox, Variables Root).
*   **JavaScript ES6+** (RegEx, State Management).
