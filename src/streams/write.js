//write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import fs from 'fs';
import { fileURLToPath } from 'url';

const write = async () => {
    const fileToWrite = fileURLToPath(new URL('./files/fileToWrite.txt', import.meta.url));
    const writableStream = fs.createWriteStream(fileToWrite);

    process.stdin.pipe(writableStream);

};

await write();