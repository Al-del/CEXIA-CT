export const generalCompetencies = [
  {
    code: "CG1",
    text: "Identifică și utilizează elementele fundamentale ale programării Python, ale lucrului cu date și ale inteligenței artificiale.",
  },
  {
    code: "CG2",
    text: "Explică intuitiv modul de funcționare al algoritmilor de învățare automată și al rețelelor neuronale.",
  },
  {
    code: "CG3",
    text: "Utilizează Python, NumPy, Pandas, scikit-learn și PyTorch pentru rezolvarea unor probleme concrete.",
  },
  {
    code: "CG4",
    text: "Analizează și compară modele, metrici și strategii de preprocesare pentru a alege o soluție potrivită.",
  },
  {
    code: "CG5",
    text: "Evaluează corect performanța, limitele, supraînvățarea și riscul de scurgere de date al unei soluții.",
  },
  {
    code: "CG6",
    text: "Elaborează și îmbunătățește notebook-uri și baseline-uri reproductibile pentru probleme de tip concurs.",
  },
  {
    code: "CG7",
    text: "Integrează modele pentru date tabelare, imagini, text și audio în sarcini practice de inteligență artificială.",
  },
];

export const specificCompetencies = [
  {
    code: "CSI1",
    text: "Scrie și depanează programe Python cu variabile, condiții, bucle, colecții, funcții și fișiere.",
    linked: "CG1, CG3",
    activity:
      "exerciții scurte, conversii din pseudocod/C++, prelucrare de fișiere și depanare",
  },
  {
    code: "CSI2",
    text: "Utilizează NumPy și Pandas pentru manipularea, curățarea și analiza datelor.",
    linked: "CG1, CG3",
    activity: "vectorizare, standardizare, agregări, valori lipsă și analiză exploratorie",
  },
  {
    code: "CSI3",
    text: "Construiește și evaluează modele clasice de regresie, clasificare și clustering.",
    linked: "CG2, CG4, CG5",
    activity: "regresie logistică, k-NN, arbori, Random Forest, SVM, boosting, K-Means, PCA",
  },
  {
    code: "CSI4",
    text: "Aplică preprocesare, feature engineering, validare încrucișată și selecție de model fără scurgeri de date.",
    linked: "CG4, CG5",
    activity: "Pipeline, ColumnTransformer, GridSearch/RandomizedSearch și metrici adecvate",
  },
  {
    code: "CSI5",
    text: "Utilizează PyTorch pentru tensori, seturi de date și bucle complete de antrenare.",
    linked: "CG3, CG6",
    activity: "Dataset/DataLoader, loss, optimizer, backward, train/eval, CPU/GPU",
  },
  {
    code: "CSI6",
    text: "Construiește și antrenează rețele neuronale de bază și diagnostichează procesul de învățare.",
    linked: "CG2, CG5, CG6",
    activity: "MLP, activări, backpropagation, SGD/Adam, regularizare, embeddings și autoencodere",
  },
  {
    code: "CSI7",
    text: "Aplică modele de viziune computerizată pentru clasificare și utilizează modele pre-antrenate pentru detecție/segmentare.",
    linked: "CG3, CG7",
    activity: "CNN, augmentare, transfer learning, fine-tuning, object detection și segmentation",
  },
  {
    code: "CSI8",
    text: "Utilizează reprezentări și modele moderne pentru text și înțelege mecanismul de attention.",
    linked: "CG2, CG3, CG7",
    activity: "TF-IDF, BERT, attention, transformers și language modeling",
  },
  {
    code: "CSI9",
    text: "Utilizează la nivel practic encodere multimodale, modele generative și modele audio pre-antrenate.",
    linked: "CG3, CG7",
    activity: "CLIP, GAN/diffusion la nivel conceptual, transcriere și clasificare audio",
  },
  {
    code: "CSI10",
    text: "Rezolvă probleme integrate în stil competițional, pornind de la un baseline și urmărind o metrică.",
    linked: "CG4, CG5, CG6",
    activity: "mini-simulări, experimente controlate, jurnal de încercări și cod reproductibil",
  },
];

export const stages = [
  {
    label: "Etapa I",
    period: "Octombrie – Decembrie 2026",
    focus: "Python, NumPy, Pandas, Machine Learning clasic și simulare de etapă județeană.",
  },
  {
    label: "Etapa II",
    period: "Ianuarie – Martie 2027",
    focus: "PyTorch, rețele neuronale, optimizare, CNN, clasificare de imagini și transfer learning.",
  },
  {
    label: "Etapa III",
    period: "Aprilie – Mai 2027",
    focus:
      "Detecție și segmentare, CLIP și modele generative la nivel de utilizare, BERT, attention, transformers, modele de limbaj, audio și simulări integrate.",
  },
];

export const contentBlocks = {
  fall: [
    "Python de bază: variabile, tipuri, condiții, bucle, liste, dicționare, funcții, șiruri, fișiere, comprehensions, enumerate, zip și sortări.",
    "NumPy: ndarray, shape, indexare, slicing, broadcasting, vectorizare, norme, distanțe, medie, deviație standard și standardizare.",
    "Pandas și vizualizare: DataFrame, CSV, filtrare, groupby, agregări, valori lipsă, statistici descriptive și grafice uzuale.",
    "Fluxul Machine Learning: trăsături și etichete, train/validation/test, fit/predict, generalizare, overfitting, underfitting și data leakage.",
    "Modele supravegheate: regresie liniară/logistică, k-NN, arbori de decizie, Random Forest, SVM și Gradient Boosting.",
    "Preprocesare și evaluare: standardizare, one-hot encoding, imputare, feature engineering, Pipeline, ColumnTransformer, cross-validation, tuning și metrici.",
    "Învățare nesupravegheată: K-Means și PCA.",
    "NLP clasic: Bag-of-Words, TF-IDF, n-grame și clasificare de text.",
    "Ore de probleme și simulare de etapă județeană.",
  ],
  spring: [
    "t-SNE, UMAP, DBSCAN, clustering ierarhic și introducere practică în clustering spectral.",
    "PyTorch: tensori, Dataset, DataLoader, CPU/GPU și bucla de antrenare.",
    "Rețele neuronale: perceptron, MLP, activări, loss, gradient descent, backpropagation, SGD, Adam/AdamW, BatchNorm și regularizare.",
    "Embeddings și autoencodere; reprezentări latente.",
    "Computer Vision: convoluții, pooling, CNN, augmentare, clasificare de imagini, transfer learning și fine-tuning.",
    "Object Detection și Image Segmentation la nivel de utilizare; IoU și metrici relevante.",
    "Viziune modernă: self-supervised learning, CLIP, GAN și diffusion la nivel introductiv/aplicativ.",
    "NLP modern: tokenizare subword, embeddings, BERT, attention, transformers, language modeling și encoder-decoder.",
    "Fine-tuning eficient în parametri și utilizarea modelelor audio pre-antrenate pentru clasificare/transcriere.",
    "Probleme integrate și simulare finală în stil IOAI, cu baseline-uri și buget de timp.",
  ],
};

export const calendar = [
  {
    term: "Octombrie 2026 – Decembrie 2026",
    subtitle: "Bază Python și materia pentru etapa județeană",
    months: [
      {
        month: "Octombrie 2026",
        sessions: "6 ședințe",
        content:
          "TC1 Python: sintaxă, condiții, bucle; TC2 liste, dicționare, funcții; Python practic cu șiruri și fișiere; comprehensions și exerciții; NumPy; Pandas + Matplotlib.",
      },
      {
        month: "Noiembrie 2026",
        sessions: "5 ședințe",
        content:
          "Introducere în Machine Learning și flux complet; regresie liniară/logistică și metrici; oră de probleme Python + ML; k-NN + arbori; Random Forest + SVM + Gradient Boosting.",
      },
      {
        month: "Decembrie 2026",
        sessions: "5 ședințe",
        content:
          "Preprocesare + feature engineering + validare; problemă de ML supravegheat; K-Means + PCA; NLP clasic cu TF-IDF; recapitulare și simulare de etapă județeană.",
      },
    ],
  },
  {
    term: "Ianuarie 2027 – Martie 2027",
    subtitle: "PyTorch, rețele neuronale și Computer Vision",
    months: [
      {
        month: "Ianuarie 2027",
        sessions: "4 ședințe",
        content:
          "Clustering avansat și vizualizare (t-SNE/UMAP, DBSCAN, ierarhic); PyTorch – tensori; Dataset/DataLoader și training loop; probleme de trecere scikit-learn → PyTorch.",
      },
      {
        month: "Februarie 2027",
        sessions: "5 ședințe",
        content:
          "Perceptron + MLP; gradient descent + backpropagation + loss; SGD/Adam + learning rate + BatchNorm; regularizare + embeddings + autoencoder; mini-simulare pe rețele neuronale.",
      },
      {
        month: "Martie 2027",
        sessions: "4 ședințe",
        content:
          "CNN – convoluții și pooling; clasificarea imaginilor + augmentare; encodere vizuale pre-antrenate + transfer learning/fine-tuning; problemă de Computer Vision în stil concurs.",
      },
    ],
  },
  {
    term: "Aprilie 2027 – Mai 2027",
    subtitle: "Extindere IOAI și simulări",
    months: [
      {
        month: "Aprilie 2027",
        sessions: "4 ședințe",
        content:
          "Object Detection + Image Segmentation; self-supervised, CLIP, GAN și diffusion la nivel de utilizare; NLP modern cu BERT; Attention + Transformers.",
      },
      {
        month: "Mai 2027",
        sessions: "3 ședințe + simulare",
        content:
          "Language Modeling + encoder-decoder + modele de limbaj; fine-tuning eficient + audio; problemă integrată IOAI; simulare finală și recapitulare.",
      },
    ],
  },
];

export const evaluation = [
  "Aplicație practică scurtă sau exercițiu de cod la majoritatea întâlnirilor.",
  "Seturi de probleme dedicate după blocurile importante de materie.",
  "Notebook-uri reproductibile pentru activitățile de Machine Learning și Deep Learning.",
  "Mini-simulare la finalul materiei pentru etapa județeană.",
  "Mini-simulări pe rețele neuronale și Computer Vision.",
  "Simulare finală în stil IOAI, cu baseline furnizat, metrică și timp limitat.",
  "Accent pe metodologie corectă, evitarea scurgerilor de date, interpretarea metricilor și capacitatea de a îmbunătăți controlat o soluție.",
];

export const resources = {
  main: [
    {
      label: "Programa Olimpiadei Naționale de Inteligență Artificială",
      href: "https://platform.olimpiada-ai.ro/ro/roadmap/programa",
    },
    {
      label: "Syllabus oficial IOAI 2026",
      href: "https://ioai-official.org/wp-content/uploads/2025/10/Syllabus.pdf",
    },
    {
      label: "Platforma Olimpiadei Naționale de Inteligență Artificială",
      href: "https://platform.olimpiada-ai.ro",
    },
  ],
  support: [
    "Documentația oficială Python, NumPy, Pandas, scikit-learn și PyTorch.",
    "Google Colab / Kaggle Notebooks pentru lucru practic și acces la GPU.",
    "Kaggle Learn pentru Python, Pandas și Machine Learning.",
    "Dive into Deep Learning și tutorialele oficiale PyTorch pentru aprofundare.",
    "Hugging Face pentru modele și tutoriale de NLP, vision și audio.",
    "Materiale proprii ale profesorilor coordonatori și notebook-uri adaptate ritmului grupei.",
  ],
};
