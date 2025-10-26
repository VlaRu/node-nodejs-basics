const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  for (const i in args) {
    if (i % 2 === 0) {
      const key = args[i].replace(/^--/, '');
      const value = args[Number(i) + 1];
      result.push(`${key} is ${value}`);
    }}
  console.log(result);
};

parseArgs();
