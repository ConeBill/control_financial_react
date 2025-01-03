const formataData = (dataIso, show) => {
  const data = new Date(dataIso);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  if (show === true) {
    return `${dia}/${mes}/${ano}`;
  }
  return `${ano}-${mes}-${dia}`;
};

export default formataData;