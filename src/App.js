import "./App.css";

import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/mainmenu/Main";
import BackupHistory from "./pages/backuphistory/BackupHistory";
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
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/backuphistory" component={BackupHistory} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
