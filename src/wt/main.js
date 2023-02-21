import os from "os";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const cp = os.cpus();
  console.log(cp.length);
  let number = 10;

  const result = await Promise.allSettled(
    cp.map(
      () =>
        new Promise((res, rej) => {
          const worker = new Worker(
            fileURLToPath(new URL("./worker.js", import.meta.url)),
            { workerData: number++ }
          );
          worker
            .on("message", (data) => res(data))
            .on("error", (err) => rej(err));
        })
    )
  );

  console.log(
    result.map((el) => ({
      status: el.status === "fulfilled" ? "resolved" : "error",
      data: el.value || null,
    }))
  );
};

await performCalculations();
