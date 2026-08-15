export const seoPages = [
  {
    slug: 'ai-token-counter', title: 'AI Token Counter',
    description: 'Estimate AI prompt tokens, words and characters with TokenOrbit’s privacy-first token counter.',
    eyebrow: 'AI token counter',
    intro: 'Estimate how large a prompt is before sending it to a language model. TokenOrbit separates provider-backed counts from transparent estimates so you can see what the number means.',
    points: [
      ['Count prompt size', 'Measure estimated input tokens alongside words and characters.'],
      ['Check context usage', 'Compare your request and expected output against a model context window.'],
      ['Understand accuracy', 'See whether the result uses a local tokenizer, provider verification or an approximation.']
    ]
  },
  {
    slug: 'ai-cost-calculator', title: 'AI Cost Calculator',
    description: 'Estimate input, cached input and output costs for AI API workloads.',
    eyebrow: 'AI cost calculator',
    intro: 'Estimate the cost of a single AI request and scale it to daily or monthly usage. Enter your prompt, expected output and workload frequency.',
    points: [
      ['Input cost', 'Calculate estimated input-token spend using the selected pricing profile.'],
      ['Output cost', 'Model the response size separately because input and output can have different prices.'],
      ['Monthly forecast', 'Multiply a representative request by your expected daily workload.']
    ]
  },
  {
    slug: 'llm-cost-calculator', title: 'LLM Cost Calculator',
    description: 'Plan LLM API spending by estimating token volume, per-request cost and monthly usage.',
    eyebrow: 'LLM cost calculator',
    intro: 'Use one workload as a baseline and compare its estimated token and cost profile across configured models.',
    points: [
      ['Compare workloads', 'Run the same prompt through multiple pricing profiles.'],
      ['Separate variables', 'Change output length and request frequency without changing your prompt.'],
      ['Budget before launch', 'Use monthly estimates as a planning aid before connecting an API.']
    ]
  },
  {
    slug: 'context-window-calculator', title: 'Context Window Calculator',
    description: 'Estimate context-window usage from your prompt and expected output tokens.',
    eyebrow: 'Context window calculator',
    intro: 'Context limits matter when prompts include long instructions, documents, chat history or retrieved context. See the estimated share of the selected model’s context window.',
    points: [
      ['Usage percentage', 'See estimated prompt plus expected output as a percentage of context capacity.'],
      ['Remaining capacity', 'Estimate how many tokens remain in the selected context window.'],
      ['Large-context planning', 'Useful for RAG, long documents and multi-turn AI workflows.']
    ]
  },
  {
    slug: 'prompt-cost-calculator', title: 'Prompt Cost Calculator',
    description: 'Estimate how much a prompt costs per request and at scale.',
    eyebrow: 'Prompt cost calculator',
    intro: 'A prompt is only one part of an AI bill. Add expected response tokens and request frequency to estimate a more realistic workload cost.',
    points: [
      ['Prompt input', 'Estimate the token size of the text you send.'],
      ['Expected response', 'Account for output tokens instead of assuming every request has the same cost.'],
      ['Scale factor', 'Model repeated requests per day and across a custom number of days.']
    ]
  },
  {
    slug: 'monthly-ai-cost-calculator', title: 'Monthly AI Cost Calculator',
    description: 'Forecast monthly AI API costs from token volume, response length and request frequency.',
    eyebrow: 'Monthly AI budget calculator',
    intro: 'Turn one representative AI request into a simple monthly planning estimate. Change requests per day, expected output and billing period to explore scenarios.',
    points: [
      ['Daily workload', 'Set the number of requests you expect to make each day.'],
      ['Billing scenario', 'Choose the number of days used for your forecast.'],
      ['Token volume', 'See estimated monthly input and output token totals.']
    ]
  }
];
