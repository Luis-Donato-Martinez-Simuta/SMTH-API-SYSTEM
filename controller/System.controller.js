import {
    _configByIdDivece,
    _updateConfig
} from '../model/System.model.js';


export const status = (req, res) => {
    try {


        res.json({
            error: false,
            status: 200,
            mesage: "Api sistema funcionando",
        });
    } catch (error) {
        res.json({
            error: true,
            status: 500,
            mesage: "Error en el servidor",
        });
    }

}



export const configByIdDivece = (req, res) => {
    let {
        IdDivice
    } = req.params;
    try {

        _configByIdDivece(IdDivice, (data) => {
            let config = data;
            if (data) {
                res.json({
                    error: false,
                    status: 200,
                    mesage: "configuracin encontrada",
                    config,
                });
            } else {
                res.json({
                    error: false,
                    status: 200,
                    mesage: "Configuracion no encontrada con el Id: " + IdDivice,
                    config: []
                });
            }

        });


    } catch (error) {
        res.json({
            error: true,
            status: 500,
            mesage: "Error en el servidor",
        });
    }
}


export const updateConfigDevice = (req, res) => {

    let config = {
        IdConfig : req.body.IdConfig,
        IdTypeFotmatData : req.body.IdTypeFotmatData,
        minTemperature : req.body.minTemperature,
        maxTemperature : req.body.maxTemperature,
        minHumedity : req.body.minHumedity,
        maxHumedity : req.body.maxHumedity
    }

    try {
        _updateConfig(config,(data)=>{
            if(data==200){
                
                res.json({
                    error:false,
                    status:data,
                    mesage:"Configuracion actualizada",
                });
            }
        });
    } catch (error) {
        res.json({
            error: true,
            status: 500,
            mesage: "Error en el servidor",
        });
    }


    

}