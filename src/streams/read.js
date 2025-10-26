import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { dirname } from 'path';
import { pipeline } from 'node:stream/promises';

const folderName = 'files';
const fileName = 'fileToRead.txt'
const __dirname = dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, folderName, fileName);

const read = async () => {
  try {
    const readable = fs.createReadStream(src, { encoding: 'utf8' });
    await pipeline(readable, process.stdout, { end: false });
    console.log('\nFile read successfully');
  } catch (err) {
    console.error('Error:', err.message);
  }
};

await read();
