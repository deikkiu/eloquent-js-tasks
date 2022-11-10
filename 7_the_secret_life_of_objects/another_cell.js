/* Создайте тип ячейки StretchCell(inner, width, height), соответствующий интерфейсу ячеек
таблицы из этой главы. Он должен оборачивать другую ячейку (как делает UnderlinedCell), и
убеждаться, что результирующая ячейка имеет как минимум заданные ширину и высоту, даже
если внутренняя ячейка – меньше. */

function StretchCell(inner, width, height) {
  this.inner = inner.split("\n");
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function () {
  return this.inner.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};

StretchCell.prototype.minHeight = function () {
  return this.inner.length + 1;
};

StretchCell.prototype.draw = function (width, height) {
  const result = [];
  for (let i = 0; i < height; i++) {
    const line = this.inner[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }

  return result;
};

function repeat(string, times) {
  let result = "";
  for (var i = 0; i < times; i++) result += string;
  return result;
}

let sc = new StretchCell("abc", 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
