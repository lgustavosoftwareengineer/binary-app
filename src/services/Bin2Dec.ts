export default class Bin2Dec {
  // Properties
  bin: String;
  ResultedDecimal: number;
  positionOfChar: number; //3
  permission: boolean;
  dontBinaryElements: string[];
  positionTheDontBinaryElement: number;

  // Constructor
  constructor(bin: string) {
    this.bin = bin;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.binConversor;
    this.ResultedDecimal = 0;
    this.positionOfChar = 0; //3
    this.permission = false;
    this.dontBinaryElements = [];
    this.positionTheDontBinaryElement = 0;
  }

  // Methods
  binConversor() {
    const _bin: String = this.bin;
    this.ResultedDecimal = 0;
    this.positionOfChar = _bin.length;
    this.positionTheDontBinaryElement = 0;
    for (var charIndex = 0; charIndex <= _bin.length; charIndex++) {
      var testedChar = _bin.charAt(charIndex);
      this.positionTheDontBinaryElement++;
      if (testedChar !== "1" && testedChar !== "0" && testedChar !== "") {
        this.dontBinaryElements.push(testedChar);
      }
      this.dontBinaryElements.length >= 1
        ? (this.permission = false)
        : (this.permission = true);
    }
    if (this.permission === true && _bin.length === 8) {
      for (
        this.positionOfChar = _bin.length - 1;
        this.positionOfChar >= 0;
        this.positionOfChar--
      ) {
        this.ResultedDecimal +=
          Number(_bin[this.positionOfChar]) *
          Math.pow(2, _bin.length - 1 - this.positionOfChar);
      }

      return this.ResultedDecimal;
    }

    return `[ERROR] ? TIP ? -> Must be 8 digits AND/OR ? TIP ? -> The values must be only binaries`;
  }
}
