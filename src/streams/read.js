// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import fs from 'fs';
import { fileURLToPath } from 'url';

const read = async () => {
    const path = fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));
    const readStream = fs.createReadStream(path);
    readStream.pipe(process.stdout);
};

await read();