import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const fileName  = 'fileToRead.txt';
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const src = path.join(__dirname, folderName, fileName);
    try {
      const file = await fs.readFile(src, { encoding: 'utf8' });
      console.log(file);
    } catch (error) {
      throw new Error(errorMsg);
    }
};

await read();
