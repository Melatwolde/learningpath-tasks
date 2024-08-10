import React from 'react';
import { useForm } from 'react-hook-form';
import './main.module.css';

function Formm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: 'Name is required' })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register('message', { required: 'Message is required' })} />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Formm;