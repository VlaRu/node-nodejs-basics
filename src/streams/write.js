import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { dirname } from 'path';
import { pipeline } from 'node:stream/promises';
import { stdin } from 'node:process';

const folderName = 'files';
const fileName = 'fileToWrite.txt'
const __dirname = dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, folderName, fileName);

const write = async () => {
  console.error('Please enter text to write to the file (press Ctrl+C to end):');
   try {
    const writable = fs.createWriteStream(src);
    await pipeline(stdin, writable);
    console.error('File written successfully');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

await write();
