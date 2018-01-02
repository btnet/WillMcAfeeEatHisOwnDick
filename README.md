# WillMcAfeeEatHisOwnDick
A website to track if McAfee is going to be eating his own dick on live TV if Bitcoin price is not over $500k (now $1million) in 3 years.

# Genesis
3:02 PM - 17 Jul 2017 [@officialmcafee](https://twitter.com/officialmcafee/status/887024683379544065) tweeted the following:

"if not, I will eat my dick on national television." in reply to "so 1btc 500k $ within 3years?" tweet by [@maguraaa](https://twitter.com/maguraaa/status/887023868531048448)

# What, When, How
Bitcoin had a price index (bpi) the day of the tweet (07/17/17) according to [Coindesk API](https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-07-17&end=2017-07-17) of $2244.265. This is our starting value, or principal. 

Using the following formula we can determine at what rate bitcoin has to grow per remaining days in the bet.

`goalRate = LOG10(a/c)/(n/365)`

where:

c = current bpi

a = Static accrued Amount (500000)

n = Number of days remaining from tweet date (07/17/17)

But for the purpose of tracking the bet from a set start/ending date, we can simply use the followin.

`g = LOG10(500000/2244.265)/(3) = 0.7826319559`

where: 

g = goal rate for three years based on starting bpi 

After we determine the daily growth goal rate we can use it to compare to Bitcoins' current growth by getting the current bpi from api.coindesk.com. 

`https://api.coindesk.com/v1/bpi/currentprice.json`

The following formula is used to determine current growth rate for comparison with the goal rate determined with above formula. 

`currRate = LOG10(c/p)/(e/365)`

where:

c = current bpi

p = static tweet bpi (2244.265)

e = number of days elapsed from tweet date (07/17/17)

When the site loads it retrives the `goalRate` and the `currRate` for comparison. If the 'GoalRate' is higher than 'CurrRate' then McAfee might be eating his own dick live on TV, else he's not. 

We can calculate the goal price parity with the following: 

`parPrice = 10^(g * (e/365)) * p`

where:

g = static goal rate 0.7826319559

p = static tweet bpi (2244.265)

e = number of days elapsed from tweet date (07/17/17)

Additionally we can get the percentage difference with the following:

`percDiff = ((c-parPrice)/parPrice)*100`

### EXAMPLE

Sep 5, 2017 12:11:00 UTC

[Tweet bpi](https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-07-17&end=2017-07-17): $2244.265

[Current bpi](https://api.coindesk.com/v1/bpi/currentprice.json): $4381.31

[Number of days remaining](https://www.google.com/search?q=how+many+days+till+july+17+2020): 1046

[Number of days since tweet](https://www.google.com/search?q=how+many+days+since+july+17+2017): 50\

`g = LOG10(500000/2244.27)/(3) ` = 0.7826319559 

`goalRate = LOG10(500000/4381.31)/(1046/365) ` = 0.7179145295

`currRate = LOG10(4381.31/2244.265)/(50/365) ` = 2.120867878

`percDiff = ((4381.31-2814.612374)/2814.612374) * 100 ` = 55.66299788% ahead of goal price

`parPrice = 10^(0.7826319559 * (50/365)) * 2244.265` = $2872.658455

PS: I'm not so smart with the math thing - please correct where I am wrong.
PPS: My first project here - I have no idea what I'm doing. You've been warned.
