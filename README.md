# Airtribe Internship Project

This project includes several APIs for managing courses and users on Airtribe.

## API Routes

### 1. Create Course API

- **Route**: `POST /api/v1/course/create`
- **Body**: 
    - `name`: Name of the course
    - `max_seats`: Maximum number of seats in the course
    - `start_date`: Start date of the course
    - `description`: Description of the course

### 2. Update Course Details API

- **Route**: `PUT /api/v1/course/update/:id`
- **Body**: 
    - `name`: Updated name of the course
    - `max_seats`: Updated maximum number of seats in the course
    - `start_date`: Updated start date of the course
    - `description`: Updated description of the course

### 3. Course Registration API

- **Route**: `POST /api/v1/course/register/:id`
- **Body**: 
    - `name`: Name of the user
    - `email`: Email of the user
    - `phone`: Phone number of the user
    - `linkedin`: LinkedIn profile of the user

### 4. Lead Update API

- **Route**: `PUT /api/v1/lead/update/:id`
- **Body**: 
    - `status`: Updated status of the lead (Accept / Reject / Waitlist)

### 5. Lead Search API

- **Route**: `GET /api/v1/lead/search`
- **Query Parameters**: 
    - `name`: Name of the lead
    - `email`: Email of the lead

### 6. Add Comment API

- **Route**: `POST /api/v1/lead/comment/:id`
- **Body**: 
    - `comment`: Comment to be added

### 7. User Registration API

- **Route**: `POST /api/v1/auth/register`
- **Body**: 
    - `username`: Username of the user
    - `name`: Name of the user
    - `email`: Email of the user
    - `password`: Password of the user
    - `phone`: Phone number of the user
    - `role`: Role of the user (0 for lead, 1 for instructor)

### 8. User Login API

- **Route**: `POST /api/v1/auth/login`
- **Body**: 
    - `email`: Email of the user
    - `password`: Password of the user
    - `role`: Role of the user (0 for lead, 1 for instructor)
