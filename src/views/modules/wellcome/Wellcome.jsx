import { Container, Divider, Flex, Overlay, Title, Text } from "@mantine/core";
import classes from "./wellcome.module.css";

const Wellcome = () => {
  return (
    <>
      <Container name="wellcome" className={classes.content} size="lg">
        <Overlay
          radius="md"
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 90%)"
          opacity={1}
          zIndex={0}
        />
        <Flex className={classes.inner}>
          <Title className={classes.title}>Boas Vindas</Title>
        </Flex>
      </Container>
      <Container size="lg" mb={40}>
        <Divider my={30} />
        <Text className={classes.text}>
          A Rede Paraíba de Comunicação atua em toda a Paraíba e faz parte de um
          conjunto de empresas, líderes de audiência em todo o Estado. Para
          manter unida a nossa Companhia, é fundamental que sejamos guiados por
          um código de ética claro e consistente, pois para alcançar nossos
          objetivos de negócios, aderimos sempre aos mais altos padrões de
          integridade e ética e cumprimos com as leis e normas aplicáveis. O
          cumprimento dessas diretrizes é essencial para a manutenção da
          reputação da empresa e a construção de um ambiente de trabalho
          saudável e produtivo. A reputação da Rede Paraíba de Comunicação é
          construída diariamente, por cada um de nós, enquanto desempenhamos
          nossa missão de informar, divertir e contribuir para a sociedade.
          Acreditamos que a integridade na condução de nossas atividades e
          relações é indissociável de nossa imagem corporativa e faz parte da
          nossa essência. Este Código de Conduta, juntamente com os nossos
          princípios e as demais políticas da Rede Paraíba de Comunicação,
          desempenham um papel fundamental na construção dos alicerces para o
          nosso sucesso a longo prazo. Nenhum objetivo financeiro, nenhuma meta
          de vendas e nenhum esforço para superar a concorrência superam nosso
          compromisso com a ética, a integridade e a conformidade com a
          legislação aplicável. Em caso de dúvida ou suspeita de violação do
          Código de Ética e Conduta, a área de Gente e Gestão está sempre à
          disposição para ajudá-los. Contamos com a colaboração, a participação
          e o envolvimento de todos para que as regras descritas neste documento
          sejam a base de nossas atitudes e decisões.
        </Text>
        <Title order={3} mt={30}>
          Eduardo Carlos
        </Title>
        <Text>CEO</Text>
      </Container>
    </>
  );
};

export default Wellcome;
