import React from "react";
import ReactBenchmark from "react-benchmark";
import { readdir } from "fs/promises";

const reactBenchmark = new ReactBenchmark();

const getTestsNames = async () => {
  try {
    return readdir(`${__dirname}/components`);
  } catch (e) {
    console.error(`[Error] -> ${e}`);
  }
  return [];
};

const getComponentsByTestName = async (testName: string) => {
  try {
    return readdir(`${__dirname}/components/${testName}`);
  } catch (e) {
    console.error(`[Error] -> ${e}`);
  }
  return [];
};

const getComponentName = (componentName: string) => {
  const pointSplit = componentName.split(".");
  return pointSplit.slice(1).join(".");
}

const main = async () => {
  const testList = await getTestsNames();

  console.log("Running benchmarks...");

  await Promise.all(testList.map(async (testName) => {
    const componentsPaths = await getComponentsByTestName(testName);
    console.log(`- ${testName}`);

    for (const componentName of componentsPaths) {
      const name = getComponentName(componentName);
      const path = `${__dirname}/components/${testName}/${componentName}`;
      const result = await reactBenchmark.run(path);
      console.log("\t-", name, "->", result.hz, "ops/sec");
    }
  }));
};

main();
