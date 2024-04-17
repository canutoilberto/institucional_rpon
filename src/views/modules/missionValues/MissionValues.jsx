import { Container, Flex, Title, Text, Divider } from "@mantine/core";
import classes from "./missionValues.module.css";

const MissionValues = () => {
  return (
    <>
      <Container name="mission" className={classes.content} size="lg" mt={90}>
        <div className={classes.image}></div>
        <Flex flex={3} direction="column">
          <Title order={2}>Missão, Visão & Valores</Title>
          <Divider my="md" />
          <Text className={classes.text}>
            <Title className={classes.innerTitle} mb={10} order={3}>
              MISSÃO
            </Title>
            Estar com você, INFORMANDO E DIVERTINDO.
            <Title className={classes.innerTitle} my={10} order={3}>
              VISÃO
            </Title>
            Queremos ser reconhecidos como o grupo de Comunicação
            Multiplataforma mais inovador da Paraíba.
            <Title className={classes.innerTitle} my={10} order={3}>
              VALORES
            </Title>
            Nossa Gente, nossa força Promovemos um ambiente de trabalho
            inclusivo, respeitando a diversidade de ideias, culturas e
            perspectivas. Investimos no desenvolvimento profissional e pessoal
            dos nossos colaboradores, oferecendo oportunidades de aprendizado e
            crescimento. Reconhecemos e valorizamos o talento e a contribuição
            de cada membro da equipe. Orientação para resultados Definimos metas
            claras e mensuráveis, focando em alcançar resultados significativos.
            Estabelecemos prazos realistas e nos esforçamos para cumprir nossos
            compromissos. Adotamos uma abordagem proativa e buscamos soluções
            criativas para superar desafios e atingir nossos objetivos. Paixão é
            o que nos move Demonstramos entusiasmo e dedicação em tudo o que
            fazemos, buscando sempre a excelência. Encorajamos a criatividade e
            a inovação, incentivando novas ideias e abordagens. Compartilhamos
            nosso entusiasmo com os clientes, fornecedores e colegas,
            inspirando-os a se envolverem e se apaixonarem pelo que fazemos.
            Integridade e trabalho duro Agimos com ética, honestidade e
            transparência em todas as nossas interações. Cumprimos nossos
            compromissos e responsabilidades, assumindo a responsabilidade por
            nossas ações. Valorizamos a perseverança e o esforço contínuo para
            alcançar nossos objetivos, mesmo diante de desafios. Sentimento de
            dono Agimos como se a empresa fosse nossa, tomando decisões
            responsáveis e visando o sucesso a longo prazo.
          </Text>
        </Flex>
      </Container>
      <Container className={classes.content} size="lg">
        <Text className={classes.text}>
          Pensamos de forma estratégica e buscamos oportunidades para melhorar e
          inovar em todos os aspectos do nosso trabalho. Cuidamos dos recursos
          da empresa de maneira responsável, evitando desperdícios e buscando
          eficiência. Comunicação transparente Valorizamos a comunicação aberta
          e honesta, compartilhando informações relevantes de forma clara e
          oportuna. Escutamos ativamente os outros, considerando diferentes
          perspectivas e respeitando as opiniões divergentes. Fornecemos
          feedback construtivo e buscamos resolver problemas por meio do diálogo
          aberto e respeitoso. Melhoria contínua Buscamos constantemente o
          aprimoramento, aprendendo com nossos erros e buscando soluções mais
          eficientes. Estamos abertos a novas ideias e feedback, buscando
          oportunidades para inovar e evoluir. Promovemos uma cultura de
          aprendizado, incentivando o compartilhamento de conhecimento e o
          desenvolvimento pessoal.
        </Text>
      </Container>
    </>
  );
};

export default MissionValues;
