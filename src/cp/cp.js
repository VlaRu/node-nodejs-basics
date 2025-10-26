import {fork} from 'child_process';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const folderName = 'files';
const fileName = 'script.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, folderName, fileName);

const spawnChildProcess = async (args) => {
  fork(src,args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
