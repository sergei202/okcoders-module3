import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.css']
})
export class CounterComponent {
	counter = 0;

	add() {
		this.counter++;
	}

	sub() {
		this.counter--;
	}

}
