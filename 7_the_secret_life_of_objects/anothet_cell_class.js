/* Тоже самое, переписал в классах (хотя 5 строчка меня не радует :( ) */

class StretchCell {
  constructor(inner, width, height) {
    this.inner = inner.split("\n");
    this.width = width;
    this.height = height;
  }

  minHeight() {
    return this.inner.length + 1;
  }

  minWidth() {
    return this.inner.reduce((width, line) => {
      return Math.max(width, line.length);
    }, 0);
  }

  draw(width, height) {
    const result = [];

    for (let i = 0; i < height; i++) {
      const line = this.inner[i] || "";
      result.push(line + repeat(" ", width - line.length));
    }

    return result;
  }
}

const repeat = (string, times) => {
  let result = "";
  for (var i = 0; i < times; i++) result += string;
  return result;
};

let sc = new StretchCell("abc", 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
