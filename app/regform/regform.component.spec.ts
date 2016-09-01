/* tslint:disable:no-unused-variable */
import { RegformComponent } from './regform.component';

import { TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('RegformComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [RegformComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(RegformComponent);
    expect(fixture.componentInstance instanceof RegformComponent).toBe(true, 'should create RegformComponent');
  });

  it('should have expected <h1> text', () => {
    let fixture = TestBed.createComponent(RegformComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

    expect(h1.innerText).toMatch(/Registration/i, '<h1> should say something about "Registration"');
  });
});
