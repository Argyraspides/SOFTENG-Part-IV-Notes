# Research Questions & Hypotheses
***
## A good research question is:
- **Researchable**: There is actually information out there which allows you to gain more insight into the question. An example of a question that is not researchable is "If we were to take all the breadcrumbs that have fallen off of peoples food in all of human history, how much bread could we make?"
- **Clear**: The question should not be ambiguous, vague, unspecific, etc. The question should be precise with no room for misinterpretation.
- **Answerable**: You're not asking some shit like "what is outside of time and space itself?" We can't investigate that bro.
- **Scoped**: The research question isn't too broad. It should be specific and targeted at one thing. 
- **Feasible**: Shouldn't cost 8 trillion dollars and take 923 years.
- **Measurable**: Anything in your research that you use to draw conclusions about the world should be measurable. If they are not measureable then you're basically making shit up when you come up to a conclusion. I.e. the "elements" of your research should be measurable either qualitatively or quantitatively.
- **Novel**: Aims to actually expand our understanding of the world rather than doubling down on shit we already know
- **Reasonably Sophisticated**: Should not be so trivial that you can answer the question with a simple "Yes" or "No" but also not so complex that it's unanswerable. It should be seen that the answer to your question is gonna have a lot of dependencies and nuance.

## Coming up with a research question:
- 1. Ask a general/broad question or identify a broad subject
- 2. Do a literature review to see what we do and don't know. Identify patterns and shit.
- 3. Narrow down the focus to a specific area (almost certainly about something controversial/unknown/hotly debated)
	- 3a. Target a specific population/***context*** 
		- 3a1. Make sure to specify a user group (in the context of HCI)
- 4. Make your final question

E.g.

1: How does the design of a user interface affect performance?
2: Literature review says XYZ, does NOT say ABC
3: Focus on how UI affects completion time of tasks
	- Context: Maybe how colors of UI affect completion times
	- Population: Maybe general users of the internet or smth

4: Final question: How do the colors of the 'After' UI design affect task completion times for general internet users compared to the 'Before UI' design?

# On Hypotheses
***
## The Null Hypothesis (denoted $H_0$):

Suppose you have a widely held fact, for example that Panadol takes effect in 30-60 minutes in the human body.

You then come up with another drug, called Faster-Than-Panadol, and you say that it is faster than Panadol.

How do you prove that this is actually the case?

You might take a bunch of individuals with headaches, and have half of them use Panadol, and the other half Faster-Than-Panadol, and observe how long it takes each group to notice their headaches disappear, then average the results (or something like that).

Now, we already know that Panadol takes effect in 30-60 minutes. This is an established fact. Now, you're out here claiming that Faster-Than-Penadol will take less than that to take effect.

Naturally, the statement you're trying to prove is that "Faster-Than-Panadol works **faster** than Panadol".

Is this the best approach, though? For example, why not try and *reject* the statement "There is **no difference** between effect times of Panadol and Faster-Than-Panadol".

You might say "Well, that will only tell me if there *is* a difference, not *by how much* though".

This is the point I'm trying to make — your first job is not to prove a definite, quanititative difference, but that *there is a difference in the first place*. After that, *then* you can start talking about "by how much". Now normally, within the same study, you might be able to do both at the same time, but you'd first have to prove a difference before proving by how much.

Okay then, so why not prove the statement "There is a difference in effect times between Panadol and Faster-Than-Panadol"? Why are we doing the opposite of this statement?

As it turns out, it is far, *far* easier to "disprove" something rather than "prove" it to be true. Think about it — you only need one example to "prove" something is incorrect, but you'd need a million to even start "proving" it correct. If I observe something, and come up with a hypothesis on why that observation was the way it was, I'd need extraordinary evidence to "prove" it. You, on the other hand, only need to find one counter-example to "disprove" my hypothesis.

So, "proving" the statement "There is no difference between effect times of Panadol and Faster-Than-Panadol" as false (rejecting it) turns out to be far easier (and actually less error-prone) than trying to directly "prove" "There is a difference in effect times between Panadol and Faster-Than-Panadol".

Why did I put prove, disprove, and proving in quotes? It is impossible to ever completely prove something. We cannot establish absolute truth in science, we can only provide very strong evidence and then say "Well, this explanation is very consistent, reliable, aligns with our observations and/or experiments, and has lots of evidence to back it up — and so we will accept it for now until new evidence comes along which might help us out even more, or maybe disprove the explanation".

So then, since we know that Panadol works, and this is an established fact, we want to place the burden of proof on the person making the claim that their Faster-Than-Panadol drug is faster.

From our point of view, since we ***know for a fact*** Panadol works, our position would be:
- "There is no difference in effect times between Panadol and Faster-Than-Panadol".

From the perspective of the person who made Faster-Than-Panadol, they have to contend with this statement. From everyone else's point of view, they are very skeptical of this "Faster-Than-Panadol". So what does the creator of Faster-Than-Panadol have to do? They have prove the statement "There is no difference in effect times between Panadol and Faster-Than-Panadol" as incorrect.

If the person fails to disprove the statement, that doesn't necessarily mean there isn't a difference, but that there isn't enough *evidence* to conclude there is a difference.

We call this hypothesis — the one we are trying to prove wrong, the "null hypothesis", denoted as $\large H_0$. You usually assign the null hypothesis as the status-quo or widely held fact, and it is usually the thing you are trying to prove as false.

## The Alternative Hypothesis (denoted $H_1$ or $H_a$)

- The opposite of the null hypothesis. States that there IS a relationship between variables
- States that any observed effects of variables on one another are "real" (i.e. NOT due to random chance)

# Experimental Design
***
## Within Subject
- This means that all participants are exposed to all parts of the experimental conditions. E.g., if you are desigining an experiment to test two different UIs, then a "within subject" approach means you have all participants use BOTH UIs rather than just one or the other.

The advantage with this is that because each participant is equally exposed, you have less variation in the experiment making it easier to analyze. For example, there will be no worry that any observed differences in the experiment were due to, say, a personality difference between two subjects rather than strictly a UI difference. This also means less participants are required generally speaking and you can obtain the same "statistical power" as you have essentially doubled your participant count for each experimental group.

The cons is that there are "carryover" effects. That is, a participants performance in one condition may effect their performance in another. E.g., a participant already prefers UI B over A and that influences their motivation on using A properly, which in turn affects the results unfairly. Or perhaps the participant is very tired after going through the first round of experimentation and performs badly on the others.
## Between Subject
- Opposite of above. Each participant only experiences ONE of the experimental conditions. E.g., if comparing two UIs, participants would be split where each group tries one UI and not the other.


The benefits and drawbacks are just the opposite of the within subject.
- More participants required to achieve same statistical power
- No carryover effects on other experiments
	- Less fatiguing for the participants
- Can be harder to analyze given that there is now more variability

## A/B Testing

A/B testing is very simple. You have two things, thing A and thing B, and you want to know which one performs "better". A/B testing is normally used when testing different UI designs. Here is the process using that as an example:

- We have two UI designs, A and B. Maybe the only difference between them is the placement of a "Buy" button, and we want to see which button placement results in more people buying stuff from our site.
- For any person that visits our site, we randomly give them either UI A or UI B from now on.
- We start collecting results, keeping track of who buys from the site, and which UI they were given.
- At the end, we round up the results and check which one performed better.

Pretty simple. Once you determine which one is better, you use that UI from now on. There are some things to be wary of, though:

**Sampling bias**: You have to make sure that your sample isn't biased. It is important you do random assignment. For example, if you choose to show UI A to one specific group in some region, and then UI B to another specific group in another region, you're introducing a potential bias in your results. It may be the case that the people in region A have a much better economical situation and hence are more likely to buy something regardless of the UI design they're presented with. To mitigate such biases, you assign people at complete random.

**Insufficient sample size**: Remember that in statistics, its often infeasible to perform analysis on the entire population. So instead you only perform an analysis on a sample. You have to make sure that the sample size is big enough to be representative of the entire population. If only 400 people visit your site, and hence 200 people are presented UI A and UI B, this might not be enough data to make a statistical claim on everyone who uses the internet (those are the people who are able to access your site — those who can browse the web). You can definitely make a statistical claim with a small sample size, but you must acknowledge that it is a limitation in the interpretation of your conclusion and that it may be insufficient evidence. The bigger your sample size, the more confident you can be that the differences you observe aren't simply due to random chance.
- E.g., if you flip a coin 100 times, its possible that you are very lucky and you get heads 70 times and tails 30 times. Does this mean the coin is rigged? Maybe it is, but it could also be random chance (you can't really know which one from flipping the coin alone). If you do it 100, 1,000, 10,000 times, you'll notice that the results (if the coin is in fact not rigged) begin to converge to 50/50.

After you perform your A/B test, and ensured that you have eliminated sampling bias and have a sufficient sample size, then you can start getting into some statistical analysis in an attempt to prove that any differences you observed betwen A and B are "real" and not simply due to random chance. This process is detailed in the section below.

# On Statistics
***
### The t-test
If there are two groups and you wanna tell if there is a statistically significant difference between their means, you can use the t-test. There are two types of tests:

- Independent samples t-test compares the means of two independent groups
	- E.g. test scores between two separate classes
- Paired samples t-test compares the means of two related groups
	- E.g. test scores of the same class before and after some intervention (e.g. new teaching method)

We will go into more detail of the two types above later on.

For **independent** t-tests, the equation is:

$$\LARGE t = \frac{\bar{X_1} - \bar{X_2}}{\sqrt{\frac{s_1^2}{N_1} + \frac{s_2^2}{N_2}}} $$

Where:

- $\large \bar{X}_1$ and $\large \bar{X}_2$ are the means of the two groups
- $\large s_1^2$ and $\large s_2^2$ are the variances of the two groups
- $\large n_1$ and $\large n_2$ are the sample sizes of the two groups

Now what does this actually mean? Let's take a different perspective of the formula:

$$\LARGE t = \frac{\text{difference between means of group}}{\text{variability of groups}}$$

Let's say that the difference between the means of two groups is massive. Does that mean there is a statistically significant difference? It might be tempting to say yes. But take a look at the following:

![[Pasted image 20241022164315.png | 500]]

![[Pasted image 20241022164259.png | 500]]

![[Pasted image 20241022164326.png | 500]]

The difference between the means of all three groups are the exact same, but if I were to show you all three graphs — you'd come to a different conclusion on whether or not there was a statistically significant difference. The first graph has very little spread — variability — within the groups. That means that the groups hardly overlap. So, if you were to take a sample from any of these groups, it is very, *very* unlikely that it could've come from either one.

Contrast that with the last graph, and you can see that even though the difference between the means is the exact same as the first, if you took a random sample from either one, it is far more likely that the sample you got could've come from either red or blue. In this case, perhaps the differences between the groups aren't statistically significant.

Now lets think of what this means in terms of our t-value:

- Lets say we fix our numerator, kinda like we did in the graphs above, and simply increase the variation of the data.
	- If the variance in the data increases (denominator), then our t-value will decrease.
	- Remember that increasing the variance means that the distributions are more likely to overlap, so that any random sample that we obtain is more likely to be from either the first or second group.
	- Therefore, the lower the t-value, the more likely it is that any differences we observed were just due to random chance (since it was more likely that a sample we obtained could've been from either group)
	- And conversely, the higher the t-value, the more likely it is that any differences we observed were *not* due to random chance and that something else might have been at play (since it was less likely that a sample we obtained was from either group, i.e., it was most likely just from one or the other due to the small overlap).

Takeaway?
- Higher t-value = something is *probably* up ... 
- Lower t-value = *probably* just a coincidence.

Of course, this is statistics. If we get a large t-value, it doesn't necessarily mean that something MUST be going on, but just that its more *likely* something is going on (same logic for a lower t-value). Later on we will discuss at what point you should come to a conclusion (how big/small does the t-value have to be for you to go "this is sus"?)

## One-sample, two-sample, and paired-sample t-test

### One-sample t-test

A one-sample t-test is used when you want to compare the a sample mean to a known/hypothesised population mean. You might think this is weird, as if you already know the population mean, why would you care to sample a part of the population again to find out the sample mean? It feels redundant.

Remember that in an entire population you can still have lots of variability. For example, the average height of a citizen in a country is a useful thing to know. Within this population of a country, you'll have different groups of people, e.g., students, old people, young people, working-class people, babies, etc.

Suppose you want to compare the mean heights of everyone in your school to the national average. This is where you'd use a one-sample t-test. The sample (students of the school) is a subset the population you want to compare to (the rest of the nation).

The formula for the t-value of a one-sample t-test is:

$$\LARGE t = \frac{\bar{X} - \mu}{\frac{S}{\sqrt{n}}}$$

Where:

- $\large \bar{X}$ is the sample mean
- $\large \mu$ is the hypothesised/known population mean
- $\large S$ is the sample standard deviation
- $\large n$ is the sample size

## Two-sample t-test (A.K.A. an independent t-test)

If you have two unrelated groups and want to compare the difference in their means. Independent means the groups must be unrelated to each other, e.g., mean test scores between **different** classes, mean heights between **different schools**. If you have a classroom and wanted to compare mean test scores between one half and the other half, this is still independent as there isn't any overlap of participants between one half and the other.

As mentioned before, the formula for the t-value of an independent t-test is:

$$\LARGE t = \frac{\bar{X_1} - \bar{X_2}}{\sqrt{\frac{s_1^2}{N_1} + \frac{s_2^2}{N_2}}} $$
Where:

- $\large \bar{X}_1$ and $\large \bar{X}_2$ are the means of the two groups
- $\large s_1^2$ and $\large s_2^2$ are the variances of the two groups
- $\large n_1$ and $\large n_2$ are the sample sizes of the two groups
## Paired-sample t-test

This is when you want to find the difference between related groups/the same group after some intervention, meaning there is an overlap of participants/data points. For example, if you wanted to know the mean difference in test scores of the same group of students before and after a training program.

The formula for the t-value of a paired-sample t-test is:

$$\LARGE t = \frac{\bar{X_d} - \mu_0}{\frac{s_d}{\sqrt{n}}}$$
Where:

- $\large \bar{X}_d$ is the mean difference between paired observations
- $\large \mu_0$ is the hypothesized mean difference (often 0)
- $\large s_d$ is the standard deviation of the differences
- $\large n$ is the number of pairs

## One-tailed and two-tailed t-test

A two-tailed t-test is only concerned with whether or not there is a statistically significat difference between two means, without caring about the direction, i.e., higher or lower. A one-tailed t-test will tell you if there is a statistically significant difference in a particular direction, either higher or lower. You don't really need to know more than that for this course.

## T-test: Closing notes

Once you've calculated a t-value depending on what you're doing, you will then check if it exceeds some "critical value". If it does, you can say that the results were probably not due to random chance and that something else may be at play, and vice versa. Normally this is done with some sort of table shown below:

![[Pasted image 20241022215323.png]]

On the left is the degrees of freedom (talked about later), and the corresponding critical t-values for either a one or two-tailed t-test for various $\alpha$ values. If the t-value you obtain is greater than the one you selected, then there is a statistically significant difference.

For example, if your particular sample has 20 degrees of freedom, and you're doing a two-tailed t-test with a $\alpha$ value (known as the "significance level") of 0.05 (meaning that you're willing to accept a 5% risk of concluding there is a statistically difference when in fact there is none coz remember this is statistics after all), then your critical t-value will be 2.068.

Talking more about this $\alpha$ value, it is nothing more than an inverse of a confidence level. With these t-tests there is always a possibility of incorrectly rejecting the null hypothesis. Usually a significance level of 0.05 is chosen as it offers a good balance between high confidence when rejecting the null hypothesis without being too strict. Significance levels can be as low as 0.01 or as high as 0.1 depending on the nature of the statistical analysis you are doing. Sometimes you may want to be "almost certain" that your rejection of the null hypothesis is #factual.


## Degrees of freedom
Degrees of freedom is how many points of data in your dataset are free to change without affecting the value of any metrics used to analyze that data.

For example, one way we analyze a dataset is by using an average. Averages are useful!

Take the following numbers as an example:

1,2,3,4,5

The average of these numbers is 15/5 = 3

So the average HAS to be three. That's simply a mathematical fact.

So, then, if the average HAS to be three, then how many numbers are free to change to ensure this fact is "upheld"?

You might say none, which is valid, as the numbers have already been established.

You might say say all of them, because you can always tweak the numbers however you want to and ensure the average remains 3. E.g., by adding 1 to one number and subtracting 1 from another:

0,2,3,4,6

Here, we've changed 1 to 0 and 5 to 6. The average is still 3. 

But now ask yourself — if you were given the average of '3' with five numbers, and you had to choose numbers that make up the average, how many free choices do you have? Only four choices! No matter which four numbers you initially choose, the fifth number isn't free — its value is predetermined.

If you chose the first four numbers as "0", then you have no choice but to make the fifth number 15. There is no other number that would give you an average of three.

Thus, in this dataset, there is four degrees of freedom (DOF.)

The equation for an independent dataset is $d_f = n_1 - 1 + n_2 = 1$ where $d_f$ is the degrees of freedom, and $n_1$ and $n_2$ are the sample sizes of each dataset.

The equation for related or pared data is simply $d_f = n - 1$ where $n$ is the size of the dataset.

## ANOVA

***Keep in mind for later (you don't need to understand this right now): One-Way and Two-Way ANOVA are generally only used for between-subject experiments***

***And keep this in mind for now (and always — you have to understand this right now): the independent variables in ANOVA always have to be categorical/discrete. They cannot be continuous. The dependent variable, however, definitely can be continuous***

ANOVA is "Analysis of Variance,"and compares the variance of data. It's another way to compare the means between groups of data. While the t-test can help us compare the statistical significance of the difference in mean between two groups, ANOVA can do it for more than two groups.

Again, just like the t-test, the purpose of ANOVA is to see if there is a *statistically significant difference* between different groups. 

ANOVA assumes:
- Independence of observations (that is, each data point is independent from one another)
- Each groups dependent variable is normally distributed
- The variance of each group is homogenous
- There are no significant outliers

In the t-test we have a "t" value, and in ANOVA we have an "F" value. The formula for F (called the "F" statistic) is:
$$F = \frac{MST}{MSE}$$
Where $MST$ is the mean square between groups, $MSE$ is the mean square *within* groups. I'll show the formula below, but there is absolutely zero need to memorise this. We will go into a more intuitive explanation on whats happening slightly after (you just need to know approximately how it works and why, no need to memorise formulas).

Where:
$$\LARGE MST = \frac{\sum_{i=1}^{k}(T_i^2/n_i)-G^2/n}{k-1}$$
And 
$$\LARGE MSE = \frac{\sum_{i=1}^{k}\sum_{j=1}^{n_i}Y_{ij}^2 - \sum_{i=1}^{k}(T_i^2 / n_i)}{n - k}$$

Where:

- $Y_{ij}$ is an observation, representing a data point for the $i$th group and $j$th individual.
- $T_i$ is the sum of all data points in group $i$
- $n_i$ is the number of data points in group $i$
- $n$ is the total number of observations across all groups 
	- $n = \sum_{i=1}^{k}n_i$
- $k$ is the number of groups.

Just like the t-value, the higher the F-value then the more likely it is that there is a significant statistical difference between the groups means.

Just like we did for the t-test, lets gain an intuition into how and why it works by taking a different perspective of the formula:

$$\LARGE F = \frac{\text{Variation between group means}}{\text{Variation within each group}} = \frac{\text{MST}}{\text{MSE}}$$

The idea behind why this works is similar to the t-test. Let's fix the numerator again, so the variation between group means is static. If the variation *within* each group goes up, our F value will decrease. Because the variation within each group went up, then each sample is far more variable/spread out, and so any observation we make is more likely to be from any of the groups rather than just one of them (see the t-test explanations above, the one where I show multiple graphs).

If either the t-value or F-value is greater than the critical value at a chosen significance level (commonly 5% or 0.05, which corresponds to a 95% confidence level), then you can reject the null hypothesis. This indicates that there is statistically significant evidence to suggest a relationship between the independent variable and the dependent variable(s) that is unlikely to be due to random chance. However, this does not necessarily mean the relationship is direct or causal.

### One-Way ANOVA

One-way ANOVA is the simplest one. A one-way ANOVA means we are seeing if there is any statistically significant difference between *three or more* groups, where there is *one* independent variable. That is, we are only concerned with how one variable (the independent one) would affect another (the dependent variable).

An example of something that would be appropriate for one-way ANOVA would be seeing whether or not there is a difference in reaction times for performing some task after drinking three kinds of beverages: water, orange juice, or coffee. Our independent variable would be the type of drink, and our dependent variable the reaction time. Since we are also testing three or more groups, we would use a one-way ANOVA.

If we were only comparing between two drinks, we would just use a t-test.

### Two-Way ANOVA

Two-Way ANOVA is basically just One-Way ANOVA but with the addition of one more independent variable. Taking the example from earlier, maybe you want to see if there is a difference in reaction times for performing a specific task after drinking one of three different beverages (water, orange juice, and coffee), during the morning or night time.

We have suddenly introduced a new variable  the time of day. We can use a two-way ANOVA to see whether or not the choice of beverage had an effect, time had an effect, or if there was some interaction between the two (maybe both beverage and time in combination had some sort of effect, e.g., perhaps we discover that coffee is more effective during the morning).

It's important to note that while the only difference on paper is the addition of an extra independent variable, two-way ANOVA is still quite different. Two-way ANOVA, again, will also:

- Tell us if either independent variable by itself has an effect
- Tell us if the independent variables have an effect *together* through interaction with one another

Under the hood mathematically, two-way ANOVA also works differently, but you don't need to worry about that for this course.
### Factorial ANOVA

Factorial ANOVA you can think of as just a generalisation of one or two-way ANOVA, where we consider $\large n$ number of independent variables. Maybe you want to consider the effect of temperature, humidity, elevation, and average $O_2$ concentration the blood oxygen levels of the human body. You now have four independent variables, so you'd use factorial ANOVA. Remember that since independent variables have to be categorical/discrete, if you were to choose these as independent variables, then you can't have them be continuous values. It would have to be something like:

- Temperature (low, medium, or high)
- Elevation (below sea level, at sea level, above sea level or high above sea level)
- Humidity (>20%, 20-40%, 40-60%, 60-80%, or 80-100%)
- Average $O_2$ concentration (>20%, 20-40%, 40-60%, 60-80%, or 80-100%)

### Repeated Measures ANOVA

Repeated Measures ANOVA is used when you collect multiple measurements from the same participants over time or across different conditions (within-subjects design). Unlike between-subjects designs where each participant experiences only one condition, within-subjects designs have participants experience all conditions of the experiment.

Common applications include:

- Measuring changes over time (e.g., tracking patient recovery at 1 month, 3 months, and 6 months)
- Testing performance under different conditions (e.g., same participants completing tasks under no caffeine, low caffeine, and high caffeine conditions)
- Evaluating learning effects (e.g., measuring student performance at multiple points during a semester)

Repeated Measures ANOVA can be:

- Simple (one within-subjects independent variable)
- Factorial (multiple within-subjects independent variable)
- Mixed (combination of within-subjects and between-subjects independent variables)

This design is particularly useful when you want to control for individual variability and when it's practical and ethical to test the same participants multiple times.
### Split-Plot ANOVA

Cbf. Looks like they don't go into it. If they ask me to do a split-plot ANOVA in the exam, UoA will be no more.

