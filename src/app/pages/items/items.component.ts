import { Component, OnInit } from '@angular/core';
import reference from '../../../reference.json';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items = [];
  public searchTerm = "";

  constructor() {
   }

  ngOnInit(): void {
    this.items = reference.Items.sort((one, two) => (one.Name > two.Name ? 1 : -1));
  }


  get sortedItems(){
    return this.items.filter(x=>!this.searchTerm ||
      x.Name.toLowerCase().includes(this.searchTerm) ||
      x.Description.toLowerCase().includes(this.searchTerm) )
  }


}
