import { Component } from '@angular/core';
import { ListItemsService } from '../../services/list-items.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  itemlist: { id: string; name: string }[] = [];
  itemRemoveID = '';
  itemRemoveName = '';

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        let myList = this.items.removeItem(this.itemRemoveID);
        this.items.updateListSubjectEmiter.next(myList);
      },
    },
  ];
  isAlertOpen = false;
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  constructor(private items: ListItemsService) {}

  ionViewWillEnter() {
    this.itemlist = this.items.contactList;
    this.items.updateListSubjectEmiter.subscribe((myList) => {
      this.itemlist = myList;
    });
  }

  removeItem() {
    let myList = this.items.removeItem(this.itemRemoveID);
    this.items.updateListSubjectEmiter.next(myList);
  }
  setItemRemove(id: string, name: string) {
    this.setOpen(true);
    this.itemRemoveID = id;
    this.itemRemoveName = `Are you sure you want to delete ${name} from you contacts?`;
  }
}
