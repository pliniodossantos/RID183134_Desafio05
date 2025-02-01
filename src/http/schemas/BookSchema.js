import { celebrate, Joi, Segments } from "celebrate";

export const idParamsValidate = celebrate({
    [Segments.PARAMS]:{
        id: Joi.number().required()
    }
});

export const updateBookSchema = celebrate({
    [Segments.PARAMS]:{
        id: Joi.number().required()
    },
    [Segments.BODY]:{
        titulo: Joi.string().required(),
        num_paginas: Joi.number().required(),
        isbn: Joi.string().required(),
        editora: Joi.string().required(),
    }
});

export const createBookSchema = celebrate({
    [Segments.BODY]:{
        id: Joi.number().required(),
        titulo: Joi.string().required(),
        num_paginas: Joi.number().required(),
        isbn: Joi.string().required(),
        editora: Joi.string().required(),
    }
});
