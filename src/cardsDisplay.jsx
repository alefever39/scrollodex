import React from "react";
import "./cardsDisplay.scss";

import ExampleCard from "./cards/exampleCard/exampleCard";
import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from "./cards/kristiCard/kristiCard";
import KesineeCard from "./cards/kesineeCard/KesineeCard";
import KristiCard from "./cards/kristiCard/kristiCard";
import JennDiazCard from "./cards/jennDiazCard/jennDiazCard";
import RachaelCard from "./cards/rachael-tCard/rachael-tCard";
import KristiCard from "./cards/kristiCard/kristiCard";
import ChumleyCard from "./cards/chumleyCard/chumleyCard";
import JennDiazCard from "./cards/jennDiazCard/jennDiazCard";
import RachaelCard from "./cards/rachael-tCard/rachael-tCard";

function CardsDisplay(props) {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <JennDiazCard />
      </div>

      <div>
        <IndigoCard />
      </div>

      <div>
        <JennDiazCard />
      </div>

      <div>
        <IndigoCard />
      </div>

      <div>
        <KristiCard />
      </div>
      <div>
        <KesineeCard />
      </div>
      <div>
        <KristiCard />
      </div>
      <div>
        <KristiCard />
      </div>

      <div>
        <ChumleyCard />
      </div>

      <div>
        <RachaelCard />
      </div>

      <div>
        <RachaelCard />
      </div>
    </div>
  );
}

export default CardsDisplay;
