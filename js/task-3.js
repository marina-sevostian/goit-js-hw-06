class StringBuilder {
  #value;
  constructor(params) {
    this.#value = params;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {}
  padStart(str) {}
  padBoth(str) {}
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
