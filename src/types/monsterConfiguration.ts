export interface MonsterConfiguration {
    monsterConfiguration: {
        monstersToPlay: number;
        caloriesToStartWith: number;
        caloriesToBeConsumed: number;
        caloriesToBeFed: number;
        chanceOfPoisonousCalories: number;
        chanceOfStealingCalories: number;
    },
    updateConfiguration: (updatedConfiguration: MonsterConfiguration['monsterConfiguration']) => void;
}