import { useForm } from '../hooks/useForm';

export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form Cutom Hook</h1>
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

      <input
        type='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        onChange={onInputChange}
        value={password}
      />

      <button onClick={onResetForm} className='btn btn-dark mt-2'>Reset</button>
    </>
  );
};
