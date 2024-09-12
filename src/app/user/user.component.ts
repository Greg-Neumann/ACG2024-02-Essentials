import { Component } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-Users';
//
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUsers = DUMMY_USERS[randomIndex];
  //
  // Implement a getter to compute the asset image path for the avatar
  //
  get imagePath() {
    return 'assets/users/' + this.selectedUsers.avatar;
  }
  //
  // Method called by DOM event
  //
  onSelectUser() {
    console.warn('Clicked!');
  }
}
