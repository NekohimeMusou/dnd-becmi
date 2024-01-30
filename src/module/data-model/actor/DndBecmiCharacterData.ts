import { DNDBECMI } from "../../config/config";

export default class DndBecmiPcData extends foundry.abstract.DataModel {
  get type() {return "character" as const;}
  static override defineSchema() {
    const fields = foundry.data.fields;

    const abilities = new fields.SchemaField(Object.fromEntries(DNDBECMI.attributes
      .map(attr => [attr, new fields.NumberField({
        integer: true,
        positive: true,
        label: `DNDBECMI.abilities.${attr}`,
      })])
    ));

    const coin = new fields.SchemaField(Object.fromEntries(DNDBECMI.coinLocs
        .map(loc => [loc, this.#coinFields]))
      );

    const schema = {
      description: new fields.HTMLField(),
      abilities,
      class: new fields.StringField({choices: DNDBECMI.classes, label: "DNDBECMI.sheet.class"}),
      coin,
      xp: new fields.NumberField({integer: true, initial: 0})
    } as const;

    return schema;
  }

  get abilityMods() {
    return {} as const;
  }

  static get #coinFields() {
    const fields = foundry.data.fields;

    return new fields.SchemaField(Object.fromEntries(DNDBECMI.coinTypes
      .map(coin => [coin, new fields.NumberField({integer: true, label: coin.toLocaleUpperCase()})])
    ));
  }
}
