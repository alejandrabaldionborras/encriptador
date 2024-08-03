Descripción del Proyecto
Este proyecto consiste en una aplicación web simple que permite encriptar y desencriptar texto usando un algoritmo de sustitución. El texto ingresado se transforma mediante la sustitución de vocales por cadenas de texto específicas y viceversa.

Estructura del Proyecto
index.html: Contiene la estructura HTML de la página.
styles.css: Contiene los estilos CSS para la apariencia de la página.
script.js: Contiene el código JavaScript para la lógica de encriptación y desencriptación.
Funcionalidades
Encriptar Texto
La función encryptText toma el texto ingresado por el usuario, verifica que solo contenga letras minúsculas y espacios, y luego reemplaza las vocales por cadenas específicas:

e se reemplaza por enter
i se reemplaza por imes
a se reemplaza por ai
o se reemplaza por ober
u se reemplaza por ufat


Desencriptar Texto
La función decryptText toma el texto encriptado y realiza el proceso inverso, reemplazando las cadenas específicas por las vocales originales.

Copiar Texto
La función copyText permite copiar el texto encriptado o desencriptado al portapapeles.

Manejo de Botones
disableButtons: Deshabilita los botones de encriptar y desencriptar, y muestra el botón de copiar.
enableButtons: Habilita los botones de encriptar y desencriptar, y oculta el botón de copiar.
Reiniciar Proceso
La función resetProcess limpia los campos de entrada y salida, y restablece la interfaz a su estado inicial.

Instrucciones de Uso
Ingresar Texto: Escriba el texto que desea encriptar o desencriptar en el campo de entrada. Solo se permiten letras minúsculas y espacios.
Encriptar o Desencriptar: Haga clic en el botón correspondiente (Encriptar o Desencriptar).
Copiar Texto: Una vez procesado el texto, puede copiarlo al portapapeles haciendo clic en el botón Copiar.
Reiniciar: El proceso se reiniciará automáticamente después de copiar el texto, o puede hacerlo manualmente ingresando un nuevo texto.
