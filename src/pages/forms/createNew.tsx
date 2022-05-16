import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'Layouts';
import { Button } from '@paljs/ui/Button';
import Alert from '@paljs/ui/Alert';


const options = [
    { value: 'EventType1', label: 'Event Type 1' },
    { value: 'EventType2', label: 'Event Type 2' },
    { value: 'EventType3', label: 'Event Type 3' },
];

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

export const SelectStyled = styled(Select)`
  margin-bottom: 10px;
`;

const CreateNew = () => {
    const [checkbox, setCheckbox] = useState({
        1: false,
        2: false,
        3: false,
    });

    const onChangeCheckbox = (value: boolean, name: number) => {
        setCheckbox({ ...checkbox, [name]: value });
    };
    const onChangeRadio = (_value: any) => {
        // value will be item value
    };
    const statusOption = [
        { value: 'EventType1', label: 'Event Type 1' },
        { value: 'EventType2', label: 'Event Type 2' },
        { value: 'EventType3', label: 'Event Type 3' },
    ];
    return (
        <Layout title="Input">
            <Row>
                <Col breakPoint={{ xs: 12, md: 12 }}>
                    <Card>
                        <header>Create New Event</header>
                        <CardBody>
                            <Alert status="Success">Your event has been added successfully.</Alert>
                            <Input fullWidth size="Medium">
                                <input type="text" placeholder="Enter Title" />
                            </Input>
                            <SelectStyled options={statusOption} placeholder="Select Event Type" />

                            <Input fullWidth >
                                <textarea rows={5} placeholder="Enter Complete Description" />
                            </Input>
                            <Button fullWidth appearance="hero" >
                                Submit
                            </Button>

                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Layout>
    );
};
export default CreateNew;
