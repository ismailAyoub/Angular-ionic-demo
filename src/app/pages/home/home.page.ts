import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListItemComponent } from '../../components/list-item/list-item.component';
import { ListItemsService } from '../../../services/list-items.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ListItemComponent, CommonModule, RouterModule],
})
export class HomePage implements OnInit {
  itemlist: { id: string; name: string }[] = [];
  constructor(private items: ListItemsService) {}
  ngOnInit(): void {
    console.log('ngOnInIt');
    //this.itemlist = this.items.listItems;
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.itemlist = this.items.listItems;
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
}
