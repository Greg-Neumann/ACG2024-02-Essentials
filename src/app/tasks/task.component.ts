import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  //
  // This input property is also a public class property accessible from the HTML
  //
  @Input({ required: true }) userID!: string;
}
