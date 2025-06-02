import { useBearStore } from '../../store/use-bear-store';

export const LoginPage: React.FC = () => {
  const { bears, increase } = useBearStore();
  return (
    <div>
      <h1>Login</h1>
      <p>Welcome to the login page!</p>

      <p>Bear: {bears}</p>
      <button onClick={() => increase(2)}>increase</button>
    </div>
  );
};
