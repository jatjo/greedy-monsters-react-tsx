import {useCallback, useState} from "react";
import type { MonsterConfiguration } from "../types/monsterConfiguration.ts";
import MonsterConfigurationContext from "./MonsterConfigurationContext.tsx";

type MonsterConfigurationProviderProps = { children: React.ReactNode };

const MonsterConfigurationProvider: React.FC<MonsterConfigurationProviderProps> = ({ children }: MonsterConfigurationProviderProps) => {
    const [monsterConfiguration, setMonsterConfiguration] = useState<MonsterConfiguration['monsterConfiguration']>({
        monstersToPlay: 5,
        caloriesToStartWith: 5,
        caloriesToBeConsumed: 1,
        caloriesToBeFed: 4,
        chanceOfPoisonousCalories: 20,
        chanceOfStealingCalories: 50
    });

    const updateConfiguration = useCallback((newConfiguration: MonsterConfiguration['monsterConfiguration']) => {
        setMonsterConfiguration(prevConfiguration => ({ ...prevConfiguration, ...newConfiguration }));
    }, []);

/*    const updateConfiguration = useCallback((updatedConfiguration: MonsterConfiguration['monsterConfiguration']) => {
        setMonsterConfiguration(updatedConfiguration);
    }, []);*/

    const contextValue: MonsterConfiguration = {
        monsterConfiguration: monsterConfiguration,
        updateConfiguration: updateConfiguration,
    };

    return (
        <MonsterConfigurationContext value={contextValue}>
            {children}
        </MonsterConfigurationContext>
    );
}

export default MonsterConfigurationProvider;