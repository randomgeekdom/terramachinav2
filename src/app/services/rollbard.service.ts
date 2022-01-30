import { Injectable } from '@angular/core';
import { GenderGenerator, NameGenerator, NPCGenerator, Randomizer } from '@randomgeekdom/rollbard';

@Injectable({
  providedIn: 'root'
})
export class RollbardService {

  public randomizer = new Randomizer();
  public nameGenerator = new NameGenerator(this.randomizer)
  public genderGenerator = new GenderGenerator(this.randomizer);
  public npcGenerator = new NPCGenerator(this.randomizer);
}
