import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() itemName: string = '';
  constructor() {}

  ngOnInit() {}
}
