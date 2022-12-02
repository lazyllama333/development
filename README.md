# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`
https://lazyllama333.github.io/development
### Goal and Value of the Application
The goal of this application is to allow users to find their ideal boba drink by filtering by category of drinks and 
price ranges. A user can also click on the sort from lowest to highest checkbox to find the cheapest drinks. This will allow users to find a drink in their budget. A user can also favorite a drink and if they end up changing their mind they can unfavorite. The favorites list totals up the prices of the drinks in the list. 
### Usability Principles Considered
The usability principle here would be Efficiency since the layout is very simple and the process is very straightforward. It is also learnability since the interface is really easy to understand. 
### Organization of Components
I organized it into three components: the app component, the BobaItem component, the cart component, and the nav bar component. 
### How Data is Passed Down Through Components
I passed in the favoritesList to the cart component (the cart is the favorites list visually represented), the items to the BobaItem component, and the filters and sorted boolean to the nav bar component. 
### How the User Triggers State Changes
The user can trigger state changes by clicking the add to favorites button, deleting from favorites, and selecting the filters and sorted checkbox. 
