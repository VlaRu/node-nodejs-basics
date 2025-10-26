import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const copyFolder = 'files_copy';
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const src = path.join(__dirname, folderName);
  const dest = path.join(__dirname, copyFolder);
  try {
    await fs.access(src);
    try {
       await fs.access(dest);
       throw new Error(errorMsg);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    await fs.mkdir(dest);
    await fs.cp(src, dest, { recursive: true });
  } catch (error) {
    throw new Error(errorMsg);
  }
};


await copy();
