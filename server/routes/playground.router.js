const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {  // just / according to Chris,  , rejectUnauthenticated
    console.log('pg router get');
    const queryText = `SELECT * FROM playground ORDER BY "id";`;  //;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error selecting playground query', err);
            res.sendStatus(500);
        });
});

router.put('/PgEdit/:id', rejectUnauthenticated, (req, res) => {  // '/:id'
     console.log('pg router put');
    //console.log('router put', req.body);
    const queryText = `UPDATE playground
            SET "pg_name" = $2, "description"= $4 
            WHERE "id"=$1`;
    const queryValues = [req.body.id, req.body.pg_name, req.body.description];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
            console.log("router put worked!");
        })
        .catch((err) => {
            console.log('Error updating pg, router put pg router', err);
            res.sendStatus(500)
        });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {   ///addPlayground
    console.log('pg router post');
    const queryText = `INSERT INTO playground ("pg_name", "address", "img_url", "description") 
                       VALUES ($1, $2, $3, $4);`; //RETURNING "id"?
    const values = [req.body.pg_name, req.body.address, req.body.img_url, req.body.description];
    pool.query(queryText, values)
    .then((response)=>{
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log('Error POSTING addPg to the DB', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {   // had '/deletePlayground/:id',  /delete/:id
    console.log(req.params.id);
    const queryText = `DELETE FROM playground WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((response)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
        console.log('Error DELETING playground from DB', error);
        res.sendStatus(500);
    })
});


module.exports = router;