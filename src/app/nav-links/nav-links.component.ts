import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  @Input() rooms?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

// will need a get or something for these rooms
// list of connecting rooms with links to that room