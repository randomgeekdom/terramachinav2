import { Component, OnInit } from '@angular/core';
import reference from 'reference.json';

@Component({
  selector: 'app-sample-custom-moves',
  templateUrl: './sample-custom-moves.component.html',
  styleUrls: ['./sample-custom-moves.component.scss']
})
export class SampleCustomMovesComponent implements OnInit {

  public moves = [];
  public searchTerm = "";

  constructor() {
   }

  ngOnInit(): void {
    this.moves = reference.Sample_Custom_Moves.sort((one, two) => (one.Name > two.Name ? 1 : -1));
  }


  get sortedItems(){
    return this.moves.filter(x=>!this.searchTerm ||
      x.Name.toLowerCase().includes(this.searchTerm) ||
      x.Description.toLowerCase().includes(this.searchTerm) )
  }


}
