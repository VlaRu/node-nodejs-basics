import zlib from 'node:zlib';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { dirname } from 'path';
import { pipeline } from 'node:stream/promises';

const folderName = 'files';
const fileName = 'fileToCompress.txt';
const archiveName = 'archive.gz';
const __dirname = dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, folderName, fileName);
const dest = path.join(__dirname, folderName, archiveName);

const compress = async () => {
  const source = fs.createReadStream(src);
  const gzip = zlib.createGzip();
  const destination = fs.createWriteStream(dest);
  try {
    await pipeline(source, gzip, destination);
    console.log('File compressed successfully');
    await fs.promises.unlink(src);
    console.log('Original file deleted successfully');
  } catch (error) {
    console.log('Error during compression:', error.message);
  }
};

await compress();
