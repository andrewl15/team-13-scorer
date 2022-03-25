import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function AgilePractice(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <h3>Counter/ Subtractor</h3>
            <div>
                <Button onClick={() => setValue(1 + value)}>Add One</Button>
                <Button onClick={() => setValue(value - 1)}>
                    Subtract One
                </Button>
                <div>The current number is: {value}</div>
            </div>
        </div>
    );
}
