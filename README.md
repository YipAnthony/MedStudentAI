# Medstudent AI

Medstudent AI is a web application designed to be a supplemental clinical training tool for first/second year medical students. This application incorporates the Infermedica API, allowing users to input patient presenting information (age, gender, chief complain, additional presenting symptoms, labs, risk factors) and generates additional questions to ask along with a differential diagnosis. 


#### Project Log: (9/29/2020 - present)

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
