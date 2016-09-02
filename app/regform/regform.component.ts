import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Person } from '../models/person';
import { COUNTRIES } from '../models/countries';
@Component({
    selector: 'regform',
    templateUrl: 'app/regform/regform.component.html'
})

export class RegformComponent implements OnInit {

    person = new Person('John','Doe','john.doe@example.com','', new Date(), '', 'UA');
    active = true;
    submitted = false;
    pass: String = '';

    countries = COUNTRIES;

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.submitted = true;
    }
}
