import { kafka } from "./client.js";

export const producerFn = async () => {
  const producer = kafka.producer();
  await producer.connect();
  console.log("Connected to Producer");
  await producer.send({
    topic: "channels",
    messages: [
      {
        value: "hello world",
      },
    ],
  });

  await producer.disconnect();
};

producerFn();
