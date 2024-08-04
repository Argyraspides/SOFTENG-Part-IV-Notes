This log is for tracking what I've done, what I plan on doing, and what needs to be done.
***
### February - April
- Meeting with Mike from Kaurikone
	- Figuring out what the exact problem is
		- Why e-scooters?
		- What models do they currently have?
	
- Creating literature review
	- Reading on the current challenges with detecting e-scooters
	- Figuring out what the exact objectives are

- Requesting dataset from Mike
	- Sifting through training data as a first step into an investigation for why the model is performing so poorly
		- Dataset is far, *far* too varied.
			- E-scooters way to close up, e-scooters in the most random environments. This isn't a problem in and of itself, but the incredibly small amount of training data probably meant the model was being pushed and pulled in every direction without ever ***converging***

- The month of may became incredibly busy. Almost no time to work on the project.
	- Some time was spent setting up YOLO and fiddling around with models to get a feel on how to set up a workflow to efficiently train and test models
### June 10th - June 17th
- Set up environment to train YOLO models with the Ultralytics framework
	- Spent about 3 days troubleshooting ROCm compatibility with PyTorch (thanks, AMD, for not having the foresight of the ML revolution zzz)

- Started training some basic models for e-scooter detection
	- Generated data by getting various images of e-scooter riders, then:
		- Using Photoshop to completely remove the background
		- Making a quick JS script to paste these scooter riders at random positions in the background 
		- Using these images for training
	- This showed promise but wasn't that great. Didn't perform any pre-processing steps on the images (maybe look into doing that specifically for image generation for the future?)


- Set up Roboflow account (pure curiosity)
	- Trained some ML models with the free trial credits
		- Models worked very well. Used "transfer learning" from MS Coco pre-trained models using the Roboflow 3.0 model architecture.
		- Was unable to download model weights which was frustrating. Can only use the models connecting to their API. But was a good find as it was the first time I heard about "transfer learning"

- Looked into cloud GPU options as training and testing many models was painfully slow
	- Settled for performing transfer learning. Much faster and produces alright results for the time that it takes to train.

- Looked into transfer learning
	- Produced relatively good results. Main benefit was simply reduced training time (much less epochs required)


### June 18th
- Trained some models using transfer learning
	- Trained with dataset from: https://app.roboflow.com/700a-aukam/electric-scooter-ojxbb/1 (find original authors pls)
	- Pre-trained model used: "yolov8n.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
			- ***#1: 20 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.5)***: 
				- Model performed absolute trash. 20 epochs seems too much for simply fine-tuning
			- ***#2: 10 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.5)***:
				- Model performed much better. Was easily detecting e-scooters but only when relatively close-up. Sometimes confused a pole for an e-scooter
			- ***#3: 5 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.5)***:
				- Model performed like crap. Thought the entire background was an e-scooter for the entire footage duration. 
	- Pre-trained model used: "yolov8s.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
		- ***#4: 7 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6)***
			- Model performed much better than everything starting from "yolov8n.pt" pre-trained weights above. The only issue was that cars were sometimes being confused for e-scooters. It's possible 7 epochs was also too much and maybe "overrode" what the model thinks is a car. Perhaps it actually thought it was a car and was simply mislabelled in code?
	- Pre-trained model used: "yolov8s.pt" by Ultralytics (Including ALL classes + e-scooters and seeing how it handles that)
		- ***#5: 6 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6)***
			- Performs about the same as ***#4***
				- Turning the confidence up to 0.6 makes it perform a bit better. However for small blips, it thinks that cars are e-scooters.
					- Noticed that if a car is in the frame, it sometimes thinks the *other side* of the image is an e-scooter?
					- For some reason, despite the fact that because this is simply fine-tuning a pre-trained model, it SHOULD already know what a car is, still seems to be overridden completely. Maybe this is why its performing weirdly?
	- Pre-trained model used: "yolov8m.pt" by Ultralytics (Including ALL classes + e-scooters and seeing how it handles that)
		- ***#6: 7 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6)***
			- Confused cars less often than ***#5***. Best performer overall. There are still random blips where it thinks parts of the background are e-scooters.



Next steps: The Roboflow model seems to be production-ready. It never confuses an e-scooter with ANYTHING. If an e-scooter rider *does* pass through, it seems the detector will *always* catch them. There is one rare instance where it thought a small bottom sliver of the screen was an e-scooter but thats it (for both security cam footages). Find a way to get this model (download the weights -- which it seems you need to do via a docker container but whatever). Can give this to kaurikone

Find out why Roboflow was able to train the model so well via transfer learning but you werent
- Maybe the particular pre-trained model they were using was better?
- Maybe you're performing transfer learning incorrectly?
- Random balance of epochs, batches, and whatnot that you weren't able to strike?

### June 19th

- Indeed, it appears I have been performing transfer learning incorrectly. You have to specify which NN layers to freeze, you idiot!

	- Pre-trained model used: "yolov8s.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
		- ***#7: 2 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 20 frozen layers)***
			- Model performs very similarly to the Roboflow one! Which is good news. Transfer learning has really good results
				- There were still very tiny blips where it thought a car was an e-scooter (for a fraction of a second). Hopefully this is something that can just be ironed out
				- Also very tiny blips where it thought a person was an e-scooter.
		- ***#8: 3 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 20 frozen layers)***
			- Doesn't appear to be much different.
		- ***#9: 4 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 15 frozen layers)***
			- Slightly worse. Freezing more layers seems to be better. Next up tinker with between 15 and 20?
		- ***#10: 5 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 20 frozen layers)***
			- Meh. About same as ***#5***
	- Pre-trained model used: "yolov8m.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
		- ***#11: 3 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 20 frozen layers)***
			- Wasn't able to detect ANYTHING
	- Pre-trained model used: "yolov8s.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
		- ***#12: 2 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 17 frozen layers)***
			- Thinks there are invisible e-scooters everywhere.
		- ***#13: 4 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 17 frozen layers)***


Randomly running into the following issue during training:

![[Pasted image 20240619174315.png]]

Super annoying.

- Pre-trained model used: "yolov8s.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
	- Combined the "electric.scooter.v1i.yolov8" and "scooter.v1i.yolov8" datasets together to make one massive dataset of 10k images
		- ***#14: 8 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.5, 16 frozen layers)***
			- Best performing model to date. Named "bestObservedModelRecreation7". Only failed in two instances for a fraction of a second where it thought a person and a car was an e-scooter, but thats it. Rest of the time detected an e-scooter rider in close-ish proximity (after entering the carpark -- past the red bar). Also performed much better detecting e-scooter rider from behind.
		- ***#15: 8 epochs w/ batch size = 16 and image size = 640x640 (tested with security cam footage from Kaurikone @ the hotel w/ conf=0.6, 16 frozen layers)***
			- This particular one was fine tuned using ultralytics. AdamW optimizer. The best hyperparameters were then used for training in addition to those above. Performs similarly to ***#14***. Slightly worse IMO.

-  Pre-trained model used: "yolov8m.pt" by Ultralytics (overriding all classes and forcing it to just check for e-scooters)
	- Combined the "electric.scooter.v1i.yolov8" and "scooter.v1i.yolov8" datasets together to make one massive dataset of 10k images
