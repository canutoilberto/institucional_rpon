import {
  Container,
  Divider,
  Title,
  Flex,
  Image,
  Text,
  Center,
} from "@mantine/core";
import classes from "./importantContacts.module.css";

import gerConteudo from "assets/img/codigo_de_conduta/ger_conteudo.png";
import gerFinanceiro from "assets/img/codigo_de_conduta/ger_financeiro.png";
import gerNegocios from "assets/img/codigo_de_conduta/ger_negocios.png";
import gerTecnologia from "assets/img/codigo_de_conduta/ger_tecnologia.png";

const ImportantContacts = () => {
  return (
    <Container
      name="importantContacts"
      className={classes.content}
      mt={40}
      size="lg"
    >
      <Title order={3}>Contatos Importantes</Title>
      <Divider my="md" />
      <Center className={classes.inner}>
        <Flex>
          <div>
            <Image src={gerConteudo} alt="Foto de Tatiana Ramos" />
            <Text
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              className={classes.text}
            >
              Tatiana Ramos
            </Text>
            <Text className={classes.text}>Gerente de conteúdo</Text>
            <Text className={classes.text}>83 2106-1929</Text>
          </div>
        </Flex>
        <Flex>
          <div>
            <Image src={gerFinanceiro} alt="Foto de Luis Hess" />
            <Text
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              className={classes.text}
            >
              Luis Hess
            </Text>
            <Text className={classes.text}>Gerente de administrativo</Text>
            <Text className={classes.text}>83 2106-1910</Text>
          </div>
        </Flex>
      </Center>
      <Center className={classes.inner}>
        <Flex>
          <div>
            <Image src={gerNegocios} alt="Foto de Paulo Eduardo" />
            <Text
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              className={classes.text}
            >
              Paulo Eduardo
            </Text>
            <Text className={classes.text}>Gerente de negócios</Text>
            <Text className={classes.text}>83 2106-1992</Text>
          </div>
        </Flex>
        <Flex>
          <div>
            <Image src={gerTecnologia} alt="Foto de Anderson Silva" />
            <Text
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              className={classes.text}
            >
              Anderson Silva
            </Text>
            <Text className={classes.text}>Gerente de tecnologia</Text>
            <Text className={classes.text}>83 2106-1938</Text>
          </div>
        </Flex>
      </Center>
    </Container>
  );
};

export default ImportantContacts;
