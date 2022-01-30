import { Component, OnInit } from '@angular/core';
import { NPC, Gender } from '@randomgeekdom/rollbard';
import { RollbardService } from '@services/rollbard.service';

@Component({
  selector: 'app-npc-generator',
  templateUrl: './npc-generator.component.html',
  styleUrls: ['./npc-generator.component.scss']
})
export class NpcGeneratorComponent implements OnInit {
  public NPC: NPC;

  constructor(private rollbardService: RollbardService) { }

  ngOnInit(): void {
  }

  get GenderText(){
    return !this.NPC? "" : Gender[this.NPC.Gender];
  }

  GenerateNPC(){
    this.NPC = this.rollbardService.npcGenerator.Generate();
  }
}
