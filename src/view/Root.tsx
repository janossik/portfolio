import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "view/pages/Home";
import { theme } from "theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

//react-router-dom is used for future expansion
const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Root;
