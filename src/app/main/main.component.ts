import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// injections
import { RoomService } from '../room.service';

// Interface
import { Room } from '../interface/room';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  links:Room[] = [];

  room: Room = {
    _id: "",
    name: '',
    thoughts: '',
    links: [],
    owner: {
      _id: '',
      userName: ''
    }
  }

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      () => {
        this.room = {
          _id: "",
          name: '',
          thoughts: '',
          links: [],
          owner: {
            _id: '',
            userName: ''
          }
        }
        this.getRoom()
      }
    )
  };

  getRoom() {
    const id: string = String(this.route.snapshot.paramMap.get('id'))
    this.roomService.getRoom(id)
      .subscribe(room => {
        this.room = room as Room
        this.links = this.room.links
      })
  };


};