function Myapp(name, ,profesi,watak,tabungan,hutang) {
     name ='alang';// terserah nama kalian
     profesi='petani';//profesi yang tersedia hanya = petani,pedagang dan penganguran
     watak= 'malas';// rajin aatau malas
     tabungan =0;//pastikan  tabungan mulai dari 0 seperti di pom besin
     hutang=0//sama seperti tabungan

  if (name==='' || profesi==='' || watak==='') {
    console.log('masukkan semua variabel untuk memulai app gak jelas ini');
  }
  else if (name!=='' && profesi==='petani' && watak==='rajin') {
      {console.log(name+' adalah seorang '+profesi+' yang '+watak+' ia setiap hari keladang untuk melakukan pekerjaannya dan menyimpan uang tabunganya untuk menikah');
        if (watak==='rajin') {
          for (tabungan === 0; tabungan <= 10; tabungan++) {
            if (tabungan===10) {
              console.log('tabungan '+ name+' sudah cukup dari hasil bertani,ia pun melamar pujaan hatinya')//berasa alay :v
            }
            else{
              console.log(name+ ' masih menabung');
            }
          }
        }
  }
  else if (name!=='' && profesi==='petani' && watak==='malas') {
      console.log(name+' adalah seorang '+profesi+' yang '+watak+' ia jarang keladang');
      console.log('ia hidup mengandalkan hutang');
        if (watak==='malas') {
          for (hutang === 0; hutang <= 10; hutang++) {
            if (hutang=== 10) {
              console.log(name+' banyak hutang,ia pun bunuh diri')
            }
            else {
              console.log(name+' berhutang ke tetangga');
            }

          }
        }
  }
  else if (name!=='' && profesi==='pedagang' && watak==='rajin') {
      console.log(name+' adalah seorang '+profesi+' yang '+watak+' ia setiap hari bekerja dan menyimpan uang tabunganya untuk mengembangkan usahanya');
        if (watak==='rajin') {
          for (tabungan === 0; tabungan <= 10; tabungan++) {
            if (tabungan===10) {
              console.log('tabungan '+ name+' sudah cukup dari hasil berdagang,ia pun membuka supermarket di kotanya')
            }
            else{
              console.log(name+ ' masih menabung');
            }
          }
        }
  }
  else if (name!==''  && profesi==='pedagang' && watak==='malas') {
      console.log(name+' adalah seorang '+profesi+' yang '+watak+' ia membiarkan orang lain melakukan pekerjaannya');
      console.log('ia ditipu temannya dan asetnya dijual sehingga ia meminjam modal ke bank');
        if (watak==='malas') {
          for (hutang === 0; hutang <= 10; hutang++) {
            if (hutang=== 10) {
              console.log(name+' banyak hutang,ia pun jadi gembel')
            }
            else {
              console.log(name+' berhutang ke bank');
            }
          }
        }
  }
  else if (name!=='' && profesi==='penganguran' && watak==='rajin') {
      console.log(name+' adalah seorang '+profesi+' yang '+watak+', ia setiap hari menganggur');
      console.log(name+'-pun menjadi penganguran teladan tahun ini');
  }
  else if (name!==''  && profesi==='penganguran' && watak==='malas') {
      console.log(name+' malas keluar rumah walaupun ia tidak punya kesibukan di rumah');
      console.log('ia pun menjadi hikikomori');
  }
  else {
    console.log('tidak ada pilihan yg cocok');
  }
return console.log('<app by : alang mahendra>');
}


console.log(Myapp())
