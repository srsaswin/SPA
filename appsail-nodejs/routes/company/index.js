import expreee from "express";
import catalyst from "zcatalyst-sdk-node";
import AppError from "../../error/error.js";
import commonUtil from "../../utils/common.js";

const router = expreee.Router();

router.use(expreee.json());

const routerData = {
    table:"companys"
}

router.all("*", (req,res,next) => {
  try{
    req.catalystApp = catalyst.initialize(req);
    req.table = req.catalystApp.datastore().table(routerData.table);
    next();
  }catch{
    new AppError("no Catalyst App ",404,res).send();
    return
  } 
});

router.get("/", async (req, res) => {
    const query = commonUtil.constructGetQueary(req.query,routerData.table);
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


export default router;