import { hashPassword } from "../../../lib/auth";
import makeid from "../../../lib/random";
import clientPromise from "../../../lib/mongodb";
const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, cargo, nome } = data;

  const client = await clientPromise;

  const db = client.db("myFirstDatabase");

  const existingUser = await db
    .collection("usuarios")
    .findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "usuarioexiste" });
    return;
  }

  const userpassword = makeid();
  const hashedPassword = await hashPassword(userpassword);

  await db.collection("usuarios").insertOne({
    email: email,
    password: hashedPassword,
    cargo: cargo,
    nome: nome,
  });

  const transporter = nodemailer.createTransport({
    host: "mail.emarpeaccounting.ao",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "emainvestsupport@emarpeaccounting.ao", // generated ethereal user
      pass: "2]Dl);9!A@}~", // generated ethereal password
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "emainvestsuport@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Credencias do emarpe reporting", // Subject line
    text: "", // plain text body
    html:
      ' <img src="https://emarpeaccounting.ao/assets/img/logo/logo.png" height="80">' +
      "<p>ola," +
      nome +
      "</p><p>Convite para uso do REPORTING pode  <a target='_blank' href='https://emarpe.vercel.app/'>acede aqui! </a></p> estas são suas credenciais<p>email: " +
      email +
      "</p>senha: " +
      userpassword, // html body
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        res.status(200).json({
          message: "Um convite de adessão foi enviado! para o " + nome,
        });
        return;
      }
    });
  });
}

export default handler;
