---
title: "HTML Paragraph" 
category: "HTML"
---

## HTML Paragraphs

Gunakan tag `<p> .. </p>`  untuk membuat paragraph
 
```html
<p>This is a paragraph.</p>  
<p>This is another paragraph.</p>
```

Paragraf akan selalu mulai dari baris baru,

Indentasi atau spasi didalam kode tidak akan berpengaruh kepada hasil

```html
<p>
This is a paragraph.

This is the second paragraph 

 This is the third paragraph
</p>  
```

## HTML Heading

Heading adalah tag yang berfungsi untuk menampilkan judul dan sub-judul pada halaman web. ada 6 macam heading yang ada di HTML, 

```html
<h1>Heading 1</h1> 
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5> 
<h6>Heading 6</h6>
```

Secara default browser akan memberikan ukuran font yang lebih besar kepada heading, ketebalan font juga dijadikan bold. Style ini bisa kita ubah menggunakan CSS 

### Penggunaan heading

Heading biasanya digunakan dalam menulis judul dan sub-judul pada sebuah halaman web.

- Penggunaan Heading pada halaman artikel
_contoh_
- Penggunaan heading pada halaman landing page
_contoh_
Ada beberapa aturan best practice mengenai heading yang, best practice adalah prosedur yang disarankan karena memiliki keuntungan jika dilakukan, dan berpotensi menurunkan efektivitas dan merigikan jika tidak dilakukan

berikut beberapa best practice dari heading

1. Gunakan heading secara terstruktur dan berurutan
Don't do this  ⬇️:

```
<h1>Coding is fun</h1>
<h3>It is always better when you have fun coding</h3>
<h5>Consistency is Key</h5>
```

Do this instead  ⬇️:

```
<h1>Can coding be fun?</h1>
<h2>The more you code the better you become</h2>
<h3>Coding is fun</h3>

2. Gunakan hanya satu `<h1>` dalam satu halaman


