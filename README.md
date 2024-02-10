# KafkaJS Node.js Setup Guide

This guide provides step-by-step instructions to set up Apache Kafka and Zookeeper using Docker, along with integrating KafkaJS, a Node.js client for Apache Kafka.

## Prerequisites

- [Node.js](https://nodejs.org/en/download) installed on your system.
- [Docker](https://docs.docker.com/engine/install/) installed to run Kafka and Zookeeper.
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/) or [Vim](https://www.vim.org/).

## Setting Up Kafka and Zookeeper with Docker

### Starting Zookeeper Container

```bash
docker run -d -p 2181:2181 zookeeper
```

### Starting Kafka Container

```bash
docker run -d -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<YOUR_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<YOUR_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

Replace `<YOUR_IP>` with your Docker host IP if necessary. You can find your IP address using the following command:

```bash
ifconfig
```

Look for the IP address associated with your network interface (such as `eth0` or `wlan0`) under the `inet` section.

### Renaming Docker Containers (Optional)

```bash
docker rename previous_container_name new_container_name
```

Replace `previous_container_name` with the current container name and `new_container_name` with the desired name.

## Setting Up KafkaJS in a Node.js Project

1. Install KafkaJS in your Node.js project:

```bash
npm install kafka-js
```

2. Import KafkaJS into your Node.js application:

```javascript
const { Kafka } = require('kafkajs');
```

For a better understanding of Kafka, follow this [link](https://www.notion.so/My-Understanding-of-Kafka-34bcf6f389634c3296ecd71e3f975b96).

## Reference

For detailed usage of KafkaJS, refer to the [KafkaJS Getting Started Guide](https://kafka.js.org/docs/getting-started).
