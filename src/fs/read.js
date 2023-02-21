//implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import { URL, fileURLToPath } from 'url';
import fs from 'fs/promises';

const read = async () => {
    const pathToFiles = fileURLToPath(new URL('./files', import.meta.url));
    const pathToRead = fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));

    try {
        const files = await fs.readdir(pathToFiles);

        if (!files.includes('fileToRead.txt')) {
            throw new Error("File doesn't exists");
        }

        const fileContent = await fs.readFile(pathToRead, 'utf-8');
        console.log(fileContent);
    } catch (err) {
        console.log('ERROR:', err);
    }
};

await read();