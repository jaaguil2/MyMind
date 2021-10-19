import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Injections
import { RoomService } from '../room.service';

// Interface
import { Room } from '../interface/room';
import { NewRoom } from '../interface/newRoom';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {

  // from main
  @Input() name?: string;
  @Input() ownerId?: string;
  @Input() roomId?: string;
  @Input() newRoomLinks?: Room[]

  // Vars
  visRoom: boolean = false;
  newRoomName?: string;
  error?: string;

  constructor(
    private location: Location, 
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goHome() {
    if (this.name !== "home") {
      this.roomService.getHome(String(this.ownerId))
        .subscribe(res => {
          let room = res as Room
          this.router.navigate([`room/${room._id}`])
        })
    }
    
  }

  goBack() {
    if (this.name !== "home") {
      this.location.back()
    }    
  }

  newRoom() {
    this.visRoom = !this.visRoom
  }

  createRoom() {
    // if empty do nothing
    if (!this.roomId || !this.newRoomName) {
      return
    }
    const roomObj: NewRoom = {
      id: String(this.roomId),
      name: String(this.newRoomName)
    }
    this.roomService.newRoom(roomObj)
      .subscribe(
        room => {
          this.newRoomLinks?.push(room as Room)  
        },
        err => this.error = err.error
      )
      
  }
}
