import React from 'react';
import { Link } from 'react-router';
import {PrismCode} from 'react-prism';
import Youtube from 'react-youtube';
import Codepen from 'react-codepen';
let PostData = [
  /*{
    name: "asda",
    title: "Elixir",
    image: "inspiration.png",
    
    intoduction: "I made this mistake early on because I figured "
  },
  /*{
    id: NaN,
    name: "finding-inspiration",
    title: "Finding Inspiration",
    introduction: "Design has never been my forte; however, by rever"
  },
  /*{
    id: NaN,
    name: "font-family",
    title: "CSS @font-face",
    time: "2/7/2017",
    mainImage: "font-face.jpg",
    keywords: "css,font,font-face,type,lettering",
    tags: "css,font",
    introduction: "Until recently I was using strictly google fonts and was a little bit intimidated by using downloaded fonts. They can be hard to adopt, but since using downloaded fonts I've noticed that page loading is slightly faster and I've also had much more options for what sorts of fonts I want to use (Such as Igra, the font I am using for this website). I hope to convince you to give them a try.",
    content: ""
  },*/
  {
    name: "making-smooth-animations",
    title: "Making Smooth Animations With CSS and HTML5 Canvas",
    time: "2/6/2017",
    mainImage: "animations.jpg",
    keywords: "animation,css,styling,translate3d,transform,user experience,ux",
    tags: "css,animation,ux",
    introduction: "Roughly a month ago I was working my portfolio website and noticed that the animations on my website were really choppy and inconsistent. While researching a solution to the problem, I found out that the browser's are often redrawing (painting) the page after each frame an object is in animation. Luckily there are solutions to solve poor performance issues that this can cause!",
    content:
      <div>
        <p>
        Roughly a month ago I was working my portfolio website and noticed that the animations on my website were really choppy and inconsistent. While researching a solution to the problem, I found out that browsers are often redrawing (painting) the page after each frame an object is in animation. Luckily there are solutions to solve poor performance issues that this can cause!
        </p>
        <p>
        The solution to my particular problem was to use a transform value called translate3d which is hardware accelerated and does not require the browser to repaint the page. Opacity and all other transform values (I believe) have this special characteristic. Transform and opacity are limited, though, so you may need to look a little further for something that can create very specific animations.
        </p>
        <p>
        Since CSS can be a little limiting at times, another option to reduce choppy animations would be to use HTML5 canvas (also using the GPU)! This would probably be the trickiest option to perfect due to canvas being a somewhat advanced topic.
        </p>
        <p>
        There is a wonderful article on flipboard.com about their pursuit to make a mobile website with consistent, 60fps animations. It's called <a href="http://engineering.flipboard.com/2015/02/mobile-web/">60fps on the mobile web</a> and I would recommend giving it a read if you are interested in making animations with canvas (and react.js) or just like an inspiring read.
        </p>
        <p>
        Another cool website demonstrating the power of the HTML5 canvas is <a href="http://www.effectgames.com/demos/canvascycle/">http://www.effectgames.com/demos/canvascycle/</a> which has lots of cool scenes all powered by canvas (an example of one below).<br/>
        <img style={{float: "center"}} src="../img/canvas-demo.png" alt="canvas demo image"/>
        </p>
        <p>
        If you are interested in seeing translate3d in action then you can look at the mobile version of this website - the navigation menu uses translate3d transitions to achieve the animations. Below are some links for further exploration, enjoy :).
        </p>
        <ul>
          <li><a href="http://engineering.flipboard.com/2015/02/mobile-web/">60fps on the mobile web</a></li>
          <li><a href="http://codepen.io/tag/canvas/">Codepen.io canvas projects</a></li>
          <li><a href="http://www.effectgames.com/demos/canvascycle/">http://www.effectgames.com/demos/canvascycle/</a></li>
          <li><a href="http://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css">increase-your-sites-performance-with-hardware-accelerated-css - Treehouse</a></li>
          <li><a href="http://blog.teamtreehouse.com/create-smoother-animations-transitions-browser">http://blog.teamtreehouse.com/create-smoother-animations-transitions-browser</a></li>
          </ul>
      </div>
  },
  {
    name: "adding-mongodb",
    title: "Adding MongoDB",
    time: "2/5/2017",
    mainImage: "mongodb-logo.png",
    keywords: "mongodb,database,MERN,mern,react,node,express,jquery,ajax",
    tags: "mongodb,react,jquery,ajax",
    introduction: "I would like to go over how I integrated MongoDB with my existing application and used it to add a database. I will also share some resources that I found invaluable for this adventure at the end. I'm doing this because I would like to share the experience of setting up a database, but also because I would like to have some personalized documentation on this subject when I need to setup MongoDB in the future.",
    content:
    <div>
      <p>
      I would like to go over how I integrated MongoDB with my existing application and used it to add a database. I will also share some resources that I found invaluable for this adventure at the end. I'm doing this because I would like to share the experience of setting up a database, but also because I would like to have some personalized documentation on this subject when I need to setup MongoDB in the future. 
      </p>
      <p>
      First, I downloaded the MongoDB npm (node package manager) package and saved it to my package.json for later production use.
      </p>
      <pre><PrismCode className="language-bash">
{
`npm install --save mongodb`
}
      </PrismCode></pre>
      <p>
      I am using Cloud 9 so I just followed to recommended directions offered by Cloud 9 for setting up a MongoDB development server. If you are doing this on your local machine you will need to download MongoDB from <a href="https://www.mongodb.com/">MongoDB's main website</a>. Since I havn't done this locally, I would recommend doing a little research on how to set things up if you plan on doing so. 
      </p>
      <p>
        After starting the development server I decided to make a seperate file for making my db's endpoints. In my server.js file, I added these lines of code before all of my other routing.
      </p>
      <pre><PrismCode className="language-javascript">
{
`var post = require('./routes/post');
app.use("/", post);`
}
      </PrismCode></pre>
      <p>
        So, I required my post.js file (found in the routes folder at the current directory) and then instructed express to try matching the routes in post.js before trying to match any of the routes in server.js.
      </p>
      <p>
        In the post.js (I named it post.js because it deals exclusively with post comments at the moment) file I imported the needed packages and made an endpoint for posting to the database. This is the final post endpoint that I came up with. 
      </p>
      <pre><PrismCode className="language-javascript">
{
`import express from 'express';
var mongo = require('mongodb').MongoClient;
var router = express.Router();
var url = "mongodb://localhost:27017/test";

router.post('/post-endpoint', function(req, res) {
  var dataString = '';

  req.on('data', function (data) {
      dataString += data;
  });

  req.on('end', function () {
    var data = JSON.parse(dataString)
    var comment = {
      name: data.name,
      comment: data.comment,
      postName: data.postName,
      date: data.date
    }
    
    mongo.connect(url, function(err, db){
      if(err) throw err;
      db.collection('comments').insertOne(comment, function(err, result){
        if(err) throw err;
        console.log('item inserted');
        db.close();
      })
    })
  });
}
`
}
      </PrismCode></pre>
      <p>
        Since this is dealing with asyncronous code, it is best to use callbacks or promises to run code once an event has occured (such as data being captured).Nothing will work properly if you don't use something like a callback. JSON.parse is used because the react code being used is converting the data in a submitted form into json before shipping it off to the server.
      </p>
      <p>
        Let's look at the React code for posting. 
      </p>
      <pre><PrismCode className="language-javascript">
      {
`import React from 'react';
import $ from 'jquery';

class PostComment extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = ({
      name: "",
      comment: ""
    })
  }
  
  handleName(e) {
    this.setState({name: e.target.value})
  }
  
  handleComment(e) {
    this.setState({comment: e.target.value})
  }
  
  handleSubmit(e) {
    e.preventDefault();
    var date = new Date;
    var fullDate = \`\${date.getMonth() + 1}/\${date.getDate()}/\${date.getFullYear()}\`;
    
    var body = {
      name: this.state.name,
      comment: this.state.comment,
      postName: this.props.params.name,
      date: fullDate
    }
    
    $.ajax({
      type: "POST",
      url: "/post-endpoint",
      data: JSON.stringify(body)
    })
    
    this.setState({name: "", comment: ""});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="input">
            <p>Name</p>
            <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
        </div>
        <div className="input">
            <p>Comment</p>
            <textarea type="text" value={this.state.comment} onChange={this.handleComment.bind(this)}/>
        </div>
        <button type="submit">Comment</button>
      </form>
    )
  }
}
`
      }
      </PrismCode></pre>
      <p>
      If you are familiar with React then everything here should look fairly familar except maybe the JQuery and AJAX portion. The form is using two way binding to update the components state which updates the forms values as well. When the user decides to submit the form, the default refresh of the page is prevented and I get the current date in a readable format. I then made a body object with the current name, comment, date, and the name of the post which is passed in through react-router (I may go over this is a future post if anyone is interested). An AJAX POST request is then made to the post-endpoint, passing in json formatted data. Finally, I set the name and comment state to empty strings. This will clear the fields out after the user has submitted to form as an indication that something happened.
      </p>
      <p>
      Ok, so now one can submit data to the database and it will be saved. Let's go over how to retrieve that data. Back in the post.js I made an endpoint for retrieving data from the database.
      </p>
      <pre><PrismCode className="language-javascript">
{
`router.get('/get-data', function(req,res){
  var resultArray = [];
  
  mongo.connect(url, function(err, db) {
    if(err) throw err;
    
    var data = db.collection('comments').find();
    
    data.forEach(function(item, err) {
      if(err) throw err;
      resultArray.push(item);
    }, function() {
      db.close();
      res.send(resultArray);
    });
  });
})
`
}
      </PrismCode></pre>
      <p>
      .find() on a MongoDB collection will retrieve all of its contents. The data is then looped through and for each item in the collection I pushed it to an array. After all the data is stored in the array, there is a callback function that closes the database (very important!) and sends the array of data off to the source that requested it.
      </p>
      <p>
      Using the same page to get the comments as I used to send them, I then set up an AJAX GET request for getting all comments for a particular post.
      </p>
      <pre><PrismCode className="language-javascript">
{
`class PostComment extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = ({
      name: "",
      comment: "",
      comments: []
    })
  }
  ...
  handleSubmit(e) {
    ...
    this.updateComments();
    this.setState({name: "", comment: ""});
  }
  
  updateComments() {
    $.ajax({
      url: "/get-data",
      success: function(data) {
        var tempComments = data.reduce((arr,comment) => {
          if(comment.postName == this.props.params.name) {
            arr.push(
            <div className="comment">
              <div className="commentName">{comment.name}</div>
              <date>{comment.date}</date>
              <p className="commentBody">{comment.comment}</p>
            </div>)
          }
          return arr;
        },[]);
        this.setState({comments: tempComments})
      }.bind(this)
    })
  }
  
  componentDidMount(){
    this.updateComments();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input">
              <p>Name</p>
              <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
          </div>
          <div className="input">
              <p>Comment</p>
              <textarea type="text" value={this.state.comment} onChange={this.handleComment.bind(this)}/>
          </div>
          <button type="submit">Comment</button>
        </form>
        {this.state.comments}
      </div>
    )
  }
}
`
}
      </PrismCode></pre>
      <p>
        I added updateComments to run on submit so that a user can see his/her comment appear right after they submit it (without needing to refresh). The AJAX request captures the data that is returned from the server and reduces it to only the comments which are linked to the current post and for each comment that belongs to the post it adds some HTML around the data to make it look better. Finally, the components comments state is set to all the data (now in an array). It is then rendered to the page with this.state.comments :).
      </p>
      <p>
        Now, let's go over how use MongoDB in production with Heroku and MLab. If you are interested about the other CRUD operations (such as update and delete), I will link a video which goes over how to setup those endpoints for the operations below.
      </p>
      <p>
        First you will want to signup and create an account with <a href="https://mlab.com/">MLab.com</a> which is MongoDB hosting. There is a free sandbox version for the single-node plan. After you have created a database on that account with a user you will want to navigate to <a href="https://elements.heroku.com/addons/mongolab">Heroku's MLab addon page</a> to install MLab for your heroku application.
      </p>
      <p>
        Once all of the setup is done. I used Heroku's <a href="https://devcenter.heroku.com/articles/mongolab#connecting-to-existing-mlab-deployments-from-heroku">Connecting to existing mLab deployments from Heroku</a> documentation to setup my application's database configurations in command line. After I was done setting things up, all I had to do was change a line of code in my post.js file.
      </p>
      <pre><PrismCode className="language-javascript">
{
`var url = process.env.MONGODB_URI;`
}
      </PrismCode></pre>
      <p>
      process.env.MONGODB_URI is an environmental variable setup through the command line with Heroku. This is so you do not have to put sensative information directly in your source code.
      </p>
      <p>
      That is the full process of adding a database to websitedevtips.com. I hope you learned something!
      Helpful links below.
      </p>
      <ul>
      <li><a href="https://www.youtube.com/watch?v=ZKwrOXl5TDI">Node.js + Express - Tutorial - Insert and Get Data with MongoDB</a></li>
      <li><a href="https://github.com/evanlucas/learnyoumongo">MongoDB workshop.</a></li>
      <li><a href="https://mlab.com/">MongoDB Hosting</a></li>
      <li><a href="https://community.c9.io/t/setting-up-mongodb/1717">Cloud 9 MongoDB setup documentation</a></li>
      <li><a href="https://www.mongodb.com/">MongoDB website</a></li>
      <li><a href="http://stackoverflow.com/questions/29990809/handling-ajax-with-react">Handling AJAX with React</a></li>
      <li><a href="https://facebook.github.io/react/">React website</a></li>
      <li><a href="https://devcenter.heroku.com/articles/mongolab#connecting-to-existing-mlab-deployments-from-heroku">Connecting to existing mLab deployments from Heroku</a></li>
      <li><a href="https://elements.heroku.com/addons/mongolab">Heroku's MLab addon page</a></li>
      </ul>
    </div>
  },
  {
    name: "comments-update",
    title: "Comments Update",
    time: "2/5/2017",
    mainImage: "colored-pencils.jpg",
    keywords: "update,mongodb,comments",
    tags: "update,mongodb",
    introduction: "I'm happy to announce that you can now comment on websitedevtips.com. This is also a personal milestone for me since this website is officially using the full MERN (MongoDB, Express, React, Node) stack to produce and display content! It feels like I finally have all the colored pencils I need to draw the best picture I can.",
    content:
    <div>
      <p>
      I'm happy to announce that you can now comment on websitedevtips.com. This is also a personal milestone for me, since this website is officially using the full MERN (MongoDB, Express, React, Node) stack to produce and display content! It feels like I finally have all of the colored pencils I need to draw the best picture I can.
      </p>
      <p>
      I've also added search functionality and added better mobile navigation.
      </p>
    </div>
  },
  {
    name: "es6-arrow-functions",
    title: "ES6 Arrow Functions",
    time: "1/27/2017",
    mainImage: "ArrowFunction.jpg",
    keywords: "ECMAScript6,javascript code,javascript,tip,javascript array,js,functional programming",
    tags: "ECMAScript6,javascript,functional programming",
    introduction: "ECMAScript 6 brings many new features to JavaScript that improve the overall quality of ones code as well as reducing the time it takes to write code. I would like to share one of my favorite additions to the language with you, the arrow function.",
    content:
    <div>
      <p>
       ECMAScript 6 brings many new features to JavaScript that increase productivity and improve readability. I would like to share one of my favorite additions to the language with you, the arrow function.
      </p>
      <p>
      You probably understand what this anonymous function does. It is written in ES5.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`var hi = function(){
  console.log('hello');
};`
        }
      </PrismCode></pre>
      <p>
      By using ES6 arrow function syntax, you can still convey the meaning of the function and significantly reduce the amount of JavaScript.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`var hi = () => {
  console.log('hello');
};`
        }
      </PrismCode></pre>
      <p>
      Another use for arrow functions is in functional programming. For example, you could map out an array of numbers, adding two to each item in the array.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`myArray.map(function(item){
  return item + 2;
})`
        }
      </PrismCode></pre>
      <p>
      Or you could use the arrow function syntax to write the same code in a much shorter and cleaner fashion like below.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`myArray.map(item => item + 2);`
        }
      </PrismCode></pre>
      <p>
      To be clear, arrow functions only make anonymous functions, so you can not make a named function using the syntax. I've also made a short video covering this post below.
      </p>
      <div className="video">
        <video width="540" height="400" controls>
          <source src='/videos/ES6-Arrow-Functions.mp4' type="video/mp4"/>
        </video>
      </div>
      <p>
      If you would like to learn more about arrow functions here are some resources.<br/>
      <Link href="https://www.youtube.com/watch?v=6sQDTgOqh-I">FunFunFunction - Arrow functions in JavaScript</Link><br/>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN Arrow functions</Link>
      </p>
      <small>
      Image is made by myself.
      </small><hr/>
    </div>
  },
  /*{
    id: 1,
    title: "You Don't Know JS",
    content: "For those who have a firm grasp of JavaScript or consider themselves intermediate JavaScript programmers, I would like to offer some resource to."
  },*/
  {
    name: "hello-world",
    title: "Hello World",
    time: "1/21/2017",
    mainImage: "HelloWorld.jpg",
    keywords: "introduction,node.js",
    tags: "introduction",
    introduction: "Welcome to websitedevtips.com! It has been quite an adventure getting everything setup. The backend of this site is built on Node.js and Express, while the frontend is built with React.js.",
    content: 
    <div><p>Welcome to websitedevtips.com! It has been quite an adventure getting everything setup. The backend of this site is built on Node.js and Express, while the frontend is built with React.js.</p>
    <p>
    The goal of this website is to provide small tips that developers can quickly start to implement in their own code. This site will cover many topics in the sphere of web development, so stay tuned :). 
    </p>
    </div>
  },
  /*{
    name: "my-favorite-web-development-resources",
    title: "My favorite web development resources",
    time: "10/31/16",
    mainImage: "HelloWorld.jpg",
    keywords: "codepen,resources,javascript,dribbble,behance,css,html,IDE",
    tags: "resources",
    introduction: "In this post I will go over some of my favorite web development tools and resources! So, let's get started. Codepen has to be one of my favorite websites of all time! Basically, you can write html/css/javascript in an environment called a pen and publish it for others to see. The ui is very clean and easy to use and the codepen community is amazing as well. I've seen so many cool projects from browsing Codepen's public pen database; it can be really inspring and motivating! Below, I've included some pens that have impressed me.",
    content:
    <div>
      <div style={{width: "100%", background: "rgba(230,0,0,.6)"}}>
        <h2 style={{width: "160px", background: '#d33232', textAlign: 'center', color: 'white', marginTop: '100px', marginBottom: '0px'}}>Codepen.io</h2>
      </div>
      <p>
      In this post I will go over some of my favorite web development tools and resources! So, let's get started.
      </p>
      <p>
      Codepen has to be one of my favorite websites of all time! Basically, you can write html/css/javascript in an environment called a pen and publish it for others to see. The ui is very clean and easy to use and the codepen community is amazing as well. I've seen so many cool projects from browsing Codepen's public pen database; it can be really inspring and motivating! Below, I've included some pens that have impressed me.
      </p>
      <iframe height='380' scrolling='no' title='THREE Image Transition' src='//codepen.io/zadvorsky/embed/preview/PNXbGo/?height=380&theme-id=dark&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: "100%"}}>See the Pen <a href='https://codepen.io/zadvorsky/pen/PNXbGo/'>THREE Image Transition</a> by Szenia Zadvornykh (<a href='http://codepen.io/zadvorsky'>@zadvorsky</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

    </div>
  },*/
  {
    name: "how-to-make-a-programming-language-in-javascript",
    title: "How to make a programming language in JavaScript",
    time: "10/23/16",
    mainImage: "logo_JavaScript.png",
    keywords: "programming,javascript,language,parser,token,lexer,node.js,node",
    tags: "javascript,tutorial,node",
    introduction: "For my first post, I have decided to write about something that has been quite interesting to me lately. I do not expect you to understand everything from this post! The only things I really want you to take away are a feeling for how awesome JavaScript can be and maybe a basic understanding of how to go about making a new programming language. It blows my mind that one can use a language such as JavaScript to create a whole new way of thinking and creating.",
    content: 
    <div>
      <p>
      For my first post, I have decided to write about something that has been quite interesting to me lately. I do not expect you to understand everything from this post! The only things I really want you to take away are a feeling for how awesome JavaScript can be and maybe a basic understanding of how to go about making a new programming language. It blows my mind that one can use a language such as JavaScript to create a whole new way of thinking and creating.
      </p>
      <p>
      I will start with the setup and then I will explain the structure of a compiler which will compile the new language into JavaScript. Once I have gone over the setup and the structure of a compiler, I will briefly explain in detail how the compiler turns one language into another! There will be links to a few resources I've found helpful at the bottom.
      </p>
      <p>
      The first step to setup for creating a programming language in JavaScript is downloading Node.js. Node.js gives the ability to run JavaScript outside the browser. This is useful for reading the files of the new language, running them through the compiler, and either executing all the compiled contents or pushing new files back out that are written in JavaScript so that they could possibly be run in the browser. The only other thing required is a text editor.
      </p>
      <p>
      Once Node.js is installed a command prompt with node will be available which is what will be used to communicate with the JavaScript files on the computer. The cd command in the command prompt is then used to navigate to the desired directory where the compiler and the new language files are located. Once in the correct directory, the following command is what can be used to send the data of the new language file to the compiler.
      </p>
      <pre><PrismCode className="language-bash">
      {`node compiler.js newLang.junk`}
      </PrismCode></pre>
      <p>
      But for this to work there needs to be a few lines of code inserted into the compiler which I will explain later after I go over the structure of a compiler.
      </p>
      <p>
      The structure of a compiler consists of a lexer and a parser. The lexer will take the text given to it and attempt to decipher the text. While the lexer runs through the text it outputs tokens of information about the text. These tokens contain information such as where a variable is, if there is a conditional statement, strings, numbers, expressions, and many other bits of information that will be useful when passed to the parser. The parser will then decide what to do with the tokens and run JavaScript or the language it is written in to execute the decisions it has made. I’ve made a small example below depicting the flow of our new language through the compiler.
      </p>
      <p>
      Language(JunkScript):
      </p>
      <pre><PrismCode className="language-bash">
      {
      `"Hello World"
MAKE VAR CandyBars >>> (5)
MAKE VAR Money >>> (500)
MAKE VAR CandyBarsCost >>> (200)
MAKE VAR TotalCost >>> (_CandyBars * _CandyBarsCost)
SHOUT _TotalCost`
      }
      </PrismCode></pre>
      <p>
      Lexer:
      </p>
      <pre><PrismCode className="language-bash">
      {
`"STRING: Hello World"
"VAR: CandyBars"
"EQUALS"
"NUM: 5"
"VAR: Money"
"EQUALS"
"NUM: 500"
"VAR: CandyBarCost"
"EQUALS"
"NUM: 200"
"VAR: TotalCost"
"EQUALS"
"EXPR: (CandyBars * CandyBarCost)"
"PRINT"
"VAR: TotalCost"`
      }
      </PrismCode></pre>
      <p>
      Parser(JavaScript):
      </p>
      <pre><PrismCode className="language-javascript">
      {
`"Hello Word";
CandyBars = 5;
Money = 500;
CandyBarCost = 200;
TotalCost = CandyBars * CandyBarCost;
console.log(TotalCost);`
      }
      </PrismCode></pre>
      <p>
      Now, for the compiler to actually be useful it needs to get the data from the file with the new language, this is where node is very useful. All that is required are a few lines of JavaScript code that will send the data from a file into the compiler.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`var fs = require(‘fs’);
fs.readFile(process.argv[2], function(err, data){
  if(err){
    return console.log(err);
  }
  compiler(data);
}`
      }
      </PrismCode></pre>
      <p>
      The first line is getting the fs module from the node package manager(npm is a way to import useful tools to be used in programs). The fs module has a method called readfile which is used to read the third command line value. Now we can use that node command I explained earlier to get the new language file and send it's contents to the compiler. If there are any errors no data will be compiled and instead an error message should be returned.
      </p>
      <p>
      The compiler then takes this data and runs it through the lexer and parser.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`function compiler(fileData){
  var tokens = lexer(fileData);
  parser(tokens);
}`
      }
      </PrismCode></pre>
      <p>
      And there it is! The structure for a compiler. Now let's go a little deeper into how the compiler compiles.
      </p>
      <p>
      The lexer in the real compiler I created before writing this post reads each character in the program file given to it. There is a tok(token) variable that has a character added to it after each new character is read. When the tok variable matches something significant such as SHOUT or VAR it is reset and a token representing that match is added to an array which will end up being sent off to the parser. Below is a simple representation of what I've described above.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`tokens = [];

lex(file){
  file = file.split('');
  for(x in file){
    char = file[x];
    tok += char;

    if(tok.match(&quot;SHOUT&quot;)){
      tokens.push(&quot;SHOUT&quot;);
      tok = &quot;&quot;;
    }
  }
  return tokens
}`
      }
      </PrismCode></pre>
      <p>
      The parser then reads through the tokens and deciphers them into actions to be taken.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`parser(tokens){
  var i = 0;
  while(i &lt; tokens.length){
    var token = tokens[i]
    if(token == &quot;PRINT&quot;){
      console.log(tokens[i+1]);
    }
    i++
  }
}`        
      }
      </PrismCode></pre>
      <p>
      If I wanted to output a JavaScript file instead of executing actions in the parser I would only need to change a few lines of code. The dots represent code that I excluded for the example.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`compiledData = &quot;&quot;;

parser(tokens){
...
  if(token == &quot;PRINT&quot;){
    compiledData += &quot;console.log(\&quot;&quot; + tokens[i+1] + &quot;\&quot;);&quot;
  }
  i++
}

fs.writeFile('compiledFile.js', compiledData, function(err){
  if(err){
    return console.log(err);
  }
})`
      }
      </PrismCode></pre>
      <p>
      That is how you can make your own programming language in JavaScript!
      </p><br/>
      <b>Resources</b><br/>
      Node.js<br/>
      <a href="https://nodejs.org/en/">Node.js</a><br/>

      Good explanations of lexer and parser<br/>
      <a href="http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html">http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html</a><br/>
      Tutorials for making a basic programming language in python.<br/>
      <a href="https://www.youtube.com/playlist?list=PLBOh8f9FoHHiKx3ZCPxOZWUtZswrj2zI0">https://www.youtube.com/playlist?list=PLBOh8f9FoHHiKx3ZCPxOZWUtZswrj2zI0</a>
      <p>(First video below)</p>
      <Youtube
        videoId={"pWAxiKdJF0c"}
      />
    </div>
  }
]

PostData = PostData.map((post,i) => {
  post.id = PostData.length - (i+1);
  return post;
});

export default PostData;
