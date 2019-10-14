const db = require('../database')

module.exports={
    getConnection:(req,res)=>{
        let sql = 
        `select movies.nama as namamovie, categories.nama as namacategory
        from movies 
        join movcat on movies.id=movcat.idmovie
        join categories on categories.id=movcat.idcategory;`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    addConnection:(req,res)=>{
        let {idcategory,idmovie}=req.body
        let sqlCheck=
        `select movies.nama as namamovie, categories.nama as namacategory
        from movies 
        join movcat on movies.id=movcat.idmovie
        join categories on categories.id=movcat.idcategory where idmovie=${idmovie} and idcategory=${idcategory}`
        let sql = `insert into movcat values (${idmovie},${idcategory})`
        
        try {
            
            db.query(sqlCheck,(err,result)=>{
                if(err) throw err
                console.log(result)
                if(result.length>0){
                    res.send(`Movie berjudul : "${result[0].namamovie}" sudah termasuk ke dalam kategori "${result[0].namacategory}"`)
                }else{
                    db.query(sql,(err,result)=>{
                        if(err) throw err
                        console.log(result);
                        res.send(result)
                    })
                }
            })

            
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    deleteConnection:(req,res)=>{
        let {idmovie,idcategory}=req.body
        let sql = `delete from movcat where idmovie=${idmovie} and idcategory=${idcategory}`
        try {
            db.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}