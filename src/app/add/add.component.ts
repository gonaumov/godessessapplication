import { Component } from '@angular/core';
import { GoddessService } from '../goddess.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  {
  constructor(private goddessService: GoddessService) {}
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.goddessService.addGodess(name);
  }
}
