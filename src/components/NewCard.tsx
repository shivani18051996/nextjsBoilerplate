import React from "react";
import { Card } from "primereact/card";
import "primereact/resources/primereact.min.css";
import Styles from "./NewCard.module.scss";
import "primeflex/primeflex.css"; // Import the PrimeFlex CSS file
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Import the PrimeReact theme CSS file
import "primereact/resources/primereact.min.css"; // Import the PrimeReact core CSS file
import "primeicons/primeicons.css"; // Import the PrimeIcons CSS file
import CardSecond from "./CardSecond";
import DataTableComp from "./DataTableComp";

const NewCard = () => {
  return (
    <>
      <div className={`${Styles.mainCard}`}>
        <div className="">
          <Card className={Styles.myCard}>
            <p>Description</p>
          </Card>
        </div>
        <Card className={Styles.cardStyle}>
          <p>Second Card</p>
        </Card>
        {/* <CardSecond /> */}
      </div>
      <DataTableComp />
    </>
  );
};

export default NewCard;
