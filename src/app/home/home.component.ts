import {Component, OnInit} from '@angular/core';
import { GoddessService } from '../goddess.service';
import {Goddess} from '../goddess';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  goddesses: Array<Goddess> = [];
  constructor(private goddessService: GoddessService) {}
  ngOnInit() {
    this.getGodesses();
  }
  getGodesses(): void {
    this.goddessService.getGodesses()
      .subscribe(receivedGodesses => {
        this.goddesses = receivedGodesses;
      });
  }
}
