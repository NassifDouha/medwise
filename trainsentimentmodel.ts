import * as tf from '@tensorflow/tfjs';

async function trainEmbeddingModel(dataset: string[]) {
  try {
    // Tokenize the dataset manually
    const tokenizer = new Map<string, number>();
    let index = 1;
    const sequences: number[][] = [];
    for (const text of dataset) {
      const words = text.toLowerCase().split(/\s+/);
      const sequence: number[] = [];
      for (const word of words) {
        if (!tokenizer.has(word)) {
          tokenizer.set(word, index);
          index++;
        }
        sequence.push(tokenizer.get(word)!);
      }
      sequences.push(sequence);
    }

    // Pad sequences to ensure uniform length
    const maxSequenceLength = Math.max(...sequences.map(seq => seq.length));
    const paddedSequences = sequences.map(seq => {
      while (seq.length < maxSequenceLength) {
        seq.push(0); // Padding token
      }
      return seq;
    });

    // Define the embedding layer
    const vocabSize = tokenizer.size + 1; // Plus one for the padding token
    const embeddingLayer = tf.layers.embedding({
      inputDim: vocabSize,
      outputDim: 100, // Embedding dimension
      inputLength: maxSequenceLength
    });

    // Define the model architecture
    const model = tf.sequential();
    model.add(embeddingLayer);
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

    // Compile the model
    model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

    // Convert the dataset to TensorFlow tensors
    const x = tf.tensor2d(paddedSequences);
    const y = tf.tensor([0, 1]); // Assuming binary classification (0 or 1)

    // Train the model
    await model.fit(x, y, { epochs: 10 });

    // Return the trained model
    return model;
  } catch (error) {
    throw error;
  }
}

export default trainEmbeddingModel;
