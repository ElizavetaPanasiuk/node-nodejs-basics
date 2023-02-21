//implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import fs from 'fs/promises';
import { URL, fileURLToPath} from 'url';

const checkFileExists = async (fileName) => {
    const pathToFiles = fileURLToPath(new URL('./files', import.meta.url));

    const files = await fs.readdir(pathToFiles);
    //console.log(files);

    return files.includes(fileName);
};

const remove = async () => {
    const pathToFile = fileURLToPath(new URL('./files/fileToRemove.txt', import.meta.url));

    try {
        const fileExists = await checkFileExists('fileToRemove.txt');

        if (fileExists) {
            fs.rm(pathToFile);
        }
    } catch (err) {
        console.log('ERROR:', err);
    }
};

await remove();