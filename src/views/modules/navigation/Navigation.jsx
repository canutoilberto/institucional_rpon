import {
  Group,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-scroll";
import classes from "./navigation.module.css";

const Navigation = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box name="sumary" pb={120}>
      <header className={classes.header}>
        <Group h="100%" gap={0} visibleFrom="sm">
          <Link to="wellcome" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              Boas vindas
            </Text>
          </Link>
          <Link to="mission" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              Nossa missão
            </Text>
          </Link>
          <Link to="destination" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              A quem se destina
            </Text>
          </Link>
          <Link to="premisses" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              Premissas
            </Text>
          </Link>
          <Link to="humanRights" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              Direitos humanos
            </Text>
          </Link>
          <Link to="importantContacts" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              Contatos importantes
            </Text>
          </Link>
          <Link to="commitment" smooth={true} duration={800}>
            <Text className={classes.link} component="a">
              Termo de compromisso
            </Text>
          </Link>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Sumário"
        hiddenFrom="sm"
        zIndex={100000}
      >
        <ScrollArea h={`clac(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="wellcome" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              Boas vindas
            </Text>
          </Link>
          <Link to="mission" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              Nossa missão
            </Text>
          </Link>
          <Link to="destination" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              A quem se destina
            </Text>
          </Link>
          <Link to="premisses" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              Premissas
            </Text>
          </Link>
          <Link to="humanRights" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              Direitos humanos
            </Text>
          </Link>
          <Link to="importantContacts" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              Contatos importantes
            </Text>
          </Link>
          <Link to="commitment" smooth={true} duration={800}>
            <Text className={classes.link} component="a" onClick={closeDrawer}>
              Termo de compromisso
            </Text>
          </Link>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navigation;
