# URL Shortner
Shorten URLs for easy management.
## Functions
1. Convert input URL to a short URL
2. Check the input URL: 
   - Check if the URL is empty. 
   - Check if the URL exists in MonogoDB.
   - Check if the URL is connectable.
3. User can copy and delete URL
## Steps
1. Confirm Node.js installs in the computer.
2. Clone files to the folder, or execute following git command in the folder.<br>
```
git clone https://github.com/dradra751273/short-url.git
```
3. Open IDE and install the related packages<br>
```
npm install
```
4. Add MongoDB password in /config/mongoose.js
```
password='water1988'
```
5. Execute this project<br>
```
nodemon app.js
```
6. When terminal shows the messages below, it represents this project executed in the right way.<br>
```
App is running on http://localhost:3000
mongodb connected!
```
# Packages
- Express: 4.18.2,
- Express-Handlebars: 6.0.6,
- Mongoose: 6.7.2,
- Nodemon: 2.0.20
- Bootstrap: 5.2.1
