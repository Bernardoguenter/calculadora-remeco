import { formatNumber } from "./formatNumbers";

export const copiarPrecio = async (toCopy) => {
  if (!toCopy) {
    alert("Debes realizar una cotización antes de copiar el precio");
    return;
  }
  try {
    const valorFormateado = formatNumber(toCopy);
    await navigator.clipboard.writeText(valorFormateado);
  } catch (error) {
    console.error(error.message);
  }
};

export const copiarDescripcion = async (toCopy) => {
  if (!toCopy) {
    alert("Debes realizar una cotización antes de copiar un texto");
    return;
  }
  try {
    await navigator.clipboard.writeText(toCopy);
  } catch (error) {
    console.error(error.message);
  }
};

export const copiarTodo = async (descripcion, materiales, precio) => {
  const valorFormateado = formatNumber(precio);
  const textoCompleto = `Descripción: ${descripcion}\nMateriales: ${materiales}\nPrecio: ${valorFormateado}`;

  if (!descripcion && !materiales && !precio) {
    alert("Debes llenar los campos antes de copiar el texto");
    return;
  }

  try {
    await navigator.clipboard.writeText(textoCompleto);
  } catch (error) {
    console.error(error.message);
  }
};

export const copiarTodoCristian = async (descripcion, materiales, precio) => {
  const precioConRecago = precio * 1.03;
  const valorFormateado = formatNumber(precioConRecago);

  const textoCompleto = `Descripción: ${descripcion}\nMateriales: ${materiales}\nPrecio: ${valorFormateado}`;

  if (!descripcion && !materiales && !precio) {
    alert("Debes llenar los campos antes de copiar el texto");
    return;
  }

  try {
    await navigator.clipboard.writeText(textoCompleto);
  } catch (error) {
    console.error(error.message);
  }
};
