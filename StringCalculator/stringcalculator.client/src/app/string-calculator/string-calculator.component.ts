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
    var value = stringValue.split(',')
    this.calculatedResult = this.add(value)
    }

  private add(value: string[]) {
    var sum = 0;
    value.forEach(s => { sum = sum + parseInt(s) })
    return sum.toString();
  }

}
