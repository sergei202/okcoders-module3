import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-person-list',
	templateUrl: './person-list.component.html',
	styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
	persons = [
		{name:'Sergei', phone:'123-370-0362'},
		{name:'Alex', phone:'918-370-4444'},
		{name:'Sam', phone:'123-333-0362'}
	];

	newPerson = {name:'', phone:''};

	addPerson() {
		this.persons.push(this.newPerson);
		this.newPerson = {name:'', phone:''};
	}
}
