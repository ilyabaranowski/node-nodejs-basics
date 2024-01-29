import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const list = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const pathFolder = path.join(path.dirname(fileName), 'files');

    try {
        const files = await fs.promises.readdir(pathFolder);
        console.log(files)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
