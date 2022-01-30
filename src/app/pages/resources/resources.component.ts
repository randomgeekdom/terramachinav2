import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public classes: {name: string, icon:string, description: string}[] = [
    {name: "Brute", icon: "gavel", description: "A muscle-bound class who smashes any obstacle with their hammer."},
    {name: "Dragoon", icon: "dragon", description: " A melee class that is known for their high jumping and dragon-like abilities."},
    {name: "Engineer", icon: "tools", description: "A support class that uses science and technology."},
    {name: "Gunslinger", icon: "bullseye", description: "A long-range class that shoots guns at their enemy."},
    {name: "Knight", icon: "chess-knight", description: "A sword-wielder with a sense of honor."},
    {name: "Protector", icon: "user-nurse", description: "A magical class that aids their allies when necessary."},
    {name: "Scoundrel", icon: "skull-crossbones", description: "A roguish class that strikes from the shadows."},
    {name: "Sorcerex", icon: "hat-wizard", description: "A magical class that uses the elements to target their enemies."},
    {name: "Warrior", icon: "hand-rock", description: " A melee class that uses the energy within for combat."}


  ];


  constructor() { }

  ngOnInit(): void {
  }

}
