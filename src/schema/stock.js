import {
    gql
} from "apollo-server";

export default gql `
  
  type Stock {
    id: String
    date_create: String
    date_update: String
    value_cu: Int
    value_packing: Int
    code: String
    next_date_delivery: String
    quantity_package_next_delivery: Int
    quantity_uc_next_delivery: Int
    first_date_entry_in_stock: String
  }
  `;
