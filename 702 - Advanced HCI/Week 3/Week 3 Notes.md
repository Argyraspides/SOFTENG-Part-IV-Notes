### A/B Testing
- Start off with a hypothesis for which changes might improve a UI for a particular metric (e.g. conversion rate -- how many visitors of the site turn into customers?)

- Then devise a UI which you think will work (e.g. maybe changing a "Buy Now!" button from blue to green)

- You will then compare UI B (the original one, i.e. the control (B stands for "Before")) and UI A (the new one you're testing, or the "After" UI)

- Gather data on the differences (e.g. click-through rate)

- Analyze the data (obviously lol)

- Make a conclusion


### Research Questions & Hypotheses
#### A good research question is:
- **Researchable**: There is actually information out there which allows you to gain more insight into the question. An example of a question that is not researchable is "If we were to take all the breadcrumbs that have fallen off of peoples food in all of human history, how much bread could we make?"
- **Clear**: The question should not be ambiguous, vague, unspecific, etc. The question should be precise with no room for misinterpretation.
- **Answerable**: You're not asking some shit like "what is outside of time and space itself?" We can't investigate that shit bro.
- **Scoped**: The research question isn't too broad. It should be specific and targeted at one thing. 
- **Feasible**: Shouldn't cost 8 trillion dollars and take 923 years.
- **Measurable**: Anything in your research that you use to draw conclusions about the world should be measurable. If they are not measureable then you're basically making shit up when you come up to a conclusion. I.e. the "elements" of your research should be measurable either qualitatively or quantitatively.
- **Novel**: Aims to actually expand our understanding of the world rather than doubling down on shit we already know
- **Reasonably Sophisticated**: Should not be so trivial that you can answer the question with a simple "Yes" or "No" but also not so complex that it's unanswerable. It should be seen that the answer to your question is gonna have a lot of dependencies and nuance.

#### Coming up with a research question:
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

#### On Hypotheses

##### The Null Hypothesis (denoted $H_0$):
- In the context of A/B testing or testing in general (figuring out if one UI is better than another, or whether XYZ has an effect on users or whatever the fuck it is,) the null hypothesis is just that "there is no effect" or "there is no difference." or that there is no relationship between tested variables. E.g., for the example question above on "How do the colors of the 'After' UI design affect task completion times for general internet users compared to the 'Before UI' design?," the null hypothesis would be "There is no difference between UI A or UI B on its affect of user task completion times."
	- States that any observed differences that *do* occur was just by random chance.
	- Generally you're trying to disprove this hypothesis (or rather testing against this hypothesis)

##### The Alternative Hypothesis (denoted $H_1$ or $H_a$)

- The opposite of the null hypothesis. States that there IS a relationship between variables. 
- States that any observed effects of variables on one another are "real" (i.e. NOT due to random chance)

### Experimental Design
#### Within Subject
- This means that all participants are exposed to all parts of the experimental conditions. E.g., if you are desigining an experiment to test two different UIs, then a "within subject" approach means you have all participants use BOTH UIs rather than just one or the other.

The advantage with this is that because each participant is equally exposed, you have less variation in the experiment making it easier to analyze. For example, there will be no worry that any observed differences in the experiment were due to, say, a personality difference between two subjects rather than strictly a UI difference. This also means less participants are required generally speaking and you can obtain the same "statistical power" as you have essentially doubled your participant count for each experimental group.

The cons is that there are "carryover" effects. That is, a participants performance in one condition may effect their performance in another. E.g., a participant already prefers UI B over A and that influences their motivation on using A properly, which in turn affects the results unfairly. Or perhaps the participant is very tired after going through the first round of experimentation and performs badly on the others.
#### Between Subject
- Opposite of above. Each participant only experiences ONE of the experimental conditions. E.g., if comparing two UIs, participants would be split where each group tries one UI and not the other.


The benefits and drawbacks are just the opposite of the within subject.
- More participants required to achieve same statistical power
- No carryover effects on other experiments
	- Less fatiguing for the participants
- Can be harder to analyze given that there is now more variability

### The t-test
If there are two groups and you wanna tell if there is a significant difference between their means, you can use the t-test. There are two types of tests:

- Independent samples t-test compares the means of two independent groups
	- E.g. test scores between two separate classes
- Paired samples t-test compares the means of two related groups
	- E.g. test scores of the same class before and after some intervention (e.g. new teaching method)


For independent t-tests, equation is:

$$\LARGE t = \frac{\bar{X_1} - \bar{X_2}}{\sqrt{\frac{s_1^2}{N_1} + \frac{s_2^2}{N_2}}} $$

Where:

$$X_1 = first \space sample \space mean$$
$$X_2 = second \space sample \space  mean$$
$$s_1 = first \space sample \space standard \space deviation$$
$$s_2 = second \space sample\space standard\space deviation$$
$$N_1 = first \space sample \space size$$
$$N_2 = second \space sample\space size$$

And the equation for the t-test for paired data:

$$\LARGE t = \frac{\Delta X}{\frac{\Delta s}{\sqrt{n}}}$$
Where:
$$\Delta X = Sample\space  mean \space of \space the \space differences$$
$$\Delta s = standard \space deviation \space differences$$
$$n = sample\space size$$

The higher the value for a t-test, the higher the likelihood is that the difference between the means are indeed significant.

Remember that for t-tests, the data is assumed to be normally distributed, that the variances of the two groups are equal (for independent samples t-tests,) that the observations are independent of each other and the dependent variable is continuous.

### Degrees of freedom
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

But now ask yourself -- if you were given the average of '3' with five numbers, and you had to choose numbers that make up the average, how many free choices do you have? Only four choices! No matter which four numbers you initially choose, the fifth number isn't free -- its value is predetermined.

If you chose the first four numbers as "0", then you have no choice but to make the fifth number 15. There is no other number that would give you an average of three.

Thus, in this dataset, there is four degrees of freedom (DOF.)

The equation for an independent dataset is $d_f = n_1 - 1 + n_2 = 1$ where $d_f$ is the degrees of freedom, and $n_1$ and $n_2$ are the sample sizes of each dataset.

The equation for related or pared data is simply $d_f = n - 1$ where $n$ is the size of the dataset.

### ANOVA

ANOVA is "Analysis of Variance,"and compares the variance of data. It's another way to compare the means between groups of data. While the t-test can help us compare the statistical significance of the difference in mean between two groups, ANOVA can do it for more than two groups.

Again, just like the t-test, the purpose of ANOVA is to see if there is a *significant statistical difference* between different groups. 

ANOVA assumes:
- Independence of observations (that is, each data point is independent from one another)
- Each groups dependent variable is normally distributed
- The variance of each group is homogenous
- There are no significant outliers

In the t-test we have a "t" value, and in ANOVA we have an "F" value. The formula for F (called the "F" statistic) is:
$$F = \frac{MST}{MSE}$$
Where $MST$ is the mean square between groups, $MSE$ is the mean square *within* groups. 

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

Just like the t value, the higher the F value then the more likely it is that there is a significant statistical difference between the groups means.


If either the t-value or F-value is greater than the critical value at a chosen significance level (commonly 5% or 0.05, which corresponds to a 95% confidence level), then you can reject the null hypothesis. This indicates that there is statistically significant evidence to suggest a relationship between the independent variable and the dependent variable(s) that is unlikely to be due to random chance. However, this does not necessarily mean the relationship is direct or causal.