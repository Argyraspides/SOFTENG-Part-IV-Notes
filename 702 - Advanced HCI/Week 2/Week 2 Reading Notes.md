### Multimodal Systems
***
A multimodal system in HCI is nothing more than a system that receives and responds to more than one kind of input. An example would be your computer, which receives input from you, the user, through mouse clicks and key presses. That is, there is more than one interface between you and the system. It's as simple as that.

The reason we use multimodal systems is that it can oftentimes be useful to interface with a computer through more than one means. For example, using a computer (nowadays) with just a keyboard would be an absolute nightmare. You also pair a keyboard with a mouse. This increases the *bandwidth* of information you can relay to the computer at any given time. You can use your keyboard in conjunction with your mouse to use the computer faster than you otherwise would have.

Multimodal systems also offer a form of **redundancy**. If your keyboard breaks, you can probably still use your mouse to operate a computer. If you only had one and it broke, then you're probably fucked. For more advanced mutlimodal systems, it's also possible to **prevent errors** by looking at all inputs and checking if any of them "disagree" or are inconsistent with one another and then making a decision based upon that (for example if one communication channel was corrupted, then the system could detect that and simply ignore it or something.)

If it wasn't obvious enough, a multimodal system also gives the user a **choice** on which mode of communication to use. In order to type, you might sometimes wish to use the voice-to-text feature on your phone instead of typing as an example.

From all of this, then, a multimodal interface makes the interaction between computer and man more **robust**.

#### Fusion & Fission in Multimodal Systems
Fusion is the process of combining multiple streams of data into one for interpretation. In a multimodal system, this might mean something like combining both visual and audio data streams to interpret, for example, speech.

Once this data is processed, fission then occurs to convey the computed information back to the user in multiple streams of data. This prevents information overload by distributing information across different channels or modailities for the user to interpret.

![[Pasted image 20240729011609.png]]

An excerpt from *Multimodal Fusion, Fission and Virtual Reality Simulation for an Ambient Robotic Intelligence Omar Adjali, Manolo Dulva Hina, Sebastien Dourlens, Amar Ramdane-Cherif LISV Laboratory, Université de Versailles St-Quentin-en-Yvelines, 10-12 avenue de l’Europe, 78140 Velizy, France*:

***"... Multimodal fusion covers low-level integration (signal information) up to high-level storage of its meaning (semantic information) by composing and correlating data coming from multiple sources (sensors, interaction context, software services or web services). Hence, information fusion may be a function, an algorithm, or a method/procedure of combining data.***

***Multimodal fission, on the other hand, is the process of physically acting or reacting to the data just provided. Following the fusion process, the fission will split the semantic result into action/s to be sent to the actuators. While the result of the fusion process provides the action to be implemented, the fission process splits the action into smaller details sent to the actuators to carry out the action or event for implementation."***

The above just means that fusion is the process of "composing" and "correlating" data from "multiple sensors" (so the data isn't necessarily combined in the sense that it is merged together, but rather that all inputs are taken into account relative to one another.)

After fusion takes place and something is computed (e.g. once visual and audio information is "fused" and interpreted,) fission will take place where, depending on the result of the fusion, spit back out information where the user can then take action. 

An example of this might be a smart robot that cleans up the room for a user. The user might tell the robot "Hey, clean up the mess of Legos over there" while pointing at the pile of Legos. The robot will combine both the audio (what the user said) and video (where the user pointed) to interpret the message, and then the robot will perform "fission" based on this action by carrying out multiple instructions. The robot may first say "Got it, cleaning up the Legos," before moving to the cleanup site and begin putting stuff away. In some way, fission should convey to the user what is going on (as per the diagram abov.e) In the robots case, this is the act of physically going to the cleanup site and putting stuff away.

#### Modality One: The Human Body
Remember that modality just means a "mode" of input or communication. One of these, of course, is vision. In the case of HCI, one way a computer can interact with us is through computer vision (where a computer interprets data of the world around it through visual means.) As an example, when developing video games, it might be useful to create character models and animations through examining human bodily motion. One way to achieve this is through marker-based tracking:

![[Pasted image 20240729014205.png]]

A bunch of small devices that knew their locations relative to one another (or sometimes markers are simply brightly colored balls on a black backdrop to make them easy to detect in video software where afterwards, the positions of the balls can be triangulated based on multiple camera angles and then easily loaded into some sort of 3D model.) Indeed, this is an example of human computer interaction. Making a character model from "scratch" with a dual-modality system (say, computer and keyboard) would take far, far longer to do. This special suit allows us to interface with a computer to transfer information about human bodily pose much faster. The problems with this approach should be quite obvious -- it requires a special suit, and sometimes sophisticated equipment. 

Markerless tracking is also used, which is essentially just a neural network model specifically trained on datasets to segment different parts of the human body so that an outline of the pose the individual is making can be made:

![[Pasted image 20240729015318.png]]

##### The Three Issues in Motion Analysis:

There are so many issues/problems to be encountered in motion analysis so idk why the lecturer just referenced these three out of some random ass paper as if they are the only ones to be aware of but here it goes:

***"There are three important issues in articulated motion analysis: representation (joint angles or motion of all the sub-parts), computational paradigms (deterministic or probabilistic), and computation reduction."***

1. **"Joint angles or the motion of all the subparts"/"representation"** just refers to the complexity that arises when we want to be super accurate about the motion of subparts of a system. In the case of pose detection, it might be easy to get some outline for how a person is standing (e.g. how their legs are positioned, how straight their back is, etc) but it is quite a bit more difficult to, for example, accurately guage the exact angle of their wrist, or by how much it is rotated. Same goes for how twisted their ankles are, or by how much their toes are curling.
2. **"Computational Paradigms"** refers to the choice one has to make between deterministic and probabilistic models to predict motion in the future. In the case of predicting the motion of a pendulum, deterministic might be the way to go, but for a human dancer -- probabalistic is the way to go (or perhaps even a mix of both depending on the specific circumstance.)
3. **"Computational Reduction"** refers to the choice one has to make on how to represent the data or the choice on what algorithms and whatnot to use to make the computation of motion analysis more efficient. The pose of a human being is captured in 3D, but perhaps it is possible to flatten this to a 2D representation to perform calculations without any loss of accuracy whilst also making the process of computation faster. Or perhaps theres some random ass algorithm that works better for some specific use case.

Some more things to consider in motion analysis are some common engineering concerns:
- What is the desired accuracy?
- What is the acceptable delay?
- What are other constraints?

And some things more unique to motion analysis?
- Will occlusion occur?
- Is the motion analysis 2D or 3D?

#### Modality Two: Gestures
Gestures are another popular mode of communication to interact with computers. Apple's Vision Pro is quite a good example of this (interacting with UI elements through gestures such as swiping away, pinching, tapping, grabbing, etc.)

It seems in the realm of HCI that most researchers are concerned with how computers can interpret the *meaning* of hand gestures, for example a thumbs up indicating to the computer to "go ahead and proceed," or pinching to perform an action. How would you tell the difference between someone pinching to grab a UI element to move it around, or pinching to simply zoom out?

It is important to remember that gestures are not just static -- they change over time. For example a pinching gesture is done with the index finger and thumb closing together over a period of time. At the end of the day, modelling gestures in a way that can be interpreted by a computer always comes down to mathematics. So, in order to model a gesture you need a mathematical model that takes into account both space *and* time (i.e. spatial and temporal.)

Based on this mathematical model, you can then extract features/characteristics of the gestures to train some sort of model.

It is also important to be aware of context (like above, is the pinching gesture for zooming out or for grabbing an object? It's possible this can easily be solved by taking into account context.)

#### Modality Three: Gaze
This one is rather simple. Communicating to a computer through gaze is, in most cases, merely a problem of accurate eye-tracking. You may have heard of Tobii eye tracking for gaming, which allows players to look in certain directions to, for example, control where their character is looking.

More generally, gaze is more or less a way of gauging a users' attention, or where they would like attention to be. 

Currently, the most accurate way of determining where someone is looking is by shining infrared light onto their eyes. The cornea will reflect some amount of light, and this reflection is tracked realtive to the *position* of the pupil's center.

(By the way, the lecture slide is completely wrong. PCCR eye tracking does NOT work by finding the difference in reflection between the pupil and cornea, but rather the relationship between the POSITION of the PUPIL CENTER and the REFLECTION of the CORNEA. See below)

![[Pasted image 20240729025505.png | 800]]
![[Pasted image 20240729025546.png | 800]]

You can see that the eye tracker in the case above is an external device. There are also eye trackers that a user can wear on their heads. I don't know why the paper the lecturer references arbitrarily splits these into "wearables" and "non-wearables" as if this is of any importance (in HCI applications this distinction would be useful as it would relate to usability e.g. a user might not want to have something on their head) but anyways:

![[Pasted image 20240729031333.png | 800]]

Above is Tobii's "Pro Glasses 3" with a bunch of IR illuminators and cameras (which are very tiny) for eye tracking.

Other methods of eye tracking rely on normal computer vision. This method doesn't require any special hardware but is almost always less accurate (unless the eye is captured at a sufficient resolution, where performance actually becomes comparable.) The idea is simple, though -- train a model to recognize eyes and estimate the gaze depending on the position of the pupil relative to the rest of the eye:

![[Pasted image 20240729032027.png | 800]]

Analyzing gaze can be, by and large, grouped into three categories:

- Micro-events (minute eye movements the user isn't consciously aware of, e.g. eye jitters or brief fixations)
- Low level intentional events (smallest units of eye movement that the user *is* consciously aware of, e.g. following a moving object)
- Coarse level goal-based events ("long distance" eye movements with a clear goal/purpose, e.g. moving your eyes to a new UI button to click or looking for Waldo)

Meaning:

***"Micro-events include micro-saccades, jitter, nystagmus, and brief fixations, which are studied for their physiological and psychological relevance by vision scientists and psychologists. Low-level intentional events are the smallest coherent units of movement that the user is aware of during visual activty, which include sustained fixations and revisits. Although most of the work on HCI has focused on coarse-level goal-based events (e.g., using gaze as a pointer), it is easy to foresee the importance of analysis at lower levels, particularly to infer the user’s cognitive state in affective interfaces. Within this context, an important issue often overlooked is how to interpret eye-tracking data. In other words, as the user moves his eyes during interaction, the system must decide what the movements mean in order to react accordingly. We move our eyes 2–3 times per second, so a system may have to process large amounts of data within a short time, a task that is not trivial even if processing does not occur in real-time"***

## Other Modalities
### Perceptual
These are interfaces that are highly interactive multimodal interfaces which attempt to take in natural human input. That is, interfaces that mimic natural human-to-human interaction. The purpose is to try and make interaction with computers as intuitive as possible (given that it is no different to simply interacting with another human being.)

Perceptual interfaces should adapt to the context in which a user is interacting with it and learn from the users habits. A great example of a perceptual interface would be any of the modern smartphone virtual assistants, such as Siri, Google Now, etc.

### Attentive
Attentive interfaces are interfaces that try and adjust themselves based on the users attention. This could be things like tracking the users eyes, analyzing their gaze, facial expressions, or even just their behavior in general (doesn't have to be facial stuff.)

Examples could include games where the camera can be controlled or certain UI elements can be selected through eye tracking, or a notification system which adjusts what it shows to the user based on what they tend to ignore. The YouTube homepage could be considered an attentive interface, as it adjusts the videos it shows the user based on their watching habits.

### Enactive
These are interfaces that rely on users to use physical engagement as a means of input. Virtual reality would be a great example of this. Another example would be that glove with a bunch of balls on it that lets you like play around with some shit on a computer screen (forgot what that is, but its basically VR without looking like you bought an inverse motorcycle helmet)

### Affective
Affective interfaces are those that detect human emotions and adapt accordingly. E.g., an interface that adjusts its colors and shit to make the user more relaxed if it senses that the user is stressed

When designing an affective system, it is important to take into account what exact features you are going to use to detect emotion, how you are going to determine what those emotions actually are, and finally how you are going to respond to those emotions.

Facial expressions are a great way to analyze emotion, but can be difficult to implement as things such as occlusion of the face through glasses/facial hair, context dependence (a smile can either mean happy or "meanacing",) and some facial expressions are dependent on *temporal* factors (e.g. a persons smile getting wider and wider very slowly conveys a different emotion to someone simply smiling "statically".)

Analyzing someone's emotions through speech requires a good grasp of intonation, pitch, intensity, and duration of speech. How do you know someone sounds like they're crying vs them being scared? 

We can also measure physiological factors such as heart rate, skin temperature, brain activity, etc. We could also combine everything we talked about so far! 


### Fusion in more detail:
Fusion is combining multiple data streams into one -- but it doesn't just have to be the raw data (e.g. audio and visual signals.) It could also be combining data at the *feature* level (that is, any features that have been extracted from the raw data, e.g. "facial" features that an AI model (or anything else, really, it doesn't necessarily have to be an AI model) might be using to detect faces,) or even at the *decision* level (the final result of the computation of features, e.g. in the case of an AI model detecting a face, this might be the location of the detected face in the image or something)

Let's go over another example: Detecting someone's emotion based on visuals (video) and speech (audio)

- Fusion at the **data** level would be fusing together the raw video and audio data
- Fusion at the **feature** level would be fusing together facial expression features and speech features (e.g. pitch, intonation, duration for audio)
- Fusion at the **decision** level would be fusing together the final conclusion (e.g. "sad and anxious")

There are some challenges with fusing data, some of which should be obvious:

- Temporal synchronization of different modalities
	- Sometimes the different modes are sampled at different rates (maybe video is sampled at 60fps while audio is sampled at 44kHZ -- how do we synchronize this information in time given that it is different?)
- Handling different data formats and granularities/resolutions
	- Video is mp4 and audio is mp3. How do we get some sort of common representation if we're gonna fuse it?
- Dealing with redundant or conflicting information
	- Maybe an extreme example but imagine a vantriloquist, lol. Your model or whatever is gonna be like wtf I hear talking but this dude ain't moving his lips what do I do???



