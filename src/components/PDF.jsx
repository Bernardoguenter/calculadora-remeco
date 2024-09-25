/* eslint-disable react/prop-types */
import logoRemeco from "../assets/LogoRemeco.png";
import { formatNumber } from "../utils/formatNumbers";
import StringToList from "./StringToList";

export const PDF = ({
  cliente,
  descripcion,
  importeTotal,
  materiales,
  formasPago,
  km,
  incluyeIva,
}) => {
  const empresa = {
    nombre: "Metalúrgica Remeco",
    telefono: "2923524155",
    email: "metalurgicaremeco4@gmail.com",
    vendedor: "Guenter Juan",
  };

  return (
    <div id="pdf">
      <div className="pdf-header">
        <img
          src={logoRemeco}
          alt="logo"
          className="pdf-logo"
        />
        <aside className="pdf-info">
          <p className="text-size">{empresa.nombre}</p>
          <p className="text-size">Colonia Menonita </p>
          <p className="text-size">Remeco la Pampa </p>
          <p className="text-size">Tel: {empresa.telefono}</p>
          <p className="text-size">{empresa.email}</p>
        </aside>
      </div>
      <div className="pdf-body">
        <p className="text-size">Estimado {cliente}:</p>
        <p className="text-size">
          Le agradecemos su consulta y hacemos la siguiente oferta según nuestra
          comunicación previa.
        </p>
      </div>
      <div className="pdf-presupuesto">
        <h2>PRESUPUESTO</h2>
        <table>
          <thead>
            <tr>
              <th className="text-size">Descripción</th>
              <th className="text-size">Precio</th>
              <th className="text-size">Importe Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-size">{descripcion}</td>
              <td className="text-size">
                {importeTotal ? "$" + formatNumber(importeTotal) : ""}
              </td>
              <td className="text-size">
                {importeTotal ? "$" + formatNumber(importeTotal) : ""}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-size">
          *
          {km > 0
            ? "El precio inlcuye el flete"
            : "El precio no inlcuye el flete"}
        </p>
        <p className="text-size">*Montaje incluído</p>
        <p className="text-size">
          {incluyeIva ? "*Incluye IVA 10,5%" : "*NO Incluye IVA 10,5%"}
        </p>
      </div>
      <div className="pdf-materiales">
        <h2>Detalle de materiales</h2>
        <StringToList inputString={materiales} />
      </div>
      <div className="pdf-formas-pago">
        <h2>Formas de pago</h2>
        <StringToList inputString={formasPago} />
      </div>

      <div className="pdf-footer">
        <p className="text-size">Esperamos con interés trabajar con usted.</p>
        <p className="text-size">Le saluda atentamente:</p>
        <p className="text-size">
          {empresa.vendedor} -{" "}
          <span className="firma-span">{empresa.nombre}</span>
        </p>
      </div>
    </div>
  );
};
