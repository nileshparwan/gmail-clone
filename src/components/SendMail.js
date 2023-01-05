import React from 'react';
// import { collection, addDoc } from "firebase/firestore";
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db, Timestamp } from '../features/firebase/firebase';
import './SendMail.css';

const SendMail = () => {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (formData) => {

    // web version 8
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: Timestamp,
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });

    // close form
    dispatch(closeSendMessage());
  };

  return (
    <div className='sendMail'>
      <div className="sendMail__header">
        <h3>New Message</h3>

        <IconButton onClick={() => dispatch(closeSendMessage())}>
          <CloseIcon className='sendMail__close' />
        </IconButton>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="to"
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
          aria-invalid={errors.to ? "true" : "false"}
        />
        {errors.to && <p className='sendMail__error' role="alert">To is Required!</p>}

        <input
          id="subject"
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.to && <p className='sendMail__error' role="alert">Subject is Required!</p>}

        <input
          id="message"
          name="message"
          placeholder="Message..."
          type="text"
          className='sendMail__message'
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.to && <p className='sendMail__error' role="alert">Message is Required!</p>}

        <div className="sendMail__options">
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;