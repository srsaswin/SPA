import express from "express";
import catalyst from "zcatalyst-sdk-node"; 
import AppError from "../../error/error.js";

const router = express.Router();

router.use(express.json());

router.all("*", (req, res, next) => {
  try{
    req.catalystApp = catalyst.initialize(req);
    next();
  }catch{
    new AppError("no Catalyst App ",404,res).send();
    return
  } 
});



router.get("/", async (req, res) => {
    const query = constructGetQueary(req.query);
    let result = await datastore.executeZCQLQuery(query); 
    res.status(200).send(JSON.stringify(result)); 
});

router.put("/" , async(req,res) => {
  
});


function constructGetQueary(query){
  const compony = query['compony'];
  const id = query['id'];
  const search = query['search']; 
  const limit = query['limit'];
  const datastore = req.catalystApp.zcql();
  const conditions = [];
  if (id) conditions.push(`ROWID = '${id}'`);
  if (compony) conditions.push(`compony = '${compony}'`);
  if (search) conditions.push(`name LIKE '%${search}%'`);
  let q = "SELECT * FROM trip";
  if (conditions.length) {
    q += " WHERE " + conditions.join(" AND ");
  }
  if (limit) {
    q += ` LIMIT ${Number(limit)}`;
  }
  return q;
}



export default router;
