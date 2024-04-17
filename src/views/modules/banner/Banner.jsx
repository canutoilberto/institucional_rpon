/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Flex, Overlay, Title } from "@mantine/core";
import classes from "./banner.module.css";

const Banner = ({ id, text }) => {
  return (
    <Container className={classes.content} size="lg" mt={90}>
      <Overlay
        radius="md"
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Flex className={classes.inner}>
        <Title className={classes.title}>{text}</Title>
      </Flex>
    </Container>
  );
};

export default Banner;
