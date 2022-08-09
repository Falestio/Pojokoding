---
title: "Hello World di HTML" 
category: "HTML"
---

## Membuat file HTML

Pertama-tama buatlah sebuah file dengan nama helloworld.html

Akhiran HTML atau juga disebut _fielname extension_, hal ini berguna untuk memberi tahu sistem operasi kita jenis dan asosiasi yang dimiliki file tersebut.

Misal file dokumen.docx memberi tahu microsoft widnows bahwa file tersebut harus dibuka menggunakan Microsoft Word

sedangkan extensi .html sendiri akan memberi tahu VScode untuk menampilkan intellisense yang berkaitan tentang HTML 

## Kode Starter HTML
Ini adalah baris kode yang harus dimiliki oleh setiap filw HTML, dengan kode inilah browser dapat mengetahui bahwa sebah file berbentuk HTML

```html
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
      
  </body>
</html>
```

Apa artinya kumpulan elemen diatas?

## Anatomi file HTML

Yang baru saja kita tulis adalah struktur dasar yang harus dimiliki oleh file HTML untuk berfungsi. 
berikut penjelasanya setial baris kode yang kita tulis

`<!DOCTYPE html>`  :  DOCTYPE akan memberi tahu browser bahwa file ini adalah file HTML, dan bahwa baris berikutnya adalah kode HTML. Pada artikel sebelumnya kita mendemonstrasikan bahwa walaupun bentuk file nya adalah txt, browser tetap menggangap file tersebut sebagai file HTML karena kode `<!DOCTYPE html>` ini

`<html> ... </html>` : Element `<html>` akan memberi tahu browser bahwa halaman web akan di format dalam bentuk HTML

`<head>` : berguna untuk menyimpan data "dibalik layar" yang datang bersamaan dengan halaman yang kita buat, bisa berupa judul halaman, bahasa yang digunakan pada halaman, memberi tahu crawler Google bahwa halaman berikut tidak boleh diakses, dll  

`<body>` : semua konten yang akan tampil di halaman akan berada didalam elemen ini .
