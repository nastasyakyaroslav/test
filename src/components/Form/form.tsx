import React, { useState, Fragment } from 'react';
import './style.css';
import Input from '../TextFields/input';
import Button from '../Button';
import TextArea from '../TextFields/textarea';
import Select from '../TextFields/select';
import DoneImg from './doneImg';

interface FormDataItem {
    value: string,
    error: string | null
}

const options = ['Work opportunities', 'Questions about product', 'Сooperation', 'Other'];

const reqs = {
    tel: /^\+?3?8?(0\d{9})$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    name: /./,
    subject: /./,
}

const Form = () => {

    const [formData, setFormData] = useState<Record<Label, FormDataItem> | {}>({});
    const [feching, setFeching] = useState(false);
    const [done, setDone] = useState(false);
    const handleChange = (value: string, field: Label, error?: string) => {
        console.log({ [field]: value });
        setFormData({ ...formData, [field]: { value, error } })
    };

    const handleClick = (e: React.FormEvent<{}>) => {
        e.preventDefault();
        setFeching(true);
        setTimeout(() => {
            setFeching(false);
            setDone(true);
        }, 1500)
    }

    const contactUsForm = () => (
        <Fragment>
            <h1 className='title'>Contact Us</h1>
            <Select
                id="subject"
                onChange={handleChange}
                label='Subject'
                options={options} />
            <Input
                id='name'
                reg={reqs['name']}
                onChange={handleChange}
                label='Name' placeholder="Enter your name..."
                type="text" />
            <Input
                id='tel'
                reg={reqs['tel']}
                onChange={handleChange}
                label='Phone number'
                placeholder="Enter your phone number..."
                type="tel" />
            <Input
                id='email'
                reg={reqs['email']}
                onChange={handleChange}
                label='Email'
                placeholder="Enter your email address..."
                type="email" />
            <TextArea label='Message' placeholder="Empty" />
            <Button
                feching={feching}
                styles={{ marginTop: '18px' }}
                onClick={handleClick}>
                Send
            </Button>
        </Fragment>
    );

    const sendedForm = () => (
        <div className='sendedForm'>
            <DoneImg />
            <span className='sendedFormStatus'>We received your message!</span>
            <span className='statusInfo'>Thanks for contacting us! We will get back to you ASAP</span>
            <Button
                styles={{ background: '#fff', border: '1px solid #212121', color: '#212121', width: '100%' }}
                onClick={() => { }}>
                Great!
            </Button>
        </div>
    )

    return (
        <form className='fromWrapper' onSubmit={handleClick}>
            {done ? sendedForm() : contactUsForm()}
        </form>
    )
};

export default Form;