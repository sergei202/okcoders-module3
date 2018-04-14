import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent {
	itemName = '';
	items = [
		'Shirt',
		'Pants',
		'Socks'
	];

	constructor() { }

	addItem() {
		console.log('addItem: ', this.itemName);
		this.items.push(this.itemName);
		this.itemName = '';
	}

	removeItem(item) {
		console.log('removeItem: ', item);
		let index = this.items.indexOf(item);
		this.items.splice(index,1);
	}
}
