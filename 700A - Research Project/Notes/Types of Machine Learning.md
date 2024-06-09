Machine learning can either be supervised or unsupervised [1](https://www.seldon.io/supervised-vs-unsupervised-learning-explained) [2](https://www.javatpoint.com/difference-between-supervised-and-unsupervised-learning#:~:text=Supervised%20learning%20algorithms%20are%20trained,does%20not%20take%20any%20feedback.) [3](https://www.ibm.com/cloud/blog/supervised-vs-unsupervised-learning) [4](https://www.youtube.com/watch?v=W01tIRP_Rqs)
  
  **Supervised**: Involves giving a machine labeled datasets. In our pebble example, we have explicitly told the machine what we want our outputs to be: either a black pebble, or a white pebble. Based on this labeling, the machine then attempts to figure out the things that differentiate black and white pebbles. We can then test the machine by giving it images of pebbles that it has never seen before. The key here is that we have provided the machine with the correct answer - its task is to first predict what the pebble is and then adjust its internal parameters (the patterns and structure it has currently learned) based on whether or not it got the right answer.

- **Techniques for supervised learning include:**
	- **Classification**: When the outputs are discrete, such as the pebble example. Another example could be distinguishing different kinds of fruit (e.g. apples, oranges, strawberries, etc)
	- **Regression**: When the outputs are continuous, e.g. predicting the temperature of a room based on a thermal image (the output will be a numeric value, e.g. $25.2^0 C$)



**Unsupervised**: Allowing the machine to figure out the patterns and structure of the sets of data it is given by itself. Using the same pebble example, unsupervised learning would involve simply giving the machine the images and letting it figure out precisely what patterns and structures separate the two types of pebbles. The key here is that we have not labeled any images whatsoever, it is up to the machine to classify them. In this case, we have given the machine an input, but we haven’t told it what the output should be. The machine ideally would eventually “understand” that two different things exist (what we humans would call black and white pebbles) and group them accordingly.

- **Techniques for unsupervised learning include:** 
	- **Clustering**: The machine will attempt to group different “objects” based on similar patterns and structures. On an output graph, we will see clusters of grouped points representing what the machine thinks are different objects.
	- **Association**: The machine will attempt to make associations between different data, and identify relationships between them. An example might be that a machine notices that people who buy bread are also likely to buy butter.


**Reinforcement Learning:**
This is perfectly analogous to how we humans grow up. A large part of our learning comes from being punished/rewarded for certain things, promoting and discouraging certain behaviors.

  

A great example is the famous chess engine - AlphaGo by the company DeepMind. After initially being trained on the game “Go” via supervised learning, which learned to predict future moves from a large database of high-level games, it then moved onto reinforcement learning. This involved what is known as an “agent” which in this case was AlphaGo itself, interacting with an “environment” being the game of Go. Playing games with itself (which is the mode by which it employed reinforcement learning), it was either rewarded or punished for winning and losing respectively. This generated more data from which AlphaGo could learn from, specifically taking the winning game moves as “good, keep doing more of this shit” and the losing ones as “bad, do less of this cunt ur shite and have no friends”.

## Things to Note:
***
When it comes to supervised learning, we must be concerned with five primary things: Algorithm power, scalability, convergence, stability, and the favoring of simplistic solutions. 

- Power: We must ensure that the algorithm is able to handle the complex underlying relationships within the data.
    
- Scalability: We must ensure that the algorithm is able to handle increasing amounts of data as well as their potentially complex, multi-dimensional features whilst maintaining good performance in the areas of computation time, accuracy, memory utilization, etc.
    
- Convergence: We must ensure that our algorithm eventually converges to some acceptable level of accuracy. I.e. that the model doesn’t remain dogshit forever, that it continually improves to a level that is acceptable in a finite amount of time.
    
- Stability: We must ensure that the algorithm doesn’t break down if our data includes lots of variation.
    
- Favoring simplistic solutions: We should always have a simple, generalizable way to classify things rather than an overly complex way (e.g. overfitting).
    

When it comes to supervised learning, we must ensure the following: Determining the optimal number of clusters and avoiding inappropriate representations.

- Optimal cluster count: One use of unsupervised learning is to separate mixed data into their separate groups or “clusters”. If we gave images of bananas, apples, and pears to a model, we expect the cluster count to be three, and nothing else - otherwise the model is stupid as fuck, or at the very least hard to interpret (as some clusters that do not belong with one another will be grouped).

Avoiding inappropriate representations: The whole point of unsupervised learning is to capture underlying patterns and structures in the data. As such, our algorithm should capture meaningful and relevant patterns. This involves having a well-made cost function and choosing the appropriate cluster count.**


### Next: [[Neural Networks]]
