var http = require("http"); 
const port = 8000; 


var html_pg1 = 





`<!DOCTYPE html>
<html lang="en">


<head>

 <title>CSS Styles: External, Internal, and Inline</title>

 <link rel="stylesheet" type="text/css" href="styles.css">

 <style>

 body {
 background-color: rgba(128, 126, 131, 1);
 }

 h1 {
 font-family: 'verdana';
 color: rgba(4, 240, 138, 1);
 text-align: left;
 }
 </style>

</head>




<body>
 <h1>Marzhan Anbia's Bio</h1>
 <h2>About Me</h2>
 <p style="color: rgb(255, 255, 255)">Hello! My name is Marzhan Anbia. I am a software developer and computer science student based in London, UK.</p>
 <h2>Skills</h2>
 <p style="color: rgb(255, 255, 255)">I have experience with JavaScript, Python, HTML, and some css. I am also familiar with frameworks such as Node.js.</p>
 <h2>Education</h2>

 <p style="color: rgb(255, 255, 255)">Currently studying Computer Science at Goldsmiths University.</p>
</body>



</html>`;







http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" }); // The content type is set to HTML instead of plain text, unlike the lab example.
    res.end(html_pg1);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}... type into browser: http://localhost:8000 to see the output`); 
}); 
