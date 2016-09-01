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

    let h2 = fixture.debugElement.query(el => el.name === 'h2').nativeElement;  // it works

        h2 = fixture.debugElement.query(By.css('h2')).nativeElement;            // preferred

    expect(h2.innerText).toMatch(/Registration/i, '<h2> should say something about "Registration"');
  });
});
