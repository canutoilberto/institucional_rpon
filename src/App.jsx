import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import EticaEConduta from "./views/eticaEConduta";

export default function App() {
  return (
    <MantineProvider>
      <EticaEConduta />
    </MantineProvider>
  );
}
