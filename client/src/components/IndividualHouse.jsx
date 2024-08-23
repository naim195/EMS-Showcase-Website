import { useCallback, useMemo, useState } from "react";
import AppliancesTable from "./AppliancesTable";
import Miscellanous from "./Miscellanous";
// import axios from "axios";

const IndividualHouse = () => {
  const applianceNames = [
    "LED bulbs",
    "LED Tubes",
    "Celling Fans",
    "Movable Fans",
    "Lamps",
    "Computer/Laptops",
    "Televisions",
    "Audio Outputs",
    "Air Purifiers",
    "Air cooler",
    "Air Conditioners",
    "Iron",
    "Hair Dryer",
    "Vacuum Cleaner",
    "Refrigerator",
    "Blender/ Mixers",
    "Water Purifiers",
    "Electric Kettle",
    "Induction Cooker",
    "Toaster",
    "Microwave Oven",
    "Dish Washer",
    "Washing Machines",
    "Dryers",
    "Water Heater (Geyser)",
    "Room Heater",
    "Water Pump",
  ];

  const defaultValues = {
    "LED bulbs": [6, 13.5, 20],
    "LED Tubes": [6, 13.5, 20],
    "Celling Fans": [40, 60, 80],
    "Movable Fans": [50, 75, 80],
    Lamps: [40, 50, 60],
    "Computer/Laptops": [60, 120, 200],
    Televisions: [50, 100, 150],
    "Audio Outputs": [50, 100, 150],
    "Air Purifiers": [30, 50, 80],
    "Air cooler": [100, 150, 200],
    "Air Conditioners": [1000, 1500, 2000],
    Iron: [750, 1100, 1500],
    "Hair Dryer": [1500, 1800, 2200],
    "Vacuum Cleaner": [750, 1000, 1300],
    Refrigerator: [350, 600, 800],
    "Blender/ Mixers": [500, 750, 1000],
    "Water Purifiers": [40, 60, 100],
    "Electric Kettle": [1200, 1600, 2000],
    "Induction Cooker": [1000, 1300, 1600],
    Toaster: [800, 1100, 1400],
    "Microwave Oven": [1200, 1500, 1800],
    "Dish Washer": [1200, 1500, 1800],
    "Washing Machines": [750, 1250, 1800],
    Dryers: [2000, 2500, 3000],
    "Water Heater (Geyser)": [1500, 2250, 3000],
    "Room Heater": [1200, 1500, 1800],
    "Water Pump": [1000, 1500, 2000],
  };

  const initialObject = applianceNames.reduce((acc, name) => {
    acc[name] = {
      low: {
        rating: 0,
        number: 0,
        hoursUsed: 0,
        total: 0,
      },
      medium: {
        rating: 0,
        number: 0,
        hoursUsed: 0,
        total: 0,
      },
      high: {
        rating: 0,
        number: 0,
        hoursUsed: 0,
        total: 0,
      },
      other: {
        rating: 0,
        number: 0,
        hoursUsed: 0,
        total: 0,
      },
    };
    return acc;
  }, {});
  

  const [applianceNamesEnergyCost, setApplianceNamesEnergyCost] = useState(initialObject);
  const [miscellaneousItems, setMiscellaneousItems] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const calculateTotalEnergyConsumption = useCallback(() => {
    const total = { low: 0, medium: 0, high: 0, other: 0 };
  
    // Sum up appliances
    Object.values(applianceNamesEnergyCost).forEach((appliance) => {
      ['low', 'medium', 'high', 'other'].forEach((category) => {
        total[category] += appliance[category].total;
      });
    });
  
    // Sum up miscellaneous items
    miscellaneousItems.forEach((item) => {
      ['low', 'medium', 'high', 'other'].forEach((category) => {
        total[category] += item[category].total;
      });
    });
  
    return total;
  }, [applianceNamesEnergyCost, miscellaneousItems]);
  
  
  const totalEnergyConsumption = useMemo(() => calculateTotalEnergyConsumption(), [calculateTotalEnergyConsumption]);

  

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Card for Energy Sources and Preferences */}
      <div className="card max-w-3xl mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Energy Sources and Preferences
          </h2>
          <form className="space-y-8">
            {/* Section: Energy Sources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                What energy sources do you have or want in your microgrid?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Solar PV", "Battery", "Diesel Generator", "Grid"].map(
                  (source) => (
                    <label key={source} className="flex items-center">
                      <input
                        type="radio"
                        name="energySources"
                        className="radio radio-primary mr-3"
                      />
                      <span>{source}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div className="divider"></div>

            {/* Section: Diesel Generator */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                There will be carbon dioxide emissions from the Diesel
                Generator. Do you still want to use it?
              </h3>
              <div className="flex space-x-8">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="dieselUse"
                      className="radio radio-primary mr-3"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            {/* Section: Primary Energy Goal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                What is your primary goal for energy generation?
              </h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="energyGoal"
                    className="radio radio-primary mr-3"
                  />
                  <span>Make profit by selling electricity to the grid</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="energyGoal"
                    className="radio radio-primary mr-3"
                  />
                  <span>
                    Be self-sustainable in energy generation and consumption
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Separate Section for the AppliancesTable Component */}
      <div className="card bg-base-100 shadow-xl p-6">
        {applianceNames.map((name) => (
          <div key={name}>
            <AppliancesTable
              applianceName={name}
              defaultValues={defaultValues[name] || [0, 0, 0]}
              setApplianceNamesEnergyCost={setApplianceNamesEnergyCost}
            />
            <div className="divider"></div>
          </div>
        ))}
      </div>

      {/* Section for Miscellaneous Items */}
      <div className="card bg-base-100 shadow-xl p-6">
        <p>Add miscellaneous items</p>
        <Miscellanous
          miscellaneousItems={miscellaneousItems } setMiscellaneousItems={setMiscellaneousItems}
        />
      </div>

      {/* Display Total Energy Consumption */}
      <div className="card bg-base-100 shadow-xl p-6">
        <h3 className="text-lg font-semibold">Total Energy Consumption</h3>
        <p>Low: {totalEnergyConsumption.low.toFixed(2)} Wh</p>
        <p>Medium: {totalEnergyConsumption.medium.toFixed(2)} Wh</p>
        <p>High: {totalEnergyConsumption.high.toFixed(2)} Wh</p>
        <p>Other: {totalEnergyConsumption.other.toFixed(2)} Wh</p>
        <p className="font-bold mt-2">
          Total Energy Consumption: {
            Object.values(totalEnergyConsumption).reduce((acc, curr) => acc + curr, 0).toFixed(2)
          } Wh
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl p-6">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button type="submit" className="btn btn-primary btn-wide">
          Submit
        </button>
      </div>
    </div>
  );
};

export default IndividualHouse;
