import {
    Router
} from "express";
import {
    status,
    configByIdDivece,
    updateConfigDevice
} from '../controller/System.controller.js';
import axios from 'axios';
import {URL} from '../config/server.config.js'

const router = Router();

let verifyToken =  async (req, res, next) =>  {

    const {
        token
    } = req.body;

    let forb = {
        error: false,
        status: 403,
        mesage: 'Acceso denegado',
    }

    // Validamo si esta llegando un token
    if(typeof token == "undefined"){
        res.json(forb);
    }else{

        // Comprobamos si el token es valido
        await axios(
            {
              method:"POST",
              url: URL.URL_API_USER,
              data : {
                token : token ,                
              }
            })
          .then(response=>{
            let data = response.data;
            

            if(data.status == 200){
                next();
            }else{
                res.json(forb);
            }

          })
          .catch(error=>{
            res.json({
                error: true,
                status: 500,
                mesage: "Error en el servidor",
                error
            });
          })
        
    }

    

    

}

router.get('/', status);

router.get('/configByIdDivice/:IdDivice', verifyToken, configByIdDivece);

router.put('/updateConfig',verifyToken, updateConfigDevice);


export default router;