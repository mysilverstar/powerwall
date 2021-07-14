import "./App.css";

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import BackupHistory from "./routes/BackupHistory";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
      <Route path="/" exact={true} component={BackupHistory} />
    </HashRouter>
    </ThemeProvider>
  );
}

export default App;
