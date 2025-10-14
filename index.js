


var http = require("http"); 
const port = 8000; 


var html_pg1 = 

// This is a string variable that contains the HTML code to be displayed in the browser for the default route.

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
 <p style="color: rgb(255, 255, 255)">I have experience with JavaScript, Python, HTML, and some CSS. I am also familiar with frameworks such as Node.js.</p>
 <h2>Education</h2>

 <p style="color: rgb(255, 255, 255)">Currently studying Computer Science at Goldsmiths University. I am on the cyber security pathway in my third and final year of my bachelors degree.</p>

            <p>This is my personal website where I give some information about me.</p>
            <p>:)</p>
</body>

</html>`;



http.createServer(function(req, res) { 

    console.log(req); 
    //This will dump out the contents of the request object to the console. This will be displayed on the console once when you open the browser and refresh the page at port 8000.



        console.log("Request URL:", req.url); 
    // This will display the URL path requested by the user in the console.

    let pageContent = html_pg1; // Default page

    // Change content based on URL
    if (req.url === "/about") {
        pageContent = `
        <html>
        <head><title>About Marzhan</title></head>
        <body style="background-color: lightblue; font-family: Verdana;">
            <h1>About Marzhan</h1>
            <p>Hello! I'm Marzhan Anbia, a passionate developer based in London.</p>
            <p>I am an aspiring cyber security novice and I am enthusiastic about ethical hacking.</p>
            <p>I have a keen interest in learning about network security and penetration testing.</p>
            <p>I am studying at Goldsmiths University and at the cyber security pathway on my third and final year.</p>
        </body>
        </html>`;
    } 
    else if (req.url === "/contact") {
        pageContent = `
        <html>
        <head><title>Contact Marzhan</title></head>
        <body style="background-color: lightgreen; font-family: Verdana;">
            <h1>Contact Me</h1>
            <p>Email: manbi001@campus.goldsmiths.ac.uk</p>
            <p>Let's get in touch!</p>
        </body>
        </html>`;
    }




    res.writeHead(200, { "Content-Type": "text/html" }); // The content type is set to HTML instead of plain text, unlike the lab example.
    res.end(pageContent); 
    //using the html_pg1 variable instantiated above to call the HTML code. 
    // This will allow the HTML code to be displayed in the browser.
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}... type into browser: http://localhost:8000 to see the output`); 
}); 
