import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < numCores; i++) {
    const promise = new Promise((resolve) => {
      const workerData = 10 + i;
      const worker = new Worker(workerPath, { workerData });

      worker.on('message', (msg) => {
        resolve(msg);
      });

      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({ status: 'error', data: null });
        }
      });
    });

    workers.push(promise);
  }

  const computedResults = await Promise.all(workers);

  console.log(computedResults);
};

await performCalculations();
