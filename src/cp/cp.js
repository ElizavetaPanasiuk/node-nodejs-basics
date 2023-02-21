import child_process from 'child_process';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const path = fileURLToPath(new URL('./files/script.js', import.meta.url));
    const child = child_process.fork(path, args);
    child.on('message', (data) => {
        console.log('CLOSE CP:', data);
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1, 2, 'Liza', 'Zaya']);
