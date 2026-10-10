import {
  Flex,
  VStack,
  Icon,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  chakra,
} from "@chakra-ui/react";
import SPSection from "../SPSection";
import { MdRocketLaunch } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";

import { FaCheck } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

export default function PS() {
  return (
    <VStack spacing={"0"} w="full">
      {/* 1 */}
      <SPSection
        head={"Alternative Fuels"}
        txt={
          "We specialize in producing Alternative Fuels for the cement industry, with a focus on Refuse-Derived Fuel (RDF). "
        }
        img={"../../rdf-min.webp"}
        link="alternative-fuels"
      >
        <List spacing={"1.8rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"white"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              RDF is a cost-effective and eco-friendly energy source, reducing
              CO2 emissions by 40% and costing 50% less than coal and fossil
              fuels. This makes RDF an optimal solution for the cement industry,
              helping it transition to more sustainable practices.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"white"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              The Green Innovation utilizes advanced technology to produce
              energy efficiently, offering lower costs and reduced emissions,
              all while preserving natural resources. Our approach ensures that
              industrial processes are both environmentally responsible and
              economically viable.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 2 */}
      <SPSection
        head={"Waste Management & Disposal"}
        txt={
          "The rapidly increasing quantities of waste generated in industrial zones pose a significant environmental challenge."
        }
        img={"../../waste-management.webp"}
        link="waste-management"
        headColor={"prim"}
        whiteBg
        reverse
      >
        <List spacing={"3.12rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"prim"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"text"} fontWeight={"400"} w="full">
              Industrial facilities produce millions of tons of waste annually,
              and this figure continues to rise. However, the current disposal
              and processing capacities are insufficient to handle both the
              present production levels and the anticipated future growth.
              Additionally, many existing facilities fail to meet acceptable
              environmental standards.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"text"} fontWeight={"400"} w="full">
              At The Green Innovation, we offer tailored waste management
              solutions designed to help industrial facilities efficiently
              process their waste, meet environmental regulations, and ensure
              sustainable practices for future growth.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 3 */}

      <SPSection
        head={"Steel Slag Treatment"}
        txt={
          "The Green Innovation is a leader in collecting steel slag from various steel manufacturing plants across Europe."
        }
        img={"../../steel-min.webp"}
        link="steel"
      >
        <List spacing={"1.8rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"white"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              With esteemed partners throughout the continent, we export the
              collected steel slag to our treatment facility in Giza, Egypt,
              where it is transformed into high-quality materials for a range of
              industries, including cement production, construction, and paint
              manufacturing.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"white"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              Our steel slag treatment solution repurposes industrial byproducts
              into valuable resources with a positive environmental impact. By
              recycling steel slag, we help reduce waste sent to landfills and
              minimize the steel industry's environmental footprint.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 4 */}
      <SPSection
        head={"Fly Ash and Bottom Ash"}
        txt={`At The Green Innovation, we lead the way in the collection and management
of fly ash and bottom ash from a wide network of power generation facilities across
Europe.`}
        img={"../../fly.webp"}
        link="fly-ash"
        headColor={"prim"}
        whiteBg
        reverse
      >
        <List spacing={"3.12rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"prim"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"text"} fontWeight={"400"} w="full">
              Through strategic partnerships with key industry players, we
              transport the ash to our treatment facility in Giza, Egypt. There,
              it is carefully processed using advanced technologies, converting
              it into high-value materials that are integral to industries such
              as cement manufacturing, infrastructure development, and
              environmental rehabilitation.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"text"} fontWeight={"400"} w="full">
              Our sustainable approach not only minimizes waste but also
              contributes to the circular economy by turning industrial
              byproducts into resources that fuel further innovation and growth.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 5 */}
      <SPSection
        head={"r-PET"}
        txt={
          "At The Green Innovation, we are dedicated to addressing the global plastic waste challenge through our advanced r-PET recycling technology."
        }
        img={"../../rpet-min.webp"}
        link="r-pet"
      >
        <List spacing={"1.8rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"white"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              By collecting and sorting PET bottles and containers, we transform
              waste into high-quality recycled PET (r-PET). It can be used as a
              sustainable alternative to new or primary plastic in the
              production of new bottles, packaging materials, and various
              consumer products.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"white"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"white"} fontWeight={"400"} w="full">
              Our recycling process not only diverts significant plastic waste
              from landfills and oceans but also plays a vital role in
              conserving natural resources, reducing carbon emissions, and
              lessening the reliance on fossil-based materials.
            </Text>
          </ListItem>
        </List>
      </SPSection>
      {/* 6 */}
      <SPSection
        head={"Others"}
        txt={
          "The Green Innovation is a pioneer and leader in the re-use of industrial waste from various sectors."
        }
        img={"../../others.webp"}
        link="others"
        headColor={"prim"}
        whiteBg
        reverse
      >
        <List spacing={"3.12rem"} w="full">
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              transform={"scale(3)"}
              as={BsDot}
              color={"prim"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"text"} fontWeight={"400"} w="full">
              With extensive experience in handling by-products, we specialize
              in transforming waste into valuable resources.
            </Text>
          </ListItem>
          <ListItem
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            fontWeight={"400"}
            display={"flex"}
            w="full"
            gap={"0.5rem"}
          >
            <ListIcon
              as={BsDot}
              color={"prim"}
              transform={"scale(3)"}
              pos="relative"
              top={[
                "calc(0.5rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
                "calc(0.6rem - 0.5ch)",
              ]}
              fontSize={["1rem", "1.2rem", "1.2rem"]}
            />
            <Text color={"text"} fontWeight={"400"} w="full">
              If your facility produces industrial waste, don’t hesitate to
              reach out. Together, we can reduce environmental impact and
              contribute to saving the planet for future generations.
            </Text>
          </ListItem>
        </List>
      </SPSection>
    </VStack>
  );
}
