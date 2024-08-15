1. MongoDB (Database)
What: NoSQL database used to store all the data related to the website.
How: Stores data in collections and documents (like JSON objects).
Where:
User Data: Stores information such as user profiles, authentication details (like Google OAuth), and preferences.
Property Listings: Contains details about properties like name, price, location, images, and descriptions.
Cart Data: Stores the state of the user's cart, including booked properties, quantity, and associated details.
Transactions: Used to log user bookings, payments, and checkout details.


2. Express.js (Backend Framework)
What: A web framework for Node.js, used to build the backend and REST API.
How: Handles server-side logic, routes, and middleware.
Where:
API Endpoints: Implements routes to fetch properties, handle user sign-ins, process cart actions (add to cart, remove from cart, checkout), etc.
Authentication: Manages user login via Google OAuth using Firebase, as well as session persistence.
CRUD Operations: Handles creation, retrieval, update, and deletion of property listings, user profiles, and cart items.


3. React.js (Frontend Framework)
What: JavaScript library for building interactive user interfaces.
How: Creates components for the different views/pages, handles user interaction, and updates the UI dynamically.
Where:
Home & Search Pages: Components to display property listings, filters, and advanced search features.
Listing & Details Pages: Shows individual property details, allowing users to interact (e.g., adding to cart).
Cart Pages: Displays the items added to the cart, handles updates (increase, decrease, remove), and manages the checkout process.
Google OAuth: Integrated into the front-end for user authentication.
Pagination: Implements a paginated view for properties.
Redux Integration: Manages global state, including the current theme (light/dark), user authentication, and cart state.


4. Node.js (Runtime Environment)
What: JavaScript runtime that executes server-side code.
How: Handles all the backend operations, such as database interactions and request handling.
Where:
Server-side Logic: Runs the Express.js application, processes API requests, and performs actions like fetching property listings and handling booking requests.


5. Redux & Redux Toolkit (State Management)
What: Manages the application state across components.
How: Provides a global store to manage state and ensures that state is accessible throughout the application, especially in large, complex apps like this.
Where:
User Authentication: Stores the user’s authentication state (logged in/out) and their profile data.
Cart Functionality: Stores the current state of the cart, including items added, quantities, and total price. Allows cart actions such as increasing, decreasing, or removing items.
Theme Management: Manages the dark and light themes of the app globally.
Session Persistence: Uses redux-persist to ensure that the user's cart and session are maintained across page reloads.


6. Tailwind CSS (Styling)
What: Utility-first CSS framework for styling the UI.
How: Provides pre-built utility classes to style components quickly.
Where:
UI Components: Used across the website for consistent, responsive design. For example, on the home page, search results, property cards, cart items, and checkout pages.
Mobile Responsiveness: Ensures the website looks good on both desktop and mobile screens.


7. React Router (Routing)
What: Library for handling navigation and routing in React apps.
How: Enables page navigation without reloading the entire page (client-side routing).
Where:
Home, Search, Property Details: Handles routing between various pages, like the home page, property listings, and detailed view pages.
Protected Routes: Uses PrivateRoute to guard certain routes (e.g., the profile, cart, checkout) that require user authentication.


8. Firebase (Google OAuth Authentication)
What: Provides secure authentication services using Google sign-in.
How: Integrates with Firebase to manage user login and sign-up via Google accounts.
Where:
User Sign-In/Sign-Up: Used on pages where users need to log in, sign up, or authenticate before performing actions like viewing their cart or booking properties.


9. React Hook Form (Form Handling)
What: Library for handling form inputs and validation.
How: Manages input data, handles validation, and simplifies form submission.
Where:
Checkout Form: Used to manage the booking and payment details form, ensuring that the data is correctly validated before submission.

