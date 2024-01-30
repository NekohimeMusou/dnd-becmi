import DndBecmiActor from "./document/DndBecmiActor";
import DndBecmiItem from "./document/DndBecmiItem";
import { ACTORMODELS } from "./data-model/actor-models";
import DndBecmiActorSheet from "./sheet/DndBecmiActorSheet";
import DndBecmiItemSheet from "./sheet/DndBecmiItemSheet";
import { templatePaths } from "./config/hbs-templates";

declare global {
  interface Game {
    dndbecmi: {
      DndBecmiActor: typeof DndBecmiActor;
      DndBecmiItem: typeof DndBecmiItem;
    }
  }
  
  interface CONFIG {
    DNDBECMI: unknown
  }
}


// eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/require-await
Hooks.once("init", async function() {
  console.log("DND-BECMI | Initializing DND-BECMI game system");

  game.dndbecmi = {
    DndBecmiActor,
    DndBecmiItem,
  }

  // Add custom config constants
  CONFIG.DNDBECMI = {};

  registerDataModels();
  registerDocumentClasses();
  registerSheetApplications();
  preloadHandlebarsTemplates();
});

function registerDataModels() {
  CONFIG.Actor.dataModels = ACTORMODELS;
}

function registerDocumentClasses() {
  CONFIG.Actor.documentClass = DndBecmiActor;
  CONFIG.Item.documentClass = DndBecmiItem;
}

function registerSheetApplications() {
  Actors.unregisterSheet("core", ActorSheet);
  Items.unregisterSheet("core", ItemSheet);

  Actors.registerSheet("dndbecmi", DndBecmiActorSheet, {types: ["pc"], makeDefault: true});
  Items.registerSheet("dndbecmi", DndBecmiItemSheet, {types: ["equipment"], makeDefault: true});
}

function preloadHandlebarsTemplates() {
  loadTemplates(templatePaths);
}
