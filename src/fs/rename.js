// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import fs from 'fs/promises';
import { fileURLToPath, URL } from 'url';

const rename = async () => {
    const pathToFiles = fileURLToPath(new URL('./files', import.meta.url));
    const pathToFile = fileURLToPath(new URL('./files/wrongFilename.txt', import.meta.url));
    const pathNew = fileURLToPath(new URL('./files/properFilename.md', import.meta.url));

    try {
        const files = await fs.readdir(pathToFiles);

        if (!files.includes('wrongFilename.txt')) {
            throw new Error("File doesn't exist");
        }

        fs.rename(pathToFile, pathNew);
    } catch (err) {
        console.log('ERROR:', err);
    }
};

await rename();