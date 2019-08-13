
String.prototype.isEmpty = isEmpty;
String.prototype.contains = contains;

interface String {
  isEmpty: typeof isEmpty;
  contains: typeof contains;
}

function isEmpty() {
  return this === '';
}

function contains(str: string): boolean {
  return !str.isEmpty() && this.toUpperCase().indexOf(str.toUpperCase()) !== -1;
}
