# Medstudent AI

![Alt text](./public/aimedstudent.gif?raw=true "Title")

Medstudent AI is a web application designed to be a supplemental clinical training tool for first/second year medical students, by incorporating the Infermedica API. This app allows users to input patient information (age, gender, chief complaint, additional presenting symptoms, risk factors, labs) and provides several options including: red flag symptoms to ask, additional clarification questions, and a differential diagnosis. 

### Instructions: 
* Start by entering patient age, gender, and chief complaint. From here you will have several options:
 1) Red Flag Symptoms: Click on the red flag icon to the left of the selected chief complaint. Based on the current patient information, the app will provide a list of "red flag" symptoms for you to verify with the patient. These can be considered high-risk symptoms that you want to rule-out in the initial encounter. 
 2) Additional symptoms/risk factors: If you are already aware or have asked the patient for additional symptoms/pre-existing risk factors, you can enter them into the note clicking the magnifying glass icon next to "Additional Symptoms" or "Risk Factors". This will bring up a pop-up container where you can search and add symptoms/risk factors. By adding my symptoms/risk factors, you provide more details to the Infermedica API which will return a more accurate differential diagnosis. 
     Once you have added at least 2 additional symptoms, you will see a button "Suggest Symptoms" appear. Suggest symptoms will prompt additional symptoms for you to ask the patient, similar to the red flag symptoms. 
 3) Labs: If you are aware of patient labs, you can enter them in by clicking the magnifying glass icon next to "Labs". 
##### Generate Differential: 
  * Once you have entered in patient age, sex, chief complaint, and at least 5 additional symptoms, the "Generate Differential" button will become available. Clicking this will take all the provided information and generate a differential diagnosis as well as follow-up questions to ask the patient. 

##### Differential Diagnosis: 
  * The generated differential is ranked based on probability (most likely to least likely). The likelihood of each potential diagnosis is indicated by the associated colored bar (range 0-100%)
    * Red: (0-25%)
    * Yellow: (25-50%)
    * Green: (>50%)
##### Explain:
  * For diagnoses with a probability >50%, a question mark icon will appear. Clicking this icon will provide the rationale for the corresponding diagnosis (e.g., which of the provided evidence is supportive/conflicting)

##### Additional Questions: 
  * Generating a differential diagnosis will also prompt a follow-up question which will help to clarifiy your differential. Clicking on the associated question mark icon will provide a rationale for the question (e.g., "This question helps determine whether "Diagnosed asthma" might be one of the causes of your symptoms.")


#### Project Log: (9/29/2020 - 10/17/2020)

###### 10/17 Update:
Finished all the API endpoint connections. Still not too happy with the overall app UI, but the app works and I figured it was time to move on. I plan to make a tutorial video, which will also serve as a documentation of the working app once the free API requests run out. This probably would be useful for early medical students, but I personally don't have the funds. 

Difficulties I encountered included: 
* I got busier with school in the last two weeks, so it was an interesting experience only being able to do small updates/changes each day. This allowed me to break down the overall app into smaller projects for each day. 

Random Observations: 
* I'm becoming more familiar with react hooks and being able to connect React states in separate components. 

###### 10/3 Update:
This was my first project working with APIs. Working with the Infermedica API seemed like a great way to incorporate my medical background. 

Difficulties I encountered included: 
* First time working with an API. The Infermedica API has various request endpoints and varying response formats, so it was definitely a challenge having to read through the documentation. Interestingly, Infermedica only allows for 2,000 free API requests, so this definitely forced me to read through the documentation and my code carefully to minimize error. 
* Keeping my React components organized, especially with all the prop drilling (considered looking into Redux but figured I should get a firm grasp of React states first)
* Ran into a couple issues where I needed two lower level components to communicate with one another. Eventually came up with a solution by connecting the lower components via a common state in a higher component shared by the two lower level components. 
* Starting to incorporate useEffect to run functions only when specific states change. Not fully comfortable with the concept of memory leaks during unmounts. 

Random Observations: 
* Becoming very comfortable with array/object manipulation (setState, restructuring state values for API requests/responses, looping through array lists to generate individual components) 
* Beginning to have a firm understanding of the useState hook, still need to work on useEffect 
* Bootstrap has been great in helping to expediate the design process. While I plan to customize the UI once I'm finished with the code, it's nice having Bootstrap-styled components for now to get a general sense of the layout without spending time on CSS. 
* Starting to appreciate the complexity of well made search bars. I incorporated fuzzy search to help in structuring lab search results, but there's definitely lots of limitations to this text search method. 
