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
    var sum = 0;
    var value = [];
    if (stringValue == null || stringValue == "") {
      this.calculatedResult = sum.toString();
      return;
    } 
    value = stringValue.split(',')
    value.forEach(s => { sum = sum + parseInt(s) })
    this.calculatedResult = sum.toString();
    }

  

}
