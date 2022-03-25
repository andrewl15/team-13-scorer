import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export function AgilePractice(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [value, setValue] = useState<number>(0);
    const [buttonName, setButtonName] = useState<string>("");
    const [list, setList] = useState<string[]>([]);
    function updateName(event: ChangeEvent) {
        setButtonName(event.target.value);
    }
    function clearList() {
        setList([]);
    }
    function addButton() {
        const newList = [...list, buttonName];
        if (!list.includes(buttonName)) {
            setList(newList);
        }
    }
    function deleteButton() {
        const newList = [...list];
        newList.splice(newList.indexOf(buttonName), 1);
        setList(newList);
    }
    return (
        <div>
            <h3>Counter/ Subtractor</h3>
            <div>
                <Button size="sm" onClick={() => setValue(1 + value)}>
                    Add One
                </Button>{" "}
                <Button size="sm" onClick={() => setValue(value - 1)}>
                    Subtract One
                </Button>
                <div>The current number is: {value}</div>
            </div>
            <div>
                <h3>Type the name of the Button you want to create/ delete</h3>
                <strong>Custom Buttons:</strong>
                <Row>
                    <Col>
                        {list.map((name: string) => (
                            <div key={name} style={{ marginBottom: "4px" }}>
                                <Button>{name}</Button>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Form.Control value={buttonName} onChange={updateName} />
                <Button size="sm" onClick={() => addButton()}>
                    Add {buttonName} Button
                </Button>{" "}
                <Button size="sm" onClick={() => deleteButton()}>
                    Delete {buttonName} Button
                </Button>{" "}
                <Button size="sm" onClick={() => clearList()}>
                    Clear Buttons
                </Button>
            </div>
        </div>
    );
}
