import color from "colors/safe";

function getColored(data: any, state: number) {
  if (state == 0) {
    return color.green(data);
  } else if (state == 1) {
    return color.red(data);
  } else {
    return color.yellow(data);
  }
}

function draw(state: number, ...args: any) {
  console.log(getColored("░".repeat(process.stdout.columns), state));
  console.log("");
  if (args !== undefined || args !== null) {
    if (typeof args === "object") {
      if (args.length) {
        args.forEach((element: any) => {
          console.log(getColored(element, state));
        });
      } else {
        console.log(getColored(args, state));
      }
    } else {
      console.log(getColored(args, state));
    }
  }
  console.log("");
  console.log(getColored("░".repeat(process.stdout.columns), state));
}

export function log(...args: any) {
  draw(0, ...args);
}

export function error(...args: any) {
  draw(1, ...args);
}

export function warn(...args: any) {
  draw(2, ...args);
}
