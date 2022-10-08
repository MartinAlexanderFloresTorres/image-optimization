import { useEffect, useState } from "react";
import "./drop.css";

const Drop = () => {
  const [drop, setDrop] = useState(false);
  const [dropEnter, setDropEnter] = useState(false);

  // Handle para capturar el archivo
  const handleDrop = (e) => {
    // Recorrer el archivo
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      console.log(e.dataTransfer.files[i]);
    }
    // Si es una carpeta
    if (e.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
      console.log("Es una carpeta");
      // Obtener el contenido de la carpeta
      const folder = e.dataTransfer.items[0].webkitGetAsEntry();
      // Recorrer el contenido de la carpeta
      folder.createReader().readEntries((entries) => {
        // Recorrer los archivos
        entries.forEach((entry) => {
          // Si es un archivo
          if (entry.isFile) {
            // Obtener el archivo
            entry.file((file) => {
              console.log(file);
            });
          }
        });
      });
    }

    // Si es un archivo
    if (e.dataTransfer.items[0].webkitGetAsEntry().isFile) {
      console.log("Es un archivo");
    }

    // Si es una imagen
    if (
      e.dataTransfer.items[0].webkitGetAsEntry().isFile &&
      e.dataTransfer.items[0].type.includes("image")
    ) {
      console.log("Es una imagen");
    }

    // Si es un video
    if (
      e.dataTransfer.items[0].webkitGetAsEntry().isFile &&
      e.dataTransfer.items[0].type.includes("video")
    ) {
      console.log("Es un video");
    }

    // Si es un audio
    if (
      e.dataTransfer.items[0].webkitGetAsEntry().isFile &&
      e.dataTransfer.items[0].type.includes("audio")
    ) {
      console.log("Es un audio");
    }

    // Si es un pdf
    if (
      e.dataTransfer.items[0].webkitGetAsEntry().isFile &&
      e.dataTransfer.items[0].type.includes("pdf")
    ) {
      console.log("Es un pdf");
    }

    // Si es un zip
    if (
      e.dataTransfer.items[0].webkitGetAsEntry().isFile &&
      e.dataTransfer.items[0].type.includes("zip")
    ) {
      console.log("Es un zip");

      // Obtener el archivo del zip
      const zip = e.dataTransfer.items[0].webkitGetAsEntry();
      console.log(zip);
    }

    // Si es un rar
    if (
      e.dataTransfer.items[0].webkitGetAsEntry().isFile &&
      e.dataTransfer.items[0].type.includes("rar")
    ) {
      console.log("Es un rar");

      // Obtener el archivo del rar
      const rar = e.dataTransfer.items[0].webkitGetAsEntry();
      console.log(rar);

      // Obtener el contenido del rar
      rar.createReader().readEntries((entries) => {
        // Recorrer los archivos
        entries.forEach((entry) => {
          // Si es un archivo
          if (entry.isFile) {
            // Obtener el archivo
            entry.file((file) => {
              console.log(file);
            });
          }
        });
      });
    }
  };
  return (
    <section className='drop-overflow'>
      <section
        className={`drop container ${drop ? "dragging" : ""} ${
          dropEnter ? "active" : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDrop(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDrop(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDrop(false);
          setDropEnter(false);
        }}
      >
        <section className='drop-bottom'>
          <h2>
            Arrastrar y soltar. <span className='sky'>Está en línea.</span>{" "}
          </h2>
          <p>
            Coloque una carpeta con las imagenes para subir.
            <span className='sky'> Arrastre y suelte</span> o
            <span className='sky'> haga clic</span> para seleccionar.
          </p>
        </section>

        <div className='drop-contenedor'>
          <div>
            <section className='drop-box-center'>
              <div
                className='drop-box-item'
                onDragOver={(e) => {
                  e.preventDefault();
                  setDropEnter(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setDropEnter(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  setDropEnter(false);
                  handleDrop(e);
                }}
              >
                <svg
                  className='drop-box-svg-circle'
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                >
                  <rect
                    width='100%'
                    height='100%'
                    fill='none'
                    rx='200'
                    ry='200'
                    stroke='var(--drop-color-svg)'
                    strokeWidth='8'
                    strokeDasharray='.15%,5%'
                    strokeDashoffset='0'
                    strokeLinecap='square'
                  />
                </svg>

                <div className='drop-box-content'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='69'
                    height='51'
                    viewBox='0 0 69 51'
                    className='dropzone-content__image'
                  >
                    <defs>
                      <linearGradient
                        id='a'
                        x1='34.5'
                        y1='48.67'
                        x2='34.5'
                        y2='0.19'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop offset='0.67' stopColor='#112caf'></stop>
                        <stop offset='0.77' stopColor='#2250f4'></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d='M62.93 6.8H37.11L29.84.19H6.07a3.53 3.53 0 0 0-3.53 3.53v41.42a3.53 3.53 0 0 0 3.53 3.53h56.86a3.53 3.53 0 0 0 3.53-3.53V10.33a3.53 3.53 0 0 0-3.53-3.53Z'
                      fill='url(#a)'
                    ></path>
                    <path
                      fill='#ffdd73'
                      d='M6.83 12.56h53.01V35.1H6.83z'
                    ></path>
                    <path
                      fill='#fff6d0'
                      d='M10.27 9.83h53.01v22.54H10.27z'
                    ></path>
                    <path
                      d='M63.17 50.81H5.83a3.46 3.46 0 0 1-3.5-3.06l-2.07-29a3.25 3.25 0 0 1 3.29-3.51h61.9a3.25 3.25 0 0 1 3.29 3.51l-2.07 29a3.46 3.46 0 0 1-3.5 3.06Z'
                      fill='#a6bffd'
                    ></path>
                  </svg>

                  <h2>Arrastre y suelte la carperta o imagenes aqui</h2>
                  <p>
                    O bien,{" "}
                    <label htmlFor='file'>
                      <input type='file' id='file' name='file' /> navegue para
                      carga
                    </label>
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className='drop-ring'></div>
          <div className='drop-ring'></div>
          <div className='drop-ring'></div>
        </div>
      </section>
    </section>
  );
};

export default Drop;
