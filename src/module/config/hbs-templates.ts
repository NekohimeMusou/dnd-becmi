import { HANDLEBARS_TEMPLATE_DIR } from "./config";

const path = HANDLEBARS_TEMPLATE_DIR;

const templateFiles: string[] = [
  "bob.hbs",
];

export const templatePaths = templateFiles
  .map(name => `${path}/${name}`);
