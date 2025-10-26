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

const decompress = async () => {
  const source = fs.createReadStream(dest);
  const unGzip = zlib.createGunzip();
  const destination = fs.createWriteStream(src);
  try {
    await pipeline(source, unGzip, destination);
    console.log('File decompressed successfully');
  } catch (error) {
    console.log('Error during compression:', error.message);
  }
};

await decompress();
