const render = {
  menu:'',
  beranda:'',
  product:'',
  lokasi:'',
  kontak:''
}
const menu = [
    {
      href: "#beranda",
      teks: "Home",
    },
    {
      href: "#product",
      teks: "Produk",
    },
    {
      href: "#lokasi",
      teks: "Lokasi",
    },
    {
      href: "#kontak",
      teks: "Kontak",
    },
  ];
  const beranda = [
    {
      kolom:
        "<h1 class='font-gede'>Selamat Datang di <br/>Stuja Coffee</h1><p>Web ini dibuat menggunakan HTML,CSS dan JS dengan bantuan library jQuery untuk memenuhi tugas mata kuliah Pemrograman Web.</p>",
    },
  ];
  const lokasi = {
    judul: "Lokasi",
    deskripsi:
      "Kami memiliki beberapa cabang yang terjangkau untuk anda. Salah satunya dibawah ini.",
    kolom: [
      {
        judul2: "Jakarta Selatan",
        isi:
          "RT.8/RW.4, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410.",
      },
      {
        judul2: "Bali",
        isi:
          "Jl. Merta Agung No.3-7, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
      },
      {
        judul2: "Tangerang",
        isi: "Soon",
      },
      {
        judul2: "Depok",
        isi: "Soon",
      },
    ],
  };
  
  const product = {
    judul: "Produk",
    deskripsi: "Produk yang kami jual dalam bentuk bubuk ataupun siap diminum.",
    kolom: [
      {
        gambar: "./assets/img/espresso.jpeg",
        judulkolom: "Espresso Mocha",
        link: "https://shopee.co.id/stujacoffee",
        harga:54000,
        count:1,
        deskripsikolom:
          "Espresso dibuat melalui proses kopi disemprot air panas melalui mesin. Hasilnya berupa cairan gelap dengan crema serta buih gelembung udara yang terbentuk dari tekanan minyak dalam biji kopi.",
      },
      {
        gambar: "./assets/img/americano.jpg",
        judulkolom: "Espresso Americano",
        link: "https://shopee.co.id/stujacoffee",
        harga:35000,
        count:1,
        deskripsikolom:
          "Minuman ini merupakan campuran dari 1 shot espresso dan air panas, biasanya disajikan dalam cangkir berukuran untuk 178 ml. Rasa espresso masih kuat dan pahit, namun sedikit diencerkan dengan air. Jika rasanya kurang pekat, Anda bisa memesan doppio yang memakai 2 shot espresso.",
      },
      {
        gambar: "./assets/img/macchiato.jpeg",
        judulkolom: "Caramel Macchiato",
        harga:54000,
        count:1,
        deskripsikolom:
          "Nah, bagi Anda yang tidak suka rasa pahit, machhiato bisa jadi pilihan. Rasanya masih pekat. Untuk mengurangi rasa espresso yang sangat kuat ditambahkan campuran steamed milk atau susu panas. Macchiato juga diasajikan menggunakan demitasse.",
      },
      {
        gambar: "./assets/img/cappucino.jpg",
        judulkolom: "Espresso Beverage Cappuccino",
        harga:46000,
        count:1,
        deskripsikolom:
          "Cappucino merupakan salah satu jenis minuman kopi yang paling populer. Cappuccino diracik dengan espresso dan steamed milk. Kebanyakan cappucino disajikan dalam porsi yang besar, padahal sebenarnya takaran sajian cappucino hanya sekitar 88 ml - 177 ml tergantung dengan espresso yang digunakan.",
      },
      {
        gambar: "./assets/img/latte.jpg",
        judulkolom: "Espresso Beverage Cafe Latte",
        harga:46000,
        count:1,
        deskripsikolom:
          "Latte diracik menggunakan espresso tanpa pemanis. Dengan rasio 2:1, antara susu dan espresso. Steamed milk dituangkan ke espresso dengan layer foam, tanpa whipped cream.",
      },
    ],
  };
  
  const kontak = [
    {
      kolom: [
        {
          title: "email",
          value: "fadhelijlalfalah@gmail.com",
        },
        {
          title: "github",
          value: "github.com/fadhelmurphy",
        },
      ],
    },
    {
      kolom: [
        {
          title: "instagram",
          value: "@stujacoffee",
        },
        {
          title: "Developer",
          value: "fadhelmurphy.github.io",
        },
      ],
    },
  ];

menu.forEach(el=>{
  render.menu+='<li><a href="'+el.href+'">'+el.teks+'</a></li>'
})

beranda.forEach((el) => {
  render.beranda+=
    '<div class="beranda">' + el.kolom + "</div>"
});


render.product+=
  '<div class="baris" style="margin-bottom:5%">' +
    '<div class="variasi">' +
    "<h1>" +
    "02" +
    "</h1>" +
    "</div>" +
    '<div class="kolom product">' +
    "<h1 class='font-gede'>" +
    product.judul +
    "</h1>" +
    "<p>" +
    product.deskripsi +
    "</p>" +
    "</div>" +
    "</div>"
    render.product+='<div class="baris">'
  product.kolom.forEach((el2,i)=>{
  if (i===3) {
    render.product+='<div class="w-100"></div>'
  }
  render.product+=
      '<div class="kolom" style="margin-bottom:5%">'+
  '<div style="max-height:400px;overflow:hidden"><img src="'+el2.gambar+'"/></div>'+
      '<div class="pro-body">'+
  '<h2>'+el2.judulkolom+'</h2>'+
  '<h4 class="biaya"><b>Rp. '+el2.harga+'</b></h4>'+
  '<p>'+el2.deskripsikolom+'</p>'+
  '</div>'+
  '<div class="pro-footer">'+
  '<a data-index="'+i+'" class="button-link add-to-cart" style="cursor:pointer"><b>+ Keranjang</b></a>'+
  '</div>'+
'</div>'
  })
  render.product+='</div>'
  
  render.lokasi+=
    '<div class="baris lokasi">' +
      '<div class="variasi">' +
      "<h1>" +
      "03" +
      "</h1>" +
      "</div>" +
      '<div class="kolom">' +
      "<h1 class='font-gede'>" +
      lokasi.judul +
      "</h1>" +
      "<p>" +
      lokasi.deskripsi +
      "</p>" +
      "</div>" +
      "</div>"
  render.lokasi+='<div class="baris lokasi">'
  lokasi.kolom.forEach((el2, i) => {
    let num = i + 1;
    if (num===3) {
      render.lokasi+='<div class="w-100"></div>'
    }
    render.lokasi+=
      ' <div class="kolom">'+
        "<p>" +
        "0" +
        num +
        "</p>" +
        "<h2>" +
        el2.judul2 +
        "</h2>" +
        "<p>" +
        el2.isi +
        "</p>" +
        "</div>"
  });
  render.lokasi+="</div>"

  kontak.forEach((el) => {
    render.kontak+='<div class="baris kontak">' 
      el.kolom.forEach((element) => {
        render.kontak+=
          '<div class="kolom"><p>' +
            element.title +
            "</p><h2>" +
            element.value +
            "</h2></div>"
      }) 
      render.kontak+="</div>"
  });