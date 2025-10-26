import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const fileName = 'fileToRemove.txt';
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const filePath = path.join(__dirname, folderName, fileName);
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(errorMsg);
    } else {
       throw error;
    }
  }
};

await remove();
