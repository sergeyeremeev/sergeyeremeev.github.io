<<<<<<< HEAD
## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
=======
# Welcome to the Frogger Game.
*Each version is different so here are the rules and instructions to successfully run and play the game.*

###Instructions:
1. In order to start the game you just need to open index.html file in your browser and the game will start automatically.
2. On top you will see two menus and two buttons:
  - **First Menu is a character selection**, simply click on the icon or the name of the character you want to play for and the game will apply the change for you;
  - **Second menu if a difficulty selection**, select your desired difficulty level and it will affect the number of bugs and their speed, hence increasing or decreasing difficulty level for you. Try decreasing difficulty if game becomes too hard;
  - **On the top right you can two buttons** - those are for resetting obstacles position or turning them on/off. Having obstacles can be used for making the game a little bit harder and more interesting, especially on higher difficulty levels.
3. Below the top menus is the actual game, just click anywhere on the canvas and you should be able to move your character by using up/down/left/right keys, other keys won't work in this game.

###Rules:
1. Your main goal is to reach water without getting hit by any of the enemies;
2. Grass is your safe area, stone is where the enemies are moving - you have to carefully time your movements on stone texture in order to avoid collisions with enemies. If you get hit - start over from the initial position and 50 points will be subtracted from your score unless there isn't anything to subtract;
3. If obstacles are turned on, you will see 1 rock appearing on every stone row - enemies can crawl underneath those rocks, however you can't, so be carefull and don't get stuck in them - plan your way around;
4. Whenever you reach water, points will be added to your overall score and you will be returned to your initial position. Base amount of points is 20, however they will be multiplied by the difficulty level factor, resulting in more points on higher difficulty levels. Multiplication factors are as follow:
  - **Casual** = 1 * 20 => 20 points;
  - **Easy** = 1.5 * 20 => 30 points;
  - **Normal** = 2 * 20 => 40 points;
  - **Hard** = 3 * 20 => 60 points;
  - **Very Hard** = 5 * 20 => 100 points;
  - **Insane** = 10 * 20 => 200 points;
  - **Impossible** = 25 * 20 => 500 points;
5. There is no end to the game, so get as much points as you can and show your friends how awesome you are;
6. If you want to reset your points, just refresh the page.

###Have Fun!!!
>>>>>>> b1c99232ad6ff7dcafebc3415a40f08744f3ce38
