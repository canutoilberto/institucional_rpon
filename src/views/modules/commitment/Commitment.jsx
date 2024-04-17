import { Container, Divider, Title, Center, Paper, Image } from "@mantine/core";
import classes from "./commitment.module.css";

import commitment from "assets/img/codigo_de_conduta/compromisso.jpg";

const Commitment = () => {
  return (
    <Container name="commitment" className={classes.content} size="lg" mt={90}>
      <Title order={3}>Nosso compromisso</Title>
      <Divider my="md" />
      <Center mb={90}>
        <Paper shadow="xl" p="xl">
          <Image src={commitment} alt="Termo de compromisso" />
        </Paper>
      </Center>
    </Container>
  );
};

export default Commitment;
