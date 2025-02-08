# Recipe App with Favorites and Filters

## Description
The Recipe App is a web application built using ReactJS and Redux that allows users to browse, search, and save their favorite recipes. Users can filter recipes based on various criteria, such as dietary preferences and meal types, to quickly find what they are looking for.

## Features
- **Recipe Collection:** Display a collection of recipes with titles, images, and brief descriptions.
- **Search Functionality:** Search recipes based on keywords, ingredients, or dietary criteria (e.g., vegetarian, gluten-free).
- **Recipe Details:** View detailed information including ingredients, instructions, preparation time, and serving size.
- **Favorites:** Mark recipes as favorites and save them to a personalized list.
- **Filters:** Filter recipes by categories (e.g., breakfast, lunch, dinner) or dietary restrictions.
- **State Management with Redux:** Efficiently manage the app's state using Redux for better scalability and performance.

## Technologies Used
- **Frontend:** ReactJS, Redux
- **Styling:** CSS/SCSS or styled-components (choose one based on preference)

## API Integration
The application fetches recipe data from the **Edamam API**. Example API request:
```
https://api.edamam.com/search?q=pizza&app_id=*********&app_key=************&from=0&to=50
```

## Installation
1. Clone the repository:
```

```
2. Navigate to the project directory:
```
cd recipe-app
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run start
```

## Project Structure
- **src/components:** Contains reusable UI components.
- **src/redux:** Contains Redux setup, actions, and reducers.
- **src/pages:** Contains page components (e.g., Home, Favorites, Recipe Details).

## Usage
- Browse recipes from the main page.
- Use the search bar to find specific recipes.
- Click on a recipe card to view detailed information.
- Click the heart icon to add/remove recipes from your favorites.
- Use the filter panel to narrow down recipes based on categories or dietary preferences.

## Contributing
Feel free to submit pull requests or open issues for suggestions and improvements.

## License
This project is licensed under the MIT License.


