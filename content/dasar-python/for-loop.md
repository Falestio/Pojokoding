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

---

<quiz-multiple-choice :c="choiceOne" question="Apakah yang dapat dilaksanakan oleh kita sebagai orang baru" discussion="karena itulah jawaban yang paling benar saya tidak bisa mengulangnya lagi">
</quiz-multiple-choice>


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

_ilustrasi_


- for loop mengunjungi nilai pertama di dalam list
- nilai pertama tersebut dimasukan kedalam variabel i
- menjalankan kode di dalam for loop
- for loop mengunjungi nilai kedua di dalam list
- nilai kedua tersebut dimasukan kedalam variabel i
- menjalankan kode di dalam for loop


Pada kode diatas, i adalah variabel yang akan menampung setiap angka di dalam list, for loop akan mengunjungi setiap angka dan memasukannya kedalam variabel i.


kita bebas menentukan nama variabel untuk menampung nilai dari list, namun usahakan nama variabel sesuai dengan konten di dalam list


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
for i in range(1,10,2):
	print("apel", i)
```
```
1
3
5
7
9
```
pada kode diatas i dimulai dari 1 dan ditambah 2 untuk setiap iterasi, sedangkan akan berhenti sebelum menyamai atau melebihi angka 10

Dari beberapa contoh diatas berikut kesimpulan dari for loop mengunakan fungsi range()


## Survey 