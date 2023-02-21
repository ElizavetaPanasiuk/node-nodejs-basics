// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
import crypto from 'crypto';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const path = fileURLToPath(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));
    const secret = 'secret';
    try {
        const content = await fs.readFile(path);
        const result = crypto.createHmac('sha256', secret).update(content).digest('hex');
        console.log(result);
    } catch (err) {
        console.log('ERROR: ', err);
    }
};

await calculateHash();