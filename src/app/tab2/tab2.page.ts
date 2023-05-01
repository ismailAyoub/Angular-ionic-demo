import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListItemsService } from '../../services/list-items.service';
import { Router } from '@angular/router';

interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  itemlist: User[] = [];

  constructor(private items: ListItemsService, private router: Router) {}

  ionViewWillEnter() {
    this.items.updateListSubjectEmiter.subscribe((myList) => {
      this.itemlist = myList;
    });
  }

  onSubmit(form: NgForm) {
    this.items.addItem({
      id: form.value.itemID,
      name: form.value.itemName,
      phone: form.value.itemPhone,
      email: form.value.itemEmail,
    });
    this.router.navigate(['/tabs/tab1']);
    form.reset();
  }
  clearFunc(form: NgForm) {
    form.reset();
  }
}
