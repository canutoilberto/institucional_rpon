import { Container, Title, Text, Button } from "@mantine/core";
import { Link } from "react-scroll";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                CÓDIGO DE ÉTICA E CONDUTA
              </Text>{" "}
              DA REDE PARAÍBA DE COMUNICAÇÃO
            </Title>

            <Text className={classes.description} mt={30}>
              ESTAR COM VOCÊ, INFORMANDO E DIVERTINDO
            </Text>

            <Link to="sumary" smooth={true} duration={800}>
              <Button
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
                className={classes.control}
                size="xl"
                mt={40}
              >
                Conheça
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
