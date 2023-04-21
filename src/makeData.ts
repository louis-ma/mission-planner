export type Person = {
  id: number;
  subID: string;
  status: string;
  scores: number;
  taskName: string;
};

export const data: Person[] = [
  {
    id: 1,
    subID: "1.1.1",
    taskName: "Position a solar panel array amongst floating wind turbines",
    status: "todo",
    scores: 10
  },
  {
    id: 1,
    subID: "1.1.2",
    taskName: "Moor the panel array to three anchor points -- 5 points each",
    status: "todo",
    scores: 15
  },
  {
    id: 1,
    subID: "1.1.3.1",
    taskName: "Connect the floating solar panel array to the power grid, Remove the power port cover",
    status: "todo",
    scores: 5
  },
  {
    id: 1,
    subID: "1.1.3.2",
    taskName: "Install the power line connector into the power port",
    status: "todo",
    scores: 10
  },
  {
    id: 1,
    subID: "1.2.1",
    taskName: "Remove 1 to 2 biofouling from turbines",
    status: "todo",
    scores: 5
  },
  {
    id: 1,
    subID: "1.2.2",
    taskName: "Remove 3 to 5 biofouling from turbines",
    status: "todo",
    scores: 10
  },
  {
    id: 1,
    subID: "1.2.3",
    taskName: "Remove 6 biofouling from turbines",
    status: "todo",
    scores: 15
  },
  {
    id: 1,
    subID: "1.3.1",
    taskName: "Pilot into 'resident ROV' docking station - Autonomously",
    status: "todo",
    scores: 15
  },
  {
    id: 1,
    subID: "1.3.2",
    taskName: "Manually",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.1.1.1",
    taskName: "Create a 3D model of the coral head -- up to 30 points",
    status: "todo",
    scores: 30
  },
  {
    id: 2,
    subID: "2.1.1.2",
    taskName: "3D model of the coral head is created ",
    status: "todo",
    scores: 15
  },
  {
    id: 2,
    subID: "2.1.1.3",
    taskName: "Diameter measurement displayed on the model and within 2 cm",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.1.1.4",
    taskName: "Height measurement is displayed on the model is within 2 cm",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.1.1.5",
    taskName: "Total area of diseased coral is displayed on the model is within 2 square cm",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.1.2.1",
    taskName: "Measure the dimensions of the coral head -- up to 15 points",
    status: "todo",
    scores: 15
  },
  {
    id: 2,
    subID: "2.1.2.2",
    taskName: "Measure the diameter of the coral head within 2 cm",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.1.2.3",
    taskName: "Measure the height of the coral head within 2 cm",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.1.2.4",
    taskName: "Calculate the total area of diseased coral within 2 square cm",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.1.3",
    taskName: "Use the dimensions to create a 3D model of the coral head",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.2.1",
    taskName: "Identify reef organisms using eDNA - Collect a water sample from above the coral head",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.2.2",
    taskName: "Use the eDNA data to identify coral reef fish species",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.3.1.1",
    taskName: "Administer Rx to diseased corals - Light - Position the simulated UV light source over the diseased area of coral",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.3.1.2",
    taskName: "Irradiate the diseased area of coral with simulated UV light",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.3.2.1",
    taskName: "Probiotics - Place a tent over the diseased area of coral",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.3.2.2",
    taskName: "Insert a syringe filled with 'probiotic' into a port",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.3.2.3",
    taskName: "Inject a 'probiotic' fluid into the tent",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.4.1",
    taskName: "Monitor and protect seagrass habitat - Compare images to determine the recovery of a seagrass bed from an anchor scar ",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.4.2",
    taskName: "Install an Eco-Mooring system to protect seagrass and seahorse habitat",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.5.1",
    taskName: "Search two potential sites for invasive predatory fish species to determine which one is safe for release -- 5 points each",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.5.2",
    taskName: "Transport the fry to safe release area ",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.5.3",
    taskName: "Allow the fry to acclimate to local conditions",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.5.4",
    taskName: "Release the fry ",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.6.1",
    taskName: " Ensure the health and safety of Dillon Reservoir - Inspect the buoy ropes for damage",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.6.2.1",
    taskName: "Recover a container from the bottom of the reservoir - Determine the lift capability of your ROV",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.6.2.2",
    taskName: "Lift the container ",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.6.2.3",
    taskName: "Return the container to the surface, side of the pool",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.7.1.1",
    taskName: "Count the number of frogs in a transect - Fly a transect ",
    status: "todo",
    scores: 10
  },
  {
    id: 2,
    subID: "2.7.1.2",
    taskName: "Count the number of frogs",
    status: "todo",
    scores: 5
  },
  {
    id: 2,
    subID: "2.7.2",
    taskName: "Install a long-term camera into a designated area on the bottom of the lake ",
    status: "todo",
    scores: 5
  },
  {
    id: 3,
    subID: "3.1.1",
    taskName: "Prior to the competition, design and construct an operational vertical profiling float ",
    status: "todo",
    scores: 5
  },
  {
    id: 3,
    subID: "3.1.2",
    taskName: "loat communicates with the mission station prior to descending ",
    status: "todo",
    scores: 10
  },
  {
    id: 3,
    subID: "3.1.3.1.1",
    taskName: "Vertical profile 1 - Float completes first vertical profile ",
    status: "todo",
    scores: 10
  },
  {
    id: 3,
    subID: "3.1.3.1.2",
    taskName: "Float communicates time to mission station",
    status: "todo",
    scores: 10
  },
  {
    id: 3,
    subID: "3.1.3.2.1",
    taskName: "Vertical profile 2 - Float completes a second vertical profile",
    status: "todo",
    scores: 10
  },
  {
    id: 3,
    subID: "3.1.3.2.2",
    taskName: "Float communicates time to mission station",
    status: "todo",
    scores: 15
  }
];

