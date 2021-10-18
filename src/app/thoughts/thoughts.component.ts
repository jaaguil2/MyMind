import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit {
  @Input() thoughts?: string;
  constructor() { }

  ngOnInit(): void {
  }

}

// get thoughts
// put in textarea
// allow to save