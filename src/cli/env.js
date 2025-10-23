const parseEnv = () => {
  const parse = Object.entries(process.env)
  .filter(([key]) => key.startsWith('RSS_'))
  .map(([key, value]) => `${key}=${value}`).join('; ');
  console.log(parse);
};

parseEnv();
