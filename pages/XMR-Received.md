---
layout: post
title: XMR Received
date: 2024-10-20
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="/assets/js/fancyEarningsChart.js"></script>

The chart below shows a visualization of the Monero XMR that the mining farm has earned. The data is taken
from the wallet transaction history associated with XMR Mining.

<div id="wrapper">
  <div id="areaChart">
  </div>
  <div id="barChart">
  </div>
 </div>

Note that the graph is remarkably linear with a few exceptions:

* On the dates below, I won the [XMR vs. Beast](https://xmrvsbeast.com/) lottery; I qualify for free as an active Monero miner. The *winnings* consist of extra hash power, so the actual earnings vary, but in all three cases, the spike is visible on the graph.
  * 2024-10-02 06:41:36	Bonus: 6696.8kH/s	Round: vip
  * 2024-08-19 06:53:37	Bonus: 6624.5kH/s	Round: vip
  * 2024-07-12 07:20:14 ERROR: miner not found in PPLNS window, skipping
  * 2024-05-17 10:03:26	Bonus: 7798.6kH/s	Round: vip
* The slight increase from mid June till the end of the month is when I burned through about $750 free credits of cloud resources and I setup various container configurations (1 CPU up to 8 CPU with 8 Gb up to 32 Gb) to mine in the cloud.
* I added another miner with a modest hash rate of only about 750 H/s in early October, 20204.

The graph shows a direct relationship between hash rate and profitability and also shows that it's a consistent relationship over time.

Finally, for anyone thinking about mining in the cloud: It's not worth it. In fact it's only because my rent includes electricity that I'm able to make this profitabable.
