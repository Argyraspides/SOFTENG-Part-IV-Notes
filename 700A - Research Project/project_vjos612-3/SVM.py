import numpy
import os
import joblib
import matplotlib.pyplot as plt
import seaborn
from imblearn.over_sampling import RandomOverSampler

from sklearn.metrics import accuracy_score, precision_recall_fscore_support
from sklearn.metrics import confusion_matrix
from sklearn.svm import SVC
# Directory of the folder which contains folders of each data class.
data_dir = "archives/"

X_train = joblib.load(data_dir + 'X_train.joblib')
y_train = joblib.load(data_dir + 'y_train.joblib')
X_validation = joblib.load(data_dir + 'X_validation.joblib')
y_validation = joblib.load(data_dir + 'y_validation.joblib')
X_test_final = joblib.load(data_dir + 'X_test_final.joblib')
y_test_final = joblib.load(data_dir + 'y_test_final.joblib')

# We are using the imblearn library to oversample the images that are part of the minority class
rus = RandomOverSampler(random_state=0)
X_oversampled_train, y_oversampled_train = rus.fit_resample(X_train, y_train)

# If we ever want to fine tune parameters that don't require re-training the model, we can skip 
# the training step by storing the model as a joblib file and retreiving it on our next run. If you (the marker) want to 
# train the model again with new parameters, just delete the joblib file before running the code you modified.
svm = None
model_file_path = "models/svm_model.joblib"
if os.path.isfile(model_file_path):
    # The file exists, so we can proceed to load the model
    with open(model_file_path, 'rb') as file:
        svm = joblib.load(file)
    print("SVM Model loaded successfully, file location:", model_file_path)
else:
    # Train the SVM model
    svm = SVC(C=1,random_state=1, kernel='rbf')
    svm.fit(X_oversampled_train, y_oversampled_train)
    joblib.dump(svm, model_file_path)

# We have already tuned the model using our validation data as of the time of writing. It is now time to test our data.
# if you (the marker) want to run your own simple validation tests, you may change the parameter the validation set
y_prediction = svm.predict(X_test_final)

# To find our precision, recall, and f1 score it is necessary to obtain the confusion matrix
conf_matrix = confusion_matrix(y_true=y_test_final, y_pred=y_prediction) 

num_classes = conf_matrix.shape[0]
recalls = []
precisions = []
f1_scores = []

# We will go through the confusion matrix and store the precision, recall, and f1 score for each class
for class_index in range(num_classes):
    TP = conf_matrix[class_index, class_index]
    FN = numpy.sum(conf_matrix[class_index, :]) - TP
    FP = numpy.sum(conf_matrix[:, class_index]) - TP

    recall = TP / (TP + FN)
    precision = TP / (TP + FP)
    f1 = 2 * (precision * recall) / (precision + recall)

    recalls.append(recall)
    precisions.append(precision)
    f1_scores.append(f1)


# Below we print out all of our results
min_recall = min(recalls)
max_recall = max(recalls)

min_precision = min(precisions)
max_precision = max(precisions)

min_f1_score = min(f1_scores)
max_f1_score = max(f1_scores)

# Average scores as opposed to the min and max above
precision, recall, f1_score, _ = precision_recall_fscore_support(y_test_final, y_prediction, average='weighted')

print("Minimum Recall:", min_recall)
print("Maximum Recall:", max_recall)
print("Minimum Precision:", min_precision)
print("Maximum Precision:", max_precision)
print("Minimum F1 Score:", min_f1_score)
print("Maximum F1 Score:", max_f1_score)
print("Avg Precision:", precision)
print("Avg Recall:", recall)
print("Avg F1-score:", f1_score)
print("Accuracy:", accuracy_score(y_test_final, y_prediction))

# Display the confusion matrix
conf_matrix_row_normalized = conf_matrix.astype('float') / conf_matrix.sum(axis=1)[:, numpy.newaxis]
plt.figure(figsize=(10, 8))
seaborn.heatmap(conf_matrix_row_normalized, annot=False, fmt='.2f', cmap='Blues')
plt.title('Confusion Matrix')
plt.xlabel('Predicted Labels')
plt.ylabel('True Labels')
plt.show()