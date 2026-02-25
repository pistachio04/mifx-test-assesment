// how to run all test locally
// k6 run -e STAGE=dev run-all-test.js

import { htmlReport } from "https://raw.githubusercontent.com/alamsz/k6-reporter/main/dist/bundle.js"
import * as Test from "./feature/index.js";

export default function (id) {

  // put your test here
    Test.getUserById(id)
}

//k6 reporting function : to make a report of test
export function handleSummary(data) {
  console.log("Preparing the end-of-test summary...");
  return {
    //rename .html file into appropriate one
    //also change {title} name into appropriate one
    "REQRES - Report.html": htmlReport(data, {
      title: "REQRES Automation Report",
      template: "bootstrap",
    }),
  };
}
