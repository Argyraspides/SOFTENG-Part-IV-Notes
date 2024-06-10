---
aliases:
  - neural networks
  - neural network
---
A neural network is nothing more than layers of “[[The Neuron|neurons]]” (or “nodes"), connected to one another. Each [[The Neuron|neuron]] has a value associated with it, and these neurons are connected to another set of neurons (called a “layer”), with each connection having a weighted value to it.

![[Pasted image 20240610015624.png | 700]]

Depending on the inputs given, and the weights of each of the lines that connect the different nodes, each successive node in the hidden layers will obtain their values (how this happens we will discuss shortly). When the first layer of nodes each get their own values, the next values of the nodes can be calculated with their weights. This keeps happening until we get to the very end, where the outputs will have their own values and hence give us a determination of whatever the machine was trying to say about the inputs.
  

How do we determine the value of these weights? This is the great thing about machine learning - we don’t need to know the value of the weights. We simply give the neural network some training data and it will naturally obtain these optimal weights via the training process. The more data we give to the model, the better (assuming the data is good.) This means that we can initially assign random values to all of the weights if we wanted to, and over time the weights will change as we train the model.
  

We also must ask ourselves how we are going to tell the neural network to adjust its values. Suppose it gets the wrong answer – then what? How does it know what weights to change, and by how much? This is where the “loss function” and “optimizer” come into play, the former also known as an “objective function” or “cost function”. The loss function will take the predictions of the neural network and then compare them to what the output values *should* be and quantify this discrepancy via a “distance score,” and is a reflection of the neural networks performance of a specific data point with the weights that it currently has. It is then the job of the optimizer to adjust the weights such that the discrepancy between the desired result and the actual result is minimized. The algorithm used for this optimization is called the “[[Backpropagation]] algorithm”.

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

Let us take a deeper dive into how a neural network works. Consider the image below:

![[Pasted image 20240610185100.png]]


We have some input $\large x$ with $\large w_{h1}$ and $\large w_{h2}$ as the weights of the inputs *edge*. The edges are just the lines connecting a node/[[The Neuron|neuron]] to the next set of nodes/[[The Neuron|neurons]].  

Once we provide the neural network with an input(s), it can then start performing its calculations in a forward direction. We only have one input in this case, $\large x$, with the value of its edges being $\large w_{h1}$ and $\large w_{h2}$. The value that $\large H_1$ ends up receiving is $\large x \cdot w_{h1}$ and the value $\large H_2$ ends up receiving is $\large x \cdot w_{h2}$. 

That's all well and good, but what about $\large O_1$ and $\large O_2$? Both are connected to $\large H_1$ *and* $\large H_2$, so what should happen? 

Anything can happen! You may add the inputs together, multiply them, divide them -- or have some custom function of your own. It entirely depends on the use case and what you're trying to accomplish. Lets say in this case we decide we just want to add them together. In this case, the value of $\large O_1$ would therefore be $\large H_1 \cdot W_{O1} + H_2 \cdot W_{O2}$.

Suppose the value of $\large O_1$ ends up being $\large 25$ or something. Then what? What does this mean? 

It could mean absolutely anything, and it's up to you, the creator of the neural network, to decide what it means. Perhaps instead of simply multiplying and adding to obtain the value of the next [[The Neuron|neuron]], you have some very cool function that does some weird shit and the values of $\large O_1$ and $\large O_2$ are only ever going to be between $\large 0$ and $\large 1$. Suppose in this particular case, that this neural network you created tries to predict whether an image (the input $\large x$ -- and don't worry about how the heck the variable $\large x$ could represent a PNG file or some shit, just suppose it does and think of this at a high level) is a dog or a cat. Maybe you decided $\large O_1$ represents the probability that the image is of a cat, and $\large O_2$ represents the probability that the image is of a dog. If $\large O_1 = 0.23$ and $\large O_2 = 0.67$ or something, then you can say "the neural network thinks that the image is most likely of a dog." 

This is just ONE way to design such a neural network. Perhaps instead of this probability stuff you could use a threshold -- if the value of either $\large O_1$ or $\large O_2$ is above a certain amount, then it will output a $\large 1$, and otherwise a $\large 0$. If $\large O_2 = 1$ then this means the neural network "thinks" that the image is of a dog, and if its $\large 0$ thinks its NOT a dog (this doesn't necessarily mean it's a cat -- it could be neither!) 

It is also completely up to you whether or not you even want a [[The Neuron|neuron]] to "fire" or continue propagating in the first place. Maybe you set a rule in place where if ANY [[The Neuron|neuron]] doesn't exceed some threshold value, it just never continues on and the next value is 0 or something. Idk, its completely in your hands lol.

### Activation Functions
An activation function is just a fancy word for a function that takes in an input and then outputs $\large 1$ or $\large 0$ depending on whether the input was "strong" enough. In the case of neural networks these are just used to make a decision on whether a [[The Neuron|neuron]] should fire or not, i.e. should continue propagating its output to the next layers or not.

There are many activation functions that are commonly used. Here are a few:

#### Step Function:

![[Pasted image 20240610193032.png]]

This is probably the simplest one. If the value is below a certain threshold the output will be $\large 0$, otherwise it will be $\large 1$. While this simplicity makes things easier to implement, its quite limiting as there is no gradient. Conclusions will be strictly "YES" or "NO," and there's no room for ambiguity/blending. For example if you, a human, were presented with a picture of a liger (a mix between a lion and tiger):

![[Pasted image 20240610193623.png | 700]]

And you've never seen one before -- you'd immediately say it looks like *both* a lion and tiger. In your ignorance of the existence of ligers, you might try and draw a conclusion about the picture above, e.g. "maybe this tiger or lion was born with a cool birth defect," or "That's photoshopped, bro," but the point is that you can clearly *see* it is a mix between the two, regardless of your final conclusion. If your brain was a step function, you'd probably be saying "Nah that's definitely a tiger, it got stripes n shit."

Step functions are pretty good for neural networks that only care about binary classification (e.g. you just want to know if something is a tiger or not, and no more.) In the above case, it's pretty clear that its not quite a tiger, and if the question was specifically "Is this a tiger or not?," the output would straight up be $\large 0$. 
#### Linear Activation Function:
Because the lack of gradients can be a problem with step function, a linear activation function can be used instead. See below: 

![[Pasted image 20240610194226.png]]

You could represent the above line with $\large y = mx + c$ or something, where $\large x$, of course, would be your input. This is great as we now have a gradient and can represent some sort of blending instead of simply having $\large 1$ or $\large 0$. While this is nice, there's still a small problem -- the gradient itself is constant. What if our conclusion rocks back and forth a lot depending on the value of $\large x$? Maybe if the value of $\large x$ was very small then the output should be $\large A$, if its a moderate value then $\large B$, but if its really big then it should be $\large A$ again? This linear activation function can't really represent such a scenario (this could be something like, if an adult weighs 2kg then they're probably not doing so well, if they are 75kg then they are probably doing okay, and if they are 9999kg then they're probably not doing so well.)

![[Pasted image 20240610195329.png ]]

#### Sigmoid Activation Function
A "sigmoid" function is just a function that has the features of a sigmoid curve. This is what a sigmoid curve looks like:

![[Pasted image 20240610195502.png | 500]]

As shown in the image, a sigmoid function can be expressed as:
$$ \LARGE f(x) = \frac{1}{1+e^{-x}} $$
This is probably the most common function used in neural networks. The reason being it has a nice balance of linear and non-linear behavior. Notice how the sigmoid function looks like a mix between the step function and linear function? That's because IT IS.

Below is an example of another type of sigmoid function, known as the "*logistic function*":
$$ \LARGE f(x) = \frac{1}{1 + e^{-ax}}$$
Where $\large a$ is the "slope parameter" of the sigmoid function. Some examples of $\large a$ at different values:

![[Pasted image 20240610200139.png]]
![[Pasted image 20240610200201.png]]
![[Pasted image 20240610200210.png]]

You can see the higher the value of $\large a$, the steeper the sigmoid function gets. As $\large a \rightarrow \inf$, it basically just becomes a step function. The only difference is that the moment you cross a certain threshold with a step function you immediately jump from $\large 0$ to $\large 1$ or vice versa, whereas with a sigmoid function there is no such threshold -- you'll obtain values in between, still.

A neat property of the sigmoid function is the fact that you can *differentiate it*. You cannot do this with the step function. The sigmoid function basically gives you the best of both worlds. Being able to differentiate a function is very valuable in neural network training (we will discuss this later.)

Of course, the sigmoid function isn't perfect. Notice how as the $\large x$ value increases or decreases, the gradient rapidly drops. This means that as we keep on increasing our $\large x$ value, our output values don't "respond" as much as they did when $\large x$ was smaller. This leads to something known as the [[vanishing gradient]] problem, which leads to a neural network training incredibly slowly or outright not wanting to learn further. Notice how the sigmoid function also only outputs positive values. This is another limitation.
#### Hyperbolic Tangent Activation Function
To address the problem of the gradient effectively becoming 0 in a sigmoid function, we can use something known as a hyperbolic tangent activation function. It's also known as the 'tanh' function. See below a comparison between the tanh function and sigmoid function:

![[Pasted image 20240610201500.png]]

Notice how this also gives us values that aren't just positive. The tanh function is basically just the sigmoid function with its $\large y$output extended (a range of $\large -1$ to $\large 1$, addressing the "unipolar" problem of the sigmoid function) Below is an image showing the tanh function and its derivative (the derivative for a sigmoid looks basically the same)

![[Pasted image 20240610202132.png|500]]

The tanh function can be mathematically expressed as:

$$ \LARGE tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$ And its derivative as:
$$ \LARGE \frac{d}{dx}tanh(x) = 1-tanh^2(x) $$

![[Pasted image 20240610202620.png]]

![[Pasted image 20240610202719.png]]

There are also other activation functions, known as "softsign," "rectified linear unit," "leaky rectified linear unit," "maxout," "softplus," "swish," and much, much more.


Fundamentally this is how neural networks work. Now answering the question of how $\large x$ could possibly represent an image, or audio, or whatever piece of information, consider the image below:

![[Pasted image 20240610015624.png | 700]]

We can have as many goddamn inputs as we want! Suppose you are using images of cats and dogs to test your neural network at a 1080p resolution. Then each input could represent the RGBA value of a single pixel of an image. Yes, this would mean you have $\large 1920 \cdot 1080 = 2073600$ inputs. This is quite common! Neural networks can be absolutely huge and can take up enormous computing power to use.

Great, this is how to use a neural network. But how do we actually *train* one now? We assumed that the weight values of each edge are perfect, that the neural network has just the right amount of hidden layers and inputs, etc. How do we get to this point? We went over this above at a high level, but how is this done at a lower level?

We must first look at the [[Backpropagation]] algorithm.

### Next: [[Backpropagation]]




### Next: [[Support Vector Machines]]