import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'an hotel';

  numOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    availableRooms: 5,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        id:1,
        roomType: 'Business',
        amenities: 'Air conditioner, wi-fi',
        price: 500,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkInTime: new Date('23-Jan-2023'),
        checkOutTime: new Date('24-Jan-2023'),
        rating: 4.5
      },
      {
        id: 2,
        roomType: 'Deluxe',
        amenities: 'Air conditioner, wi-fi',
        price: 500,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkInTime: new Date('23-Jan-2023'),
        checkOutTime: new Date('24-Jan-2023'),
        rating: 3.5
      },
      {
        id:3,
        roomType: 'Private Suite',
        amenities: 'Air conditioner, wi-fi',
        price: 500,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkInTime: new Date('23-Jan-2023'),
        checkOutTime: new Date('24-Jan-2023'),
        rating: 2.3
      },
      {
        id:4,
        roomType: 'Gono',
        amenities: 'Air conditioner, wi-fi',
        price: 500,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkInTime: new Date('23-Jan-2023'),
        checkOutTime: new Date('24-Jan-2023'),
        rating: 1.3
      }
    ]
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectedRoom!: RoomList;
  
  selectRoom(room:RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(){
    const room:RoomList = {
      id:5,
      roomType: 'Average',
      amenities: 'Air conditioner, wi-fi',
      price: 500,
      photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
      checkInTime: new Date('23-Jan-2023'),
      checkOutTime: new Date('24-Jan-2023'),
      rating: 1.3
    }
    this.roomList.push(room);
  }
}
