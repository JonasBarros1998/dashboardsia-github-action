import * as core from "@actions/core";

async function run() {
  const name = core.getInput("name");
  core.info(`Olá, ${name}!`);

  core.setOutput("greeting", `Olá, ${name}!`);
}


// ARN > arn:aws:iam::700552527916:oidc-provider/token.actions.githubusercontent.com