import { kafka } from "./client.js";
//admin function is created to create topics
const adminFn = async () => {
  const admin = kafka.admin();
  await admin.connect();
  console.log("Connected to Kafka");
  await admin.createTopics({
    topics: [
      {
        topic: "channels",
        numPartitions: 2,
      },
    ],
  });

  console.log("Disconnecting Admin..");
  await admin.disconnect();
};

adminFn();
