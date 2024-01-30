export const SYSTEM_NAME = "dndbecmi" as const;
export const SYSTEM_PATH = `systems/${SYSTEM_NAME}` as const;
export const HBS_TEMPLATES_DIR = `${SYSTEM_PATH}/sheets` as const;
export const HANDLEBARS_TEMPLATE_DIR = `${HBS_TEMPLATES_DIR}/parts` as const;
