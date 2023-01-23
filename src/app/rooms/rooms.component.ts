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
    availableRooms: 0,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [
    {
      roomType: 'Business',
      amenities: 'Air conditioner, wi-fi',
      price: 500,
      photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
      checkInTime: new Date('23-Jan-2023'),
      checkOutTime: new Date('24-Jan-2023')
    },
    {
      roomType: 'Deluxe',
      amenities: 'Air conditioner, wi-fi',
      price: 500,
      photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
      checkInTime: new Date('23-Jan-2023'),
      checkOutTime: new Date('24-Jan-2023')
    },
    {
      roomType: 'Private Suite',
      amenities: 'Air conditioner, wi-fi',
      price: 500,
      photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
      checkInTime: new Date('23-Jan-2023'),
      checkOutTime: new Date('24-Jan-2023')
    }
  ];
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
