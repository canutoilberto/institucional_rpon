import { Text, Container, Image } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { Link } from "react-scroll";
import classes from "./footer.module.css";

import logoLight from "assets/img/icons/logo_svg_white.svg";
import logoDark from "assets/img/icons/logo_svg_dark.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const colorScheme = useColorScheme();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src={colorScheme === "dark" ? `${logoLight}` : `${logoDark}`}
            alt="Logomarca da Rede Paraíba online"
          />
          <Text size="xs" c="dimmed" className={classes.description}>
            Nossa ética, nossa conduta
          </Text>
        </div>
        <div className={classes.groups}>
          <div className={classes.link}>
            <Link to="wellcome" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                Boas vindas
              </Text>
            </Link>
            <Link to="mission" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                Nossa missão
              </Text>
            </Link>
            <Link to="destination" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                A quem se destina
              </Text>
            </Link>
            <Link to="premisses" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                Premissas
              </Text>
            </Link>
          </div>
          <div className={classes.link}>
            <Link to="humanRights" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                Direitos humanos
              </Text>
            </Link>
            <Link to="importantContacts" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                Contatos importantes
              </Text>
            </Link>
            <Link to="commitment" smooth={true} duration={800}>
              <Text className={classes.text} component="a">
                Termo de compromisso
              </Text>
            </Link>
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {currentYear} Rede Paraíba de Comunicação. Todos os direitos
          reservdos.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
