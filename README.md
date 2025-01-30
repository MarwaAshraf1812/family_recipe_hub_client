# Family Recipe Hub

## Overview
The **Family Recipe Hub** is a full-stack web application built using **Django (Backend) and React (Frontend)**. This platform allows families to collaboratively store, manage, and share their recipes while offering features like recipe versioning, meal planning, Talabat integration, and more.

## Tech Stack
### Backend:
- **Framework:** Django, Django REST Framework (DRF)
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose

### Frontend:
- **Framework:** React.js
- **Routing:** React Router
- **Styling:** Tailwind CSS, Shadcn
- **Icons:** React Icons
- **Forms:** Custom reusable form components
- **State Management:** React Context API

---

## Features
### Backend:
- **User Authentication** – Secure login & registration.
- **Recipe Management** – Create, update, and delete recipes.
- **Recipe Versioning** – Keep track of changes over time.
- **Meal Planning** – Plan weekly meals.
- **Talabat Integration** – Order missing ingredients.
- **Admin Panel** – Manage users and content via Django Admin.

### Frontend:
- **Responsive Design** – Mobile-first, works across all devices.
- **Dynamic Routing** – Recipes, categories, and blogs dynamically load based on route parameters.
- **Reusable Components** – Navbar, Footer, and Form elements are designed to be used across pages.
- **Contact Form** – Users can reach out with inquiries.
- **Recipe Listings** – Explore recipes in a grid format with filtering options.
- **Detailed Recipe View** – View step-by-step instructions for each recipe.

## Pages and Components
### Pages:
- **Home Page** – Showcases featured recipes.
- **Recipes Page** – List of all recipes with filtering.
- **Recipe Details Page** – Full view of an individual recipe.
- **Contact Us Page** – User-friendly contact form.
- **About Us Page** – Our story, mission, and team.
- **Auth Pages** – Login and Register.

### Components:
- **Navbar** – Top navigation for all pages.
- **Footer** – Appears on every page.
- **RecipeCard** – Displays individual recipes.
- **ContactForm** – Reusable form component for user inquiries.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Docker & Docker Compose

### Clone the Repository
```bash
git clone https://github.com/yourusername/family-recipe-hub.git
cd family-recipe-hub
```

### Setup Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
DB_NAME=family_recipe_db
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=db
DB_PORT=5432
```

### Running the Project with Docker
1. **Build & Start Containers**
```bash
docker-compose up --build
```

2. **Run Database Migrations**
```bash
docker exec -it django_app python manage.py migrate
```

3. **Create a Superuser**
```bash
docker exec -it django_app python manage.py createsuperuser
```
Follow the prompt to set up an admin account.

4. **Access the Application**
- **Django Admin Panel:** `http://localhost:8000/admin/`
- **API Endpoints:** `http://localhost:8000/api/`
- **Frontend:** `http://localhost:3000`

### Stopping the Application
To stop and remove all containers, run:
```bash
docker-compose down
```

### Running Without Docker
If you prefer running the project locally without Docker:
1. **Create a Virtual Environment & Install Dependencies**
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

2. **Run Migrations & Start Server**
```bash
python manage.py migrate
python manage.py runserver
```

3. **Run the Frontend**
```bash
cd client
npm install
npm run dev
```

---

Happy coding! 🚀
