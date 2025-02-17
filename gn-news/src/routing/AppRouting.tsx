import { Navigate, Route, Routes } from "react-router"

import { CountryNewsPage, ErrorPage } from "pages"
import { Container } from "containers";

const AppRouting = () => {
  return (
    <Container>
    <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Navigate replace to="/country/us" />} />
        <Route path="/country/:country" element={<CountryNewsPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Container>
  );
}

export default AppRouting