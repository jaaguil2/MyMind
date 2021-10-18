import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // convert to room.links
  navLinks: string[] = [
    "room1",
    "room2",
    "room3"
  ]

  // covert to room.thoughts
  thoughts = "the thoughts are: these are my thoughts"

  // convert to room.name
  roomName = "the roomName is: Art of War"

  // convert to userName
  userName = "the userName is: JoshJosh"

  constructor() { }

  ngOnInit(): void {
  }

}

// get user info service
// set navLinks info
// set mainLinks info
// if home node, display welcome message
// else, display room name and thoughts
// TRY: if !home, then other rooms