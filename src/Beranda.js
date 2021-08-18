import React from "react";
import kuning from "./image/kuning.jpg";
import './App.css';

const Beranda = () => {
    return(
    <>
        <header>
        <div className="Header-left">
          <p>Portofolio</p>
        </div>
        <div className="Header-right">
          <ul>
            <li className="active"><a href="/Beranda">Beranda</a></li>
            <li><a href="/Tentang">Tentang Saya</a></li>
            <li><a href="/Kontak">Kontak</a></li>
          </ul>
        </div>
      </header>

      <section>
          <div className="ContainerApp">
            <img src={kuning} className="App-logo" alt="logo" />
            <h2>Rodhiyah Desviana</h2>
          </div>
          <hr/>
          <div className="ContainerApp">
            <h2>Tentang Saya</h2>
            <p>Assalamu'alaikum</p>
            <p>Perkenalkan saya <b>Rodhiyah Desviana</b>, asal dari <b>Siak, Riau</b></p>
            <p>Pekerjaan saya sehari-hari ialah sebagai Ibu Rumah Tangga.</p>
            <p>Selain itu, saya juga sedang kuliah di salah satu Perguruan Tinggi Swasta di Riau.</p>
          </div>
          <hr/>
          <div className="ContainerApp">
              <h2>Kontak</h2>
              <p>No. HP : +62-8137-1521-382</p>
              <p>Email : rodhiyah.desviana@gmail.com</p>
              <p>Alamat : Jl. Raya Kandis KM 78 RT 001/ RW 004</p>
              <p>Kelurahan Kandis Kota, Kec. Kandis, Kab. Siak</p>
              <p>Riau - 28686</p>
          </div>
        </section>

      <footer>
        Copyright &copy; 2021 - Rodhiyah Desviana
      </footer>      
    </>
    );
};

export default Beranda;
