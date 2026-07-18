// Funcion creada a partir de: los pesos, sesgos, medias y desviaciones estándar del archivo original

export const predecirEnfermedad = async (inputs) => {
  const response = await fetch('/model.json');
  const modelData = await response.json();
  
  let { W1, b1, W2, b2, mu, sigma } = modelData;

  // 1. Corregir W1 (si está transpuesto)
  if (W1.length === 10 && W1[0].length === 67) {
      W1 = W1[0].map((_, colIndex) => W1.map(row => row[colIndex]));
  }
  
  // 2. CORRECCIÓN NUEVA: Corregir W2 (si es necesario)
  // W2 debería tener tantas filas como neuronas ocultas (10) y 4 columnas (clases)
  // Si nos da error, intentamos transponerla igual que W1
  if (W2.length === 4 && W2[0].length === 10) {
      console.log("Transponiendo W2 para corregir dimensiones...");
      W2 = W2[0].map((_, colIndex) => W2.map(row => row[colIndex]));
  }

  // 3. Normalización
  const inputNormalizado = inputs.map((val, i) => (val - mu[i]) / sigma[i]);

  // 4. Capa Oculta (ReLU)
  const capaOculta = b1.map((bias, j) => {
    let sum = bias;
    for (let i = 0; i < inputNormalizado.length; i++) {
      sum += inputNormalizado[i] * W1[i][j];
    }
    return Math.max(0, sum);
  });

  // 5. Capa de Salida
  const scores = b2.map((bias, k) => {
    let sum = bias;
    for (let j = 0; j < capaOculta.length; j++) {
      sum += capaOculta[j] * W2[j][k];
    }
    return sum;
  });

  const clases = ['CHIKUNGUNYA', 'DENGUE', 'INFLUENZA', 'ZIKA'];
  return clases[scores.indexOf(Math.max(...scores))];
};