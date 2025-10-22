import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const src = path.join(__dirname, folderName);
  try {
    const files = await fs.readdir(src);
    console.log(files);
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await list();
