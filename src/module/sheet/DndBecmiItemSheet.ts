import DndBecmiItem from "../document/DndBecmiItem";

export default class DndBecmiItemSheet extends ItemSheet<DndBecmiItem> {
  static override get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dndbecmi", "sheet", "item"],
      template: "", // FIXME: INSERT TEMPLATE PATH
      width: 800,
      height: 800,
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}],
    });
  }
}