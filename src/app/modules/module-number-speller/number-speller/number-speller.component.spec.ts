import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSpellerComponent } from './number-speller.component';

describe('NumberSpellerComponent', () => {
  let component: NumberSpellerComponent;
  let fixture: ComponentFixture<NumberSpellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSpellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSpellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
