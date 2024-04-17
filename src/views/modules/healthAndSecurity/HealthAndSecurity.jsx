import {
  Container,
  Paper,
  Text,
  Center,
  Divider,
  Title,
  Flex,
  List,
} from "@mantine/core";

import classes from "./healthAndSecurity.module.css";

const HealthAndSecurity = () => {
  return (
    <>
      <Container
        className={classes.content}
        name="health-security"
        size="lg"
        mb={30}
      >
        <Divider my="md" />
        <div>
          <Title order={2}>Saúde e segurança</Title>
          <Center>
            <Paper shadow="xl" p="xl">
              <Text className={classes.text}>
                Estamos comprometidos com a segurança, saúde e bem-estar de
                todos os nossos Integrantes. A Rede Paraíba mantém atenção
                constante à saúde e à segurança de seus Integrantes e por isso
                estabelece regras para sua proteção em todas as suas atividades.
                É, portanto, dever de todos cumprir e zelar para que as normas
                de saúde e segurança do trabalho sejam observadas por todos os
                Integrantes.
                <Divider my="md" />
                <p className={classes.innerTitle}>Porte de armas</p>O porte de
                armas dentro das instalações da Rede Paraíba de Comunicação é
                permitido exclusivamente aos profissionais de segurança
                devidamente treinados. Os demais Integrantes não poderão portar
                qualquer tipo de arma nas dependências da empresa ou em
                atividades a ela relacionadas.
                <Divider my="md" />
                <p className={classes.innerTitle}>Álcool e drogas</p>Os
                Integrantes não devem trabalhar sob a influência de substâncias
                que possam comprometer a sua atuação profissional, o ambiente de
                trabalho ou ameaçar a integridade dos demais. A posse, compra ou
                venda de drogas ilegais é proibida nas dependências de qualquer
                empresa da Rede Paraíba de Comunicação.
              </Text>
            </Paper>
          </Center>
        </div>
      </Container>
      <Container className={classes.content} size="lg" mt={60}>
        <div className={classes.politicImg}></div>
        <Flex flex={3} direction="column">
          <Title order={3}>Política Anticorrupção</Title>
          <Divider my="md" />
          <Text className={classes.paragraph}>
            A Rede Paraíba de Comunicação tem como política a tolerância zero a
            todo e qualquer ato de corrupção. Assim, o nosso time deve cumprir,
            e garantir que nossos parceiros comerciais cumpram, com as leis
            locais e internacionais que proíbem corrupção em todos os lugares
            onde operamos. Nossos Funcionários e parceiros comerciais são
            estritamente proibidos de, direta ou indiretamente, prometer,
            oferecer ou dar vantagem indevida a um funcionário ou órgão público
            ou a quaisquer terceiros em nome das empresas da Rede Paraíba de
            Comunicação. (além de dinheiro e equivalentes, podem ser
            consideradas “vantagem indevida”: doações de produto, presentes,
            entretenimento (ingressos), acomodação, refeição, despesas de
            viagem, ou qualquer outro bem de valor tangível ou intangível). 10
            Pequenos pagamentos solicitados por funcionário público com o
            intuito de acelerar ou assegurar a realização de um procedimento ou
            uma ação governamental não discricionária (“pagamentos de
            facilitação”), são estritamente proibidos nos termos deste Código de
            Conduta, ainda que o não pagamento gere prejuízos para a empresa.
          </Text>
          <Title order={3} mt={30}>
            Livros, registros e controles contabeis
          </Title>
          <Divider my="md" />
          <Text className={classes.paragraph}>
            Transparência, ética e honestidade devem ser o ponto de partida de
            quaisquer procedimentos que envolvam os nossos livros, registros e
            controles contábeis. As demonstrações financeiras da Empresa, seus
            livros e registros devem representar de maneira precisa, clara,
            completa e com detalhamento adequado, todos os negócios e operações
            da Rede Paraíba. São estritamente proibidas entradas falsas,
            enganosas, incompletas, imprecisas ou artificiais nos livros e
            registros da Rede Paraíba de Comunicação. Nenhum Funcionário deve se
            envolver na falsificação de qualquer registro contábil ou outro
            registro de negócios, e devem responder completa e corretamente
            quaisquer questionamentos que lhes seja feito por auditores internos
            ou externos da Companhia ou por auditores de qualquer autoridade
            reguladora. Qualquer Funcionário que tenha o conhecimento de – ou
            informações relativas a – qualquer fundo ou ativo não registrado ou
            qualquer tipo de violação da política da Empresa nos dados
            financeiros e operações comerciais, deve relatar tal assunto
            prontamente ao seu Coordenador ou à Área de Compliance.
          </Text>
        </Flex>
      </Container>
      <Container className={classes.content} size="lg" mt={30}>
        <Flex flex={3} direction="column">
          <Title order={3}>
            Profissionais da área de contabilidade: profissionalismo e
            credibilidade
          </Title>
          <Divider my="md" />
          <Text className={classes.paragraph}>
            A Rede Paraíba de Comunicação é uma empresa sólida, confiável e
            consciente de sua responsabilidade social e empresarial. Queremos
            mostrar à sociedade que buscamos resultados de um modo justo, legal
            e transparente. Os nossos profissionais da área financeira devem
            contribuir para a afirmação de nossa credibilidade no mercado:
            <List my={20}>
              <List.Item className={classes.listItem}>
                Mantenha padrões profissionais adequados na documentação de
                assuntos contábeis e financeiros.
              </List.Item>
              <List.Item className={classes.listItem}>
                Mantenha-se atualizado em relação às leis e regulamentos. Peça
                aconselhamento jurídico quando necessário.
              </List.Item>
              <List.Item className={classes.listItem}>
                Ao detectar qualquer tipo de violação da política da Rede
                Paraíba de Comunicação nos dados financeiros e operações
                comerciais, relate-os imediatamente à Área de Compliance.
              </List.Item>
            </List>
            Os líderes da Área Financeira são responsáveis por manter as equipes
            de trabalho com uma variedade de habilidades financeiras e
            operacionais, tais como: controles contábeis e internos,
            planejamento financeiro, análise financeira, tesouraria e impostos.
            Os líderes não devem exercer pressão sobre a equipe de contabilidade
            com respeito a estimativas contábeis, com o objetivo de influenciar
            de forma imprópria os resultados financeiros.
          </Text>
        </Flex>
        <div className={classes.confidentialImg}></div>
      </Container>
      <Container className={classes.content} mt={30} size="lg">
        <Flex direction="column">
          <Title order={3} mb={20}>
            Informações confidenciais
          </Title>
          <Text className={classes.paragraph}>
            Os Funcionários, no desempenho de suas funções na Companhia, podem
            ter acesso a informações confidenciais sobre as empresas da Rede
            Paraíba de Comunicação, seus clientes, fornecedores, parceiros
            comerciais ou sócios. “Informações confidenciais” incluem qualquer
            informação não pública da Empresa, como informações financeiras,
            documentos e informações referentes a modelos financeiros, processos
            e produtos, software, hardware e aplicativos desenvolvidos ou em uso
            pela Companhia, ainda que você tenha tomado parte em seu
            desenvolvimento, entre outras. A confidencialidade de todas as
            informações deve ser estritamente mantida mesmo entre as diferentes
            áreas da Empresa, exceto quando sua divulgação for autorizada. Para
            preservar a confidencialidade das informações, você deve:
            <List my={20}>
              <List.Item className={classes.listItem}>
                Guardar bem os documentos relativos às suas atividades e não
                deixar materiais confidenciais sobre mesas, travar o seu
                computador quando não estiver utilizando-o e, ao final do
                expediente, guardar os documentos em gavetas ou arquivos;
              </List.Item>
              <List.Item className={classes.listItem}>
                Manter sigilo absoluto sobre qualquer tipo de informação, fato
                ou operação que envolva estratégia da Rede Paraíba de
                Comunicação;
              </List.Item>
              <List.Item className={classes.listItem}>
                Manter a confidencialidade de informações não públicas;
              </List.Item>
              <List.Item className={classes.listItem}>
                Não divulgar informações não oficiais (boatos) de qualquer
                espécie;
              </List.Item>
              <List.Item className={classes.listItem}>
                Restringir a discussão de assuntos pertinentes à Companhia ao
                ambiente de trabalho.
              </List.Item>
              <List.Item className={classes.listItem}>
                Não fale sobre os projetos da Companhia em locais públicos, tais
                como elevadores, aviões, restaurantes ou bares;
              </List.Item>
              <List.Item className={classes.listItem}>
                Não tratar de assuntos estratégicos ou não públicos da
                Companhia, ou tratar de informações confidenciais, por meios de
                comunicação não oficiais da Companhia.
              </List.Item>
            </List>
          </Text>
          <Title order={3}>
            Além disso, sem autorização do seu superior, é proibido:{" "}
          </Title>
          <Text className={classes.paragraph}>
            <List my={20}>
              <List.Item className={classes.listItem}>
                Restringir a discussão de assuntos pertinentes à Companhia ao
                ambiente de trabalho.
              </List.Item>
              <List.Item className={classes.listItem}>
                Não fale sobre os projetos da Companhia em locais públicos, tais
                como elevadores, aviões, restaurantes ou bares;
              </List.Item>
              <List.Item className={classes.listItem}>
                Não tratar de assuntos estratégicos ou não públicos da
                Companhia, ou tratar de informações confidenciais, por meios de
                comunicação não oficiais da Companhia.
              </List.Item>
            </List>
          </Text>
        </Flex>
      </Container>
      <Container size="lg" mt={30}>
        <Flex>
          <div className={classes.image1}></div>
        </Flex>
        <Flex direction="column" mt={30}>
          <Title order={3}>Meio ambiente, saúde e segurança</Title>
          <Divider my="md" />
          <Text className={classes.paragraph}>
            Em apoio ao objetivo da nossa empresa, trabalhamos com empenho para
            atingir um alto padrão de desempenho ambiental, de saúde e de
            segurança em toda a Rede:
            <List my={20}>
              <List.Item className={classes.listItem}>
                Esforçamo-nos para evitar quaisquer acidentes, ferimentos e
                doenças ocupacionais dentro de nossas operações, inclusive por
                meio da promoção do uso adequado de equipamentos e de medidas de
                proteção, de programas em apoio à saúde mental e ginástica
                laboral;
              </List.Item>
              <List.Item className={classes.listItem}>
                Cumprimos todas as leis e normas ambientais e de segurança e
                medicina do trabalho aplicáveis ao nosso negócio. A Rede Paraíba
                de Comunicação se preocupa com a preservação do meio ambiente e
                espera que seus colaboradores adotem práticas sustentáveis em
                todas as atividades da empresa. A empresa segue as leis e
                regulamentações ambientais aplicáveis e procura minimizar o
                impacto ambiental de suas operações.
              </List.Item>
            </List>
          </Text>
        </Flex>
      </Container>
      <Container size="lg" mt={30}>
        <Flex>
          <div className={classes.image}></div>
        </Flex>
        <Flex direction="column" mt={30}>
          <Title order={3}>A Rede Paraíba e as redes sociais</Title>
          <Divider my="md" />
          <Text className={classes.paragraph}>
            <span className={classes.innerTitle}>
              Redes Sociais e Aplicativos de Mensagem Instantânea
            </span>
            <br /> A internet, as redes sociais e os aplicativos de mensagem
            instantânea mudaram a forma como trabalhamos, oferecendo novas
            maneiras de nos relacionar e comunicar com Funcionários, parceiros
            comerciais, clientes e consumidores, bem como com o mundo em geral.
            Franqueza e transparência fazem parte da nossa cultura, e nós
            encorajamos a troca de ideias.
            <br /> No entanto, a divulgação de informações confidenciais ou
            inapropriadas por meio de redes sociais pode prejudicar nossas
            marcas, nossas empresas e nossos time. Além disso, casos de
            discriminação, assédio, injúria, difamação e calúnia nas redes
            sociais ou aplicativos de mensagem instantânea também vão contra os
            nossos princípios. De acordo com a nossa cultura de donos, as
            seguintes diretrizes devem ser seguidas por todos os Funcionários:
            <List my={20}>
              <List.Item className={classes.listItem}>
                Não manifeste opiniões dando a entender ou subentender que se
                tratam de posições oficiais da Rede Paraíba de Comunicação.
              </List.Item>
              <List.Item className={classes.listItem}>
                Não divulgue ou compartilhe sem autorização expressa imagens,
                vídeos ou informações internas da empresa, que não tenham sido
                divulgadas em nossos próprios canais oficiais, incluindo fotos
                ou vídeos de documentos da Companhia, treinamentos e reuniões
                internas, informações financeiras, informações relacionadas a
                processos, planejamentos estratégicos, projetos, metas,
                projeções comerciais, informações sobre clientes, etc.
              </List.Item>
              <List.Item className={classes.listItem}>
                Não compartilhe com pessoas de fora da Companhia mensagens que
                você recebe em seu e-mail corporativo e que apresentem conteúdos
                internos.
              </List.Item>
              <List.Item className={classes.listItem}>
                Não exponha informações sobre nossos clientes, parceiros e
                fornecedores;
              </List.Item>
              <List.Item className={classes.listItem}>
                Não ataque ou difame, pessoalmente ou em grupo, qualquer pessoa,
                produto, cliente, fornecedor, outro Funcionário, ex-Funcionário,
                concorrente ou qualquer outra parte relacionada à Rede.
              </List.Item>
              <List.Item className={classes.listItem}>
                Por fim, pondere sobre o que você deseja comunicar sobre si
                mesmo. Zele por suas informações pessoais, pois aquilo que
                publica ou revela sobre você em redes sociais afeta a sua imagem
                e a da Rede Paraíba. Pondere ainda mais se o assunto guardar
                alguma ligação com os produtos da Rede Paraíba de Comunicação,
                órgãos públicos ou nossos concorrentes.
              </List.Item>
            </List>
            <Paper className={classes.paper} shadow="xl" p="xl">
              O bom senso vem sempre em primeiro lugar. Certifique-se de que
              qualquer comentário gerado por você seja consistente com seu
              trabalho e com os valores e padrões profissionais da nossa
              Companhia. Considere que seu perfil pode estar sendo visualizado
              não apenas por seus colegas, mas também por nossos clientes e
              acionistas. Ao ser cuidadoso você estará protegendo a Rede Paraíba
              e sua imagem pessoal!
            </Paper>
            <Paper className={classes.paper} shadow="xl" p="xl" mb={40}>
              É papel de todo o time da rede Paraíba de Comunicação atuar como
              guardião deste Código e da Cultura da empresa. O verdadeiro DONO
              não se omite e, para garantir uma comunicação efetiva, a Rede
              Paraíba de Comunicação disponibiliza algumas formas de contato
              para dúvidas, sugestões e denúncias. O contato com a Área de
              Compliance e com o Comitê de Ética deve ser feito de modo claro e
              transparente, por meio dos canais abaixo.
              <br />
              <Text
                className={classes.contacts}
                component="span"
                gradient={{ from: "pink", to: "yellow" }}
                variant="gradient"
              >
                83 2106 1956
                <br /> 83 2106 1910
                <br /> ouvidoria@cabobranco.tv.br
              </Text>
            </Paper>
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default HealthAndSecurity;
