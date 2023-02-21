//implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import fs from 'fs/promises';
import { URL, fileURLToPath } from 'url';

const list = async () => {
    const pathToFiles = fileURLToPath(new URL('./files', import.meta.url));
    const pathToCurrent = fileURLToPath(new URL('.', import.meta.url));

    try {
        const filesInCurrent = await fs.readdir(pathToCurrent);

        if (!filesInCurrent.includes('files')) {
            throw new Error("Files folder doesn't exist");
        }

        const files = await fs.readdir(pathToFiles);
        console.log(files);
    } catch (err) {
        console.log('ERROR: ', err);
    }
};

await list();