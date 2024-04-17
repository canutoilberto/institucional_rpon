import { Container, Divider, Title, Text } from "@mantine/core";
import classes from "./humanRights.module.css";

const HumanRights = () => {
  return (
    <>
      <Container name="humanRights" size="lg" mb={40}>
        <Divider my={30} />
        <Text className={classes.text}>
          <Title component="p" order={3}>
            Discriminação e assédio
          </Title>{" "}
          O respeito à diversidade, à autenticidade e à pessoa é um pilar
          essencial da nossa Cultura. Por isso, a Rede promove e valoriza
          iniciativas em prol da diversidade e da igualdade no ambiente de
          trabalho, proibindo todas as formas de discriminação, sejam raça,
          etnia, cor, sexo, gênero, identidade ou expressão de gênero, cultura,
          classe social, estado civil, religião ou crenças, nacionalidade,
          naturalidade ou regionalidade, orientação sexual, idade, pessoas com
          deficiência, condição médica, genética, informações ou
          características, gravidez, amamentação, filiação a sindicato, pontos
          de vista ou atividades políticas e outras características protegidas
          por lei. Apoiamos e obedecemos às leis que proíbem a discriminação.
          Esperamos que nossos Integrantes tratem todos com respeito e
          contribuam para a implantação de uma cultura de diversidade e inclusão
          em nosso ambiente de trabalho, assim como nas redes sociais. Da mesma
          forma, a Rede Paraíba de Comunicação não tolera nenhum tipo de
          agressão ou assédio, seja ele físico, psicológico, moral, ou sexual. O
          colaborador que se considerar discriminado, alvo de preconceitos ou
          pressões excessivas e desproporcionais à atividade que normalmente
          desenvolve, que sofrer práticas abusivas ou, ainda, vivenciar situação
          de desrespeito e se sentir constrangido em tratar do assunto com seu
          superior hierárquico, deve comunicar o fato a área de Gente e Gestão.
        </Text>
      </Container>
    </>
  );
};

export default HumanRights;
