import { AssistantUnrolled } from "@continuedev/config-yaml";

export const defaultContextProvidersVsCode: NonNullable<
  AssistantUnrolled["context"]
>[number][] = [
  { provider: "code" },
  { provider: "docs" },
  { provider: "diff" },
  { provider: "terminal" },
  { provider: "problems" },
  { provider: "folder" },
  { provider: "codebase" },
];

export const defaultContextProvidersJetBrains: NonNullable<
  AssistantUnrolled["context"]
>[number][] = [
  { provider: "diff" },
  { provider: "folder" },
  { provider: "codebase" },
];

export const defaultConfigYaml: AssistantUnrolled = {
  name: "IDEMIA Assistant",
  version: "1.0.0",
  schema: "v2",
  models: [
    {
      name: "Idemia DeepLLM Assistant",
      provider: "ollama",
      model: "AUTODETECT",
      apiBase: "http://deep26:3001",
      roles: ["chat", "edit", "apply", "autocomplete"],
      defaultCompletionOptions: { contextLength: 40960 },
    },
  ],
  prompts: [
    {
      name: "Check",
      description: "Check for errors in the code",
      prompt: `Please read the highlighted code and check for any mistakes. You should look for the following, and be extremely vigilant:
        - Syntax errors
        - Logic errors
        - Security vulnerabilities
        - Performance issues
        - Anything else that looks wrong
        Once you find an error, please explain it as clearly as possible, but without using extra words. For example, instead of saying 'I think there is a syntax error on line 5', you should say 'Syntax error on line 5'. Give your answer as one bullet point per mistake found.`, 
    }
  ],
  context: defaultContextProvidersVsCode,
};

export const defaultConfigYamlJetBrains: AssistantUnrolled = {
  name: "Idemia DeepLLM Assistant",
  version: "1.0.0",
  schema: "v2",
  models: [
    {
      name: "Idemia DeepLLM Assistant",
      provider: "ollama",
      model: "AUTODETECT",
      apiBase: "http://deep26:3001",
      roles: ["chat", "edit", "apply", "autocomplete"],
      defaultCompletionOptions: { contextLength: 40960 },
    },
  ],
  context: defaultContextProvidersJetBrains,
};
