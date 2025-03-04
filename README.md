# Online Dictionary Application

This is an online dictionary application built with TypeScript and React. The application allows users to search for words and provides various features to enhance the user experience.

## Features

- **Search Bar**: Users can input words to search for definitions, synonyms, examples, and translations.
- **Definitions**: Displays the definition of the searched word.
- **Synonyms**: Shows synonyms for the searched word.
- **Examples**: Provides example sentences using the searched word.
- **Autocomplete Suggestions**: Offers suggestions as the user types in the search bar.
- **Favorites**: Allows users to view and manage their favorite words.
- **Translations**: Provides translations of the searched word in Portuguese.
- **Caching**: Caches results for faster searches.
- **Public Dictionary API Integration**: Utilizes a public dictionary API to fetch data.

## Project Structure

```
my-dictionary
├── src
│   ├── components
│   │   ├── Body.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Autocomplete.tsx
│   │   └── ResultsWords.tsx
│   ├── data
│   │   └── words.json
│   ├── utils
│   │   └── cache.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd online-dictionary-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.