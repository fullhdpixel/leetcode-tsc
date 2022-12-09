export function countCalories(s: string) {

  let a: {[key: number]: number} = {}
  let i = 0;

  s.split("\n").forEach(item => {
    if (item === "") {
      i++
    }
    a[i] = a[i] ? a[i] + parseInt(item) : parseInt(item);
  });

  return Object.values(a).sort((k,j) => j - k)[0]
}

export function top3total(s: string) {
  let a: {[key: number]: number} = {}
  let i = 0;

  s.split("\n").forEach(item => {
    if (item === "") {
      i++
    }
    a[i] = a[i] ? a[i] + parseInt(item) : parseInt(item);
  });

  return Object.values(a).filter(item => !isNaN(item))
    .sort((k, j) => j - k)
    .slice(0,3)
    .reduce((prev, cur) => prev + cur, 0)
}

