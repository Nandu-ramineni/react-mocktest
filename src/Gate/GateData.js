const quizData = [
    {
        question: "1. Which data structure is needed to convert infix notations to postfix notations?",
        answers: [
            { text: 'A. Stack', isCorrect: true },
            { text: 'B. Queue', isCorrect: false },
            { text: 'C. List', isCorrect: false },
            { text: 'D. Tree', isCorrect: false }
        ]
    },
    {
        question: "2. What does HTTP stand for?",
        answers: [
            { text: 'A. HyperText Transfer Protocol', isCorrect: true },
            { text: 'B. HyperTransfer Text Protocol', isCorrect: false },
            { text: 'C. HyperTransfer Protocol Text', isCorrect: false },
            { text: 'D. HyperText Transmission Protocol', isCorrect: false }
        ]
    },
    {
        question: "3. What principle allows a hovercraft to lift off the ground?",
        answers: [
            { text: 'A. Bernoulli\'s principle', isCorrect: false },
            { text: 'B. Archimedes\' principle', isCorrect: false },
            { text: 'C. Newton\'s third law', isCorrect: true },
            { text: 'D. Hooke\'s law', isCorrect: false }
        ]
    },
    {
        question: "4. What is the SI unit of pressure?",
        answers: [
            { text: 'A. Pascal', isCorrect: true },
            { text: 'B. Newton', isCorrect: false },
            { text: 'C. Joule', isCorrect: false },
            { text: 'D. Watt', isCorrect: false }
        ]
    },
    {
        question: "5. What is the unit of electrical resistance?",
        answers: [
            { text: 'A. Farad', isCorrect: false },
            { text: 'B. Ohm', isCorrect: true },
            { text: 'C. Henry', isCorrect: false },
            { text: 'D. Volt', isCorrect: false }
        ]
    },
    {
        question: "6. Which component in an electrical circuit stores energy in an electric field?",
        answers: [
            { text: 'A. Capacitor', isCorrect: true },
            { text: 'B. Inductor', isCorrect: false },
            { text: 'C. Resistor', isCorrect: false },
            { text: 'D. Diode', isCorrect: false }
        ]
    },

    {
        question: "7. Which algorithm is used to sort an array in descending order?",
        answers: [
            { text: 'A. Merge Sort', isCorrect: false },
            { text: 'B. Bubble Sort', isCorrect: false },
            { text: 'C. Quick Sort', isCorrect: false },
            { text: 'D. Selection Sort', isCorrect: true }
        ]
    },
    {
        question: "8. What is the time complexity of the binary search algorithm?",
        answers: [
            { text: 'A. O(n)', isCorrect: false },
            { text: 'B. O(log n)', isCorrect: true },
            { text: 'C. O(n log n)', isCorrect: false },
            { text: 'D. O(1)', isCorrect: false }
        ]
    },
    {
        question: "9. What is the first law of thermodynamics?",
        answers: [
            { text: 'A. Conservation of mass', isCorrect: false },
            { text: 'B. Conservation of energy', isCorrect: true },
            { text: 'C. Conservation of momentum', isCorrect: false },
            { text: 'D. Entropy never decreases', isCorrect: false }
        ]
    },
    {
        question: "10. Which type of stress is proportional to strain?",
        answers: [
            { text: 'A. Shear stress', isCorrect: false },
            { text: 'B. Hookean stress', isCorrect: true },
            { text: 'C. Compressive stress', isCorrect: false },
            { text: 'D. Tensile stress', isCorrect: false }
        ]
    },
    {
        question: "11. Which theorem is used to simplify complex electrical circuits?",
        answers: [
            { text: 'A. Norton\'s theorem', isCorrect: false },
            { text: 'B. Superposition theorem', isCorrect: true },
            { text: 'C. Thevenins theorem', isCorrect: false },
            { text: 'D. Maximum Power Transfer theorem', isCorrect: false }
        ]
    },
    {
        question: "12. What does the unit 'farad' measure?",
        answers: [
            { text: 'A. Inductance', isCorrect: false },
            { text: 'B. Capacitance', isCorrect: true },
            { text: 'C. Resistance', isCorrect: false },
            { text: 'D. Conductance', isCorrect: false }
        ]
    },
    {
        question: "13. Which algorithm is used to sort an array in descending order?",
        answers: [
            { text: 'A. Merge Sort', isCorrect: false },
            { text: 'B. Bubble Sort', isCorrect: false },
            { text: 'C. Quick Sort', isCorrect: false },
            { text: 'D. Selection Sort', isCorrect: true }
        ]
    },
    {
        question: "14. What is the time complexity of the binary search algorithm?",
        answers: [
            { text: 'A. O(n)', isCorrect: false },
            { text: 'B. O(log n)', isCorrect: true },
            { text: 'C. O(n log n)', isCorrect: false },
            { text: 'D. O(1)', isCorrect: false }
        ]
    },
    {
        question: "15. What is a 'compiler' in the context of programming languages?",
        answers: [
            { text: 'A. A program that translates high-level code to machine code', isCorrect: true },
            { text: 'B. A program that manages system resources', isCorrect: false },
            { text: 'C. A program for debugging code', isCorrect: false },
            { text: 'D. A program for writing documentation', isCorrect: false }
        ]
    },
    {
        question: "16. Which data structure is typically used to implement a 'stack'?",
        answers: [
            { text: 'A. Linked list', isCorrect: true },
            { text: 'B. Queue', isCorrect: false },
            { text: 'C. Tree', isCorrect: false },
            { text: 'D. Array', isCorrect: false }
        ]
    },
    {
        question: "17. What does 'DMA' stand for in computer systems?",
        answers: [
            { text: 'A. Direct Memory Access', isCorrect: true },
            { text: 'B. Dynamic Memory Allocation', isCorrect: false },
            { text: 'C. Data Management and Analysis', isCorrect: false },
            { text: 'D. Digital Multiplexed Architecture', isCorrect: false }
        ]
    },
    {
        question: "18. What is the function of an 'inverter' in digital logic?",
        answers: [
            { text: 'A. Changes 0 to 1 and 1 to 0', isCorrect: true },
            { text: 'B. Amplifies signals', isCorrect: false },
            { text: 'C. Stores data', isCorrect: false },
            { text: 'D. Splits data into multiple channels', isCorrect: false }
        ]
    },
    {
        question: "19. Which data structure is suitable for implementing a hash table?",
        answers: [
            { text: 'A. Linked List', isCorrect: false },
            { text: 'B. Stack', isCorrect: false },
            { text: 'C. Queue', isCorrect: false },
            { text: 'D. Array', isCorrect: true }
        ]
    },
    {
        question: "20. What is the space complexity of Quicksort?",
        answers: [
            { text: 'A. O(n^2)', isCorrect: false },
            { text: 'B. O(n)', isCorrect: false },
            { text: 'C. O(log n)', isCorrect: true },
            { text: 'D. O(1)', isCorrect: false }
        ]
    },
    {
        question: "21. What does TCP stand for?",
        answers: [
            { text: 'A. Transmission Control Protocol', isCorrect: true },
            { text: 'B. Transfer Control Protocol', isCorrect: false },
            { text: 'C. Transfer Connectivity Protocol', isCorrect: false },
            { text: 'D. Transmission Connectivity Protocol', isCorrect: false }
        ]
    },
    {
        question: "22. Which algorithm is used for shortest path finding in a weighted graph?",
        answers: [
            { text: 'A. Dijkstra\'s algorithm', isCorrect: true },
            { text: 'B. Prim\'s algorithm', isCorrect: false },
            { text: 'C. Bellman-Ford algorithm', isCorrect: false },
            { text: 'D. Kruskal\'s algorithm', isCorrect: false }
        ]
    },
    {
        question: "23. What is the name of the test designed to verify the correctness of a program?",
        answers: [
            { text: 'A. Debugging', isCorrect: false },
            { text: 'B. Validation', isCorrect: false },
            { text: 'C. Verification', isCorrect: true },
            { text: 'D. Testing', isCorrect: false }
        ]
    },
    {
        question: "24. What does the acronym 'OOP' stand for?",
        answers: [
            { text: 'A. Object-Oriented Programming', isCorrect: true },
            { text: 'B. Object-Oriented Protocol', isCorrect: false },
            { text: 'C. Object-Oriented Processing', isCorrect: false },
            { text: 'D. Object-Oriented Protocol', isCorrect: false }
        ]
    },
    {
        question: "25. In C++, which keyword is used to inherit a class?",
        answers: [
            { text: 'A. inherit', isCorrect: false },
            { text: 'B. extends', isCorrect: false },
            { text: 'C. using', isCorrect: false },
            { text: 'D. class', isCorrect: true }
        ]
    },
    {
        question: "26. What does the 'self' keyword represent in Python?",
        answers: [
            { text: 'A. A constant value', isCorrect: false },
            { text: 'B. A reserved keyword', isCorrect: false },
            { text: 'C. The current instance of the class', isCorrect: true },
            { text: 'D. A global variable', isCorrect: false }
        ]
    },

    {
        question: "27. Which keyword is used to define an interface in Java?",
        answers: [
            { text: 'A. interface', isCorrect: true },
            { text: 'B. implements', isCorrect: false },
            { text: 'C. class', isCorrect: false },
            { text: 'D. abstract', isCorrect: false }
        ]
    },
    {
        question: "28. What will be the output of the C code snippet below?\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf(\"%d\", a++ + ++b);\n    return 0;\n}",
        answers: [
            { text: 'A. 8', isCorrect: false },
            { text: 'B. 9', isCorrect: true },
            { text: 'C. 10', isCorrect: false },
            { text: 'D. 7', isCorrect: false }
        ]
    },
    {
        question: "29. What does the Python code snippet do?\n\ndef factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\nprint(factorial(5))",
        answers: [
            { text: 'A. Calculates the sum of numbers from 1 to 5', isCorrect: false },
            { text: 'B. Prints the factorial of 5', isCorrect: true },
            { text: 'C. Generates a sequence of Fibonacci numbers', isCorrect: false },
            { text: 'D. Prints the value of 5!', isCorrect: false }
        ]
    },
    {
        question: "30. What will the C++ code snippet output?\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    cout << arr[7];\n    return 0;\n}",
        answers: [
            { text: 'A. 0', isCorrect: false },
            { text: 'B. Garbage value', isCorrect: true },
            { text: 'C. Error', isCorrect: false },
            { text: 'D. 7', isCorrect: false }
        ]
    },
    {
        question: "31. What is the output of the following C code?\n\n```\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    printf(\"%d\", ++x);\n    return 0;\n}\n```\n",
        answers: [
            { text: 'A. 56', isCorrect: false },
            { text: 'B. 67', isCorrect: true },
            { text: 'C. 76', isCorrect: false },
            { text: 'D. 57', isCorrect: false }
        ]
    },
    {
        question: "32. In Python, what is the output of the following code?\n\n```\nnumbers = [1, 2, 3, 4, 5]\nfiltered = list(filter(lambda x: x % 2 == 0, numbers))\nprint(filtered)\n```\n",
        answers: [
            { text: 'A. [2, 4]', isCorrect: true },
            { text: 'B. [1, 3, 5]', isCorrect: false },
            { text: 'C. [1, 2, 3, 4, 5]', isCorrect: false },
            { text: 'D. [4]', isCorrect: false }
        ]
    },
    {
        question: "33. Which of the following C++ code snippets correctly creates a dynamic array of integers and deallocates the memory?\n\n1.```\nint* arr = new int[10];\ndelete[] arr;\n```\n2.```\nint* arr = (int*)malloc(10 * sizeof(int));\nfree(arr);\n```\n3.```\nint arr[10];\n```\n4.```\nint* arr = new int[10];\ndelete arr;\n```\n",
        answers: [
            { text: 'A. Option 1', isCorrect: true },
            { text: 'B. Option 2', isCorrect: false },
            { text: 'C. Option 3', isCorrect: false },
            { text: 'D. Option 4', isCorrect: false }
        ]
    },
    {
        question: "34. What will be the output of the Java code snippet below?\n\n```\npublic class Main {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        String s2 = new String(\"Hello\");\n        System.out.println(s1 == s2);\n    }\n}\n```\n",
        answers: [
            { text: 'A. true', isCorrect: false },
            { text: 'B. false', isCorrect: true },
            { text: 'C. Compilation Error', isCorrect: false },
            { text: 'D. Runtime Error', isCorrect: false }
        ]
    },
    {
        question: "35. What is the output of the code snippet in C?\n\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    return 0;\n}",
        answers: [
            { text: 'A. 5', isCorrect: true },
            { text: 'B. 6', isCorrect: false },
            { text: 'C. 4', isCorrect: false },
            { text: 'D. Undefined', isCorrect: false }
        ]
    },
    {
        question: "36. Which keyword is used to inherit a class in C++?\n\nA) extend\nB) inherits\nC) class\nD) using\n\nPlease select the appropriate option.",
        answers: [
            { text: 'A. extend', isCorrect: false },
            { text: 'B. inherits', isCorrect: false },
            { text: 'C. class', isCorrect: false },
            { text: 'D. using', isCorrect: true }
        ]
    },
    {
        question: "37. What does the 'self' keyword represent in Python?\n\nA) A constant value\nB) A reserved keyword\nC) The current instance of the class\nD) A global variable\n\nPlease select the appropriate option.",
        answers: [
            { text: 'A. A constant value', isCorrect: false },
            { text: 'B. A reserved keyword', isCorrect: false },
            { text: 'C. The current instance of the class', isCorrect: true },
            { text: 'D. A global variable', isCorrect: false }
        ]
    },
    {
        question: "38. Which keyword is used to define an interface in Java?\n\nA) interface\nB) implements\nC) class\nD) abstract\n\nPlease select the appropriate option.",
        answers: [
            { text: 'A. interface', isCorrect: true },
            { text: 'B. implements', isCorrect: false },
            { text: 'C. class', isCorrect: false },
            { text: 'D. abstract', isCorrect: false }
        ]
    },
    {
        question: "39. If a person walks at 4 km/hour, he reaches his destination 15 minutes late. If he walks at 5 km/hour, he reaches 15 minutes early. Find the distance of his destination.",
        answers: [
            { text: 'A. 20 km', isCorrect: false },
            { text: 'B. 30 km', isCorrect: true },
            { text: 'C. 40 km', isCorrect: false },
            { text: 'D. 50 km', isCorrect: false }
        ]
    },
    {
        question: "40. If X = 5, Y = 7, and Z = 9, then what is X * Y - Z?",
        answers: [
            { text: 'A. 25', isCorrect: false },
            { text: 'B. 28', isCorrect: true },
            { text: 'C. 30', isCorrect: false },
            { text: 'D. 32', isCorrect: false }
        ]
    },
    {
        question: "41. Which one of the given responses would be a meaningful order of the following words?",
        answers: [
            { text: 'A. Earth, Moon, Sun, Mars', isCorrect: false },
            { text: 'B. Sun, Earth, Moon, Mars', isCorrect: true },
            { text: 'C. Mars, Moon, Earth, Sun', isCorrect: false },
            { text: 'D. Moon, Mars, Sun, Earth', isCorrect: false }
        ]
    },
    {
        question: "42. Statements: Some trees are plants. All plants are flowers. Conclusions: I. Some flowers are trees. II. All trees are flowers.",
        answers: [
            { text: 'A. Only Conclusion I follows.', isCorrect: true },
            { text: 'B. Only Conclusion II follows.', isCorrect: false },
            { text: 'C. Both Conclusion I and II follow.', isCorrect: false },
            { text: 'D. Neither Conclusion I nor II follows.', isCorrect: false }
        ]
    },
    {
        question: "43. If 2x - 3y = 12 and x + 4y = 7, what is the value of x?",
        answers: [
            { text: 'A. 5', isCorrect: false },
            { text: 'B. 6', isCorrect: false },
            { text: 'C. 7', isCorrect: true },
            { text: 'D. 8', isCorrect: false }
        ]
    },
    {
        question: "44. A train travels 150 km in 3 hours. What is its speed in km/h?",
        answers: [
            { text: 'A. 30', isCorrect: true },
            { text: 'B. 45', isCorrect: false },
            { text: 'C. 50', isCorrect: false },
            { text: 'D. 60', isCorrect: false }
        ]
    },
    {
        question: "45. If RED is coded as 672 and BLUE is coded as 9851, how is GREEN coded?",
        answers: [
            { text: 'A. 12534', isCorrect: false },
            { text: 'B. 13452', isCorrect: true },
            { text: 'C. 12345', isCorrect: false },
            { text: 'D. 14532', isCorrect: false }
        ]
    },
    {
        question: "46. If all gizmos are widgets and some widgets are gadgets, which of the following statements must be true?",
        answers: [
            { text: 'A. All gadgets are widgets.', isCorrect: false },
            { text: 'B. Some gizmos are gadgets.', isCorrect: true },
            { text: 'C. All widgets are gizmos.', isCorrect: false },
            { text: 'D. Some gadgets are widgets.', isCorrect: true }
        ]
    },
    {
        question: "47. Identify the noun in the sentence: 'The cat sat on the mat.'",
        answers: [
            { text: 'A. cat', isCorrect: true },
            { text: 'B. on', isCorrect: false },
            { text: 'C. sat', isCorrect: false },
            { text: 'D. the', isCorrect: false }
        ]
    },
    {
        question: "48. What is the plural form of 'child'?",
        answers: [
            { text: 'A. childs', isCorrect: false },
            { text: 'B. childes', isCorrect: false },
            { text: 'C. children', isCorrect: true },
            { text: 'D. childies', isCorrect: false }
        ]
    },
    {
        question: "49. Which of these is a conjunction?",
        answers: [
            { text: 'A. Quickly', isCorrect: false },
            { text: 'B. Although', isCorrect: true },
            { text: 'C. Happy', isCorrect: false },
            { text: 'D. Eat', isCorrect: false }
        ]
    },
    {
        question: "50. What is the past tense of 'run'?",
        answers: [
            { text: 'A. runned', isCorrect: false },
            { text: 'B. ran', isCorrect: true },
            { text: 'C. run', isCorrect: false },
            { text: 'D. running', isCorrect: false }
        ]
    },
];

export default quizData;
