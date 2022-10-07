import React from "react";
import "../css/resultado.css";

const Resultado = () => {
  return (
    <div class="contenido_completo">
      <h3>Tu archivo convertidos</h3>
      <div class="tabla_button">
        <div class="cuadro_completo">
          <div class="izquierda">
            Cuadro vacio
          </div>
          <div class="derecha">
            <span>320</span>
          </div>
        </div>
      </div>
      <div class="cuadro_3botones">
          <div class="Entrada_QR">
            <i id="qr">QR</i>
            <button class="btn_primary">descargar</button>
            <button class="btn_primary">Cargar en la nube</button>
          </div>
      </div>
      <div class="cuadro_ultimoBotones">
        <div class="interior_icons">
          <i>Lupa</i>
          <i>QR</i>
          <button class="btn_primary">Convertir a otro archivo WEBP</button>
          <button class="btn_primary">Rehacer</button>
          <button class="btn_primary">Eliminar</button>
          <button class="btn_primary">Descargar archivo comprimido</button>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
