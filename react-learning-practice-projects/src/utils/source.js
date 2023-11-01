export function source(start, end) {
  const arr = [];
  console.count("run function");
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }

  return arr;
}
