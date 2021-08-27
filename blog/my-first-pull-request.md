---
title: My First Pull Request
description: First PR
published: true
slugs:
    - my-first-pull-request
keywords: 
    - pull-request
    - first
image: assets/images/blog/5.first-pull-request/1.header.jpeg
categories: Story
authors: afif alfiano
tags:
  - story
  - rss
publishedAt: 2020-06-18T10:12:00.000Z
updatedAt: 2020-06-18T10:12:00.000Z
thumbnailText: Gimana rasanya ketika pertama kali pull requestmu di setuju oleh pemilik project? pasti senang bukan. Pull request adalah sebuah metode dimana kita meminta pemilik kode master untuk mereview tambahan kode kita dan jika disetujui bisa dimerge atau digabung ke master kode tersebut.
wordCount: 566
like: 0
---

Gimana rasanya ketika pertama kali pull requestmu di setuju oleh pemilik project? pasti senang bukan. Pull request adalah sebuah metode dimana kita meminta pemilik kode master untuk mereview tambahan kode kita dan jika disetujui bisa dimerge atau digabung ke master kode tersebut. Nah, inilah yang saya rasakan sekitar 2 minggu yang lalu dan pada artikel kali ini saya ingin berbagi cerita bagaimana pull request saya untuk berkontribusi di open source bisa disetujui yang pada akhirnya dimerge ke master.

Berawal dari saya mulai aktif di twitter dan kemudian mengikuti beberapa developer top baik yang ada di google, microsoft, amazon dan lain-lain. Singkat cerita ketika saya scroll timeline, tiba-tiba muncul postingan dari senior engineering microsoft yaitu Pak Jonh Papa. Kemudian saya baca dan inti dari postingannya adalah membuat project untuk mengoleksi contoh aplikasi hello world dari semua framework atau library javascript yang digunakan untuk testing static web apps dari azure. Wah, langsung kepikiran nih buat kontribusi, akhirnya saya coba akses link github yang ditautkan di tweetnya. Pertama kali buka repositorynya cuma ada 10 orang yang melakukan fork atau cloning dari master repositoy. Artinya peluang untuk kontribusi masih besar dan diawal itu sudah ada framework terkenal seperti Angular, Vuejs dan React. Nah, seperti ini bunyi tweetnya.

<a href="https://twitter.com/John_Papa/status/1263606692723527681?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1263606692723527681%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fjohn_papa%2Fstatus%2F1263606692723527681image%3D" >Jhon Papa Tweet</a>

Setelah itu, langsung saja saya coba fork repository master dan membuat branch. Awalnya saya bingung mau kontribusi apa ya, karena kalo mau angular sudah ada, mau react juga sudah ada, mau vuejs pun juga sudah ada, akhirnya dapat ide nih untuk membuat hello world dari meteor js. Langsung saja saya kunjungi websitenya meteor js dan baca dokumentasinya.

Setelah selesai baca dokumentasi langsung saya eksekusi dengan menginstall framework ini, kemudian membuat project baru. Ternyata tidak semudah itu, saya mengalami kegagalan membuat project baru. Saya coba cari kesana kemari masuk forum meteorjs tapi belum membuahkan hasil juga dan akhirnya permasalahan busa teratasi. Issue ini yang membuat gagal meteorjs create new project.

<a href="https://stackoverflow.com/questions/60333092/meteor-update-isopacket-giving-combined-error-sourcemapconsumer-destroy-is-n">Stackoverflow</a>

Kemudian saya edit script default meteor js lalu saya coba jalankan dilocal dan ternyata berhasil. Seneng nih, langsung saja saya push ke branch saya dan menambahkan sedikit dokumentasi untuk meteor js.


<a hre="https://github.com/afifalfiano/hello-worlds/tree/meteor">My Repo</a>

Kemudian langsung saja saya coba pull request ke master repository milik Pak John Papa. Tentu saja tidak langsung disetujui karena masih ada beberapa issue yang harus saya perbaiki seperti menambahkan meteor di dokumentasi master dan menghapus file test dari metoer js. Oke, langsung saja saya update dan hasilnya seperti ini pull request saya disetujui dan dimerge ke master 😁

<a href="https://github.com/johnpapa/hello-worlds/pull/44">Pull Request</a>

Sampai sekarang sudah 32 orang yang melakukan fork master repository Pak John Papa dan sudah ada 27 contributor yang ikut serta dalam project open source ini. Foto profile saya sudah muncul lho, the one and only from Indonesia, haha 😂

<img src="assets/images/blog/5.first-pull-request/2.contributor.png">


Sebenarnya saya membuat dua branch yaitu meteor js dan scully dari angular. Akan tetapi karena sudah ada yang berkontribusi di scully, ya akhirnya branch saya tidak disetuju, tapi tidak apa yang penting sudah pernah merasakan bagaimana rasanya berkontribusi untuk open source.

Nah, mari teman-teman yang ingin memulai berkontribusi untuk open source bisa cari-cari issue diproject yang temen-temen pakai atau sukai dan tidak harus yang levelnya komplek, bahkan saya pernah baca ada top developer itu first pull requestnya adalah menghapus tanda titik koma sama whitespace, serius? iya benar. Nih kalo tidak percaya, saya kasih kesaksiannya hehe

<a href="https://www.linkedin.com/posts/elamoscicka_umbracoroadshow-opensource-github-activity-6523814996118503424-TEI3">Testimoni</a>

Jadi tidak perlu takut untuk mencoba suatu hal yang baru. Kesalahan diawal itu wajar, karena dari kesalahan itu kita belajar banyak hal. Ketakutan itu tidak perlu dibesar-besarkan karena semakin kita takut, semakin lama kita tidak akan pernah mencoba 😀

Semoga bermanfaat dan tetap semangat!

#opensource #helloworld

