---
title: "Cara menghubungkan CSS" 
category: "CSS"
---

## **Inline**

Cara pertama, kita bisa menulis CSS didalam sebuah atribut, yaitu atribut `style`. Atribut ini tersedia untuk semua elemen HTML (Atribut Global)

Masukan CSS kedalam atribut style seperti contoh berikut 

```html
<p style="color: red">text</p>
```

Gunakan syntax CSS seperti biasa

## **Internal**

Cara kedua adalah menulis CSS di dalam elemen `style` , yang hanya tersedia di elemen `head` 

Didalam elemen `head` buat elemen `style` lalu masukan kode CSS

```html
<head> 
	<style>
		.special { color: green; }
	</style> 
</head>
```

## **External**

Cara teralhir dan  yang paling disarankan adalah dengan membuat file CSS terpisah, lalu hubungkan file CSS dengan file HTML

Hubungkan file CSS menggunakan elemen `<link>` seperti contoh berikut

```css
h1 {
	color: red;
}
```

```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">

    <title>Document</title>

</head>

<body>

    <h1>Judul</h1>

</body>

</html>
```

Elemen `<link>` memiliki dua elemen wajib, jika digunakan untuk menghubungkan file HTML dan file CSS yaitu
- `href` : berisi path kepada file CSS yang dituju 
- `rel` : singkatan dari relationship, memberi tahu browser hubungan antara file, pada kasus menghubungkan file HTML dan CSS, value yang digunakan adalah `"stylesheet"` yang mendefinisikan sumber external sebagai stylesheet