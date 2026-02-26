# QuikTrak Coding Test - Movie Catalog Application
**Author - Ivan Canello**

This is modern, responsive movie catalog application built with **Angular 19** (latest version) 
using standalone components, signals, and best practices for frontend development.

## Overview

QuikTrak Movies is a small frontend application that allows users to:
- **Browse** a catalog of movies in a responsive grid layout
- **View** detailed information about each movie
- **Discover** movie details including duration, genres, and synopsis

## Key Features

- **Modern Angular Stack**: Built with Angular 19 standalone components and signals for reactive state management
- **Fully Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Professional Styling**: SCSS with organized partials, variables, and mixins for maintainability
- **Comprehensive Testing**: Unit tests with 18 test cases covering all components and services
- **Clean Architecture**: Clear separation of concerns with models, services, and components
- **Lazy Loading**: Routes configured for lazy loading of components to optimize bundle size
- **Semantic HTML**: Proper use of semantic HTML5 tags for accessibility

## Tech Stack

- **Framework**: Angular 19 (Latest)
- **Language**: TypeScript
- **Styling**: SCSS with partials and mixins
- **Testing**: Vitest with Angular Testing utilities
- **Build Tool**: Angular CLI with Webpack
- **Package Manager**: npm

## Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ivanecanello/quiktrak-coding-test.git
   cd quiktrak-coding-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   ng --version
   ```

## Running the Application

### Development Server

Start the development server with hot module replacement:

```bash
npm start
```

The application will be available at **http://localhost:4200**

### Build for Production

Create an optimized production build:

```bash
npm run build
```

## Testing

### Run Tests Once

Execute the full test suite without watch mode:

```bash
npm test -- --watch=false
```

### Expected Test Results

- **18 tests** covering all components and services

## Git Commit History

The project was developed incrementally with meaningful commits, making use of branches and pull requests for code review.

## Best Practices Applied

1. **Code Organization**: Clear separation of models, services, and components
2. **Type Safety**: Full TypeScript typing throughout the application
3. **Reusable Styles**: SCSS mixins and variables for DRY principles
4. **Semantic HTML**: Proper use of HTML5 semantic elements
6. **Error Handling**: 404 page for non-existent movies
7. **Testing**: Comprehensive unit tests with good coverage
8. **Git History**: Clean, incremental commit history


## Developmer Notes
### For Future Enhancements, given the time constraints for this test:
1. **API Integration**: Replace mock data with real API calls, making use of Angular HttpClient and RxJS
2. **Search & Filter**: Add movie search and filtering capabilities
