function find(object, path) {
  const pathKeys = path.split('.');
  let value = null;

  for (let idx = 0; idx < pathKeys.length; idx += 1) {
    const key = pathKeys[idx];
    if (!Object.keys(object).includes(key)) {
      return undefined;
    }
    value = object[key];
    object = object[key];
  }
  return value;
}

console.log(
  find(
    {
      user: {
        name: {
          first: 'John',
          last: 'Snow',
        },
      },
    },
    'user.name.third'
  )
);
