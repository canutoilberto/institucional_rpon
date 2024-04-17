import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, Container } from "@mantine/core";
import { FaArrowUp } from "react-icons/fa6";
import classes from "./scrollToTop.module.css";

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Container className={classes.content}>
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
                p={12}
                radius="xl"
              >
                <FaArrowUp />
              </Button>
            )}
          </Transition>
        </Affix>
      </Container>
    </>
  );
};

export default ScrollToTop;
