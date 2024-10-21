# Week 1
***
## HCI Research contribution types:

- Emprical
	- This is basically contributions through data generated via experiments, surveys, focus groups, etc. It's basically what the word suggests. The very definition of "empirical" is something like "Based on verifiable data, observations, or experience rather than theory or pure logic". There are many things in HCI which we cannot simply derive from logic or theory alone, e.g., what makes an engaging menu design? Such questions require experiments, surveys, etc on people to figure out.

- Artifact
	- You could probably guess what this means from the name, "He stumbled across an ancient artifact". Artifact contributions are those with real working creations/systems. For example, someone might have come up with brilliant new UI design principles for VR headsets to increase immersion, with an entire suite of software tools and whatnot to get started with developing this type of UI. Artifact contributions are normally supported with empirical data of course (you can't simply claim your contribution is state of the art without empirical support). Artifact contributions are usually judged based on what potential impact they could make in either generating new insights into HCI design or impact on the world in general. The now defunct Google Glasses project could be considered an artifact contribution as it introduced a new way of interacting with technology which was far detached from common smartphones. More recently, the Apple Vision Pro was also an artifact contribution. There were many UI and UX innovations required in making the Apple Vision Pro what it was, involving some complex spatial computing, hand gesture tracking & recognition, a 3D user interface, and more. Note that while both of these examples are wearable technology, artifact contributions can come in any form.

- Methodological
	- This one is a bit more nuanced, but it just means contributions that show new approaches/methodologies for HCI research. An easy example would be introducing a new way to measure user engagement (as that is pretty tough -- how can you be sure someone *actually* enjoys your UI, and by *exactly* how much?). Another example might be a new way of experimentation, e.g., improvements/revamp to A/B testing or something.

- Theoretical
	- These are usually spawned out of rigorous research and are proven beyond a reasonable doubt, and are normally used as axioms, so to speak, when designing user interfaces or doing anything else HCI related. A great example of this is Fitts' Law, where we can be certain of how fast a user will be able to navigate their way to something based on the distance to the target and its size. While the law is empirical, and so Fitts' law could also be categorized as an empirical contribution, it still has an incredibly powerful explanatory power and generalizability and so can easily inform UI design. Other examples would include psychological facts about human behavior, e.g., cognitive load theory, which tells you that you can easily overload someones mind if there is too much information presented at once (which is why many of the website designs which prevail are very minimalistic, or at the very least are laid out as to not overwhelm your vision).

- Dataset
	- Easy. Literally any dataset that could help a researcher. Could be a collated dataset from a bunch of experiments that have already been performed, it could be benchmarks of human performance on specific things (maybe time taken for people to move their mouse in some specific way or whatever), or any other data. Yes, this means a dataset contribution could also be an empirical contribution, or an artifact contribution to some extent.

- Survey
	- These include literature reviews (survey of the literature) or any overview of the HCI landscape to identify gaps in current HCI knowledge and "next steps" to perform. It also organizes current knowledge so that any newcomers can easily get up to speed with what is going on in the field so that they can start contributing if they'd like.

- Opinion
	- Just essays, opinion pieces, subjective articles, position papers. They are usually useful as certain individuals may raise valid points that go against the status quo or reveal new insights.

## HCI Challenges

One of the challenges facing HCI is the lack of longitudinal studies (that is, studies that follow, observe, and/or experiment on individuals, trends, or anything else for a long, *long* time). The simple reason is that HCI moves too fast. Technology has advanced so fast that people are constantly changing their habits, using new things, etc, which makes it difficult to study any one thing over time to learn more about the world.

Because HCI focuses on humans (Human-Computer Interaction -- HCI ...) there comes a challenge of gathering appropriate research participants. For example, maybe you want to conduct a study on UI design to help dementia patients remember things about how to use the UI, and so you'll have to somehow find dementia patients. If you want to conduct some research on optimal UI for airline pilots using their onboard computers, then you'll somehow have to find pilots, who are normally very busy, willing and able to participate in your study (and then given the nature of that work, you might have to find an airplane simulator or something and ``$$$$$$`` down the drain!)

## HCI Research Methods

Some research can be spawned out of the blue because it interests a researcher and literally no other reason (this tends to be the case in mathematics, where there are many papers with abstract theorems, conjectures, and techniques which are beautiful in their own right but don't serve any practical purpose (at least not yet, but that's a completely different discussion)).

This is not really the case with HCI many a time. HCI research is more practical in nature and one should consider what the need for the research is, and what the effects of the research will be (what will be found? How will that help us? Will it give us new insights? Etc.). As with any research, it also needs to be very rigorous (usually hardcore statistical analyses are performed, ideally with lots of data collected, e.g., ANOVA, t-tests, etc.).

There are many experimental designs one can employ for HCI research, especially when, say, comparing UI designs or anything else between two groups of users. As with any scientific experiment, this is what you'll need to consider:

- What are you comparing? What is your independent variable?
- How are you going to measure the independent variable? 
	- Is it a qualitative or quantitative measurement?
	- Is your independent variable user engagement? Time to task completion? User immersion? What *exactly* is it?
- What will be your control group/control in general?
- Are you going to compare with a baseline condition?
	- If you're comparing multiple things, how are you going to handle this? Will there be multiple baselines?


In HCI, there is also the problem of measuring subjective things, like immersion, engagement, etc. The best we have at the moment is questionnaires directly asking the user what they think/feel (these questionnaires also have specific "guardrails" to minimize bias, and maximize reliability and validity), and at times physiological sensors like heart rate monitors, skin capacitance, etc to supplement these questionnaire results.

## Fields in HCI

HCI is a bit of a melting pot, there isn't just one discipline that focuses on it. A great example would be psychology, as there are many psychological theories and facts about the human mind and human behavior that can inform design in HCI. Of course, you also have contributions from software engineers through actual UI & UX deployment and testing on large audiences, human factors engineering (which you may consider a superset of HCI which is concerned with human interaction with any system), social sciences, and more.

## Tradeoffs

There is no such thing as perfection. No matter what design you make, there will be some tradeoffs that you will have to make. The  domains you'll have to balance are normally convenience, security, usability, and privacy.

The only good line in the entirety of the slides is "In HCI, we want something 100% easy to use. The security guys want something 100% secure. Yet, the more secure something is, the harder it is to use". When 2FA became a thing, it was slightly less convenient to log in to sites now, but the tradeoff for an insurmountable increase in security was seen as worth it to the eyes of companies who mandated 2FA such as GitHub.

# Week 2

## Multimodal systems

- about them
- fusion and fission
- example of human body modality
- issues of motion analysis
- gesture modalities
- gaze modality
- other modalities (perceptual, attentive, enactive, affective)
- CASE and CARE model