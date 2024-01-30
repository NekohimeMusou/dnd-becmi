import DndBecmiActor from "../document/DndBecmiActor";

export default class DndBecmiActorSheet extends ActorSheet<DndBecmiActor> {
  static override get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dndbecmi", "sheet", "actor"],
      template: "", // FIXME: INSERT TEMPLATE PATH
      width: 800,
      height: 800,
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}],
    });
  }
}