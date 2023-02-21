//decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
import { createGunzip } from 'zlib';
import fs from 'fs';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const unzip = createGunzip();
    const writeStream = fs.createWriteStream(fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url)));
    const readStream = fs.createReadStream(fileURLToPath(new URL('./files/archive.gz', import.meta.url)));
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();