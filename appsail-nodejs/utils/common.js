
const commonUtil = {}

commonUtil["constructGetQueary"] = (data, table_name) => {
  const company = data["company"];
  const id = data["id"];
  const search = data["search"];
  const limit = data["limit"];
  const conditions = [];
  if (id) conditions.push(`ROWID = '${id}'`);
  if (company) conditions.push(`company_id = '${company}'`);
  if (search) conditions.push(`company_name = '${search}'`);
  let q = `SELECT * FROM ${table_name}`;
  if (conditions.length) {
    q += " WHERE " + conditions.join(" AND ");
  }
  if (limit) {
    q += ` LIMIT ${Number(limit)}`;
  }
  return q;
}

export default commonUtil;

