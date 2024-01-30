export const SYSTEM_NAME = "dndbecmi" as const;
export const SYSTEM_PATH = `systems/${SYSTEM_NAME}` as const;
export const HBS_TEMPLATES_DIR = `${SYSTEM_PATH}/sheets` as const;
export const HANDLEBARS_TEMPLATE_DIR = `${HBS_TEMPLATES_DIR}/parts` as const;

const attributes = ["str", "int", "wis", "dex", "con", "cha"];
const classes = ["cleric", "fighter", "magicUser", "thief", "dwarf", "elf", "halfling"];
const coinTypes = ["cp", "sp", "ep", "gp", "pp"];
const coinLocs = ["carried", "stashed"];

export const DNDBECMI = {
  attributes,
  classes,
  coinTypes,
  coinLocs,
} as const;
