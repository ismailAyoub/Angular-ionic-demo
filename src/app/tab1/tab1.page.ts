import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../../services/list-items.service';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  itemlist: User[] = [];
  myEventEmitterString = 'untouched';
  myObservableString = 'untouched';
  constructor(private items: ListItemsService, private http: HttpClient) {}
  // onClickMyEventEmitter() {
  //   this.items.myEventEmitter.emit('changed by event emitter');
  // }
  // onClickMyListEmitter() {
  //   let myList = this.items.listItems.filter((item) => item.id !== '0');

  //   this.items.updateListEventEmiter.emit(myList);
  // }

  // onClickSubjectObservable() {
  //   this.items.mySubjectEmitter.next('changed by observable');
  // }
  // onClickMyListObservable() {
  //   let myList = this.items.listItems.filter((item) => item.id !== '0');
  //   this.items.updateListSubjectEmiter.next(myList);
  // }

  ngOnInit(): void {
    console.log('ngOnInIt');

    this.items.myEventEmitter.subscribe((myString) => {
      this.myEventEmitterString = myString;
    });
    this.items.updateListEventEmiter.subscribe((myList) => {
      this.itemlist = myList;
    });

    this.items.mySubjectEmitter.subscribe((myString) => {
      this.myObservableString = myString;
    });
    this.items.updateListSubjectEmiter.subscribe((myList) => {
      this.itemlist = myList;
    });
    this.items.httpRequst().subscribe((data) => {
      this.items.contactList = [...data];
      this.itemlist = this.items.contactList;
    });
  }
  ionViewWillEnter() {
    this.itemlist = this.items.contactList;
    console.log('ionViewWillEnter');
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
