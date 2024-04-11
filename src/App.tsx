import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';


import { ROUTES } from './constants';
import { FiveTakeayasPage } from './pages';
import { FinancialTermsPage } from './pages/financial-terms';

export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.key_takeaways} />} />
      <Route path={ROUTES.key_takeaways} element={<FiveTakeayasPage />} />
      <Route path={ROUTES.fin_terms} element={<FinancialTermsPage />} />
    </Routes>
  </Layout>
);
