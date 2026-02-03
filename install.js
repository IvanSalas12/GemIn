#!/usr/bin/env node

// UNIFICAMOS A REQUIRE (Para evitar errores de mezcla de tipos de módulos)
const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');

// Nota: update-notifier moderno requiere 'import'. 
// Si prefieres no usarlo, puedes borrar estas líneas.
// Si quieres usarlo, deberías usar una versión compatible con require o configurar ESM.

program
    .name('gemin')
    .description('Herramienta para instalar y actualizar la configuración de GemIn')
    .version('1.0.0');

// FUNCION AUXILIAR PARA COPIAR
async function copiarConfiguracion(force = false) {
    const source = path.join(__dirname, '.gemini');
    const destination = path.join(process.cwd(), '.gemini');

    try {
        if (!force && await fs.pathExists(destination)) {
            console.log('⚠️  La carpeta .gemini ya existe.');
            console.log('Usa "npx gemin update" para actualizarla con las nuevas funciones.');
            return;
        }

        console.log(force ? 'Actualizando carpeta .gemini...' : 'Instalando carpeta .gemini...');
        await fs.copy(source, destination);
        console.log('✅ Proceso completado con éxito.');
    } catch (err) {
        console.error('❌ Error al procesar la carpeta .gemini:', err);
    }
}

// COMANDO PRINCIPAL: npx gemin
program
    .action(async () => {
        await copiarConfiguracion(false);
    });

// COMANDO UPDATE: npx gemin update
program
    .command('update')
    .description('Actualiza la carpeta .gemini con las últimas novedades del paquete')
    .action(async () => {
        console.log('Buscando actualizaciones de comandos y skills...');
        // Aquí forzamos la copia para sobrescribir archivos base
        await copiarConfiguracion(true);
        console.log('🚀 Tu configuración local ahora está al día con la versión del paquete.');
    });

// COMANDO ADD: npx gemin add --skill nombre
program
    .command('add')
    .description('Añade una skill específica')
    .option('-s, --skill <name>', 'Nombre de la skill')
    .action(async (options) => {
        if (!options.skill) {
            console.log('Error: Debes especificar el nombre de la skill. Ej: npx gemin add --skill create-skills');
            return;
        }

        const sourceSkill = path.join(__dirname, '.gemini', 'skills', options.skill);
        const destSkill = path.join(process.cwd(), '.gemini', 'skills', options.skill);

        try {
            if (await fs.pathExists(sourceSkill)) {
                await fs.copy(sourceSkill, destSkill);
                console.log(`✅ Skill "${options.skill}" añadida correctamente.`);
            } else {
                console.log(`❌ La skill "${options.skill}" no existe en el paquete.`);
            }
        } catch (err) {
            console.error('Error al añadir la skill:', err);
        }
    });

program.parse(process.argv);