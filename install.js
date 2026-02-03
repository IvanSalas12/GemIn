#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');

program
    .name('gemin')
    .description('Herramienta para instalar la configuración de GemIn')
    .version('1.0.0');

// COMANDO PRINCIPAL: npx gemin (instala todo)
program
    .action(async () => {
        const source = path.join(__dirname, '.gemini');
        const destination = path.join(process.cwd(), '.gemini');

        try {
            console.log('Instalando carpeta .gemini en la raíz del proyecto...');
            await fs.copy(source, destination);
            console.log('Instalación completada. Ahora puedes usar tus comandos y skills.');
        } catch (err) {
            console.error('Error al copiar la carpeta .gemini:', err);
        }
    });

// COMANDO EXTRA: npx gemin add --skill nombre
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
                console.log(`Skill "${options.skill}" añadida correctamente.`);
            } else {
                console.log(`La skill "${options.skill}" no existe en el paquete.`);
            }
        } catch (err) {
            console.error('Error al añadir la skill:', err);
        }
    });

program.parse(process.argv);