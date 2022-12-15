type Empty = null;
type Rows = string | Empty[][]

function stackToRows(s: string): Rows {
  const stacks = s
    .split("\n")
    .filter(a => !!a)
    .slice(0, test.length)

  return stacks
    .map(cur => {
      const rowChars = cur.split("");
      let row: string | null[] = [];
      
      let i = 1;
      while (i < rowChars.length) {
        if (rowChars[i] === " ") {
          row.push(null);
        } else {
          row.push(rowChars[i]);
        }

        i += 4;
      }

      return row
    }, [])
}

function performOperation(rows: Rows, instruction: s): rows {
  console.log({rows, instruction});
  
  return rows;
}

export function stack(s: string): string {
  const [stacks, _instructions] = s
    .split("\n\n")

    const test: string = 1;

  const rows = stackToRows(stacks);

  const instructions = _instructions
    .split("\n")

  const result = instructions
    .slice(0, instructions.length - 1)

  return result
}
