import { Container, Flex, Title, Text, Divider } from "@mantine/core";
import classes from "./destination.module.css";

const Destination = () => {
  return (
    <>
      <Container
        name="destination"
        className={classes.content}
        size="lg"
        mt={90}
      >
        <Flex flex={3}>
          <div>
            <Title order={2}>A quem se destina?</Title>
            <Divider my="md" />
            <Text className={classes.text}>
              Este Código de Ética e Conduta da Rede Paraíba de Comunicação tem
              o objetivo de estabelecer diretrizes e normas de conduta que devem
              orientar o comportamento da Rede e seus Integrantes, quanto a suas
              atividades internas e na relação com agentes públicos e com
              terceiros. O Código se aplica a todas as empresas da Rede Paraíba
              de Comunicação e a todos os seus Integrantes, em quaisquer níveis
              hierárquicos, ainda que temporários, aprendizes, estagiários,
              trainees, diretores, membros da Presidência e acionistas, no
              exercício de suas funções ou atribuições. Os parceiros de negócios
              da Rede Paraíba de Comunicação, tais como, por exemplo,
              prestadores de serviços, fornecedores, consultores, agentes,
              intermediários, representantes e distribuidores, devem observar as
              disposições das Regras de Conduta para Terceiros na Relação com a
              Rede Paraíba de Comunicação, adiante denominadas “Regras para
              Terceiros”. Em caso de dúvida acerca da interpretação e aplicação
              deste Código, procure seu gestor ou consulte a área de Gente e
              Gestão, através do telefone 83 21061956.
            </Text>
          </div>
        </Flex>
        <div className={classes.image}></div>
      </Container>
    </>
  );
};

export default Destination;
