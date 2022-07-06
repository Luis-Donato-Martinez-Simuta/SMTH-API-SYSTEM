import connection from "../database/mysql.database.js"
import {
    databaseConfig
} from '../config/server.config.js'



export const _configByIdDivece = async (IdDivice, callback) => {

    let sql = 'call ' + databaseConfig.DATABASE + '.getConfigByDivice(' + IdDivice + ');';
    //let sql = 'call smtu_db_user.loguinUser("'+user.username+'","'+user.password+'" );';

    await connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            return callback(data[0][0]);
        };

        return callback(null);
    });
}


export const _updateConfig = async (config, callback) => {

    let sql = 'call ' + databaseConfig.DATABASE + '.updateConfig('+config.IdConfig+','+ config.IdTypeFotmatData+','+config.minTemperature+','+config.maxTemperature+','+config.minHumedity+','+config.maxHumedity+');';
    //let sql = 'call smtu_db_user.loguinUser("'+user.username+'","'+user.password+'" );';
    await connection.query(sql, (err, data) => {
        if (err) {
            throw err
        };
        if (data.length > 0) {
            return callback(data[0][0].respoonse);
        };
        return callback(null);
    });
}