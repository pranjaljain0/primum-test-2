# Multi-Step Form

This project is a multi-step form with form validation and a summary page. Users can complete each step of the form, go back to a previous step to update their selections, see a summary of their selections on the final step, and confirm their order.

## Getting Started

To get started, clone this repository and run npm install to install the necessary dependencies. Then, run npm run dev to start the development server. The application should be available at <http://localhost:3000>.

## Prerequisites

This project requires Node.js and npm to be installed on your system.

## Installation

To install the dependencies for this project, run:

```bash
npm install
```

## Running the Project

To run the project in development mode, run:

```bash
npm run dev
```

## Tech Stack

This project was built using the following technologies:

### Frontend

* React
* Next.js
* TypeScript
* React Query
* React Hook Form
* Zod
* Tailwind CSS

### Backend

* Deployment at Vercel

### Development, Build, and Testing

* ESLint
* Prettier
* Jest
* Testing Library
* Cypress/Playwright

## Code Quality

The code for this project is well-organized, follows best practices, and is easy to understand. Proper error handling and validation are implemented, and code comments are included with semantic commit messages.

You can use prettier to format the code by this command

```bash
npm run format
```

## User Experience

The UX of this project is visually appealing, responsive, and adheres to the chosen project design. The form includes hover and focus states for all interactive elements on the page.

## Functionality and Performance

This project is fully functional, with no major bugs or performance issues. The form includes form validation messages if a field has been missed, the email address is not formatted correctly, or a step is submitted but no selection has been made. The layout is optimized for different screen sizes, and animations are used to enhance the user experience.

## Testing

Unit and integration tests are implemented using Jest, and end-to-end tests are implemented using Cypress.

To run cypress test you can run

```bash
npm run cy:run
```
