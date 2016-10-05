#Simple App
A simple web application with gulp and angularjs.

# How to run web application
We use gulp to run angularjs with command line.
```
gulp serve
```

# How to run test
```
gulp test
```

### How to run e2e test with protractor
1.) start web driver manager with command
```
webdriver-manager start
```
2.) start web application with command
```
gulp serve
```
3.) run e2e test with command
```
protractor protractor.conf.js
```
