import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {createProcedure} from "../../http/procedureAPI";

const CreateProcedure = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const addProcedure = () => {
        createProcedure(name, description).then(data => {
            setName('')
            setDescription('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить процедуру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Название процедуры"}
                    />
                    <FormControl
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder={"Описание"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addProcedure}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProcedure;