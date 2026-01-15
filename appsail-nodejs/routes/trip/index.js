import express from "express";
import catalyst from "zcatalyst-sdk-node"; 
import AppError from "../../error/error.js";

const router = express.Router();

router.use(express.json());

router.all("*", (req, res, next) => {
  try{
    req.catalystApp = catalyst.initialize(req);
    req.table = req.catalystApp.datastore().table('trip');
    next();
  }catch{
    new AppError("no Catalyst App ",404,res).send();
    return
  } 
});



router.get("/", async (req, res) => {
    const query = constructGetQueary(req.query); 
    let result = await req.catalystApp.zcql().executeZCQLQuery(query); 
    res.status(200).send(JSON.stringify(result)); 
});

router.put("/" , async(req,res) => { 
  let result = await req.table.updateRow(req.body.data);
  res.status(200).send(JSON.stringify(result)); 
});

router.post("/" , async(req,res) => {
  let result = await req.table.insertRows(req.body.data);
  res.status(200).send(JSON.stringify(result));
});

router.delete("/" ,async(req,res) => {
  let result = await req.table.deleteRow(req.query['id']);
  res.status(200).send(JSON.stringify(result));
});

function constructGetQueary(query){
  const company = query['company'];
  const id = query['id'];
  const search = query['search']; 
  const limit = query['limit'];
  const conditions = [];
  if (id) conditions.push(`ROWID = '${id}'`);
  if (company) conditions.push(`company_id = '${company}'`);
  if (search) conditions.push(`company_name = '%${search}%'`);
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
