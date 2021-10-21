import { Component, Input, OnInit } from '@angular/core';

// Injections
import { RoomService } from '../room.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit {
  @Input() thoughts: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  };

  saveThoughts() {
    this.roomService.setThoughts({thoughts: this.thoughts, id: this.id})
      .subscribe()
  };
};