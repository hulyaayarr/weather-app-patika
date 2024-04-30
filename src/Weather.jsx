import FetchData from "./FetchData";
import cities from "./cities";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Weather = () => {
  return (
    <div>
      <DropdownButton as={ButtonGroup} title="Select">
        {cities.map((city, index) => (
          // return <FetchData key={index} city={city} />;

          <Dropdown.Item key={index} eventKey={city}>
            {city}
          </Dropdown.Item>
        ))}{" "}
      </DropdownButton>
    </div>
  );
};

export default Weather;
