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
    this.addNumbers(this.stringValue);
  }
  public addNumbers(stringValue: string) {
    if (stringValue == null || stringValue == "") {
      this.calculatedResult = "";
      return;
    }
    const delimiters: string[] = [",", "\n"];
    var value = stringValue.split(new RegExp(delimiters.join('|'), 'g'))
    this.calculatedResult = this.add(value)
    }

  private add(value: string[]) {
    var sum = 0;
    value.forEach(s => { sum = sum + parseInt(s) })
    return sum.toString();
  }

}
