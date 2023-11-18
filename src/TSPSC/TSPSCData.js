const quizData = [
    {
        question: "1. What is the capital city of Telangana?",
        answers: [
            { text: 'A. Warangal', isCorrect: false },
            { text: 'B. Hyderabad', isCorrect: true },
            { text: 'C. Karimnagar', isCorrect: false },
            { text: 'D. Nizamabad', isCorrect: false }
        ]
    },
    {
        question: "2. Who was the first Chief Minister of Telangana?",
        answers: [
            { text: 'A. K. Chandrashekar Rao', isCorrect: true },
            { text: 'B. Y. S. Rajasekhara Reddy', isCorrect: false },
            { text: 'C. N. Chandrababu Naidu', isCorrect: false },
            { text: 'D. K. Rosaiah', isCorrect: false }
        ]
    },
    {
        question: "3. What is the chemical symbol for gold?",
        answers: [
            { text: 'A. Au', isCorrect: true },
            { text: 'B. Ag', isCorrect: false },
            { text: 'C. Pt', isCorrect: false },
            { text: 'D. Hg', isCorrect: false }
        ]
    },
    {
        question: "4. Who developed the first successful polio vaccine?",
        answers: [
            { text: 'A. Edward Jenner', isCorrect: false },
            { text: 'B. Jonas Salk', isCorrect: true },
            { text: 'C. Louis Pasteur', isCorrect: false },
            { text: 'D. Alexander Fleming', isCorrect: false }
        ]
    },
    {
        question: "5. When was Telangana officially formed as a state in India?",
        answers: [
            { text: 'A. 2013', isCorrect: true },
            { text: 'B. 2009', isCorrect: false },
            { text: 'C. 2014', isCorrect: false },
            { text: 'D. 2010', isCorrect: false }
        ]
    },
    {
        question: "6. Who was the leader of the Telangana movement?",
        answers: [
            { text: 'A. P. V. Narasimha Rao', isCorrect: false },
            { text: 'B. K. Chandrashekar Rao', isCorrect: true },
            { text: 'C. N. T. Rama Rao', isCorrect: false },
            { text: 'D. Y. S. Rajasekhara Reddy', isCorrect: false }
        ]
    },
    {
        question: "7. What is the official language of Telangana?",
        answers: [
            { text: 'A. Telugu', isCorrect: true },
            { text: 'B. Urdu', isCorrect: false },
            { text: 'C. Kannada', isCorrect: false },
            { text: 'D. Marathi', isCorrect: false }
        ]
    },
    {
        question: "8. Which festival is celebrated during 'Bonalu' in Telangana?",
        answers: [
            { text: 'A. Bathukamma', isCorrect: false },
            { text: 'B. Dasara', isCorrect: false },
            { text: 'C. Diwali', isCorrect: false },
            { text: 'D. Varalakshmi Vratam', isCorrect: true }
        ]
    },
    {
        question: "9. Which river is known as the 'Dakshin Ganga'?",
        answers: [
            { text: 'A. Krishna', isCorrect: true },
            { text: 'B. Godavari', isCorrect: false },
            { text: 'C. Tungabhadra', isCorrect: false },
            { text: 'D. Cauvery', isCorrect: false }
        ]
    },
    {
        question: "10. The Golconda Fort is located in which city of Telangana?",
        answers: [
            { text: 'A. Hyderabad', isCorrect: true },
            { text: 'B. Warangal', isCorrect: false },
            { text: 'C. Karimnagar', isCorrect: false },
            { text: 'D. Nizamabad', isCorrect: false }
        ]
    },
    {
        question: "11. Who was the founder of the Hyderabad State?",
        answers: [
            { text: 'A. Mir Qamar-ud-din Siddiqi', isCorrect: true },
            { text: 'B. Bahadur Yar Jung', isCorrect: false },
            { text: 'C. Bhagya Reddy Varma', isCorrect: false },
            { text: 'D. Alluri Sitarama Raju', isCorrect: false }
        ]
    },
    {
        question: "12. What was the ruling dynasty during the time of the Kakatiya Empire?",
        answers: [
            { text: 'A. Chola dynasty', isCorrect: false },
            { text: 'B. Rashtrakuta dynasty', isCorrect: false },
            { text: 'C. Chalukya dynasty', isCorrect: false },
            { text: 'D. Kakatiya dynasty', isCorrect: true }
        ]
    },
    {
        question: "13. Which dance form is native to Telangana?",
        answers: [
            { text: 'A. Bharatanatyam', isCorrect: false },
            { text: 'B. Kuchipudi', isCorrect: false },
            { text: 'C. Perini Shivatandavam', isCorrect: true },
            { text: 'D. Kathak', isCorrect: false }
        ]
    },
    {
        question: "14. Who is known as the 'Father of Telangana Movement'?",
        answers: [
            { text: 'A. P. V. Narasimha Rao', isCorrect: false },
            { text: 'B. K. Chandrashekar Rao', isCorrect: false },
            { text: 'C. K. V. Ranga Reddy', isCorrect: true },
            { text: 'D. N. T. Rama Rao', isCorrect: false }
        ]
    },
    {
        question: "15. What is the official emblem of Telangana State?",
        answers: [
            { text: 'A. Charminar', isCorrect: false },
            { text: 'B. Kakatiya Thoranam', isCorrect: false },
            { text: 'C. Kakatiya Seal', isCorrect: true },
            { text: 'D. Qutb Shahi Tombs', isCorrect: false }
        ]
    },
    {
        question: "16. Who is known as the 'People's President' of India?",
        answers: [
            { text: 'A. Dr. A. P. J. Abdul Kalam', isCorrect: true },
            { text: 'B. Dr. Rajendra Prasad', isCorrect: false },
            { text: 'C. Indira Gandhi', isCorrect: false },
            { text: 'D. Jawaharlal Nehru', isCorrect: false }
        ]
    },
    {
        question: "17. Which Indian state is known as the 'Land of Five Rivers'?",
        answers: [
            { text: 'A. Haryana', isCorrect: false },
            { text: 'B. Punjab', isCorrect: true },
            { text: 'C. Rajasthan', isCorrect: false },
            { text: 'D. Maharashtra', isCorrect: false }
        ]
    },
    {
        question: "18. Who was the first Prime Minister of India?",
        answers: [
            { text: 'A. Jawaharlal Nehru', isCorrect: true },
            { text: 'B. Sardar Patel', isCorrect: false },
            { text: 'C. Indira Gandhi', isCorrect: false },
            { text: 'D. Rajendra Prasad', isCorrect: false }
        ]
    },
    {
        question: "19. The Indian Constitution was adopted on which date?",
        answers: [
            { text: 'A. January 15, 1950', isCorrect: false },
            { text: 'B. August 15, 1947', isCorrect: false },
            { text: 'C. November 26, 1949', isCorrect: true },
            { text: 'D. January 26, 1947', isCorrect: false }
        ]
    },
    {
        question: "20. What is the traditional attire of Telangana women often worn during festivals?",
        answers: [
            { text: 'A. Dhoti', isCorrect: false },
            { text: 'B. Pochampally Sari', isCorrect: true },
            { text: 'C. Sherwani', isCorrect: false },
            { text: 'D. Lungi', isCorrect: false }
        ]
    },
    {
        question: "21. What is the traditional dance form of Telangana known for its vibrant and graceful movements?",
        answers: [
            { text: 'A. Bharatanatyam', isCorrect: false },
            { text: 'B. Kathak', isCorrect: false },
            { text: 'C. Kuchipudi', isCorrect: false },
            { text: 'D. Perini Sivatandavam', isCorrect: true }
        ]
    },
    {
        question: "22. Who is known as the 'Father of the Indian Constitution'?",
        answers: [
            { text: 'A. Dr. B.R. Ambedkar', isCorrect: true },
            { text: 'B. Mahatma Gandhi', isCorrect: false },
            { text: 'C. Jawaharlal Nehru', isCorrect: false },
            { text: 'D. Sardar Vallabhbhai Patel', isCorrect: false }
        ]
    },
    {
        question: "23. Which river is known as the 'Sorrow of Bengal'?",
        answers: [
            { text: 'A. Yamuna', isCorrect: false },
            { text: 'B. Ganges', isCorrect: true },
            { text: 'C. Brahmaputra', isCorrect: false },
            { text: 'D. Godavari', isCorrect: false }
        ]
    },
    {
        question: "24. Who was the first Prime Minister of India?",
        answers: [
            { text: 'A. Jawaharlal Nehru', isCorrect: true },
            { text: 'B. Lal Bahadur Shastri', isCorrect: false },
            { text: 'C. Indira Gandhi', isCorrect: false },
            { text: 'D. Sardar Vallabhbhai Patel', isCorrect: false }
        ]
    },
    {
        question: "25. When was the 'Indian National Congress' formed?",
        answers: [
            { text: 'A. 1885', isCorrect: true },
            { text: 'B. 1901', isCorrect: false },
            { text: 'C. 1920', isCorrect: false },
            { text: 'D. 1950', isCorrect: false }
        ]
    },
    {
        question: "26. What is the traditional attire of Telangana women?",
        answers: [
            { text: 'A. Dhoti', isCorrect: false },
            { text: 'B. Saree', isCorrect: true },
            { text: 'C. Kurta-Pajama', isCorrect: false },
            { text: 'D. Lungi', isCorrect: false }
        ]
    },
    {
        question: "27. Which dance form is popular in Telangana?",
        answers: [
            { text: 'A. Bharatanatyam', isCorrect: false },
            { text: 'B. Kuchipudi', isCorrect: false },
            { text: 'C. Perini Sivatandavam', isCorrect: true },
            { text: 'D. Odissi', isCorrect: false }
        ]
    },
    {
        question: "28. What is the greenhouse gas primarily responsible for global warming?",
        answers: [
            { text: 'A. Methane', isCorrect: false },
            { text: 'B. Carbon Dioxide', isCorrect: true },
            { text: 'C. Nitrous Oxide', isCorrect: false },
            { text: 'D. Ozone', isCorrect: false }
        ]
    },
    {
        question: "29. Which is the first National Park established in India?",
        answers: [
            { text: 'A. Jim Corbett National Park', isCorrect: true },
            { text: 'B. Bandipur National Park', isCorrect: false },
            { text: 'C. Kaziranga National Park', isCorrect: false },
            { text: 'D. Ranthambore National Park', isCorrect: false }
        ]
    },
    {
        question: "30. Which river flows through the city of Hyderabad?",
        answers: [
            { text: 'A. Krishna', isCorrect: false },
            { text: 'B. Godavari', isCorrect: true },
            { text: 'C. Musi', isCorrect: false },
            { text: 'D. Tungabhadra', isCorrect: false }
        ]
    },
    {
        question: "31. Who is known as the 'Father of the Nation' in India?",
        answers: [
            { text: 'A. Mahatma Gandhi', isCorrect: true },
            { text: 'B. Jawaharlal Nehru', isCorrect: false },
            { text: 'C. Sardar Vallabhbhai Patel', isCorrect: false },
            { text: 'D. Subhash Chandra Bose', isCorrect: false }
        ]
    },
    {
        question: "32. The Red Fort is located in which city in India?",
        answers: [
            { text: 'A. Delhi', isCorrect: true },
            { text: 'B. Agra', isCorrect: false },
            { text: 'C. Jaipur', isCorrect: false },
            { text: 'D. Mumbai', isCorrect: false }
        ]
    },
    {
        question: "33. Who was the first Prime Minister of India?",
        answers: [
            { text: 'A. Lal Bahadur Shastri', isCorrect: false },
            { text: 'B. Indira Gandhi', isCorrect: false },
            { text: 'C. Jawaharlal Nehru', isCorrect: true },
            { text: 'D. Rajiv Gandhi', isCorrect: false }
        ]
    },
    {
        question: "34. What is the traditional attire worn during 'Bathukamma' festival in Telangana?",
        answers: [
            { text: 'A. Saree', isCorrect: true },
            { text: 'B. Salwar Kameez', isCorrect: false },
            { text: 'C. Lehenga', isCorrect: false },
            { text: 'D. Ghagra Choli', isCorrect: false }
        ]
    },
    {
        question: "35. Which dance form is well-known in Telangana?",
        answers: [
            { text: 'A. Bharatanatyam', isCorrect: false },
            { text: 'B. Kathak', isCorrect: false },
            { text: 'C. Perini Sivatandavam', isCorrect: true },
            { text: 'D. Odissi', isCorrect: false }
        ]
    },
    {
        question: "36. What is the population of Telangana according to the 2011 Census?",
        answers: [
            { text: 'A. 35 million', isCorrect: false },
            { text: 'B. 41 million', isCorrect: true },
            { text: 'C. 48 million', isCorrect: false },
            { text: 'D. 52 million', isCorrect: false }
        ]
    },
    {
        question: "37. The Golconda Fort is in which district of Telangana?",
        answers: [
            { text: 'A. Hyderabad', isCorrect: false },
            { text: 'B. Nalgonda', isCorrect: false },
            { text: 'C. Ranga Reddy', isCorrect: false },
            { text: 'D. Mahbubnagar', isCorrect: true }
        ]
    },
    {
        question: "38. Who was the last ruler of the Asaf Jahi dynasty, also known as the 7th Nizam of Hyderabad?",
        answers: [
            { text: 'A. Mir Osman Ali Khan', isCorrect: true },
            { text: 'B. Mir Mahbub Ali Khan', isCorrect: false },
            { text: 'C. Mir Tahniyat Ali Khan', isCorrect: false },
            { text: 'D. Mir Akbar Ali Khan', isCorrect: false }
        ]
    },
    {
        question: "39. The 'Operation Polo' was related to the annexation of Hyderabad. Who was the first military Governor of Hyderabad?",
        answers: [
            { text: 'A. Major General Jayanto Nath Chaudhuri', isCorrect: true },
            { text: 'B. Major General Syed Ahmed El Edroos', isCorrect: false },
            { text: 'C. Major General Syed Ahmed Akbar', isCorrect: false },
            { text: 'D. Major General Syed Ahmed Arif', isCorrect: false }
        ]
    },
    {
        question: "40. Which dance form is considered the state dance of Telangana?",
        answers: [
            { text: 'A. Bharatanatyam', isCorrect: false },
            { text: 'B. Kathak', isCorrect: false },
            { text: 'C. Perini Shivatandavam', isCorrect: true },
            { text: 'D. Kuchipudi', isCorrect: false }
        ]
    },
    {
        question: "41. Who is known as the father of the 'Bangaru Telangana' movement?",
        answers: [
            { text: 'A. K. Chandrashekar Rao', isCorrect: true },
            { text: 'B. Y. S. Rajasekhara Reddy', isCorrect: false },
            { text: 'C. N. Chandrababu Naidu', isCorrect: false },
            { text: 'D. K. Rosaiah', isCorrect: false }
        ]
    },
    {
        question: "42. The Golconda Fort is located in which city of Telangana?",
        answers: [
            { text: 'A. Hyderabad', isCorrect: true },
            { text: 'B. Warangal', isCorrect: false },
            { text: 'C. Nizamabad', isCorrect: false },
            { text: 'D. Karimnagar', isCorrect: false }
        ]
    },
    {
        question: "43. What was the year when the Telangana Movement intensified significantly?",
        answers: [
            { text: 'A. 2008', isCorrect: false },
            { text: 'B. 2010', isCorrect: false },
            { text: 'C. 2014', isCorrect: true },
            { text: 'D. 2016', isCorrect: false }
        ]
    },
    {
        question: "44. Who was the leader of the Telangana Rebellion (Armed Struggle)?",
        answers: [
            { text: 'A. P. V. Narasimha Rao', isCorrect: false },
            { text: 'B. K. Chandrashekar Rao', isCorrect: false },
            { text: 'C. Prof. Jayashankar', isCorrect: true },
            { text: 'D. Bandaru Dattatreya', isCorrect: false }
        ]
    },
    {
        question: "45. Which Indian state was Telangana part of before its formation?",
        answers: [
            { text: 'A. Andhra Pradesh', isCorrect: true },
            { text: 'B. Karnataka', isCorrect: false },
            { text: 'C. Maharashtra', isCorrect: false },
            { text: 'D. Tamil Nadu', isCorrect: false }
        ]
    },
    {
        question: "46. Which is the folk dance form of Telangana involving women balancing pots on their heads?",
        answers: [
            { text: 'A. Kuchipudi', isCorrect: false },
            { text: 'B. Lambadi', isCorrect: false },
            { text: 'C. Perini Thandavam', isCorrect: false },
            { text: 'D. Bathukamma', isCorrect: true }
        ]
    },
    {
        question: "47. What is the popular Telangana festival that worships the goddess Mahakali?",
        answers: [
            { text: 'A. Bonalu', isCorrect: true },
            { text: 'B. Dasara', isCorrect: false },
            { text: 'C. Diwali', isCorrect: false },
            { text: 'D. Ugadi', isCorrect: false }
        ]
    },
    {
        question: "48. Which river flows through the city of Hyderabad?",
        answers: [
            { text: 'A. Godavari', isCorrect: false },
            { text: 'B. Musi', isCorrect: true },
            { text: 'C. Krishna', isCorrect: false },
            { text: 'D. Tungabhadra', isCorrect: false }
        ]
    },
    {
        question: "49. Who is known as the 'People's President' of India?",
        answers: [
            { text: 'A. Dr. A. P. J. Abdul Kalam', isCorrect: true },
            { text: 'B. Dr. Rajendra Prasad', isCorrect: false },
            { text: 'C. Sardar Vallabhbhai Patel', isCorrect: false },
            { text: 'D. Indira Gandhi', isCorrect: false }
        ]
    },
    {
        question: "50. In which year was the Telangana State officially formed?",
        answers: [
            { text: 'A. 2008', isCorrect: false },
            { text: 'B. 2010', isCorrect: false },
            { text: 'C. 2014', isCorrect: true },
            { text: 'D. 2016', isCorrect: false }
        ]
    },
    {
        question: "51. Who was the first Chief Minister of Telangana?",
        answers: [
            { text: 'A. N. Chandrababu Naidu', isCorrect: false },
            { text: 'B. K. Chandrashekar Rao', isCorrect: true },
            { text: 'C. Y. S. Rajasekhara Reddy', isCorrect: false },
            { text: 'D. K. Rosaiah', isCorrect: false }
        ]
    },
    {
        question: "52. What was the capital of the Nizam's Hyderabad State?",
        answers: [
            { text: 'A. Warangal', isCorrect: false },
            { text: 'B. Hyderabad', isCorrect: true },
            { text: 'C. Nizamabad', isCorrect: false },
            { text: 'D. Karimnagar', isCorrect: false }
        ]
    },
    {
        question: "53. Who was the last Nizam of Hyderabad?",
        answers: [
            { text: 'A. Mir Osman Ali Khan', isCorrect: true },
            { text: 'B. Qamar-ud-din Khan', isCorrect: false },
            { text: 'C. Bahadur Yar Jung', isCorrect: false },
            { text: 'D. Sardar Patel', isCorrect: false }
        ]
    },
    {
        question: "54. Who is often referred to as the 'Father of the Indian Constitution'?",
        answers: [
            { text: 'A. Mahatma Gandhi', isCorrect: false },
            { text: 'B. Jawaharlal Nehru', isCorrect: false },
            { text: 'C. Dr. B. R. Ambedkar', isCorrect: true },
            { text: 'D. Sardar Vallabhbhai Patel', isCorrect: false }
        ]
    },
    {
        question: "55. What is the term for the political head of a municipal corporation in India?",
        answers: [
            { text: 'A. Mayor', isCorrect: true },
            { text: 'B. Governor', isCorrect: false },
            { text: 'C. Chief Minister', isCorrect: false },
            { text: 'D. Prime Minister', isCorrect: false }
        ]
    },
    {
        question: "56. Which classical dance form is associated with Telangana?",
        answers: [
            { text: 'A. Kathak', isCorrect: false },
            { text: 'B. Bharatanatyam', isCorrect: false },
            { text: 'C. Kuchipudi', isCorrect: false },
            { text: 'D. Perini Sivatandavam', isCorrect: true }
        ]
    },
    {
        question: "57. What is the traditional attire of women in Telangana known as?",
        answers: [
            { text: 'A. Sari', isCorrect: false },
            { text: 'B. Lehenga', isCorrect: false },
            { text: 'C. Pochampally Sari', isCorrect: true },
            { text: 'D. Anarkali Suit', isCorrect: false }
        ]
    },
    {
        question: "58. Which festival is celebrated as the state festival of Telangana?",
        answers: [
            { text: 'A. Diwali', isCorrect: false },
            { text: 'B. Holi', isCorrect: false },
            { text: 'C. Bathukamma', isCorrect: true },
            { text: 'D. Navratri', isCorrect: false }
        ]
    },
    {
        question: "59. What is the official language of Telangana?",
        answers: [
            { text: 'A. Telugu', isCorrect: true },
            { text: 'B. Urdu', isCorrect: false },
            { text: 'C. Kannada', isCorrect: false },
            { text: 'D. Marathi', isCorrect: false }
        ]
    },
    {
        question: "60. What is the official flower of Telangana?",
        answers: [
            { text: 'A. Tangedu', isCorrect: true },
            { text: 'B. Jasmine', isCorrect: false },
            { text: 'C. Sunflower', isCorrect: false },
            { text: 'D. Lotus', isCorrect: false }
        ]
    },
    {
        question: "61. Who is known as the 'Telangana Gandhi'?",
        answers: [
            { text: 'A. K. Chandrashekar Rao', isCorrect: false },
            { text: 'B. P. V. Narasimha Rao', isCorrect: false },
            { text: 'C. Kaloji Narayana Rao', isCorrect: true },
            { text: 'D. Y. S. Rajasekhara Reddy', isCorrect: false }
        ]
    },
    {
        question: "62. What is the historical Golconda Fort known for?",
        answers: [
            { text: 'A. Pearl industry', isCorrect: false },
            { text: 'B. Diamond industry', isCorrect: true },
            { text: 'C. Gold mining', isCorrect: false },
            { text: 'D. Silk trade', isCorrect: false }
        ]
    },
    {
        question: "63. In which year was the Kakatiya Dynasty founded?",
        answers: [
            { text: 'A. 900 CE', isCorrect: false },
            { text: 'B. 1083 CE', isCorrect: true },
            { text: 'C. 1300 CE', isCorrect: false },
            { text: 'D. 1452 CE', isCorrect: false }
        ]
    },
    {
        question: "64. Who has the authority to create new All India Services?",
        answers: [
            { text: 'A. Union Cabinet', isCorrect: true },
            { text: 'B. President', isCorrect: false },
            { text: 'C. Prime Minister', isCorrect: false },
            { text: 'D. Parliament', isCorrect: false }
        ]
    },
    {
        question: "65. Who is the ex-officio Chairman of the Rajya Sabha?",
        answers: [
            { text: 'A. Vice President', isCorrect: true },
            { text: 'B. Prime Minister', isCorrect: false },
            { text: 'C. President', isCorrect: false },
            { text: 'D. Speaker of the Lok Sabha', isCorrect: false }
        ]
    },
    {
        question: "66. What is the full form of GST?",
        answers: [
            { text: 'A. Goods and Service Tax', isCorrect: true },
            { text: 'B. General Sales Tax', isCorrect: false },
            { text: 'C. Government State Tax', isCorrect: false },
            { text: 'D. Gross Service Tax', isCorrect: false }
        ]
    },
    {
        question: "67. Who is the present Governor of the Reserve Bank of India?",
        answers: [
            { text: 'A. Raghuram Rajan', isCorrect: false },
            { text: 'B. Urjit Patel', isCorrect: false },
            { text: 'C. Shaktikanta Das', isCorrect: true },
            { text: 'D. D. Subbarao', isCorrect: false }
        ]
    },
    {
        question: "68. What is the currency of India?",
        answers: [
            { text: 'A. Rupee', isCorrect: true },
            { text: 'B. Dollar', isCorrect: false },
            { text: 'C. Yen', isCorrect: false },
            { text: 'D. Euro', isCorrect: false }
        ]
    },
    {
        question: "69. Who is known as the 'Father of the Indian Constitution'?",
        answers: [
            { text: 'A. Mahatma Gandhi', isCorrect: false },
            { text: 'B. B. R. Ambedkar', isCorrect: true },
            { text: 'C. Jawaharlal Nehru', isCorrect: false },
            { text: 'D. Sardar Patel', isCorrect: false }
        ]
    },
    {
        question: "70. Who was the last Nizam of Hyderabad?",
        answers: [
            { text: 'A. Mir Osman Ali Khan', isCorrect: true },
            { text: 'B. Mir Mahbub Ali Khan', isCorrect: false },
            { text: 'C. Mir Akbar Ali Khan', isCorrect: false },
            { text: 'D. Mir Karam Ali Khan', isCorrect: false }
        ]
    },
    {
        question: "71. When was the Telangana Rebellion (Telangana Uprising) against Nizam's rule?",
        answers: [
            { text: 'A. 1948', isCorrect: false },
            { text: 'B. 1946', isCorrect: true },
            { text: 'C. 1950', isCorrect: false },
            { text: 'D. 1952', isCorrect: false }
        ]
    },
    {
        question: "72. Which dance form is popular in Telangana?",
        answers: [
            { text: 'A. Kuchipudi', isCorrect: false },
            { text: 'B. Perini Sivatandavam', isCorrect: true },
            { text: 'C. Bharatanatyam', isCorrect: false },
            { text: 'D. Odissi', isCorrect: false }
        ]
    },
    {
        question: "73. What is the traditional art form of scroll paintings in Telangana called?",
        answers: [
            { text: 'A. Tholu Bommalata', isCorrect: true },
            { text: 'B. Kalamkari', isCorrect: false },
            { text: 'C. Cheriyal Scroll Painting', isCorrect: false },
            { text: 'D. Pochampally Ikat', isCorrect: false }
        ]
    },
    {
        question: "74. What is the minimum age requirement for a person to be eligible for the post of President of India?",
        answers: [
            { text: 'A. 30 years', isCorrect: false },
            { text: 'B. 35 years', isCorrect: false },
            { text: 'C. 25 years', isCorrect: false },
            { text: 'D. 35 years', isCorrect: true }
        ]
    },
    {
        question: "75. Who among the following was the first Governor-General of India?",
        answers: [
            { text: 'A. Lord Canning', isCorrect: false },
            { text: 'B. Lord Dalhousie', isCorrect: false },
            { text: 'C. Lord Mountbatten', isCorrect: false },
            { text: 'D. Lord William Bentinck', isCorrect: true }
        ]
    },
    {
        question: "76. Who founded the 'Indian National Congress'?",
        answers: [
            { text: 'A. Mahatma Gandhi', isCorrect: false },
            { text: 'B. Jawaharlal Nehru', isCorrect: false },
            { text: 'C. Allan Octavian Hume', isCorrect: true },
            { text: 'D. Sardar Patel', isCorrect: false }
        ]
    },
    {
        question: "77. When did the 'Quit India Movement' begin?",
        answers: [
            { text: 'A. 1942', isCorrect: true },
            { text: 'B. 1928', isCorrect: false },
            { text: 'C. 1930', isCorrect: false },
            { text: 'D. 1947', isCorrect: false }
        ]
    },
    {
        question: "78. Who is known as the 'Father of Telangana'?",
        answers: [
            { text: 'A. Kaloji Narayana Rao', isCorrect: true },
            { text: 'B. Prof. Jayashankar', isCorrect: false },
            { text: 'C. PV Narasimha Rao', isCorrect: false },
            { text: 'D. T. Hanumanth Rao', isCorrect: false }
        ]
    },
    {
        question: "79. Which is the largest lake in Telangana?",
        answers: [
            { text: 'A. Hussain Sagar Lake', isCorrect: false },
            { text: 'B. Ramappa Lake', isCorrect: false },
            { text: 'C. Kolleru Lake', isCorrect: false },
            { text: 'D. Nagarjuna Sagar Lake', isCorrect: true }
        ]
    },
    {
        question: "80. Which Indian state shares its boundaries with the maximum number of other states?",
        answers: [
            { text: 'A. Uttar Pradesh', isCorrect: false },
            { text: 'B. Madhya Pradesh', isCorrect: false },
            { text: 'C. Bihar', isCorrect: true },
            { text: 'D. Maharashtra', isCorrect: false }
        ]
    },
    {
        question: "81. What is the capital city of Arunachal Pradesh?",
        answers: [
            { text: 'A. Dispur', isCorrect: false },
            { text: 'B. Itanagar', isCorrect: true },
            { text: 'C. Agartala', isCorrect: false },
            { text: 'D. Aizawl', isCorrect: false }
        ]
    },
    
    {
        question: "82. What is the major cause of ozone layer depletion?",
        answers: [
            { text: 'A. Carbon Dioxide emission', isCorrect: false },
            { text: 'B. Industrial emissions', isCorrect: false },
            { text: 'C. Chlorofluorocarbons', isCorrect: true },
            { text: 'D. Nitrogen Oxide emissions', isCorrect: false }
        ]
    },
    {
        question: "83. What is the second-largest city in Telangana?",
        answers: [
            { text: 'A. Warangal', isCorrect: true },
            { text: 'B. Nizamabad', isCorrect: false },
            { text: 'C. Khammam', isCorrect: false },
            { text: 'D. Karimnagar', isCorrect: false }
        ]
    },
    {
        question: "84. Who wrote the national anthem of India, 'Jana Gana Mana'?",
        answers: [
            { text: 'A. Rabindranath Tagore', isCorrect: true },
            { text: 'B. Bankim Chandra Chatterjee', isCorrect: false },
            { text: 'C. Sarojini Naidu', isCorrect: false },
            { text: 'D. Jawaharlal Nehru', isCorrect: false }
        ]
    },
    {
        question: "85. What was the ruling dynasty during the formation of Telangana State?",
        answers: [
            { text: 'A. Satavahana Dynasty', isCorrect: false },
            { text: 'B. Kakatiya Dynasty', isCorrect: false },
            { text: 'C. Chalukya Dynasty', isCorrect: false },
            { text: 'D. Qutb Shahi Dynasty', isCorrect: true }
        ]
    },
    {
        question: "86. The 'Golkonda Fort' was originally constructed by which dynasty?",
        answers: [
            { text: 'A. Kakatiya Dynasty', isCorrect: false },
            { text: 'B. Chalukya Dynasty', isCorrect: false },
            { text: 'C. Qutb Shahi Dynasty', isCorrect: true },
            { text: 'D. Satavahana Dynasty', isCorrect: false }
        ]
    },
    {
        question: "87. Which dance form is a famous classical dance in Telangana?",
        answers: [
            { text: 'A. Kuchipudi', isCorrect: false },
            { text: 'B. Perini Shivatandavam', isCorrect: true },
            { text: 'C. Bharatanatyam', isCorrect: false },
            { text: 'D. Kathak', isCorrect: false }
        ]
    },
    {
        question: "88. The festival 'Bathukamma' is a floral festival mainly celebrated by which community?",
        answers: [
            { text: 'A. Muslims', isCorrect: false },
            { text: 'B. Christians', isCorrect: false },
            { text: 'C. Hindus', isCorrect: true },
            { text: 'D. Buddhists', isCorrect: false }
        ]
    },
    {
        question: "89. What is the significance of Golconda Fort in Telangana's history?",
        answers: [
            { text: 'A. It was the seat of the Qutb Shahi dynasty', isCorrect: true },
            { text: 'B. It served as a British residency', isCorrect: false },
            { text: 'C. It was a religious pilgrimage site', isCorrect: false },
            { text: 'D. It was the residence of the Nizams', isCorrect: false }
        ]
    },
    {
        question: "90. Which river does not flow through Telangana?",
        answers: [
            { text: 'A. Krishna', isCorrect: false },
            { text: 'B. Godavari', isCorrect: false },
            { text: 'C. Cauvery', isCorrect: true },
            { text: 'D. Musi', isCorrect: false }
        ]
    },
    {
        question: "91. Who was the first ruler of the Asaf Jahi dynasty in Hyderabad?",
        answers: [
            { text: 'A. Mir Qamar-ud-din Khan', isCorrect: true },
            { text: 'B. Mir Osman Ali Khan', isCorrect: false },
            { text: 'C. Mir Nizam Ali Khan', isCorrect: false },
            { text: 'D. Mir Akbar Ali Khan', isCorrect: false }
        ]
    },
    {
        question: "92. Which dynasty ruled over Telangana before the Qutb Shahis?",
        answers: [
            { text: 'A. Kakatiya', isCorrect: true },
            { text: 'B. Satavahana', isCorrect: false },
            { text: 'C. Chalukya', isCorrect: false },
            { text: 'D. Rashtrakuta', isCorrect: false }
        ]
    },
    {
        question: "93. What is the traditional dance form of Telangana known for its energetic performance?",
        answers: [
            { text: 'A. Perini Shivatandavam', isCorrect: true },
            { text: 'B. Kuchipudi', isCorrect: false },
            { text: 'C. Bharatanatyam', isCorrect: false },
            { text: 'D. Kathak', isCorrect: false }
        ]
    },
    {
        question: "94. Which literary work is credited to the Kakatiya dynasty?",
        answers: [
            { text: 'A. Andhra Mahabharatam', isCorrect: true },
            { text: 'B. Ramayana Kalpavrukshamu', isCorrect: false },
            { text: 'C. Amuktamalyada', isCorrect: false },
            { text: 'D. Prataparudra Yashobhushanam', isCorrect: false }
        ]
    },
    {
        question: "95. Which dynasty ruled the region of Telangana before the Asaf Jahis?",
        answers: [
            { text: 'A. Kakatiya dynasty', isCorrect: true },
            { text: 'B. Chalukya dynasty', isCorrect: false },
            { text: 'C. Rashtrakuta dynasty', isCorrect: false },
            { text: 'D. Satavahana dynasty', isCorrect: false }
        ]
    },
    {
        question: "96. Who is known for the 'Jodeghat tax struggle' in Telangana?",
        answers: [
            { text: 'A. Chakali Ailamma', isCorrect: true },
            { text: 'B. Rani Rudrama Devi', isCorrect: false },
            { text: 'C. Swami Ramanand Tirtha', isCorrect: false },
            { text: 'D. Alluri Sitarama Raju', isCorrect: false }
        ]
    },
    {
        question: "97. Which traditional dance form is prominent in Telangana?",
        answers: [
            { text: 'A. Kuchipudi', isCorrect: false },
            { text: 'B. Lambadi', isCorrect: true },
            { text: 'C. Bharatanatyam', isCorrect: false },
            { text: 'D. Kathakali', isCorrect: false }
        ]
    },
    {
        question: "98. Which river is not a part of the river system in Telangana?",
        answers: [
            { text: 'A. Krishna', isCorrect: false },
            { text: 'B. Godavari', isCorrect: false },
            { text: 'C. Tungabhadra', isCorrect: true },
            { text: 'D. Musi', isCorrect: false }
        ]
    },
    {
        question: "99. Where is the famous Bhongir Fort located?",
        answers: [
            { text: 'A. Warangal', isCorrect: false },
            { text: 'B. Nalgonda', isCorrect: true },
            { text: 'C. Mahabubnagar', isCorrect: false },
            { text: 'D. Karimnagar', isCorrect: false }
        ]
    },
    {
        question: "100. Which dynasty ruled the Telangana region before the Asaf Jahi Dynasty?",
        answers: [
            { text: 'A. Kakatiya Dynasty', isCorrect: true },
            { text: 'B. Chalukya Dynasty', isCorrect: false },
            { text: 'C. Rashtrakuta Dynasty', isCorrect: false },
            { text: 'D. Qutb Shahi Dynasty', isCorrect: false }
        ]
    },
];

export default quizData;
