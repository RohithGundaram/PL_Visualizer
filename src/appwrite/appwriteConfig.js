 import { Client, Account, Databases } from 'appwrite';

 const client = new Client()

 client
        .setEndpoint("http://localhost/v1")
        .setProject("6495af928f3b31f5445c")
;

 export const account = new Account(client)
 export const databases = new Databases(client, "6495b1d3ecc79ca9d8a7")