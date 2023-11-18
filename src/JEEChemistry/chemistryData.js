const quizData = [
    {
        question: "1. What is the IUPAC name of CH3COOH?",
        answers: [
            { text: 'A.  Acetic acid', isCorrect: false },
            { text: 'B.  Methanoic acid', isCorrect: false },
            { text: 'C.  Propanoic acid', isCorrect: false },
            { text: 'D.  Ethanoic acid', isCorrect: true }
        ]
    },
    {
        question: "2. What is the reagent used to oxidize primary alcohols to aldehydes?",
        answers: [
            { text: 'A.  PCC (Pyridinium chlorochromate)', isCorrect: true },
            { text: 'B.  KMnO4 (Potassium permanganate)', isCorrect: false },
            { text: 'C.  Tollens\' reagent', isCorrect: false },
            { text: 'D.  Jones reagent', isCorrect: false }
        ]
    },
    {
        question: "3. What is the formula for the Root Mean Square (RMS) speed of gas particles?",
        answers: [
            { text: 'A.  sqrt(3RT/M)', isCorrect: true },
            { text: 'B.  sqrt(RT/M)', isCorrect: false },
            { text: 'C.  sqrt(2RT/M)', isCorrect: false },
            { text: 'D.  sqrt(5RT/M)', isCorrect: false }
        ]
    },
    {
        question: "4. What is the relationship between Gibbs free energy change (ΔG), enthalpy change (ΔH), and entropy change (ΔS)?",
        answers: [
            { text: 'A.  ΔG = ΔH + TΔS', isCorrect: false },
            { text: 'B.  ΔG = ΔH - TΔS', isCorrect: true },
            { text: 'C.  ΔG = ΔH / TΔS', isCorrect: false },
            { text: 'D.  ΔG = ΔH * TΔS', isCorrect: false }
        ]
    },
    {
        question: "5. Which element has the highest electronegativity?",
        answers: [
            { text: 'A.  Oxygen', isCorrect: false },
            { text: 'B.  Fluorine', isCorrect: true },
            { text: 'C.  Chlorine', isCorrect: false },
            { text: 'D.  Carbon', isCorrect: false }
        ]
    },
    {
        question: "6. What is the shape of the methane (CH4) molecule?",
        answers: [
            { text: 'A.  Linear', isCorrect: false },
            { text: 'B.  Tetrahedral', isCorrect: true },
            { text: 'C.  Trigonal planar', isCorrect: false },
            { text: 'D.  Octahedral', isCorrect: false }
        ]
    },
    {
        question: "7. What is the structure of ethanol?",
        answers: [
            { text: 'A.  CH3-CH2-OH', isCorrect: true },
            { text: 'B.  CH3-OH', isCorrect: false },
            { text: 'C.  CH2=CH2', isCorrect: false },
            { text: 'D.  CH3-CHOH-CH3', isCorrect: false }
        ]
    },
    {
        question: "8. Which is the following represents a carboxylic acid?",
        answers: [
            { text: 'A.  CH3COOH', isCorrect: true },
            { text: 'B.  CH3CH2OH', isCorrect: false },
            { text: 'C.  CH3COCH3', isCorrect: false },
            { text: 'D.  CH3NH2', isCorrect: false }
        ]
    },
    {
        question: "9. Identify the structure of this organic compound:",
        Image: "https://shorturl.at/iDIKR", // Replace with the actual image path
        answers: [
            { text: 'A.  Structure A', isCorrect: false },
            { text: 'B.  Structure B', isCorrect: false },
            { text: 'C.  Structure C', isCorrect: true },
            { text: 'D.  Structure D', isCorrect: false }
        ]
    },
    {
        question: "10. Which functional group is present in the compound shown below?",
        Image: "imge1.png", // Replace with the actual image path
        answers: [
            { text: 'A.  Alcohol', isCorrect: false },
            { text: 'B.  Aldehyde', isCorrect: true },
            { text: 'C.  Ketone', isCorrect: false },
            { text: 'D.  Ester', isCorrect: false }
        ]
    },
    {
        question: "11. What is the IUPAC name of the compound depicted in the image?",
        Image: "https://www.ymdb.ca/structures/YMDB00499/image.png", // Replace with the actual image path
        answers: [
            { text: 'A.  Propanoic acid', isCorrect: false },
            { text: 'B.  Butanal', isCorrect: false },
            { text: 'C.  3-Methylbutanal', isCorrect: true },
            { text: 'D.  Ethyl acetate', isCorrect: false }
        ]
    },
    {
        question: "12. Identify the type of isomerism displayed by the structures below.",
        Image: "https://i.stack.imgur.com/8pTvd.png",
        answers: [
            { text: 'A.  Geometric Isomerism', isCorrect: true },
            { text: 'B.  Structural Isomerism', isCorrect: false },
            { text: 'C.  Optical Isomerism', isCorrect: false },
            { text: 'D.  Chain Isomerism', isCorrect: false }
        ]
    },
    {
        question: "13. Select the correct representation of the given chair conformation.",
        Image: "https://cdn-epecn.nitrocdn.com/BnZxidxyHVMWXLQJmOHhImIgcjKKfeOt/assets/images/optimized/rev-a91dce7/leah4sci.com/wp-content/uploads/2016/10/Challenge-Convert-the-following-newman-projection-into-a-chair-conformation-and-chair-conformation-into-a-newman-projection-in-Practice-Quiz.jpg",
        answers: [
            { text: 'A.  Incorrect', isCorrect: false },
            { text: 'B.  Correct', isCorrect: true },
            { text: 'C.  Partially Correct', isCorrect: false },
            { text: 'D.  Not a Chair Conformation', isCorrect: false }
        ]
    },
    {
        question: "14. Identify the functional group(s) present in the structure shown.",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTs34s2ZEp5n7Y5Q_YuVTPRtk0FImyWAeCw&usqp=CAU",
        answers: [
            { text: 'A.  Aldehyde and Ketone', isCorrect: true },
            { text: 'B.  Carboxylic Acid and Alcohol', isCorrect: false },
            { text: 'C.  Amine and Amide', isCorrect: false },
            { text: 'D.  Ester and Ether', isCorrect: false }
        ]
    },
    {
        question: "15. What is the type of reaction depicted in the figure?",
        Image: "https://homework.study.com/cimages/multimages/16/5572221_12045007625961791264.png", // Replace with actual image filename
        answers: [
          { text: 'A.  Esterification', isCorrect: false },
          { text: 'B.  Saponification', isCorrect: true },
          { text: 'C.  Fermentation', isCorrect: false },
          { text: 'D.  Hydrolysis', isCorrect: false }
        ]
      },
];
export default quizData;