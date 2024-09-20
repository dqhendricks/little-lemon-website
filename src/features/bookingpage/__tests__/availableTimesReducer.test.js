import { initializeTimes, updateTimes } from "../availableTimesReducer.js";

test("Available times reducer initialization function returns a non-empty array", () => {
  const result = initializeTimes();
  expect(result).to.be.an("array");
  expect(result).to.have.length.greaterThan(0);
});

test("Available times reducer UPDATE_DATE action returns expected time array", () => {
  const expectedArray = [
    "17:00",
    "17:30",
    "18:00",
    "19:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const result = updateTimes(
    {},
    {
      type: "UPDATE_DATE",
      payload: new Date("2024-09-21"),
    }
  );
  expect(result).to.be.an("array");
  expect(result).to.deep.equal(expectedArray);
});
