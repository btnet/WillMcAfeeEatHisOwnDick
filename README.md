# WillMcAfeeEatHisOwnDick
A website to track if McAfee is going to be eating his own dick on live TV if Bitcoin price is not over $500k in 3 years.

# Genesis
3:02 PM - 17 Jul 2017 [@officialmcafee](https://twitter.com/officialmcafee/status/887024683379544065) tweeted the following:

"if not, I will eat my dick on national television." in reply to "so 1btc 500k $ within 3years?" tweet by [@maguraaa](https://twitter.com/maguraaa/status/887023868531048448)

# What, When, How
Bitcoin had a price index (bpi) the day of the tweet (07/17/17) according to [Coindesk API](https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-07-17&end=2017-07-17) of $2244.265. This is our starting value, or principal. 

Using the following formula we can determine at what rate bitcoin has to grow per remaining days in the bet.

`GoalRate = n((a/p)^(1/n) - 1)`

where:

n = number of days left within 3 year period from tweet (07/17/20)

p = Principal Amount (2244.265)

a = Accrued Amount (500000)

After we determine the daily growth goal rate we can use it to compare to the bitcoins past 24 hour growth by getting the bpi from api.coindesk.com. 

`https://api.coindesk.com/v1/bpi/historical/close.json?start=[PreviousDate]&end=[CurrentDate]`

Past 24 hours index can be used with the following formula to determine current growth rate for comparison with the goal rate determined with above formula. 

`CurrRate = ((c-y)/y)*100`

where:

c = current bpi

y = yesterday's bpi

When the site loads it retrives the 'GoalRate' and the 'CurrRate' for comparison. If the 'GoalRate' is higher than 'CurrRate' then McAfee might be eating his own dick live on TV, else he's not. 
