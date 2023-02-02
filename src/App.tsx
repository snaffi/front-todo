import { MantineProvider } from '@mantine/core';
import './App.css';
import Root from "./components/Root";

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Root/>
        </MantineProvider>
    )
}

export default App
