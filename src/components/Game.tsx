import styles from "./Game.module.css";
import logo from "../assets/monster.png";
import GameDescription from "./GameDescription.tsx";
import MonsterConfigurationProvider from "../contexts/MonsterConfigurationProvider.tsx";
import GameControl from "./GameControl.jsx";

const Game = () => {
    return (<>
        <div>
            <header className="row mt-4 mb-4">
                <div className="col-12 mb-4">
                    <div className={styles.subtitle}><img src={logo} className={styles.logo} alt="logo"/>
                        Greedy Monsters
                    </div>
                </div>
            </header>

            <GameDescription/>

            <MonsterConfigurationProvider>
                <GameControl/>
            </MonsterConfigurationProvider>
        </div>
    </>);
};

export default Game;