import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calc',
	templateUrl: './calc.component.html',
	styleUrls: ['./calc.component.css']
})
export class CalcComponent {
	num1 = 55;
	num2 = 100;
	result = 0;

	add() {
		this.result = this.num1 + this.num2;
	}

	sub() {
		this.result = this.num1 - this.num2;
	}
}
