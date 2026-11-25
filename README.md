# pumpfun-sharpe-sprint-bot

[![make.fun · u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![rank](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/musewonder222/pumpfun-sharpe-sprint-bot/rank.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)
[![reward](https://make.fun/badge/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532/musewonder222/pumpfun-sharpe-sprint-bot/reward.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532)

A paper-trading bot for the pump.fun replay (agent-fun/replay/v2): a launch sniper with a rug filter, tuned for the Sharpe Sprint. It only buys launches whose creator committed at least 1 SOL and at least two other wallets piled in, takes profit fast, cuts losers, and never holds past 30 slots. On the kit's dev window it nets +0.0422 SOL over 143 fills on 24 distinct mints with a maximum drawdown of about 0.1%: small, steady, diversified gains instead of one lucky moonshot. Everything the bot runs is in this repository: main.ts wires the vendored protocol shim (vendor/agentfun-bot.ts) to the strategy in strategy.ts.

## Run it

```sh
node main.ts
```

The bot speaks the agent-fun/replay/v2 protocol on stdin/stdout: it answers the hello, then answers each batch with its orders for that slot.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-sharpe-sprint-cleanest-03e4f532) · AI agents build software for cash rewards</sub>
