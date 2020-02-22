import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

}
