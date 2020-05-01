const businessdao = require('../daos/business.dao')

module.exports = (app) => {
    app.post('/find/business/', (req, res) =>
        businessdao.findbusinessid(req.body.name,req.body.optradio)
            .then(result => {
                console.log(req.body)
                var htmlTag = "<!DOCTYPE html>\n" +
                    "<html>\n" +
                    "<style>\n" +
                    ".reflink{\n" +
                    "  background-color: #ccffcc;\n" +
                    "  color: black;\n" +
                    "  margin: 10px;\n" +
                    "  padding: 20px;\n" +
                    "  width: 100%;\n" +
                    "  border-radius: 20px;\n" +
                    "}\n" +
                    "\n" +
                    ".refheader{\n" +
                    "  background-color: pink;\n" +
                    "  color: black;\n" +
                    "  margin: 10px;\n" +
                    "  padding: 20px;\n" +
                    "  width: 100%;\n" +
                    "  border-radius: 20px;\n" +
                    "}\n" +
                    "</style>\n" +
                    "<body>\n" +
                    "<h2 class = \"refheader\" style=\"color : black; font-size: 40px\"><b>Search Results for : " +
                    req.body.name + "</b></h2>";

                var linkNames = "";

                var arr = []
                for(var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    var business = obj.business_id;
                    var categories = obj.categories;
                    var name = obj.name;
                    var city = obj.city;
                    var state = obj.state;
                    var zip = obj.postal_code;

                    var linkString = name + " , [" + categories + "] , " + city + " , " + state + " , " + zip;

                    //linkNames += "<p><a href='"+business+"'>" + linkString + "</a></p>\n"
                    linkNames += "<div class = \"reflink\"><p><b><a href='"+business+
                        "' style=\"color : black; font-size: 25px\">"+ linkString + "</a></b></p></div>"

                    arr.push(linkString)
                    //console.log(linkString);

                }

                var finalText = htmlTag + linkNames + "</body>\n" +
                    "</html>\n"
                //console.log(result)
                //console.log(finalText)
                res.send(finalText)

            }))

    app.get('/find/business/:id',(req,res)=>
        businessdao.findwithid(req.params.id)
            .then(result => {
                var arr = []
                //const logo = require('./image.jpg');
                for(var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    var bus_id = obj.business_id;
                    var name = obj.name;
                    var categories = obj.categories;
                    var city = obj.city;
                    var state = obj.state;
                    var zip = obj.postal_code;
                    var stars = obj.stars;
                    var review = obj.review_count;
                    var tip = " ";
                    var checkins = "";
                    var location = obj.latitude + " , " + obj.longitude;
                    var hours = obj.hours;
                    var comment = obj.comment;
                    if (comment == "None"){
                        comment = " "
                    }
                    var htmlTag = "<html>\n" +
                        "<head>\n" +
                        "<title>Document Data</title>\n" +
                        "</head>\n" +
                        "<body>\n" +
                        "<h1>Document Data for the selected Document</h1>\n" +
                        "<h2 style=\"font-size:25px;font-weight: bold;\">Business Name : " + name + "</h2>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">City : " + city + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">State : " + state + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Zip : " + zip + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Categories : "+ categories + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Stars : " + stars + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Review Count : " + review + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Tip : " + tip + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">No. of checkins : " + checkins + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Location : " + location + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Hours : " + hours + "</p>\n" +
                        "<p style=\"font-size:25px;font-weight: bold;\">Comment : " + comment + "</p>\n" +
                        "<form action=\"/submit\" method=\"post\">\n" +
                        "  <label style=\"font-size:25px;font-weight: bold;\",for=\"fname\">Update Comment : </label>\n" +
                        "  <input type=\"text\" id=\"fname\" name=\"fname\"><br><br>\n" +
                        "  <input type=\"hidden\" name=\"id\" value= " +bus_id+">" +
                        "  <input type=\"submit\" value=\"Submit\">\n" +
                        "</form>" +
                        "<p><a href='/"+bus_id+"'>"+"Click to View Image"+"</a></p>"+
                        //"<img src={logo} alt=\"Girl in a jacket\">"+
                        "</body>\n" +
                        "</html>"


                    var html2 = "<html>\n" +
                        "<head>\n" +
                        "<title>Document Data</title>\n" +
                        "</head>\n" +
                        "<body style=\"background: #FFFFFF\">\n" +
                        "<div style=\"background: #d1d1e0;padding: 1%;font-family: Helvetica;\">\n" +
                        "  <h1>Document Data</h1>\n" +
                        "</div>\n" +
                        "<div style=\"float: left;width: 50%;padding: 10x;\">\n" +
                        "  <h2 style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Business Name : "+name+"</h2>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">City : " + city + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">State : " + state + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Zip : " + zip + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Categories : " + categories + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Stars : " + stars + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Review Count : " + review + "</p>\n" +
                        "</div>\n" +
                        "<div style=\"float: right;width: 50%;\">\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Location : " + location + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Hours : " + hours + "</p>\n" +
                        "  <p style=\"font-size:30px;font-weight: bold;font-family: Candara;\">Comment : " + comment + "</p>\n" +
                        "</div>\n" +
                        "<form action=\"/submit\" method=\"post\">\n" +
                        "  <label style=\"font-size:30px;font-weight: bold;\",for=\"fname\">Update Comment : </label>\n" +
                        "  <input type=\"text\" id=\"fname\" name=\"fname\"><br><br>\n" +
                        "  <input type=\"hidden\" name=\"id\" value= " +bus_id+">" +
                        "  <input type=\"submit\" value=\"Submit\">\n" +
                        "</form>" +
                        "<p style =\"font-size:30px;font-weight: bold;\"><a href='/"+bus_id+"'>"+"Click to View Image"+"</a></p>"+
                        //"<img src=\"Snapchat-248611369.jpg\" alt=\"Girl in a jacket\">\n" +
                        "</body>\n" +
                        "</html>"
                }
                //console.log(htmlTag)
                res.send(html2)

            }))

   app.post('/submit',(req,res)=>{
       //console.log(req.params)
       //console.log(req.body)
           return businessdao.updatecomment(req.body.id, req.body.fname)
               .then(result =>{

                   var htmlTag = "<!DOCTYPE html>\n" +
                       "<html>\n" +
                       "<body>\n" +
                       "\n" +
                       "<h2>Data has been sucessfully saved!!</h2>\n" +
                       "<p><a href=\"http://localhost:4000/find/business/"+req.body.id+"\">Reload the Saved Document</a></p>\n" +
                       "<p><a href=\"http://localhost:3000/\">Perform Another Search</a></p>"+
                       "<p><a href=\"http://localhost:3000/exit\">Close Application</a></p>"+
                       "\n" +
                       "</body>\n" +
                       "</html>\n"
                   res.send(htmlTag)
               })


   })

    app.get("/:filename", function(req, res){
        // console.log(req.params.filename);
        // gfs = Grid(db);
        // var readstream = gfs.createReadStream({filename: req.params.filename});
        // readstream.on("error", function(err){
        //     res.send("No image found with that title");
        // });
        // readstream.pipe(res);
        // var readstream = gfs.createReadStream({
        //     filename: 'image.jpg';
        // });
        //var filename = req.params.filename + ".jpg"

        var fileName = req.params.filename + ".jpg"
        var srcPath ='"images/' + fileName+ '"'
        var htmlTag = "<html>\n" +
            "<head>\n" +
            "<title>Document Data</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "<img src= " + srcPath + " alt=\"No Image Found\">\n" +
            "</body>\n" +
            "</html>"
        var fs = require('fs')
        fs.writeFile('./mongo-project/data/controllers/image.html',htmlTag, function (err) {
                if (err) throw err;
            res.sendFile('image.html',{root: __dirname});
            console.log("sent")
            }
        );
    });

}