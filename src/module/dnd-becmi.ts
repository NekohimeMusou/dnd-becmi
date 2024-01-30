import DndBecmiActor from "./document/DndBecmiActor";
import DndBecmiItem from "./document/DndBecmiItem";

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

Hooks.once("init", async function() {
  console.log("DND-BECMI | Initializing DND-BECMI game system");

  game.dndbecmi = {
    DndBecmiActor,
    DndBecmiItem,
  }
});
