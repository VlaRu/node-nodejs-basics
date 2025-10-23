import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const errorMsg = 'FS operation failed';
const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const filePath = path.join(__dirname, folderName, fileName);
  try {
    await fs.promises.access(filePath);
    const hash = crypto.createHash('sha256')
    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      console.log(hash.digest('hex'));
    });

    stream.on('error', () => {
      throw new Error(errorMsg);
    });
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await calculateHash();
