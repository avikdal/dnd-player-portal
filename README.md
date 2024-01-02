
# Getting Started with DnD-Player-Portal

Welcome to the DnD Portal, a platform for Dungeons & Dragons enthusiasts to create and keep track of characters, campaigns, and connect with fellow DnD players.


## Overview

DnD Portal combines a Rails backend with a dynamic React frontend, offering a seamless experience for DnD enthusiasts. Below, you'll find details about the key implementations and features of the application.

## Backend: Ruby on Rails

### Many-to-Many Relationship

One of the core features of DnD Portal is the many-to-many relationship between users and campaigns facilitated through the characters table. Users can create characters and associate them with various campaigns, fostering a dynamic and interactive gameplay experience.

### Implemented Models

DnD Portal features a diverse range of models to encapsulate the richness of the DnD universe:

- User: Represents the players participating in the portal.
- Campaign: Represents the overarching storylines and adventures.
- Character: Acts as the bridge between users and campaigns, allowing players to participate in multiple campaigns with different characters.
- Post: Provides a platform for users to share their experiences, strategies, and tales from their campaigns.

### Full CRUD on Post Model

The Post model adheres to REST conventions, providing users with full CRUD capabilities. Users can create, read, update, and delete their posts, contributing to a vibrant community of storytelling and shared experiences.

### Password Protection and Authentication

DnD Portal prioritizes the security of user accounts by implementing password protection and authentication using bcrypt. Users can create accounts with secure passwords, ensuring a safe and trustworthy environment for all players.

### Validations and Error Handling

To enhance the user experience, the application includes validations and error handling. Users receive clear feedback in case of validation errors, ensuring smooth interactions and preventing unintended actions.

## Frontend: React with Redux

### React Router for Client-Side Routes

DnD Portal boasts a dynamic frontend with React Router enabling seamless navigation. The following client-side routes offer an immersive user experience:

1. `/home`: The landing page providing an overview of recent campaigns and activities.
2. `/characters`: Explore and manage your characters.
3. `/campaigns`: Discover and join exciting campaigns.
4. `/posts`: Share your adventures and read posts from other players.
5. `/profile`: View your user profile.

### State Management with Redux

State management is streamlined through Redux, ensuring a single source of truth for the application. Redux facilitates the handling of complex state transitions, enabling a scalable and maintainable codebase.


## Ruby Version

This project uses Ruby version 2.7.4.

## System Dependencies

Make sure you have the following dependencies installed:

- Rails 7.0.8
- SQLite3 1.4
- Puma 5.0
- Bcrypt 3.1.7
- Tzinfo-data (for time zone information)
- Bootsnap (for reducing boot times through caching)
- Rack CORS (for handling Cross-Origin Resource Sharing)




