//implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import fs from 'fs/promises';
import fsStream from 'fs';
import path from 'path';
import { URL, fileURLToPath } from 'url';

const copy = async () => {
    const pathToFiles = fileURLToPath(new URL('./files', import.meta.url));
    const pathToCopy = fileURLToPath(new URL('./files_copy', import.meta.url));
    const pathToCurrent = fileURLToPath(new URL('.', import.meta.url));

    try {
        const current = await fs.readdir(pathToCurrent);
        if (current.includes('files_copy')) {
            throw new Error('Copy folder already exists');
        }

        await fs.mkdir(pathToCopy);

        const filesToCopy = await fs.readdir(pathToFiles);

        filesToCopy.forEach(file => {
            const writeStream = fsStream.createWriteStream(path.join(pathToCopy, file));
            const readStream = fsStream.createReadStream(path.join(pathToFiles, file));
            readStream.pipe(writeStream);
        })
    } catch (err) {
        console.log('ERROR:', err);
    }

};

await copy();
