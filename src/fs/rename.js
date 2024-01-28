import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const oldName = path.join(
        path.dirname(fileName), 'files', 'wrongFilename.txt');
    const newName = path.join(
        path.dirname(fileName), 'files', 'properFilename.md');

    try {
        await fs.promises.rename(oldName, newName)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await rename();
