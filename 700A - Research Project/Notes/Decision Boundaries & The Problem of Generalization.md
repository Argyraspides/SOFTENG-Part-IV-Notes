---
aliases:
  - decision boundaries
  - decision boundary
  - problem of generalization
  - The Problem of Generalization
---
There is no doubt that data within the real world in the specific context of classification can sometimes overlap given a finite amount of features. In the case example drawn from the course material, this was distinguishing sea bass from salmon based on the lightness of their scales and the length of the fish itself. While overall these data points are segregated into distinct regions, there are some sea bass that show up within the salmon region and vice versa. 

This tells us that relying on a single quality/feature of the data tends to yield very bad results if we wish to classify things as accurately as possible. We must use as many features as we can that are different to one another as well as relevant. E.g. for the former, if one of our features to separate the sea bass from salmon was their eye color, then we should not have “eye color 1” and “eye color 2” as fish have two eyes, but merely “eye color” (let us assume fish don’t have heterochromia). For the latter, we wouldn’t want to include a feature such as “has a mouth” - both sea bass and salmon have a mouth, and would be a completely irrelevant factor in determining species in this case.

Not only must the features be different to one another as well as relevant, they also should not be redundant. Another example for the sea bass and salmon would be if we took one of our features to be, say, the circumference of the fish. In such a scenario, it might be silly to also include the width of the fish - as the circumference and width of a fish probably correlate with one another perfectly, providing no additional meaningful information to the model. 

There are a few decision boundaries we can take, and precisely which one we choose is a problem in and of itself. We neither wish to over-fit the model or under-fit the model. 

Over-fitting we can essentially think of as only considering the current set of data - i.e. we aren’t able to generalize the decision boundary to a novel dataset, and under-fitting the data means we haven’t even begun to generalize the training data in the first place. How exactly we choose a decision boundary is discussed in the “polynomial curve fitting” section.

Below is an example of a decision boundary if we take the classification feature as the lightness of the scales of both fish species.

![[Pasted image 20240610021944.png | 700]]

Below is an example of a model with an overfitted decision line. While the separation may be perfect, we have essentially made a “custom-tailored” line to only the training data. We haven’t fully captured the underlying features in a way that can be applied to any novel dataset, as mentioned prior in these notes.

![[Pasted image 20240610022009.png | 700]]

Think for a moment about shoes. Do people who share the same shoe size have exactly the same foot? Of course not. Why is it, then, that people who share exactly the same shoe size can wear the same shoes? Because the shoes made by the manufacturer have a design that is generalized to people with the approximate foot size. You may argue that not all shoes which have the same shoe size would be considered comfortable by everyone who also has that size – but this is not the point. The shoes fit nonetheless. We don’t want a specialized shoe for one individual that has the perfect spacing, contours, space, volume, etc for their specific foot. We want one shoe that can fit anyone's foot.

## The Problem with Model Selection
Consider above when we decided to include more features to distinguish salmon from sea bass. Would that be it? Would that model be the final frontier of all sea-bass vs salmon classifiers? How do we know that our model is “good”? Are we forced to simply trial and error with various different features, combination of features, data sizes, etc? Even if we did that, and found the best model that we could, is there any systematic way to determine if we should change our model? 

This is another fundamental issue.

**Leveraging Prior Knowledge**
Always leverage prior knowledge, of course. If you already know what distinguishes things - add them to the possible feature list!

**Handling Missing Data**
Sometimes we won’t be able to quantify a particular value of a particular feature data point. Going back to our fish example, perhaps 10% of fish in the conveyor belt when being scanned for their scale lightness simply cannot be scanned due to whatever reason (machine error, fish went by too fast, fish was too small, etc). Do we simply discard this data, or do we try and make the most out of what data we have extrapolated from it, and the other data that isn’t missing?

**Segmentation**
Suppose we want to categorize different kinds of flowers. Our dataset would (most likely, and appropriately) be a giant database full of pictures of these flowers. These pictures might have random stuff in the background in addition to the flower - grass, bugs, leaves, stump of a tree, etc. How do we segment this data such that we only focus on what we want? How do we know where a flower “begins” and where a flower “ends”? Some flowers may appear as if they “belong” with the background, making segmentation even harder.

We could also take cursive handwriting character recognition into account - how do we know where one character ends, and where another begins?

**Context**
Context can tell us a lot about a situation. For example, if you see a coat suddenly appear on a hanger of your house, you might conclude that somebody from your household has just arrived home. In this instance, we not only can infer that there is a coat - but that somebody from our household has just arrived home. Consider the exact same scenario, but this time you live alone - something mysterious has just happened! Perhaps somebody is robbing you, an unknown person has entered your home - or you have Alzheimers. The exact same scenario surrounded by a different context can completely change conclusions.

Referring back to our fish example, suppose that 20 fish in a row on the conveyor belt are salmon instead of a normal random pattern. We could say that there is a high chance that the next fish is also salmon. Perhaps a salmon boat has just docked and is releasing all of its catchings. 

The challenge then becomes how exactly we include this information within our model.


**Invariance**
Whether your friend's face is tilted slightly, rotated, on the very edge of your vision, upside-down, or whatever, you will still be able to recognize your friend. As such, we must train our models to be insensitive to invariance. Consider the picture on the right. No matter what orientation the cup is in, you still recognize it as a cup. However the important thing to realize is that the orientation of the cup will never change the features of the cup itself. It is always cylindrical, always has a handle, always has an opening, etc. In the fish example, no matter where the fish is on the conveyor belt - this should have no bearing on what type of fish it is.**

![[Pasted image 20240610022716.png | 500]]

**The Vote (Evidence Pooling)**
So long as we have multiple models and classifiers, why not use all of them at once? It’s like a senate of AI’s! What if the models disagree with one another? How do we deal with this? One way is to simply have them vote, such as in the following diagram

![[Pasted image 20240610032104.png | 700]]

Classifier #1 is 90% sure that the object it has been given belongs to class #1, 8% sure it belongs to class #2, and 2% sure it belongs to class #3. I.e. The model is selecting class 1.

However, all the classifiers completely disagree with classifier #1. In such a case, we might just grab an average of each of the classifiers' decisions and take the highest value of the average. This is no different to how voting works in real life.

### Next: [[Polynomial Curve Fitting]]
