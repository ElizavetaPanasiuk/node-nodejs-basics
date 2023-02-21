//compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { createGzip } from 'zlib';
import fs from 'fs';
import { fileURLToPath, URL } from 'url';

const compress = async () => {
    const gzip = createGzip();
    const readStream = fs.createReadStream(fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url)));
    const writeStream = fs.createWriteStream(fileURLToPath(new URL('./files/archive.gz', import.meta.url)));
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();