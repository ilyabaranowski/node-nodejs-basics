import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const parentPath = path.join(path.dirname(fileName), 'files', 'fileToRead.txt');

    const stream = fs.createReadStream(parentPath);
    stream.on('data', (chunk) => process.stdout.write(chunk))
};

await read();
