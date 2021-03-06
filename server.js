var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals = { 
'artical-one':{
    title:'artical one| naveen',
    heading:'artical one',
    date:'sep 5, 2016',
    content: `<p>
                        NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                        </p>
                        <p>
                            NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                            </p>
                            <p>
                                NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                                </p>`
},
'artical-two':{
    title:'artical two| naveen',
    heading:'artical two',
    date:'sep 5, 2016',
    content: `<p>
                        NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                        </p>
                        <p>
                            NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                            </p>
                            <p>
                                NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                                </p>`},
'artical-three':{
    title:'artical three| naveen',
    heading:'artical three',
    date:'sep 5, 2016',
    content: `<p>
                        NEW DELHI: Ramping up its offensive against Pakistan after the terror attack at Uri, India said PM Narendra Modi will not travel to Islamabad+ for the Saarc summit due to increasing cross border attacks creating an atmosphere that is not conducive for ...
                        </p>`
    
}
    
}

function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
            </title>
            <meta name="viewpoint" content="width-device-width,initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
       
        </head>
        <body>
            <div class="container">
                <div>
                <d href="/">home</d>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div> ${date}</div>
                <div>
                   ${content}
                    </div>
                    </div>
            </body>
</html>
`;
return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articalname', function (req, res) {
    var articalname=req.params.articalname;
  res.send(createTemplate(articals[articalname]));
  
});
app.get('/artical-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});
app.get('/artical-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
