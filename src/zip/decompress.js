import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import zlib from 'zlib'
import stream from "stream";

const decompress = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const parentPath = path.join(path.dirname(fileName), 'files', 'archive.gz');
    const childPath = path.join(path.dirname(fileName), 'files', 'fileToCompress.txt');
    const parent = fs.createReadStream(parentPath);
    const child = fs.createWriteStream(childPath);
    const unzip = zlib.createUnzip();

    stream.pipeline(parent, unzip, child, (error) => {
        if (error) throw new Error;
    })
};

await decompress();
