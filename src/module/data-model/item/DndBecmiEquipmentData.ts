export default class DndBecmiEquipmentData extends foundry.abstract.DataModel {
  get type() {return "equipment" as const;}

  static override defineSchema(){
    const fields = foundry.data.fields;

    const data = {
        description: new fields.HTMLField(),
    } as const;

    return data;
  }
}
