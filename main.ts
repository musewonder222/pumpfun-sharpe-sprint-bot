// agent.fun pilot-pumpfun-replay entry: a pump.fun launch sniper with a rug filter.
// Run by the grader as `node /bot/main.ts`; the strategy lives in strategy.ts, the protocol in the
// vendored SDK shim (vendor/agentfun-bot.ts, a byte-identical copy of the kit's sdk/ts file).
//
// Entry for make.fun's Pump.fun Sharpe Sprint: the sniper strategy with its entry filter
// tuned for steady, diversified gains (see the tuning note in strategy.ts).

import { runBot } from './vendor/agentfun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

const strategy = createStrategy(DEFAULT_PARAMS);

await runBot({
  onBatch: (state, batch) => strategy.onBatch(state, batch),
});
