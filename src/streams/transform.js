//transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, cb) {
            this.push(chunk.toString().split('').reverse().join('') + '\n');
            cb();
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();