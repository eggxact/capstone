# Project Name:  Calendinner

## Overview:
The Calendinner application will automatically populate a one-month calendar with dinner plans based on an array of user preferences. The application will have a database of registered users with authentication and limited authority. Users have permissions to authorize other users to collaborate with their dinner plans. 

## Features:
- As someone that likes to both cook and dine out, I want to have a calendar that populates where and when to dine out AND what and when to cook at home. 
- I want to be able to filter the foods and restaurants based on a variety of options such as budget constraints and food preferences.  
- I would like to change meals/dates if I want to. 
- I would like to periodically repeat the resaurants and home cooked meals that I rate highly and avoid the ones that I rate poorly. 
- I would like to coordinate with other users to plan meals together. (NTH)
- I would like the option to share my calendar availabilitise with specific users. (NTH) 

## Tasks
1. Build out Django app:
    * User Sign Up
    * Login
    * Logout
    * User Profile
2. Design and build interctivity for user and Calendinner Profile Page:
    * Preferences Filter
        - Budget Constraints
        - Food Categories
        - Location
        - etc. based on API
    * Calendar
        - One month view
        - Detail view per date

## Data Model
1. Authorized User Model
2. User Preferences as defined by constraints of API
3. Meal and Restaurant History including user rating
4. User Contact List
5. DateTime 

## Schedule
### Phase 1
1. Start Django Application
2. Build Authorized Users Views and HTML
3. Build User Profile Models
    - Preferences
    - Meal/Restaurant History
    - Future Meal/Restaurant Log
4. Connect APIs to application
5. Build User Preferences as derived from API
6. Link User Preferences to every API query
7. Build Calendar
    - Month View
    - Date Detail View
8. Connect User Preferences with Calendar

### Phase 2
1. Add functionality for sending invitations to Users Contact List 
2. Add functionality for users to coordinate meals between themselves
3. Add permissions for users to grant limited permissions on calendar availability 