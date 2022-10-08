import "./resultado.css";

const Resultado = () => {
  return (
    <div className='contenido_completo'>
      <h3>Tu archivo convertidos</h3>
      <div className='tabla_button'>
        <div className='cuadro_completo'>
          <div className='izquierda'>Cuadro vacio</div>
          <div className='derecha'>
            <span>320</span>
          </div>
        </div>
      </div>
      <div className='cuadro_3botones'>
        <div className='Entrada_QR'>
          <i id='qr'>QR</i>
          <button className='btn_primary'>descargar</button>
          <button className='btn_primary'>Cargar en la nube</button>
        </div>
      </div>
      <div className='cuadro_ultimoBotones'>
        <div className='interior_icons'>
          <i>Lupa</i>
          <i>QR</i>
          <button className='btn_primary'>Convertir a otro archivo WEBP</button>
          <button className='btn_primary'>Rehacer</button>
          <button className='btn_primary'>Eliminar</button>
          <button className='btn_primary'>Descargar archivo comprimido</button>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
