import { Component, OnInit } from '@angular/core';
import { faHandshake, faHouse, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faHandshake = faHandshake;
  faHouse = faHouse;
  faPeople = faPeopleGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
