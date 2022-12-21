import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './SendMail.css';

const SendMail = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='sendMail'>
      <div className="sendMail__header">
        <h3>New Message</h3>

        <CloseIcon className='sendMail__close' />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="to"
          name="to"
          placeholder="To"
          type="text"
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