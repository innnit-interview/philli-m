import React, { useState } from 'react';
import './UpdateModal.css';

import Modal from './components/Modal';
import TextInput from './components/TextInput';
import TextArea from './components/TextArea';
import Toggle from './components/Toggle';
import Button from './components/Button';

function UpdateModal() {
    const [checked, setChecked] = useState(false);
    const [title, setTitle] = useState('');
    const [update, setUpdate] = useState('');
    const [editor, setEditor] = useState('');
    const [success, setSuccess] = useState(false)

    const handleChecked = () => {
        setChecked(prevChecked => !prevChecked);
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdate(e.target.value);
    }

    const handleEditor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditor(e.target.value);
    }

    const handleSave = () => {
        localStorage.setItem('title', title)
        localStorage.setItem('update', update)
        localStorage.setItem('editor', editor)
        setSuccess(true);
    }

    return (
        <Modal id='update-modal'>
            <form aria-labelledby='update-form-title' className='update-form' method='post'>
                <h2 id='update-form-title'>Neues Update erstellen</h2>
                <TextInput id='update-form-title' classNameLabel='form-field_label' classNameInput='form-field_full' name='update-form-title' label='Titel' onChange={handleTitle} maxLength={100} />
                <TextArea id='update-form-update' classNameLabel='form-field_label' classNameInput='form-field_full' name='update-form-update' label='Deine Neuigkeiten' placeholder='Bitte schreibe ein paar Worte zu deinem Update' onChange={handleUpdate} />
                <Toggle id='update-form-checkbox' classNameLabel='form-field_label' classNameHelpText='form-field_helptext' name='update-form-checkbox' label='Absender' helpText='Absender andern' onChange={handleChecked} />
                <p>Hier hast du die Option, das Update unter einem anderen Namen zu veröffrntlöichen.</p>
                <TextInput id='update-form-editor' classNameInput='form-field_full' name='update-form-editor' label='Absender' disabled={checked} onChange={handleEditor} placeholder='Vorname Nachname' />
                <div className='update-form__btn-container'>
                    <Button id='update-form-cancel' className='btn btn__outline' label='Abbrechen' onClick={() => console.log('cancel')} />
                    <Button id='update-form-save' className='btn btn__secondary' label='Entwurf speichen' onClick={handleSave} />
                    <Button id='update-form-submit' className='btn btn__primary' label='Update veröffentlichen' onClick={() => console.log('submit')} />
                </div>
                {success && <p>Update saved.</p>}
            </form>
        </Modal>
    );
}

export default UpdateModal;