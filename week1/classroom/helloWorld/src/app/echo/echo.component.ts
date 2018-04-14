import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'echo',
	templateUrl: './echo.component.html',
	styleUrls: ['./echo.component.css']
})
export class EchoComponent {
	text = 'Hello';
}
