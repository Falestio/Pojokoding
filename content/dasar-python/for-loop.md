---
title: For Loop
choiceOne: [
	{
		text: wow is this working,
		isCorrect: true
	},
	{
		text: yes it is working,
		isCorrect: false
	},
	{
		text: yes it is working,
		isCorrect: false
	},
	{
		text: yes it is working,
		isCorrect: false
	},
]

question-1: 'Tentukan output dari kode berikut!'
discussion-1: "Jawaban: A. Untuk setiap angka didalam list 'jumlah', kunjungi setiap barang pada list 'barang'. artinya, setiap angka pada list 'jumlah' akan di-print bersama dengan setiap barang di list 'barang'"
choice-1: [
	{
		text: "A. <br>10 kursi<br>10 meja<br>20 kursi<br>20 meja",
		isCorrect: true,	
	},
	{
		text: "B. <br>10 kursi<br>20 meja",
		isCorrect: false,	
	},
]

choice-2: [
	{
		text: "A. <br>apel<br>buah favorit<br>buah favorit<br>buah favorit",
		isCorrect: false
	},
	{
		text: "B. <br>buah favorit<br>buah favorit<br>buah favorit<br>buah favorit",
		isCorrect: false
	},
	{
		text: "C. <br>buah favorit<br>buah favorit<br>buah favorit",
		isCorrect: true
	},
]
question-2: "Tentukan output dari kode berikut!"
discussion-2: "Jawaban: C. pertama-tama for loop akan mengiterasi buah apel, karena kondisi pada if statement terpenuhi yaitu buah = apel, maka perintah continue dijalankan, yang menyebabkan for loop diulang tanpa menjalankan kode dibawahnya. Lalu kalimat 'buah favorit' di print untuk setiap buah yang tersisa. "

question-3: "Tentukan output dari kode berikut!"
discussion-3: "Jawaban: B, Nilai i akan dimulai dari -3, lalu iterasi akan berlanjut sebelum i mencapai -7"
choice-3: [
	{
		text: "A.<br>-4<br>-5<br>-6<br>-7",
		isCorrect: false
	},
	{
		text: "B.<br>-3<br>-4<br>-5<br>-6",
		isCorrect: true
	},
]

illustrationOneImagesData: [
	{
		link: 'forloop-1-1.svg',
		desc: 'Pertama-tama list angka akan di scan oleh compiler dan disimpan di memory',
	},
	{
		link: 'forloop-1-2.svg',
		desc: 'Compiler melihat for loop, pertama-tama, variabel i akan diberi nilai pertama yang terdapat didalam list yaitu 1',
	},
	{
		link: 'forloop-1-3.svg',
		desc: 'Perintah print dijalankan, karena i = 1 maka menghasilkan output 1'
	},
	{
		link: 'forloop-1-4.svg',
		desc: 'Kode didalam for selesai dieksekusi, lanjut ke iterasi selanjutnya, variabel i diberi nilai kedua pada list angka yaitu angka 2',
	},
	{
		link: 'forloop-1-5.svg',
		desc: 'Perintah print dijalankan, karena i = 2 maka menghasilkan output 2',
	},
	{
		link: 'forloop-1-6.svg',
		desc: 'Kode didalam for selesai dieksekusi, lanjut ke iterasi selanjutnya, variabel i diberi nilai ketiga pada list angka yaitu angka 3',
	},
	{
		link: 'forloop-1-7.svg',
		desc: 'Perintah print dijalankan, karena i = 3 maka menghasilkan output 3',
	},
	{
		link: 'forloop-1-8.svg',
		desc: 'Kode didalam for selesai dieksekusi, lanjut ke iterasi selanjutnya, variabel i diberi nilai keempat pada list angka yaitu angka 4',
	},
	{
		link: 'forloop-1-9.svg',
		desc: 'Perintah print dijalankan, karena i = 4 maka menghasilkan output 4',
	},
	{
		link: 'forloop-1-10.svg',
		desc: 'Kode didalam for selesai, tidak ada iterasi berikutnya karena sudah tidak ada lagi elemen dari list angka yang harus dikunjungi',
	},
] 

---

# For loop pada python

For pada python digunakan untuk mengeksekusi sebuah kode berulang kali

For juga digunakan untuk mengiterasi sebuah barisan, seperti list, tuple , dictionary atau set

**Iterasi = Pengulangan**

## For untuk iterasi list, tuple, dictionary, tuple, set
For dapat digunakan untuk mengoperasikan kode pada setiap item didalam list.

Misal kita memiliki sebuah list angka yang berisikan angka dari 1 sampai 5 dan ingin mengimplementasikan algoritma berikut: 

```
"untuk setiap angka didalam list angka:
	print angkat tersebut"
```

kita bisa mengimplementasikannya dengan menggunakan for loop

```js
angka = [1,2,3,4,5]

for i in angka:
	print(i)
```

output

```
1
2
3
4
5
```
seperti yang bisa dilihat, for loop akan mengunjungi setiap angka didalam list dan akan melakukan operasi print

berikut apa yang terjadi ketika kode dijalankan

<image-slider :images-data="illustrationOneImagesData"></image-slider>

Pada kode diatas, i adalah variabel yang akan menampung setiap angka di dalam list, for loop akan mengunjungi setiap angka dan memasukannya kedalam variabel i.

Kita bebas menentukan nama variabel untuk menampung nilai dari list, namun usahakan nama variabel sesuai dengan konten di dalam list


## For untuk looping string
for bisa digunakan untuk mengiterasi string, konsepnya sama dengan for loop untuk iterasi list, hanya saja, yang dikunjungi adalah setiap karakter di dalam string

```js
for huruf in 'pojokoding':
	print(huruf)
```
```
p
o
j
o
k
o
d
i
n
g
```

<quiz-multiple-choice-one :c="choice-1" :question="question-1" :discussion="discussion-1">
</quiz-multiple-choice-one>

## Continue and Break statement
**Break**: Hentikan loop

**Continue**: Lanjutkan loop tanpa mengeksekusi kode dibawahnya

Itulah fungsi dari kedua statement tersebut, biasanya digunakan bersama dengan _conditional statement_ (If else)

berikut contoh pengunaannya 

### Break
Contoh pengggunaan break:
Diberikan list daftar_buah berisikan nama-nama buah dan terapkan algoritma berikut

```
daftar_buah = ['apel', 'melon', 'semangka', 'nanas']

untuk setiap buah didalam daftar_buah:
	jika buah = "melon":
		hentikan loop
	jika keadan diatas tidak terpenuhi, print buah
```
Maka kodenya adalah

```js
daftar_buah = ['apel', 'melon', 'semangka', 'nanas']

for buah in daftar_buah:
	if buah == 'melon':
		break
	print(buah)
```
Output
```
apel
```
hanya apel yang ter-output karena iterasi setelah apel adalah melon, dan kita membuat sebuah statement bahwa jika buah = melon, maka perintah break dijalankan.

### Continue 

contoh penggunaan continue:
diberikan sebuah list daftar_buah berisikan nama buah dan terapkan algoritma berikut

```
untuk setiap buah didalam daftar_buah:
	jika buah = "jeruk":
		print 'buah favorit saya'
		lanjutkan loop tanpa mengeksekusi kode selanjutnya
	jika keadan diatas tidak terpenuhi, print buah
```
maka kodenya adalah

```js
daftar_buah = ['apel', 'jeruk', 'melon', 'semangka']

for buah in daftar_buah:
	if buah == 'jeruk':
		print('buah favorit saya')
		continue
	print(buah)
```
Output
```
apel
buah favorit saya
melon
semangka
```
ketika iterasi mencapai jeruk, maka kode akan mengeksekusi kode didalam "if" yaitu meng-print sebuah string 'buah favorit saya', dan melanjutkan iterasi tanpa mengeksekusi kode print(buah)

<quiz-multiple-choice-two :c="choice-2" :question="question-2" :discussion="discussion-2"></quiz-multiple-choice-two>

```js
daftar_buah = ['apel', 'jeruk', 'melon', 'semangka']

for buah in daftar buah:
	if buah == 'apel':
		continue
	print("Buah Favorit")
```

## For untuk mengeksekusi kode berulang kali
For juga bisa digunakan untuk mengeksekusi kode berulang kali, untuk melakukan nya kita akan menggunakan fungsi range()

misal kita ingin melakukan print sebuah string "apel" sebanyak 5 kali

maka kode nya adalah 

```js 
for i in range(5):
	print("apel", i)
```
```
apel 0
apel 1
apel 2
apel 3
apel 4
```

Apa yang terjadi? Simpelnya, kode akan berjalan sebanyak angka yang dimasukkan kedalam fungsi range(). Angka yang dimasukkan kedalam fungsi range kita sebut _nilai berhenti_

Dan bisa dilihat bahwa kita juga memunculkan variabel i kedalam output. Disini, terlihat bahwa pada iterasi pertama, i dimulai dari angka 0 -> nilai i ditambah 1 untuk setiap iterasi -> dan berhenti ketika i = 4 bukan 5, ini menunjukan bahwa **pada for loop yang menggunakan fungsi range(), iterasi akan berhenti sebelum nilai i menyamai atau melebihi nilai berhenti**

Pada contoh diatas, i akan otomatis diberikan nilai 0 diawal, tapi bagaimana jika kita ingin memberikan nilai lain?

Caranya dengan memasukan parameter kedua pada fungsi range() 

```js
for i in range(2,4):
	print("apel" ,i)
```
```
apel 2
apel 3
```

Pada kode diatas i akan mulai dari angka 2 dan berhenti sebelum menjadi 4

Berikut ilustrasinya 

Kita sudah bisa mengontrol angka inisiasi untuk i yaitu pada contoh diatas, kita memberikan angka 2, pada setiap iterasi kita menambahkan nilai 1 pada i. 
Namun  bagaimana jika kita ingin menambahkan nilai 2? atau 3? atau bahkan melakukan operasi pengurangan?

caranya dengan menggunakan parameter ketiga pada fungsi range() 

```js
for i in range(5,1,-1):
	print("apel", i)
```
```
apel 5
apel 4
apel 3
apel 2
```
pada kode diatas i dimulai dari 5 dan dikurangi 1 untuk setiap iterasi, sedangkan akan berhenti sebelum menyamai atau lebih kecil dari 1, artinya untuk for loop yang setiap iterasinya nilai i dikurangi, **loop akan berhenti ketika nilai mulai menyamai atau lebih kecil dari nilai akhir**

## Kesimpulan For Loop menggunakan Range

Dari beberapa contoh diatas berikut kesimpulan dari for loop mengunakan fungsi range()

<img-container src="forloop-rangesum.svg" alt="kesimpulan range"></img-container>

<quiz-multiple-choice-three :c="choice-3" :question="question-3" :discussion="discussion-3">
</quiz-multiple-choice-three>

## Survey 