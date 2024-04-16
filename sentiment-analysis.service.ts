// sentiment-analysis.service.ts
import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  private model: any;

  constructor() {
    this.loadModel();
  }

  async loadModel() {
    this.model = await use.load();
  }

  async analyzeSentiment(text: string): Promise<number> {
    const embeddings = await this.model.embed(text);
    const prediction = await tf.sigmoid(embeddings).data();
    return prediction[0];
  }
}
