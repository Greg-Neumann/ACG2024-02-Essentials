import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
//
//
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true}) id!:string
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  //
  // avatar = input.required<string>() // this is a signal input
  // name = input.required<string>()
  //
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id)
    console.warn('Clicked for user of id ' +this.id);
  }
}
