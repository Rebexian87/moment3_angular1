import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  //Properties for variables
  num1: number = 0; 
  num2: number = 0; 
  result1: number = 0; 
  result2: number = 0; 

 

  //Methods

  //Konverterar från fot till meter
   convert1(): void {
    this.result1 = this.num1 * 0.3048   
 
  }
  //Konverterar från celsius till Farenheit
   convert2(): void {
    this.result2 = (this.num2 * 9/5)+32  //F = (°C × 9/5) + 32
  }

   //Konverterar från meter till fot 
  changeConvert1(): void {
      this.result1 = this.num1 * 3.2808
   

  }
    //Konverterar från Farenheit till celsius
  changeConvert2(): void {
    this.result2 = (this.num2 -32)/1.8  //(°F - 32) / 1,8
  }

}


