import { useEffect, useState } from "react";
import { TbCircleArrowUp } from "react-icons/tb";
import { Icon} from "@chakra-ui/react";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Icon
      onClick={scrollToTop}
      as={TbCircleArrowUp}
      color="white"
      bg='prim'
      borderRadius={'full'}
      transition={'all 0.5s ease'}
      _hover={{ transform:'translateY(-5px)',cursor:'pointer' }}
      boxSize='2.5rem'
      p='0.2rem'
      pos={"fixed"}
      zIndex={"tooltip"}
      bottom={"3rem"}
      right={"3rem"}
      visibility={!visible && "hidden"}
    />
  );
}
