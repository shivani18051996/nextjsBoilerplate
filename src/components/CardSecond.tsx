import React from "react";
import "primereact/resources/primereact.min.css"; // Import the PrimeReact core CSS file
import "primeicons/primeicons.css"; // Import the PrimeIcons CSS file
import { Card } from "primereact/card";
import Styles from "./CardSecond.module.scss";
const CardSecond = () => {
  return (
    <div className={Styles.cardSection}>
      <Card className={Styles.secondCard}>Second Card Component</Card>
    </div>
  );
};

export default CardSecond;
