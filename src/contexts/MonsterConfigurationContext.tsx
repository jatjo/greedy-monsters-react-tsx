import { createContext } from "react";
import type {MonsterConfiguration} from "../types/monsterConfiguration.ts";

const MonsterConfigurationContext = createContext<MonsterConfiguration>({
    monsterConfiguration: {
        monstersToPlay: 5,
        caloriesToStartWith: 5,
        caloriesToBeConsumed: 1,
        caloriesToBeFed: 4,
        chanceOfPoisonousCalories: 20,
        chanceOfStealingCalories: 50,
    },
    updateConfiguration: () => {},
});

export default MonsterConfigurationContext;
