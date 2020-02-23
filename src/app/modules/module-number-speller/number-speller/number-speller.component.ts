import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-speller',
  templateUrl: './number-speller.component.html',
  styleUrls: ['./number-speller.component.scss']
})
export class NumberSpellerComponent implements OnInit {

  public numberFormControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
