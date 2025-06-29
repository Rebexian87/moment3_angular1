import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  //Properties
  num1: number = 0; 
  num2: number = 0; 
  result1: number = 0; 
  result2: number = 0; 
  // result3: number = 0; 
 

  //Methods
   convert1(): void {
    this.result1 = this.num1 * 0.3048 
 
  }
   convert2(): void {
    this.result2 = (this.num2 * 9/5)+32  //F = (°C × 9/5) + 32
  }

  changeConvert1(): void {
      this.result1 = this.num1 * 3.2808
   

  }
  
 changeConvert2(): void {
    this.result2 = (this.num2 -32)/1.8  //(°F - 32) / 1,8
  }

}


