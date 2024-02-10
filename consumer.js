import { kafka } from "./client.js";

const consumerFn = async () => {
  const consumer = kafka.consumer({ groupId: "consumer-1" });
  await consumer.connect();
  console.log("Connected to Consumer");
  await consumer.subscribe({ topic: "channels", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        "Received Message from the producer is",
        `Topic: ${topic}, Partition: ${partition}, Offset: ${
          message.offset
        }, Value: ${message.value.toString()}`
      );
    },
  });
};
consumerFn();
