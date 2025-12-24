import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  const name = core.getInput("name");
  core.info(`Olá, ${name}!`);
  //const token = core.getInput("github-token");

  const issue = github.context.payload.issue;

  core.info(`Issue #${issue?.number} title: ${issue?.title}`)
}
