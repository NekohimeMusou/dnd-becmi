import { ACTORMODELS } from "../data-model/actor-models";
import DndBecmiItem from "./DndBecmiItem";

export default class DndBecmiActor extends Actor<typeof ACTORMODELS, DndBecmiItem, ActiveEffect<DndBecmiActor, DndBecmiItem>> {}
