import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class ListItemsService {
  contactList: User[] = [];

  myEventEmitter = new EventEmitter<string>();
  updateListEventEmiter = new EventEmitter<User[]>();

  mySubjectEmitter = new Subject<string>();
  updateListSubjectEmiter = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  addItem(item: { id: string; name: string; phone: string; email: string }) {
    this.contactList.push(item);
    //this.personsChanged.next(this.persons);
  }

  getListItem(itemId: string) {
    return {
      ...this.contactList.find((item) => {
        return item.id === itemId;
      }),
    };
  }
  httpRequst() {
    return this.http
      .get<User[]>('https://m1j5e.wiremockapi.cloud/contacts')
      .pipe(map((response) => response));
  }
  removeItem(id: string) {
    const result = this.contactList.filter((item) => item.id !== id);
    this.contactList = [...result];
    return result;
  }
}
