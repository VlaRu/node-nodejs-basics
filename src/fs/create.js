import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const fileName = 'fresh.txt';
const content = 'I am fresh and young';
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const filePath = path.join(__dirname, folderName, fileName);
  try {
    await fs.access(filePath);
    throw new Error(errorMsg);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(filePath, content);
    } else {
      throw new Error(errorMsg);
    }
  }
};

await create();
