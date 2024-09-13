import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './data/dummy-Users';
import { TaskComponent } from './tasks/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserName = ''
  onSelectUser(id:string) {
    console.warn('want to display user of id ' + id)
    this.selectedUserName = DUMMY_USERS.find(key => key.id === id)?.name ?? ''
  }
}
