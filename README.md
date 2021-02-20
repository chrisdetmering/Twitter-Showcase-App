# Twitter Showcase App

*Full-stack application written in React for the Front-End, and Node/Express.js for the Back-End.*


# Instructions

To retrieve twitter time-lines from specific users, type in their correct twitter handles and click the "User" button. To retrieve tweets about a specific user/topic, simply type in the value and click the "content" button.

You can Visit the App here

![welcome](https://user-images.githubusercontent.com/55517078/108606092-09133e00-7386-11eb-8cd2-23905089602f.JPG)

![elon](https://user-images.githubusercontent.com/55517078/108606116-39f37300-7386-11eb-8bc2-113265194ca3.JPG)

![nasa](https://user-images.githubusercontent.com/55517078/108606122-44157180-7386-11eb-8b3b-61b72dae5044.JPG)

# Summary 

This a Full-Stack application that utilizes Express for the Back-End server to grab and store data from the official Twitter API, while using React to grab that data from the Back-End and displaying it to the Front-End.
This was the first Full-stack application I have created, which taught me how to use a Back-End framework like Express and how it connects with the Front-End. Learning about HTTP requests was really interesting as it plays a huge role in web development and the Internet in general.

A problem I faced during the creation of this application was outputting the tweets that contained images in them. Everytime I would try to output the images I would get an error in the console, which was because the front-end wasn't detecting the images on page load. I overcame this problem with using *optional chaining*, a relatively new feature in Javascript, this method allowed the Front-End to check for any images before loading the page, which in turn solved my problem. 