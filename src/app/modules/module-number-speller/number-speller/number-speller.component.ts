import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-speller',
  templateUrl: './number-speller.component.html',
  styleUrls: ['./number-speller.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NumberSpellerComponent implements OnInit {

  public numberFormControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
