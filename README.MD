##### 无论您是否了解Node.js和puppeteer的爬虫的人员都可以操作，请您一定万分仔细阅读本文档并按顺序执行每一步

> 本项目实现需求：给我们一个网页地址，爬取他的网页内容，然后输出成我们想要的PDF格式文档，请注意，是高质量的PDF文档

* 第一步，安装`Node.js` ,推荐`http://nodejs.cn/download/`，`Node.js`的中文官网下载对应的操作系统包

* 第二步，在下载安装完了`Node.js`后， 启动`windows`命令行工具(windows下启动系统搜索功能，输入cmd，回车，就出来了)
 
* 第三步 需要查看环境变量是否已经自动配置,在命令行工具中输入 `node -v`，如果出现 `v10. ***`字段，则说明成功安装`Node.js`

* 第四步 如果您在第三步发现输入`node -v`还是没有出现 对应的字段，那么请您重启电脑即可 

* 第五步 打开本项目文件夹，打开命令行工具（windows系统中直接在文件的`url`地址栏输入`cmd`就可以打开了），输入 `npm i cnpm  nodemon -g `

* 第六步 下载`puppeteer`爬虫包，在完成第五步后，使用`cnpm i puppeteer --save `命令 即可下载 

* 第七步 完成第六步下载后，打开本项目的`url.js`，将您需要爬虫爬取的网页地址替换上去(默认是`http://nodejs.cn/`)

* 第八步 在命令行中输入 `nodemon index.js` 即可爬取对应的内容，并且自动输出到当前文件夹下面的`index.pdf`文件中

> `TIPS`: 本项目设计思想就是一个网页一个`PDF`文件，所以每次爬取一个单独页面后，请把`index.pdf`拷贝出去，然后继续更换`url`地址，继续爬取，生成新的`PDF`文件，当然，您也可以通过循环编译等方式去一次性爬取多个网页生成多个`PDF`文件。

> 对应像京东首页这样的开启了图片懒加载的网页，爬取到的部分内容是`loading`状态的内容，对于有一些反爬虫机制的网页，爬虫也会出现问题，但是绝大多数网站都是可以的


Anyone who knows node. js and puppeteer crawlers can do it. Please read this document carefully and execute each step in sequence
> the implementation requirements of this project: give us a web address, crawl his web content, and then output to the PDF format document we want, please note, is a high quality PDF document
* as a first step, install ` Node. Js `, recommend ` http://nodejs.cn/download/ `, ` Node. Js ` Chinese website to download the corresponding operating system package
* step 2, after downloading and installing 'node. js', start' Windows' command line tool (start system search function under Windows, enter CMD, enter, and out)
* in the third step, it is necessary to check whether the environment variable has been automatically configured. Enter 'node-v' in the command line tool. If 'v10
* step 4: if you find that the corresponding field does not appear after entering 'node-v' in step 3, please restart your computer
* step 5 open the project folder, open the command line tool (you can open it by directly entering 'CMD' in the 'url' address bar of the file in Windows system), and enter 'NPM I CNPM nodemon -g'
* step 6: download 'puppeteer' crawler package. After completing step 5, use 'CNPM I puppeteer --save' command to download
* step 7: after downloading step 6, open the 'url.js' of this project and replace the web address you need the crawler to fetch (the default is' http://nodejs.cn/').
* step 8 enter 'nodemon index.js' on the command line to crawl the corresponding content, and automatically output to the' index.pdf 'file under the current folder
> 'TIPS' : the design idea of this project is a web page a 'PDF' file, so each time to crawl a separate page, please copy 'index.pdf' out, and then continue to change 'url' address, continue to crawl, generate a new 'PDF' file, of course, you can also through cyclic compilation to crawl multiple web pages to generate multiple 'PDF' files.
> corresponds to the webpage with lazy loading of pictures such as the homepage of jd. Some of the contents crawled are in 'loading' state. For the webpage with some anti-crawler mechanism, crawlers may also have problems, but most websites are ok
