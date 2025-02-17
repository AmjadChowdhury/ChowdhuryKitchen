import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import useMenu from "../../Hooks/useMenu";
import TabPanelItem from "./TabPanelItem";

const OrderTab = ({ category }) => {
  const categories = ["salad", "pizza", "soup", "dessert", "offered"];
  const categoryTabIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(categoryTabIndex);

  const [menu] = useMenu();
  console.log(menu);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");


  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center text-xl my-2 font-bold">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <TabPanelItem items={salad}></TabPanelItem>
        </TabPanel>
        <TabPanel>
          <TabPanelItem items={pizza}></TabPanelItem>
        </TabPanel>
        <TabPanel>
          <TabPanelItem items={soup}></TabPanelItem>
        </TabPanel>
        <TabPanel>
          <TabPanelItem items={dessert}></TabPanelItem>
        </TabPanel>
        <TabPanel>
          <TabPanelItem items={offered}></TabPanelItem>
        </TabPanel>
      </Tabs>
    </div>
  );
};

OrderTab.propTypes = {
  category: PropTypes.string,
};

export default OrderTab;
