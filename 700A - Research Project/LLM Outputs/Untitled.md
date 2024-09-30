# Comprehensive Analysis of E-Scooter Detection Models

## 1. Overview of the Study

This study aims to compare the effectiveness of various pre-trained models when fine-tuned for e-scooter detection. The models investigated include:

1. Car and motorcycle model
2. E-scooter model
3. Human model
4. Satellite model
5. YOLOv8 model
6. YOLOv8 random model

The study employs a systematic approach to fine-tuning these models, exploring different hyperparameters and evaluating their performance using various metrics.

## 2. Methodology

### 2.1 Fine-tuning Process

The models were fine-tuned using different combinations of hyperparameters:

- Epochs: 1, 3, 5, 10
- Frozen layers: 0, 1, 3, 5, 10, 15, -1 (all but last)
- Learning rates: 1e-3, 1e-4, 1e-5
- Batch sizes: 8, 16, 32

This systematic exploration allows for a comprehensive understanding of how these parameters affect model performance.

### 2.2 Evaluation Metrics

The primary metrics used for evaluation are:

- Mean Average Precision (mAP) at IoU 50-95% (mAP50-95)
- Precision
- Recall
- F1 score (derived from precision and recall)

These metrics provide a holistic view of model performance, balancing accuracy and completeness of detections.

## 3. Results Analysis

### 3.1 Overall Performance Comparison

Based on the ANOVA results and Tukey HSD test, we can draw several conclusions:

1. The e-scooter model significantly outperforms all other models (p < 0.05).
2. The YOLOv8 random model performs significantly worse than all other models (p < 0.05).
3. There are no statistically significant differences between the car and motorcycle model, human model, and satellite model.
4. The YOLOv8 model performs slightly better than the satellite model (p = 0.0106).

### 3.2 Detailed Model Performance

#### E-scooter Model

The e-scooter model consistently outperforms other models across different metrics:

- Highest mAP50-95: 0.704 (10 epochs, 15 frozen layers, learning rate 0.0001, batch size 16)
- Highest Precision: 0.94345
- Highest Recall: 0.9029

This superior performance is likely due to the model being pre-trained on data most similar to the target task.

#### Human Model

Despite our initial hypothesis, the human model does not show a significant advantage over other models (except the random model):

- Best mAP50-95: 0.530959 (10 epochs, learning rate 0.0001, batch size 16)
- Performance is statistically similar to car/motorcycle and satellite models

This suggests that features learned for human detection may not transfer as well to e-scooter detection as initially thought.

#### Car and Motorcycle Model

This model performs comparably to the human and satellite models:

- Best mAP50-95: 0.530695 (10 epochs, learning rate 1e-5, batch size 8)
- No statistically significant difference from human or satellite models

#### Satellite Model

The satellite model's performance is on par with the car/motorcycle and human models:

- Best mAP50-95: 0.524578 (10 epochs, 1 frozen layer, learning rate 0.001, batch size 16)

#### YOLOv8 Model

The YOLOv8 model performs slightly better than the satellite model but worse than the e-scooter model:

- Best mAP50-95: 0.530959 (10 epochs, learning rate 0.0001, batch size 16)

#### YOLOv8 Random Model

As expected, the randomly initialized YOLOv8 model performs significantly worse than all other models:

- Best mAP50-95: 0.360578 (10 epochs, 1 frozen layer, learning rate 1e-5, batch size 8)

### 3.3 Impact of Hyperparameters

#### Epochs

Generally, increasing the number of epochs improves performance across all models. The best results are often seen with 10 epochs, suggesting that the models benefit from extended training time.

#### Frozen Layers

The optimal number of frozen layers varies between models:

- E-scooter model: 15 frozen layers often yield the best results
- Other models: Fewer frozen layers (0-5) tend to perform better

This suggests that the e-scooter model's pre-trained weights are highly relevant to the task, while other models benefit from more extensive fine-tuning.

#### Learning Rate

Lower learning rates (1e-4 to 1e-5) generally produce better results across models. This indicates that small, gradual updates to the model weights are more effective for this task.

#### Batch Size

The impact of batch size varies between models, with no clear universal trend. This suggests that the optimal batch size may depend on the specific model architecture and pre-training data.

## 4. Discussion

### 4.1 Transfer Learning Effectiveness

The superior performance of the e-scooter model demonstrates the power of transfer learning when the source and target tasks are closely aligned. However, the comparable performance of human, car/motorcycle, and satellite models suggests that features learned from diverse domains can still be useful for e-scooter detection.

### 4.2 Importance of Pre-training

The significant performance gap between the pre-trained models and the randomly initialized YOLOv8 model underscores the importance of pre-training, even when the source task is not directly related to e-scooter detection.

### 4.3 Hyperparameter Optimization

The results highlight the importance of hyperparameter tuning in transfer learning. The optimal configuration varies between models, emphasizing the need for systematic exploration of hyperparameters when adapting pre-trained models to new tasks.

### 4.4 Implications for E-scooter Detection Systems

The study suggests that while specialized e-scooter detection models perform best, other pre-trained models can still achieve reasonable performance. This is particularly relevant in scenarios where e-scooter-specific training data is limited.

## 5. Limitations and Future Work

1. Dataset characteristics: The study doesn't provide details about the dataset used. Future work should explore how model performance varies with different dataset sizes, compositions, and levels of complexity.

2. Real-world performance: The study focuses on offline evaluation metrics. Future research should assess these models' performance in real-time, real-world scenarios.

3. Model size and inference speed: The analysis doesn't consider model size or inference speed, which are crucial for real-time applications. Future work should explore the trade-offs between accuracy and computational efficiency.

4. Ensemble methods: Investigating ensemble methods combining different pre-trained models could potentially improve performance further.

5. Advanced architectures: Exploring more recent object detection architectures or incorporating attention mechanisms could yield improved results.

## 6. Conclusion

This comprehensive study provides valuable insights into the effectiveness of transfer learning for e-scooter detection. While a specialized e-scooter model performs best, the study demonstrates that models pre-trained on various tasks can be successfully adapted for e-scooter detection. The results emphasize the importance of systematic hyperparameter tuning and highlight the potential for transfer learning in scenarios where task-specific data is limited.

***

![[pairwise_comparisons.png]]

![[performance_by_model_mAP50-95(B).png]]

![[performance_by_model_precision(B).png]]

![[performance_by_model_recall(B).png]]

![[performance_distribution_mAP50-95(B).png]]
# Updated Comprehensive Analysis of E-Scooter Detection Models

## 1. Pairwise Comparisons (Image 1)

This graph provides a visual representation of how the human model compares to other models in terms of performance difference.

Key observations:

1. The e-scooter model significantly outperforms the human model (negative mean difference, p=0.000).
2. The YOLOv8 random model performs significantly worse than the human model (positive mean difference, p=0.000).
3. The YOLOv8 model shows a slight, but statistically significant improvement over the human model (small negative mean difference, p=0.023).
4. The car and motorcycle model and the satellite model show no statistically significant difference from the human model (p=0.812 and p=0.231 respectively).

These findings align with our previous analysis but provide a clearer picture of the relative performance of the human model.

## 2. Performance Metrics Distribution (Images 2-4)

These box plots offer insights into the distribution of key performance metrics across different models.

### 2.1 mAP50-95 (Image 2)

1. The e-scooter model clearly outperforms all others, with the highest median and smallest interquartile range (IQR).
2. The YOLOv8 random model performs worst, with the lowest median and largest IQR.
3. The human, car and motorcycle, satellite, and YOLOv8 models show similar performance, with overlapping IQRs.
4. The human model shows a slightly lower median than the car and motorcycle and satellite models, contrary to our initial hypothesis.

### 2.2 Precision (Image 3)

1. The e-scooter model again shows the best performance, with the highest median precision and smallest IQR.
2. Other models (except YOLOv8 random) show similar precision distributions.
3. The human model's precision is comparable to the car and motorcycle and satellite models.
4. The YOLOv8 random model shows the lowest precision and highest variability.

### 2.3 Recall (Image 4)

1. The e-scooter model maintains its superior performance in recall.
2. The human model shows slightly lower recall compared to the car and motorcycle and satellite models.
3. The YOLOv8 model demonstrates competitive recall performance.
4. The YOLOv8 random model again shows the poorest performance and highest variability.

## 3. Distribution of mAP50-95 (Image 5)

This density plot provides a more detailed view of the mAP50-95 distribution for each model.

Key insights:

1. The e-scooter model shows a distinct bimodal distribution with peaks around 0.6 and 0.7, indicating consistently high performance across different configurations.
2. The human, car and motorcycle, satellite, and YOLOv8 models show overlapping distributions, further confirming their similar performance.
3. The YOLOv8 random model's distribution is spread over a wider range of lower values, reflecting its poor and inconsistent performance.
4. The human model's distribution is slightly shifted towards lower values compared to the car and motorcycle and satellite models, which wasn't immediately apparent in the box plot.

## 4. Revised Analysis and Implications

1. E-scooter Model Superiority: The visualizations strongly reinforce our earlier conclusion that the e-scooter model significantly outperforms all others. This suggests that when possible, using a model pre-trained on e-scooter data or similar tasks yields the best results.
2. Human Model Performance: Contrary to our initial hypothesis, the human model does not show an advantage over other models (except the random model). In fact, it performs slightly worse than the car and motorcycle and satellite models in some metrics. This suggests that features learned for human detection may not transfer as effectively to e-scooter detection as we initially thought.
3. Transfer Learning Effectiveness: The comparable performance of the car and motorcycle, satellite, and YOLOv8 models indicates that features learned from diverse domains can be effectively transferred to e-scooter detection. This is particularly valuable when e-scooter-specific training data is limited.
4. Importance of Pre-training: The poor performance of the YOLOv8 random model underscores the critical role of pre-training, even when the source task is not directly related to e-scooter detection.
5. Model Consistency: The e-scooter model not only performs better on average but also shows more consistent performance across different configurations, as evidenced by its smaller IQR in the box plots and its distinct distribution in the density plot.
6. Performance Trade-offs: While the e-scooter model performs best across all metrics, the other pre-trained models show different trade-offs between precision and recall. This could be relevant when optimizing for specific use cases (e.g., prioritizing fewer false positives vs. fewer false negatives).

## 5. Recommendations and Future Work

1. When possible, use models pre-trained on e-scooter data or very similar tasks for the best performance.
2. If e-scooter-specific pre-trained models are not available, consider using models pre-trained on general object detection tasks (like YOLOv8) or even seemingly unrelated tasks (like satellite imagery), as they can still provide good performance.
3. Investigate why the human model doesn't perform as well as expected. This could involve analyzing the types of errors it makes compared to other models.
4. Explore ensemble methods combining different pre-trained models, which might leverage the strengths of each model.
5. Conduct a more detailed analysis of performance under different conditions (e.g., occlusion, varying lighting) to understand where each model excels or struggles.
6. Investigate the computational efficiency of these models, as real-world applications may require balancing performance with inference speed and model size.

This updated analysis provides a more nuanced understanding of the models' performance and offers clear directions for further research and practical applications in e-scooter detection.

***

Here are the best performances for each model type:

1. Car and motorcycle model:  
    Best mAP50 (mean): 0.846878 (10 epochs, 5 frozen layers, learning rate 0.0001, batch size 8)
2. E-scooter model:  
    Best mAP50 (mean): 0.9611933333333335 (3 epochs, 15 frozen layers, learning rate 1e-05, batch size 16)
3. Human model:  
    Best mAP50 (mean): 0.8668359999999999 (10 epochs, 1 frozen layer, learning rate 1e-05 or 0.001, batch size 8)
4. Satellite model:  
    Best mAP50 (mean): 0.72140 (1 epoch, 0 frozen layers, learning rate 0.001, batch size 8)