---
aliases:
  - neural networks
---
A neural network is nothing more than layers of “[[neurons]]” (or “nodes"), connected to one another. Each [[The Neuron|neuron]] has a value associated with it, and these neurons are connected to another set of neurons (called a “layer”), with each connection having a weighted value to it.

![[Pasted image 20240610015624.png | 700]]

Depending on the inputs given, and the weights of each of the lines that connect the different nodes, each successive node in the hidden layers will obtain their values (how this happens we will discuss shortly). When the first layer of nodes each get their own values, the next values of the nodes can be calculated with their weights. This keeps happening until we get to the very end, where the outputs will have their own values and hence give us a determination of whatever the machine was trying to do.
  

How do we determine the value of these weights? This is the great thing about machine learning - we don’t need to know the value of the weights. We simply train the neural network to obtain optimal values of weights that will be obtained from our dataset that we will use to train the neural network. The more data we give to the model, the better. This means initially we can assign random values to all of the weights if we wanted to, and over time the weights will change as we train the model.
  

We also must ask ourselves how we are going to tell the neural network to adjust its values.  Suppose it gets the wrong answer – then what? How does it know what weights to change, and by how much? This is where the “loss function” and “optimizer” come into play, the former also known as an “objective function” or “cost function”. The loss function will take the predictions of the neural network and then compare them to what the output values should be and quantify this discrepancy via a “distance score”, and is a reflection of the neural networks performance of a specific data point with the weights that it currently has. It is then the job of the optimizer to adjust the weights such that the discrepancy between the desired result and the actual result is minimized. The algorithm used for this optimization is called the “[[Backpropagation]] algorithm”.

![[Pasted image 20240610020138.png | 700]]

While it may be tempting to spam machine learning at any problem that comes your way, it is important to be mindful of its limitations. Machine learning requires very large datasets, sometimes on the order of millions of data points to learn accurately (of course this could be as little as hundreds depending on the application). Suppose all you wanted to do was automatically distinguish cauliflower from broccoli so that a robot could separate them at a farming facility, could you solve this with machine learning? Of course, but a much better solution is to simply check – is the image of this vegetable white-ish? Then it's a cauliflower, otherwise broccoli! A simple one-line if statement in any programming language could easily solve this problem.

Machine learning excels when predictions about certain datasets have very deep complex patterns that cannot be laid down as simple rules. Take the cauliflower and broccoli example - there is a simple rule we can leverage that will surely distinguish the two, being their colors. However, what if we wanted to distinguish cats from dogs? Paintings from pictures? Take the former - there are so many parameters to take into account, such as the length of the snout, distance between the eyes, length of the tail, shape of the ears, color of the fur, etc. There isn’t a simple set of rules we can use to distinguish the two, and hence machine learning would be much better suited to this scenario.


In general, it’s good to apply machine learning to applications where:

- There is an absence of human expertise (e.g. Martian navigation. Nobody has been there (yet)!)
    
- Certain things are intuitive but cannot be explicitly “explained” in a clear and articulate way (e.g. computer vision - how do we distinguish objects from their background?)
    
- Solutions constantly change/evolve over time
    
- An application is extremely specific/specialized
    
- Handling extremely large datasets where patterns/structures are impossible to see by us humans


### Next: [[Decision Boundaries & The Problem of Generalization]]


## Detailed Overview of Neural Networks
^b73907

// TODO


### Next: [[Support Vector Machines]]