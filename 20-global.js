// Definir una variable global
global.myGlobalVariable = "Hola desde el objeto global de Node.js";

// Acceder a la variable global desde otro módulo
const otherModule = require('./21-global-no-excute');
otherModule.showGlobalVariable();

