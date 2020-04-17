# Restaurant_app

The site is running at http://ec2-18-222-137-7.us-east-2.compute.amazonaws.com

## How to use

1. Click `Login` on top and enter a username. If it's a new user name, a new user will be created. Otherwise saved data for that user will be loaded.
2. To search for restaurants, choose a filter and enter search keywords. The search is case-insensitive and the matching is partial. The default filter is search by `Name`.
3. To add to a collection, you ccan click the heart icon for the restaurant and choose a collection to add.
4. To see your collections, click `My Collections` on the navigation bar. THis should redirect you to a page with all your collections listed. The last collection is named `New Collection`. You can click on it to add a new collection. Repeated names are allowed.
5. Click on the collection to view the restaurants in the collection. You can remove unwanted restaurants by clicking the bin button.
6. To swith user, simply click on existing username on the right of navigation bar and change to another user.

### Development mode

Run the following command in the server subdirectory to build:

```
npm run dev
```

By default, client will run on port 3000 and server on port 5000.

### Features implemented

- save restaurants into named collections
- see updates to the collections in real-time
- filter for restaurants open by date time string
- filter for restaurants by name
- remove restaurants from collections

### Limitations

I did not implement the email sharing feature due to time constarints. However, by entering a shared user name, users can edit the collections together. The filter for restaurants by time is also not ideal due to the lack of date time string processing.

Input validation and user authentification are not implemented.

---

**NOTE** There is no local storage so login data will be lost if page is refreshed.

---
