# WillMcAfeeEatHisOwnDick
A website to track if McAfee is going to be eating his own dick on live TV if Bitcoin price is not over $500k in 3 years.

# Genesis
3:02 PM - 17 Jul 2017 [@officialmcafee](https://twitter.com/officialmcafee/status/887024683379544065) tweeted the following:

"if not, I will eat my dick on national television." in reply to "so 1btc 500k $ within 3years?" tweet by [@maguraaa](https://twitter.com/maguraaa/status/887023868531048448)

# What, When, How
Bitcoin had a price index (bpi) the day of the tweet (07/17/17) according to [Coindesk API](https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-07-17&end=2017-07-17) of $2244.265. This is our starting value, or principal. 

Using the following formula we can determine at what rate bitcoin has to grow per remaining days in the bet.

`goalRate = LOG(a/c)/(n/365)`

where:

c = current bpi

a = Static accrued Amount (500000)

n = Number of days remaining from tweet date (07/17/17)

After we determine the daily growth goal rate we can use it to compare to Bitcoins' current growth by getting the current bpi from api.coindesk.com. 

`https://api.coindesk.com/v1/bpi/currentprice.json`

The following formula is used to determine current growth rate for comparison with the goal rate determined with above formula. 

`currRate = LOG(c-s)/(e/365)`

where:

c = current bpi

s = static tweet bpi (2244.265)

e = number of days elapsed from tweet date (07/17/17)

When the site loads it retrives the `goalRate` and the `currRate` for comparison. If the 'GoalRate' is higher than 'CurrRate' then McAfee might be eating his own dick live on TV, else he's not. 

We can get the percentage difference with the following:

`percDiff = ((currRate-goalRate)/goalRate)*100`

Additionally we can calculate the price goalPrice parity with the following: 

`parPrice = 10^(goalRate * (e/365)) * p`

p = Static tweet bpi (2244.265)

e = number of days elapsed from tweet date (07/17/17)

### EXAMPLE

Sep 5, 2017 12:11:00 UTC

[Tweet bpi](https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-07-17&end=2017-07-17): $2244.265

[Current bpi](https://api.coindesk.com/v1/bpi/currentprice.json): $4381.31

[Number of days remaining](https://www.google.com/search?q=how+many+days+till+july+17+2020): 1046

[Number of days since tweet](https://www.google.com/search?q=how+many+days+since+july+17+2017): 50

`goalRate = LOG(500000/4381.31)/(1046/365) ` = 0.7179145295

`currRate = LOG(4381.31/2244.265)/(50/365) ` = 2.120867878

`percDiff = ((2.120867878-0.7179145295)/0.7179145295) * 100 ` = 195.4206651% ahead of goal rate

`parPrice = 10^(0.8192944472 * (50/365)) * 2244.265` = $2906.07121418841
