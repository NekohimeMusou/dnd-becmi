export default class DndBecmiPcData extends foundry.abstract.DataModel {
  get type() {return "pc" as const;}
  static override defineSchema() {
    const fields = foundry.data.fields;
    const data = {
      beast: new fields.NumberField(),
    } as const;

    return data;
  }
}
