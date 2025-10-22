'use strict'

const shopModel = require('../../models/shop.model');
const bcrypt =  require('bcrypt');
const shopRoles = {
    ADMIN : '0000',
    SHOP : '0001',
    WRITER : '0002',
    EDITOR : '0003',
}
class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            
            //check email exist
            const holderShop = await shopModel.findOne({email}).lean();         
            if(holderShop){
                return {
                    code : 'xxxx',
                    message : 'Shop is already registered'
                }
            }

            //hash password
            const hasedPassword = await bcrypt.hash(password,10);
            //create new shop
            const newShop = await shopModel.create({
                name,
                email,
                password : hasedPassword,
                roles : [shopRoles.SHOP]
            })
            //use RSA and JWT to create token
            if(newShop){
                //create private key and public key
                
            }

        } catch (error) {
            return {
                code : 'xxx',
                message : error.message,
                status : error
            }
        }
    }
}

module.exports = new AccessService();