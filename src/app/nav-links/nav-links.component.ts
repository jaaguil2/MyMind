import { Component, OnInit, Input } from '@angular/core';

// Interface
import { Room } from '../interface/room';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  @Input() rooms?: Room[];
  
  constructor() { }

  ngOnInit(): void {
  }

  

}