import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const chunkReverse = new Transform({
  transform(chunk, encoding, callback) {
    const s = chunk.toString().split('').reverse().join('');
    callback(null, s);
  }
});

const transform = async () => {
  try {
    await pipeline(stdin, chunkReverse, stdout, { end: false });
  } catch (error) {
    console.error('Error:', error.message);
  }
};

await transform();