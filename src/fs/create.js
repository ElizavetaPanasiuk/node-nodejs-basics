import fs from 'fs/promises';
import { fileURLToPath, URL } from 'url';


// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
    const path_files = fileURLToPath(new URL('./files', import.meta.url));
    const path_freshTxt = fileURLToPath(new URL('./files/fresh.txt', import.meta.url));
    const files = await fs.readdir(path_files, (err) => {
        if (err) throw err;
    });
    
    if (files.includes('fresh.txt')) {
        throw new Error('File already exists');
    }

    fs.writeFile(path_freshTxt, 'I\'m fresh and young', (err, data) => {
        if (err) throw err;
    });
};

await create();