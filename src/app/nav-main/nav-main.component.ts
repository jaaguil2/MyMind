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
  @Input() roomLinks: Room[] = []

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
    } else {
      this.error = "Your home already"
      setTimeout(() => this.error = "", 3000)
    }    
  }

  goBack() {
    if (this.name !== "home") {
      this.location.back()
    } else {
      this.error = "Can't go back further"
      setTimeout(() => this.error = "", 3000)
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
          this.roomLinks?.push(room as Room)  
        },
        err => this.error = err.error
      )      
  }

  deleteRoom() {
    if (this.roomLinks.length > 0) {
      this.error = "Cannot delete a room connected to other rooms"
      setTimeout(() => this.error = "", 3000)
      return
    }
    if (this.name !== "home") {
      this.roomService.deleteRoom(String(this.roomId))
        .subscribe(res => this.location.back(), err => this.error = err.error)
    } else {
      this.error = "Can't delete home room"
      setTimeout(() => this.error = "", 3000)
    }
  }
}
