import { useContext, useRef, useState } from "react";
import MonsterConfigurationContext from "../contexts/MonsterConfigurationContext.tsx";
import type {Monster} from "../types/monster.ts";

const useMonsters = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const hasStealed = useRef(false);

    const { monsterConfiguration } = useContext(MonsterConfigurationContext);

    const gameStart = () => {
        const monster = {
            round: 0,
            consumed: 0,
            fed: 0,
            poisonous: 0,
            stole: 0,
            stolenFrom: 0,
            calories: monsterConfiguration.caloriesToStartWith,
            dead: false
        }

        setMonsters(Array.from({
                length: monsterConfiguration.monstersToPlay
            },
            (_, id: number) => ({...monster, id: ++id})
        ));
    };

    const nextRound = (currentRound: number) => {
        hasStealed.current = false;

        const modifiedMonsters: Monster[] = monsters
            .sort((a: Monster, b: Monster) => a.calories - b.calories)
            .map((monster: Monster) => {
                if (monster.dead) {
                    return monster;
                }
                return {...wakeUp(monster, currentRound)};
            })
            .sort((a, b) => b.round - a.round)
            .sort((a, b) => b.calories - a.calories);

        setMonsters(modifiedMonsters);
    };

    const gameOver = () => {
        return monsters.filter(monster => !monster.dead).length <= 1;
    }

    const wakeUp = (monster: Monster, currentRound: number) => {
        monster.round = currentRound;

        if (monster.calories <= 0) {
            monster.calories = 0;
            monster.dead = true;

            return monster;
        }

        monster.calories -= monsterConfiguration.caloriesToBeConsumed;
        monster.consumed += monsterConfiguration.caloriesToBeConsumed;

        let caloriesToBeFed = Math.floor(Math.random() * monsterConfiguration.caloriesToBeFed)

        if (caloriesToBeFed > 0 && Math.floor(Math.random() * 100) < monsterConfiguration.chanceOfPoisonousCalories) {
            // poisonous
            monster.poisonous += caloriesToBeFed;
            caloriesToBeFed = caloriesToBeFed * -1;
        }

        monster.fed += caloriesToBeFed;
        monster.calories = monster.calories + caloriesToBeFed;

        // unless a monster has already stolen from another monster in the current round,
        // the chance of stealing from another monster is 'chanceOfStealingCalories'
        if (!hasStealed.current && Math.floor(Math.random() * 100) < monsterConfiguration.chanceOfStealingCalories) {
            // select a random monster
            const monsterToStealFrom: Monster = monsters[Math.floor(Math.random() * monsters.length)];

            // if selected monster to steal from is not the same monster as is trying to steal, and it has more than 0
            // calories and is not dead it can be stealed from
            if (monsterToStealFrom.id !== monster.id && monsterToStealFrom.calories > 0 && !monsterToStealFrom.dead) {
                hasStealed.current = true;
                // Only half of the calories can be stoled
                const caloriesToSteal = Math.floor(monsterToStealFrom.calories / 2);
                monster.calories += caloriesToSteal;
                monster.stole += caloriesToSteal;
                monsterToStealFrom.calories -= caloriesToSteal;
                monsterToStealFrom.stolenFrom += caloriesToSteal;
            }
        }

        if (monster.calories <= 0) {
            monster.calories = 0;
            monster.dead = true;
        }

        return monster;
    }

    return {monsters, gameStart, nextRound, gameOver};
}

export default useMonsters;