Recall that error functions serve the sole purpose of quantifying the errors in our predictions based on certain parameters, whereby we can reduce these errors to iteratively improve our model. This is all well and good, but consider the following scenario:

![[Pasted image 20240610024650.png | 700]]

Above is just random data with some relationship. We can see that our curve doesn’t fit the data that well. Let’s increase the degree by one:

![[Pasted image 20240610024724.png | 700]]

This is better, but the model doesn’t fully capture the hump and valley at around y=0.9 and y=0.4. Let’s increase the degree by one again:

![[Pasted image 20240610024744.png | 700]]


Out of nowhere, our model becomes over-fit. There is a random spike and dip at 0.05 and 0.15 respectively, and a sudden descent at 0.95. If only we could increase the degree by a fraction …

This is essentially one of the problems that regularization attempts to fix. Instead of a plain error function, we introduce a “penalty” term which attempts to stop coefficients in the error function from becoming too large (these coefficients being ‘w’ in our previous examples).

The simplest regularization penalty takes the form of a squared sum, shown below

$$\LARGE \tilde{E} = \frac{1}{2}\sum_{n=1}^{N} (y(x_n,w) - t_n)^2 + \frac{\lambda}{2}||w||^2$$
$$\LARGE Where \space\space ||w|| \equiv w^Tw = w_0^2 + w_1^2 \space...\space+ w_M^2$$
The coefficient $\large \lambda$ simply tells us how important the penalty sum is (basically it is fine tuning by how much we actually ‘penalize’ our error function coefficients).

Now, with the same examples shown above, if we keep the degree that caused us to overfit and also add the appropriate regularization penalty, we get the following:

![[Pasted image 20240610025400.png | 700]]

Voila! This is far better.

### Next: [[Gradient Descent & Minimization]]