import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {createMedicine} from "../../http/medicineAPI";

const CreateMedicine = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [recommendations, setRecommendations] = useState('')

    const addMedicine = () => {
        createMedicine(name, description, recommendations).then(data => {
            setName('')
            setDescription('')
            setRecommendations('')
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
                    Добавить лекарство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Название лекарства"}
                    />
                    <FormControl
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder={"Описание"}
                    />
                    <FormControl
                        value={recommendations}
                        onChange={e => setRecommendations(e.target.value)}
                        className="mt-3"
                        placeholder={"Рекомендации"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addMedicine}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMedicine;