
# A101 Bootcamp Ödev-3



## API Kullanımı

#### Yeni ürün eklemek için;

```http
  POST /create
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Gerekli**-> Ürün özellikleri |

#### Tüm ürünleri getirmek için;

```http
  GET /getAll
```

#### Id'si girilen ürünü getirmek için;

```http
  GET /:productId
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `string` | **Gerekli**. Getirilecek ürünün id değeri |

#### İndirim mevcut olan ürünleri getirmek için;

```http
  GET /discounted/products
```

#### Id'si girilen ürünü silmek için(Eğer indirim yoksa);

```http
  DELETE /:productId
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `string` | **Gerekli**. Silinecek ürünün id değeri |

#### Id'si girilen ürünün stock bilgisini güncellemek için;

```http
  PUT /:productId
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `string` | **Gerekli**. Güncellenecek ürünün id değeri |

## Nasıl Çalışır?

- Proje ilk olarak *app.js* üzerinden ayağa kalkar.

- *app.js*'de *config* ve *loaders* fonksiyonlarımız var.

- *config* .env dosyasından gelen değişkenlerini yakalamamız için gerekli olan ``dotenv.config()`` fonksiyonunu çağırır.

- *loaders* veritabanı ile bağlantı kurmak için gerekli olan AWS fonskiyonunu çağırır.

- *app.js*'den ayağa kalkan proje önce *routes*'e gider. Burada gerekli route işlemleri vardır. Dışarıdan gelen isteğe göre buradaki route işlemleri çalışır.

- Gelen isteğe göre çalışan route işlemi sonra *controllers*'a gider. Burası gelen isteklere göre  mesaj veya error gösteren kısımdır.

- *services*'e gelen istek burada çeşitli veritabanı işlemleri veya farklı başka işlemlerden geçerek bir değer döner.

- Geri dönderilen bu değer *controllers*'da yakalanır ve gerekli olan mesaj basılır.

# SQL ve NoSQL arasındaki farklar ?

## SQL Nedir ?

SQL veya Structured Query Language, ilişkisel veritabanı yönetim sistemi için en yaygın ve popüler programlama dilidir. Yapılandırılmış veriler ve stratejik analiz için verileri çıkarmak, depolamak, eklemek, silmek, güncellemek ve yönetmek için tasarlanmış bir dildir.

SQL, veri işleme çözümleri için Facebook, Whatsapp vb. gibi en iyi teknoloji şirketleri tarafından yaygın olarak kullanılmaktadır. Oracle, MySQL, SQLServer vb. dahil olmak üzere farklı RDBMS türleri için kullanılır.

#### SQL Ne İş Yapar ?

- Veritabanında sorgular gerçekleştirir.
- Veritabanına yeni kayıtlar ekleyebilir.
- Veritabanındaki kayıtları güncelleyebilir.
- Veritabanından kayıtları silebilir.
- Bir veritabanında yeni veritabanları veya yeni tablolar oluşturabilir.

## NoSQL Nedir ?

NoSQL veritabanı, tablo biçiminden farklı olarak modellenen verilerin depolanması ve alınması için bir mekanizma sağlar. İlişkisel olmayan veritabanı olarak adlandırılır. 1998 yılında Carl Stroz tarafından tanıtılmıştır.
Verileri tablolarda depolamakla sınırlı kalmayıp, büyük verilerin yapılandırılmış, yapılandırılmamış, yarı yapılandırılmış veya polimorfik biçimde depolanmasını sağlar.

Twitter ve Google gibi, sosyal platformların kullanıcı verileri gibi muazzam miktarda veri setine sahip şirketler, NoSQL kullanmayı diğer RDBMS'lere tercih ediyor.

## Aralarındaki Farklar Nedir ?

- SQL, Veritabanları, İlişkisel Veritabanı Yönetim Sistemi (RDBMS) olarak sınıflandırılır.
- NoSQL veritabanları, İlişkisel olmayan veya dağıtılmış veritabanı sistemi olarak kategorize edilir.
- SQL veritabanlarının sabit veya statik veya önceden tanımlanmış şemaları vardır.
- NoSQL veritabanları dinamik şemaya sahiptir.
- SQL veritabanları, verileri tablolar şeklinde görüntüler, bu nedenle tablo tabanlı veritabanı olarak bilinir.
- NoSQL veritabanları, verileri anahtar/değer çifti, belgeler, grafik veritabanları olarak görüntüler.
- SQL veritabanları en çok karmaşık sorgular için uygundur.
- NoSQL veritabanları, karmaşık sorgular için çok iyi değildir çünkü SQL sorguları kadar güçlü değildir.
## Yazarlar

- [@thyldrm](https://www.github.com/thyldrm)