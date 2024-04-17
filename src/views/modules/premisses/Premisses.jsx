import {
  Container,
  Flex,
  Image,
  Title,
  Text,
  Divider,
  List,
} from "@mantine/core";
import classes from "./premisses.module.css";

const Premisses = () => {
  return (
    <>
      <Container name="premisses" className={classes.content} size="lg" mt={90}>
        <div className={classes.image}></div>
        <Flex flex={3} direction="column">
          <Title order={3}>Premissas</Title>
          <Divider my="md" />
          <Text className={classes.text}>
            <Title className={classes.innerTitle} component="p">
              Nosso papel na condução dos negócios
            </Title>
            A história da Rede Paraíba de Comunicação foi construída a partir
            dos esforços de cada um de seus Integrantes. Uma conquista que se
            consolida a cada dia, com base em condutas éticas e amparada por
            nossa dedicação. Temos, em nosso cotidiano, o dever de agir sempre
            com cuidado e considerar o reflexo de nossas ações individuais sobre
            as pessoas com quem trabalhamos e também sobre nossos negócios. Ao
            estabelecermos relações com outras empresas e com seus
            profissionais, devemos buscar aqueles que atuem exclusivamente de
            forma lícita, que compreendam a importância de nossos valores e que
            atuem em alinhamento com nossos princípios.
            <Title className={classes.innerTitle} component="p" mt={30}>
              Isso é pra você, nosso líder
            </Title>
            Seja um exemplo de comportamento ético para toda o time da Rede
            Paraíba de Comunicação! Não utilize seu cargo para pedir favores ou
            serviços pessoais de subordinados ou de parceiros comerciais e
            incentive os nossos parceiros comerciais a adotarem práticas de
            gestão que respeitem a dignidade humana, a ética e a preservação do
            meio ambiente e procure parceiros que estejam em sintonia com os
            padrões éticos e de respeito às leis e regulamentos da nossa
            empresa.
            <Title className={classes.innerTitle} component="p" mt={30}>
              Conduta ética e honesta
            </Title>
            Somos uma empresa de “donos”. O nosso time se comporta como “dono do
            negócio”, sendo honestos, objetivos e diligente no desempenho de
            suas funções e responsabilidades. A nossa empresa confia nos seus
            funcionários para demonstrar profissionalismo em todos os assuntos
            relacionados à Rede PB de Comunicação e não participar de nenhuma
            atividade ilegal ou que viole os termos deste Código de Conduta.
            Todas as relações com nossos clientes, fornecedores, concorrentes,
            órgãos, funcionários e representantes governamentais devem ser
            pautadas pelo cumprimento de todas as leis e regulamentos
            aplicáveis.
          </Text>
        </Flex>
      </Container>
      <Container className={classes.content} size="lg" mt={50}>
        <Flex flex={3} direction="column">
          <Text className={classes.text}>
            <Title className={classes.innerTitle} component="p">
              Conflito de interesse
            </Title>
            O conflito de interesse surge quando objetivos ou interesses
            particulares interferem ou têm o potencial de interferir nas
            decisões dos Integrantes no desempenho de suas funções na Rede PB de
            Comunicação. Os colaboradores devem contribuir para um ambiente
            livre de conflito de interesses, sendo proibidas a realização de
            negócios e/ou a tomada de decisões em face de potencial conflito de
            interesses. Sempre que tiver conhecimento de uma situação em que
            objetivos ou interesses particulares possam influenciar (ou tenham
            influenciado) qualquer ação ou decisão de profissionais de todo o
            grupo, de forma a agirem em desacordo com os valores ou interesses
            das nossas empresas, informe ao seu gestor ou à Área de Compliance.
            Os colaboradores não devem exercer atividades, remuneradas ou não,
            em organizações que tenham objetivos conflitantes com as diretrizes
            e os princípios estabelecidos neste Código ou tenham relação
            comercial com qualquer empresa, e cuja contratação pelas empresas do
            nosso Grupo sejam de responsabilidade direta ou indireta do
            Integrante em questão, ou ainda que, por outros motivos, possa
            configurar conflito de interesses.
            <Title className={classes.innerTitle} component="p" mt={30}>
              A Rede Paraíba e as eleições
            </Title>
            Diante de processos eleitorais é importante tomar algumas precauções
            que precisam ser observadas na cobertura jornalística, na propaganda
            eleitoral e na postura de cada um de nós. As orientações aqui
            contidas reforçam a atenção que o assunto precisa ter para garantir
            o comprometimento de todos com a imparcialidade e a credibilidade do
            grupo. Os colaboradores – principalmente os jornalistas de TV, rádio
            e internet são em grande medida responsáveis pela imagem dos
            veículos para os quais trabalham e devem levar isso em conta em suas
            atividades públicas, evitando tudo aquilo que possa comprometer a
            percepção de que exercem a profissão com isenção e correção. Para
            tanto, seguem recomendações: A Rede Paraíba de Comunicação não apoia
            candidatos e orienta permanentemente seus colaboradores a não
            partidarizar o conteúdo jornalístico que produzem. É importante
            reforçar que os acionistas da Rede Paraíba não colocam suas empresas
            a serviço de projetos políticos próprios ou de terceiros.
          </Text>
        </Flex>
        <div className={classes.image2}></div>
      </Container>
      <Container className={classes.content} size="lg" mt={30}>
        <Flex flex={3} direction="column">
          <Text className={classes.text}>
            <Title className={classes.innerTitle} component="p">
              Participação política
            </Title>
            É importante destacar que a empresa tem diretrizes relacionadas ao
            envolvimento político dos funcionários. Essas diretrizes visam
            garantir um ambiente neutro e imparcial dentro e fora da empresa.
            Algumas das principais orientações são:
            <List>
              <List.Item className={classes.listItem}>
                Não é permitido que os funcionários usem qualquer tipo de
                propaganda eleitoral, como camisetas, adesivos, broches ou
                outros itens nas dependências da empresa ou quando estiverem a
                trabalho fora dela.
              </List.Item>
              <List.Item className={classes.listItem}>
                Os recursos, espaço e imagem da empresa não devem ser utilizados
                para atender a interesses políticos pessoais ou partidários.
              </List.Item>
              <List.Item className={classes.listItem}>
                É proibido aos colaboradores receber ou doar contribuições,
                sejam em valor, bens ou serviços, em nome das empresas que fazem
                parte da Rede Paraíba, para fins de campanhas ou causas
                políticas.
              </List.Item>
              <List.Item className={classes.listItem}>
                A empresa respeita o direito individual dos colaboradores de se
                envolverem em assuntos cívicos e participarem do processo
                político. No entanto, isso deve ocorrer fora do ambiente de
                trabalho, em seu tempo livre e às suas próprias custas. Além
                disso, é importante deixar claro que qualquer manifestação
                política é de responsabilidade individual e não da empresa. Essa
                regra não se aplica aos jornalistas da Rede Paraíba.
              </List.Item>
              <List.Item className={classes.listItem}>
                Os jornalistas da Rede Paraíba, especialmente os apresentadores
                e repórteres de TV, rádio e internet, estão impedidos de
                participar de atividades político partidárias que possam
                comprometer sua credibilidade jornalística ou a credibilidade da
                empresa. Esses profissionais não devem manifestar publicamente
                sua preferência partidária ou inclinação ideológica, a menos que
                essa informação faça parte das características pelas quais são
                amplamente reconhecidos pelo público, como no caso de um
                comentarista político, por exemplo.
              </List.Item>
              <List.Item className={classes.listItem}>
                A formalização de candidaturas eleitorais por parte dos
                colaboradores é incompatível com a atividade principal da Rede
                Paraíba. Portanto, pressupõe se que o colaborador se afaste de
                forma definitiva do quadro de funcionários durante o processo
                eleitoral, a critério da diretoria. É importante comunicar essa
                intenção oportunamente à empresa, sob pena de responsabilização
                pessoal caso haja omissão.
              </List.Item>
              <List.Item className={classes.listItem}>
                Não é permitida a participação de colaboradores da Rede Paraíba
                em propagandas políticas na televisão, rádio, internet ou
                qualquer outro meio de divulgação de candidatos.
              </List.Item>
              <List.Item className={classes.listItem}>
                Profissionais da Rede Paraíba não podem aceitar convites de
                partidos políticos ou candidatos para viagens. Caso a viagem
                seja necessária para cobertura jornalística, todas as despesas
                devem ser custeadas pela empresa.
              </List.Item>
              <List.Item className={classes.listItem}>
                Os jornalistas da Rede Paraíba devem estar atentos aos dias de
                debates e entrevistas com candidatos na rádio e TV, evitando o
                uso de roupas ou adereços que façam referências a partidos
                políticos.
              </List.Item>
            </List>
          </Text>
        </Flex>
        <div className={classes.image3}></div>
      </Container>
    </>
  );
};

export default Premisses;
