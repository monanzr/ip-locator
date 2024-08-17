import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "./pages/login/loginPage";
import IpSearchPage from "./pages/ipSearch/ipSearchPage";
import ProtectedRoute from "./components/ProtectedRoute";
import {store} from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/ip-search"
              element={
                <ProtectedRoute>
                  <IpSearchPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
