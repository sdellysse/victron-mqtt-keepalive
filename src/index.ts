import Mqtt from "async-mqtt";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  console.log(`${new Date().toISOString()} [INFO] Connecting to MQTT`);
  const mqttConn = await Mqtt.connectAsync("tcp://macos-server.lan:1883");

  for (;;) {
    console.log(`${new Date().toISOString()} [INFO] sending keepalive publish`);
    await mqttConn.publish("venus/R/e45f014600b3/keepalive", "");
    await sleep(1 * 60 * 1_000);
  }
})();
