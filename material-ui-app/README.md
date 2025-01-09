# README.md

# Material UI App

This project is a minimalistic application built with React and Material UI, designed to support dark mode. It features a clean layout with input fields, a level display, and a section for upcoming milestones.

## Features

- Dark mode support with a background color of `#171b24`.
- Rectangular container for input fields.
- Display of the current level adjacent to the input container.
- Section for upcoming milestones below the input container and level display.

## Project Structure

```
material-ui-app
├── src
│   ├── components
│   │   ├── InputContainer.tsx
│   │   ├── LevelDisplay.tsx
│   │   └── MilestoneBox.tsx
│   ├── styles
│   │   └── theme.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd material-ui-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The app will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.
