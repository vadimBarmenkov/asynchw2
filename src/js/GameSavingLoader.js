import read from "./reader";
import json from "./parser";

export class GameSavingLoader{
    async load(){
        const data = await read(); // возвращается Promise!
        const value = await json(data); // возвращается Promise!
        return new Promise(resolve => {
            resolve(JSON.parse(value));
        });
    }
}