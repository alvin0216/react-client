import { useTranslation } from 'react-i18next';
import { useBearStore } from '../../store/use-bear-store';

const UICard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="shadow-lg w-100 p-5">
      <h3 className="text-red">{title}</h3>
      {children}
    </div>
  );
};

const DemoStore = () => {
  const { bears, increase } = useBearStore();
  return (
    <UICard title="Demo: Store">
      <p>Bear: {bears}</p>
      <button onClick={() => increase(2)}>increase</button>
    </UICard>
  );
};

const DemoTranslation = () => {
  const { t } = useTranslation();
  return (
    <UICard title="Demo: Translation">
      <p>lang: {t('lang')}</p>
    </UICard>
  );
};

export const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>Welcome to the login page!</p>

      <div className="flex gap-2">
        <DemoStore />
        <DemoTranslation />
      </div>
    </div>
  );
};
