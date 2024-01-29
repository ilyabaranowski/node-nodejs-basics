import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const filePath = path.join(path.dirname(fileName), 'files', 'fileToRead.txt');

    try {
        const file = await fs.promises.readFile(filePath, 'utf-8');
        console.log(file)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
