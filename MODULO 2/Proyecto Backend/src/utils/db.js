//?---------------------Nos conectamos con la base de datos de MONGO ----------------------

// Tenemos que traernos dotenv porque tenmos la url que no queremos que se comparta publicamente
const dotenv = require("dotenv");
dotenv.config();

// Nos traemos la libreria mongoose que es quien va a controlar la DB: MONGO DB
const mongoose = require("mongoose");

// Nos traemos la MONGO_URI del .env
const MONGO_URI = process.env.MONGO_URI;

/// Conectamos con MONGO al crear la funcon que se exporta y que luego importamos en el index

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);

    // Nos traemos el host y el name, de la data base de MONGO

    const { name, host } = db.connection;

    console.log(
      `Conectada la DB 👌  en el host: ${host} con el nombre: ${name}`
    );
  } catch (error) {
    console.log("No se ha conectado la db❌", error.message);
  }
};

module.exports = { connect };
