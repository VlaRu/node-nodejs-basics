// n should be received from main thread
import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const result = nthFibonacci(Number(workerData));
    parentPort.postMessage({ status: 'resolved', data: result });
  } catch (error) {
    parentPort.postMessage({ status: 'rejected', data: error.message });
  }
};

sendResult();
