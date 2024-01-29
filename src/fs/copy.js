import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const parentPath = path.join(path.dirname(fileName), 'files');
    const childPath = path.join(path.dirname(fileName), 'files_copy');

    try {
        await fs.promises.cp(parentPath, childPath, {
            errorOnExist: true,
            force: false,
            recursive: true,
        })
    } catch (error){
            throw new Error('FS operation failed')
    }
};

await copy();
