import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Person } from '../models/person';

@Component({
    selector: 'regform',
    templateUrl: 'app/regform/regform.component.html'
})

export class RegformComponent implements OnInit {

    person = new Person('John','Doe','john.doe@example.com','', new Date());
    active = true;
    ngOnInit(): void {
    }
}
