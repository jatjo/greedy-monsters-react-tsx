import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import MonsterConfigurationContext from "../../contexts/MonsterConfigurationContext.tsx";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

const MonsterConfiguration = () => {
    const {monsterConfiguration, updateConfiguration} = useContext(MonsterConfigurationContext);

    return (<Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Monster Configuration</Accordion.Header>
            <Accordion.Body>
                Some configuration values can be adjusted below:
                <Form>
                    <Form.Group as={Row} controlId="config">
                        <Form.Label column sm="6">
                            Number of monsters [{monsterConfiguration.monstersToPlay}].
                        </Form.Label>
                        <Col sm="5" className="pt-2">
                            <Form.Range
                                id="monstersToPlay"
                                value={monsterConfiguration.monstersToPlay}
                                min="3"
                                max="8"
                                step="1"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    monsterConfiguration.monstersToPlay = e.currentTarget.valueAsNumber;
                                    updateConfiguration(monsterConfiguration);
                                }}/>
                        </Col>
                        <Form.Label column sm="6">
                            Calories to start with [{monsterConfiguration.caloriesToStartWith}].
                        </Form.Label>
                        <Col sm="5" className="pt-2">
                            <Form.Range
                                id="caloriesToStartWith"
                                value={monsterConfiguration.caloriesToStartWith}
                                min="1"
                                max="8"
                                step="1"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    monsterConfiguration.caloriesToStartWith = e.currentTarget.valueAsNumber;
                                    updateConfiguration(monsterConfiguration);
                                }}/>
                        </Col>
                        <Form.Label column sm="6">
                            Calories consumed each round [{monsterConfiguration.caloriesToBeConsumed}]
                        </Form.Label>
                        <Col sm="5" className="pt-2">
                            <Form.Range
                                id="consume"
                                value={monsterConfiguration.caloriesToBeConsumed}
                                min="1"
                                max="10"
                                step="1"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    monsterConfiguration.caloriesToBeConsumed = e.currentTarget.valueAsNumber;
                                    updateConfiguration(monsterConfiguration);
                                }}/>
                        </Col>
                        <Form.Label column sm="6">
                            Max. calories fed each round [{monsterConfiguration.caloriesToBeFed}]
                        </Form.Label>
                        <Col sm="5" className="pt-2">
                            <Form.Range
                                id="fed"
                                value={monsterConfiguration.caloriesToBeFed}
                                min="1"
                                max="10"
                                step="1"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    monsterConfiguration.caloriesToBeFed = e.currentTarget.valueAsNumber;
                                    updateConfiguration(monsterConfiguration);
                                }}/>
                        </Col>
                        <Form.Label column sm="6">
                            Chance of calories to be poisonous [{monsterConfiguration.chanceOfPoisonousCalories}%]
                        </Form.Label>
                        <Col sm="5" className="pt-2">
                            <Form.Range
                                id="poisonous"
                                value={monsterConfiguration.chanceOfPoisonousCalories}
                                min="0"
                                max="100"
                                step="10"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    monsterConfiguration.chanceOfPoisonousCalories = e.currentTarget.valueAsNumber;
                                    updateConfiguration(monsterConfiguration);
                                }}/>
                        </Col>
                        <Form.Label column sm="6">
                            Chance of stealing from a monster [{monsterConfiguration.chanceOfStealingCalories}%]
                        </Form.Label>
                        <Col sm="5" className="pt-2">
                            <Form.Range
                                id="stealing"
                                value={monsterConfiguration.chanceOfStealingCalories}
                                min="0"
                                max="100"
                                step="10"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    monsterConfiguration.chanceOfStealingCalories = e.currentTarget.valueAsNumber;
                                    updateConfiguration(monsterConfiguration);
                                }}/>
                        </Col>
                    </Form.Group>
                </Form>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>)
};

export default MonsterConfiguration;