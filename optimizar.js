const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// === CONFIGURACIÓN ===
const CARPETA_ORIGEN = './fotos_raw'; // Tu carpeta con las fotos originales
const CARPETA_DESTINO = './assets/img'; // Donde se guardan las optimizadas
const ANCHO_MAXIMO = 1200; 
const CALIDAD_JPG = 80; 

// ======================

async function procesarImagenes() {
    console.log('🚀 Iniciando optimización masiva...');

    try {
        // Leemos las carpetas dentro de fotos_raw
        const carpetas = fs.readdirSync(CARPETA_ORIGEN);

        for (const carpeta of carpetas) {
            const rutaOrigenCarpeta = path.join(CARPETA_ORIGEN, carpeta);
            const rutaDestinoCarpeta = path.join(CARPETA_DESTINO, carpeta);

            // Verificar que sea una carpeta
            if (!fs.lstatSync(rutaOrigenCarpeta).isDirectory()) continue;

            console.log(`\n📂 Procesando carpeta: ${carpeta}`);

            // Crear carpeta de destino si no existe
            if (!fs.existsSync(rutaDestinoCarpeta)) {
                fs.mkdirSync(rutaDestinoCarpeta, { recursive: true });
            }

            // Leer archivos
            const archivos = fs.readdirSync(rutaOrigenCarpeta);
            
            // FILTRO MEJORADO: Acepta jpeg, jpg, png, webp (mayúsculas o minúsculas)
            const imagenes = archivos.filter(archivo => /\.(jpe?g|png|webp)$/i.test(archivo));

            if (imagenes.length === 0) {
                console.log(`   ⚠️ No encontré imágenes válidas en esta carpeta.`);
                continue;
            }

            let contador = 1;

            for (const imagen of imagenes) {
                // === CAMBIO: ELIMINAMOS EL LÍMITE DE 5 FOTOS ===
                // Ahora procesará TODAS las que encuentre en la carpeta
                
                const rutaImagenOriginal = path.join(rutaOrigenCarpeta, imagen);
                // Todas se llamarán Photo 1.jpg, Photo 2.jpg... independientemente del original
                const nombreFinal = `Photo ${contador}.jpg`; 
                const rutaImagenFinal = path.join(rutaDestinoCarpeta, nombreFinal);

                try {
                    await sharp(rutaImagenOriginal)
                        .resize({ width: ANCHO_MAXIMO, withoutEnlargement: true })
                        .toFormat('jpeg', { mozjpeg: true, quality: CALIDAD_JPG })
                        .toFile(rutaImagenFinal);

                    console.log(`   ✅ [${contador}/${imagenes.length}] Generada: ${nombreFinal}`);
                    contador++;
                } catch (error) {
                    console.error(`   ❌ Error con el archivo "${imagen}":`, error.message);
                }
            }
        }
        console.log('\n✨ ¡Listo! Ejecuta tu servidor y revisa la web.');

    } catch (error) {
        console.error('Error fatal:', error.message);
    }
}

procesarImagenes();