import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const fileName  = 'wrongFilename.txt';
const properFileName = 'properFilename.md'
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const filePath = path.join(__dirname, folderName, fileName);
  const newFilePath = path.join(__dirname, folderName, properFileName);
  try {
    await fs.rename(filePath, newFilePath);
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await rename();
