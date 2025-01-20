import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'aldo',
    email: 'aldo.sanchez@google.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('UseEffect');
  }, []);

  useEffect(() => {
    console.log('FormState change');
  }, [formState]);

  useEffect(() => {
    console.log('email change');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        onChange={onInputChange}
        value={username}
      />

      {username === 'aldo1' && <Message />}

      <input
        type='email'
        className='form-control mt-2'
        placeholder='example@mail.com'
        name='email'
        onChange={onInputChange}
        value={email}
      />
    </>
  );
};
