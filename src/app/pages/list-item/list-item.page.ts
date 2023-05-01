import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ListItemsService } from '../../../services/list-items.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ListItemPage implements OnInit {
  selectedItem: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listItemsService: ListItemsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('itemId')) {
        return;
      } else {
        const itemId = paramMap.get('itemId');
        this.selectedItem = itemId && this.listItemsService.getListItem(itemId);
        console.log('selectedItem: ', this.selectedItem);
      }
    });
  }
}
