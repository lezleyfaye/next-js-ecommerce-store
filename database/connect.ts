//  this file only makes a connection

import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// need to export this so we can import it anywhere we want to run our query
export const sql = postgres({
  // this is telling postgres to convert snake case to camel case in JS
  transform: {
    ...postgres.camel,
    undefined: null,
  },
});
