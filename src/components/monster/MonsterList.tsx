import MonsterRow from "./MonsterRow.tsx"
import type { Monster } from "../../types/monster.ts"

const MonsterList = ({monsters}: {monsters: Monster[]}) => {
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Monster</th>
                <th>Round</th>
                <th>Total Fed</th>
                <th>Net Stole/Stolen From</th>
                <th>Calories</th>
            </tr>
            </thead>
            <tbody>
                {monsters.map((m: Monster) => <MonsterRow key={m.id} monster={m}/>)}
            </tbody>
        </table>
    )
};

export default MonsterList;