import Express from "express";
import catalyst from "zcatalyst-sdk-node";
import trip from "./routes/trip/index.js"
const app = Express();
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;
 

app.use(Express.json());

app.all("*",(req,res,next) => {
  try{
    req.catalystApp = catalyst.initialize(req);
    next();
  }catch{
    new AppError("no Catalyst App ",404,res).send();
    return
  } 
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
 

app.post("/pdf", async (req, response) => {
  try { 
    const smartbrowz = req.catalystApp.smartbrowz();
    let result = await smartbrowz.generateFromTemplate("1777000000007001", {
      template_data: req.body["template-data"],
      output_options: {
        output_type: "pdf",
      },
    });

    response.setHeader("Content-Type", "application/pdf");
    result.pipe(response); 
  } catch (error) {
    console.log(error);
  }
});
app.use('/trip',trip);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
