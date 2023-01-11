# Rick and Morty

### Introduction 
This is a SPA Rick and Morty app built with the following stack:

- `typescript`
- `react`
- `react-router-domv6`
- `grapql`
- `apolloClient`
- `polished`
- `date-fns`
- `styled-components`

### To run application

- ```npm i```

- ```npm start```

There is no ENV files as rick and Morty has a public api: 

 - documentation - https://rickandmortyapi.com/documentation/
 - graphql playground - https://rickandmortyapi.com/graphql
 
There are no mutations just queries 😄

Now you can explore the app.

### How it works (Home)

### 1) on initial page load all characters from the show are displayed:

The connection to the rick and morty graph is established by the ApolloProvider which allows us to use the apollo hooks throughout the app.

#### Screenshots provided

##### Homepage

- on initial home route all characters are displayed
- response only returns 20 characters max
- By adding the pagination value to state, prev/next button can know what pages to query when pressed
- query params updated via use useSearchParams provided by react-router-dome

#### Desktop
![Screenshot 2023-01-11 at 13 51 09](https://user-images.githubusercontent.com/79341629/211823480-a7a341ca-6a1d-4614-aab7-41fc5371d384.png)


#### Mobile
![Screenshot 2023-01-11 at 13 51 54](https://user-images.githubusercontent.com/79341629/211823510-61bea7a6-6182-4a52-a1e8-898eb7cc275d.png)



##### Search page

- on initial search route nothing is displayed unless acceptable params are provided in the url.
- query params updated via use useSearchParams provided by react-router-dome
- useeffect that only is executed once (if it is executed it will decide whether to make inital call or not)
- has pagination for any response that has over 20 characters.


#### Desktop
- when no params
![Screenshot 2023-01-11 at 13 52 48](https://user-images.githubusercontent.com/79341629/211823761-ecbeaae6-2477-4f71-8e65-3b7087a0f72f.png)



- when params and response has over 20 characters (pagination is added)
![Screenshot 2023-01-11 at 13 53 00](https://user-images.githubusercontent.com/79341629/211823796-344e4160-968a-4d32-a380-d6ccdfde8179.png)

#### Mobile
![Screenshot 2023-01-11 at 13 53 10](https://user-images.githubusercontent.com/79341629/211823861-03a775c6-4e0d-4176-9aeb-ffdfdf3a80f8.png)


## Improvements


- Lazy load route - however this is a small application so not much benefit there
- automation test - to set up cypress for automation
- unit test - Set up unit tests for each component to see if components are rendered accordingly, or at the very minimal snapshots.
- better design with figma mockups

- profile card route for when a card is clicked - displaying more information about character.




----------------------------
Things covered: 

- [x] - List Rick & Morty characters using pagination. Page size should be limited to 20 items per page.
- [x] - Each list entry page would include character information and pictures.
- [x] - Use simple "Previous" and "Next" buttons for pagination.
- [x] - Add the ability to filter by character name and gender.
- [x] - Routing: When the page or filter changes, we want you to update the URL to include the page number and filter. If the user refreshes or shares the link of the page, the page should be at the correct position and filters should be pre-selected.
