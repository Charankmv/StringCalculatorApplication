import { Component } from "@angular/core";


@Component({
  selector: 'string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrl: './string-calculator.component.css'
})
export class StringCalaculatorComponent {
  constructor() { }

  public stringValue: string = ""
  public calculatedResult: string = "";

  public onCalculate() {
    this.addNumbers();
  }
  public addNumbers() {
    var stringValue: string = this.stringValue;
    if (stringValue == null || stringValue == "") {
      this.calculatedResult = "";
      return;
    }
    const delimiters: string[] = [",", "\n"];
    if (stringValue.startsWith("//")) {
      const delimiterEndIndex = stringValue.indexOf('\n');
      const delimiter = stringValue.substring(2, delimiterEndIndex);
      delimiters.push(delimiter);
      stringValue = stringValue.substring(delimiterEndIndex + 1);
    }
    var value = stringValue.split(new RegExp(delimiters.join('|'), 'g')).map(Number);
    this.calculatedResult = this.add(value)
    }

  private add(value: number[]) {
    var sum = 0;
    value.forEach(s => { sum = sum + s })
    return sum.toString();
  }

}
