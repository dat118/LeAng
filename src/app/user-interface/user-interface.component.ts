import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss'],
})
export class UserInterfaceComponent {
  @Input() result!: string;
}
