import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="md">
          <h1>Testing Demo</h1>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
