const Joi = require('joi');
module.exports.listingSchema=Joi.object({
    listing :Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        // image:Joi.string().uri().allow("",null)
        // image: Joi.object({
        // url: Joi.string().uri().required()
        // }).required()

        image: Joi.alternatives().try(
          Joi.string().uri().allow("", null), // allow image as string URL
          Joi.object({
              url: Joi.string().uri().allow("", null) // allow image as object with url key
           })
        ).required()


        


        
  


    })
});


module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
       

    }).required(),
});