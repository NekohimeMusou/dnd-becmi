import { ACTORMODELS } from "../data-model/actor-models";
import DndBecmiActiveEffect from "./DndBecmiActiveEffect";
import DndBecmiItem from "./DndBecmiItem";

export default class DndBecmiActor extends Actor<typeof ACTORMODELS, DndBecmiItem, DndBecmiActiveEffect> {
  // prepareData() goes here

  override getRollData() {
    const rollData = deepClone(super.getRollData());

    mergeObject(rollData, this.system.abilities);

    return rollData;
  }
}
