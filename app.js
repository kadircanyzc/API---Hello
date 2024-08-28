const express = require('express');  //Express, rota tanımlamayı (URL'lere göre istekleri yönetmeyi), middleware eklemeyi ve HTTP isteklerine (GET, POST, PUT, DELETE vb.) yanıt vermeyi kolaylaştırır.
const cors = require('cors');  //CORS, bir kaynağın başka bir kaynaktan istek almasına izin veren bir mekanizmadır.
const dotenv = require('dotenv'); //dotenv, uygulamanızın çevresel değişkenlerini yönetmek için kullanılan bir modüldür.

//require fonksiyonu, bir modülü projeye dahil etmek için kullanılır. Modül, bir dosya veya bir paket olabilir.
//import mantığına benzer bir işlevi vardır.



dotenv.config(); // .env dosyasındaki değişkenleri process.env nesnesine yükler.

const app = express();  //Express uygulaması oluşturuldu.


app.use(cors());  //CORS middleware'ini uygula


app.use(express.json()); //Express uygulamasında JSON verilerini işlemek için kullanılan bir middleware'dir.


app.get('/', (req, res) => {  //GET isteği için bir rota tanımlama
  res.status(200).send('Hello World!');  //200 koduyla birlikte 'Hello World!' yanıtını döndürme
});

// Sunucuyu başlatma işlemi
const PORT = 3000;
app.listen(PORT); 