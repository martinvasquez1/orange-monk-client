import Option from './Option';

import deleteUser from '../../api/users';

import { useMutation } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';

export default function DeleteAccount() {
  const userId = jwtDecode(localStorage.getItem('jwt')).id;

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      navigate('/');
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Remove user');

    console.log(userId);
    mutation.mutate(userId);
  }

  return (
    <Option
      name="Delete Account"
      body="If you choose to delete your account, all your data will be permanently removed."
      input={
        <form onSubmit={handleSubmit}>
          <div
            className="tooltip"
            data-tip="Don't touch, please. Breaks the whole app."
          >
            <button
              type="submit"
              className="btn btn-disabled btn-error w-full md:btn-md"
              disabled
            >
              Delete Account
            </button>
          </div>
        </form>
      }
    />
  );
}
