import PropTypes from "prop-types";
import { useState } from "react";

const AppliancesTable = ({ applianceName, defaultValues }) => {
  const [lowPower, setLowPower] = useState(defaultValues[0] || 0);
  const [mediumPower, setMediumPower] = useState(defaultValues[1] || 0);
  const [highPower, setHighPower] = useState(defaultValues[2] || 0);
  const [otherPower, setOtherPower] = useState(0);

  const [lowUsed, setLowUsed] = useState(0);
  const [mediumUsed, setMediumUsed] = useState(0);
  const [highUsed, setHighUsed] = useState(0);
  const [otherUsed, setOtherUsed] = useState(0);

  const [lowHours, setLowHours] = useState(0);
  const [mediumHours, setMediumHours] = useState(0);
  const [highHours, setHighHours] = useState(0);
  const [otherHours, setOtherHours] = useState(0);

  // Function to calculate total energy for a category
  const calculateTotalEnergy = (powerRating, used, hours) => {
    return powerRating * used * hours;
  };

  return (
    <div>
      <div>
        <h3>{applianceName}</h3>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Low Power</th>
              <th>Medium Power</th>
              <th>High Power</th>
              <th>Other Power</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Power Rating (W)</th>
              <td>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    min={0}
                    value={lowPower}
                    onChange={(e) => setLowPower(Number(e.target.value))}
                  />
                  <span className="ml-2">W</span>
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    min={0}
                    value={mediumPower}
                    onChange={(e) => setMediumPower(Number(e.target.value))}
                  />
                  <span className="ml-2">W</span>
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    min={0}
                    value={highPower}
                    onChange={(e) => setHighPower(Number(e.target.value))}
                  />
                  <span className="ml-2">W</span>
                </div>
              </td>
              <td>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    min={0}
                    value={otherPower}
                    onChange={(e) => setOtherPower(Number(e.target.value))}
                  />
                  <span className="ml-2">W</span>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                {`${applianceName}${applianceName[applianceName.length - 1] === "s" ? "" : "s"}`}{" "}
                Used
              </th>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={lowUsed}
                  onChange={(e) => setLowUsed(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={mediumUsed}
                  onChange={(e) => setMediumUsed(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={highUsed}
                  onChange={(e) => setHighUsed(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={otherUsed}
                  onChange={(e) => setOtherUsed(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <th>Hours Used</th>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={lowHours}
                  onChange={(e) => setLowHours(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={mediumHours}
                  onChange={(e) => setMediumHours(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={highHours}
                  onChange={(e) => setHighHours(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  min={0}
                  value={otherHours}
                  onChange={(e) => setOtherHours(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <th>Total Energy Used (Wh)</th>
              <td>{calculateTotalEnergy(lowPower, lowUsed, lowHours)} Wh</td>
              <td>
                {calculateTotalEnergy(mediumPower, mediumUsed, mediumHours)} Wh
              </td>
              <td>{calculateTotalEnergy(highPower, highUsed, highHours)} Wh</td>
              <td>
                {calculateTotalEnergy(otherPower, otherUsed, otherHours)} Wh
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

AppliancesTable.propTypes = {
  applianceName: PropTypes.string.isRequired,
  defaultValues: PropTypes.array.isRequired,
  setTotalEnergyConsumption: PropTypes.func.isRequired, // Ensure that this function is passed from the parent
};

export default AppliancesTable;