import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@/app/home";
import { RootLayout } from "@/components/layouts/root";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
