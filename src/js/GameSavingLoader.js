import read from "./reader";
import json from "./parser";
import {GameSaving} from "./GameSaving";

export class GameSavingLoader{
    async load(){
        const data = await read(); // возвращается Promise!
        const value = await json(data); // возвращается Promise!
        return new Promise((resolve) => {
            let saving = JSON.parse(value)
            resolve(new GameSaving(saving.id, saving.created, saving.userInfo));
        });
    }
}