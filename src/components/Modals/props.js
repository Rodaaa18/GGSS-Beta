export const propsModal = {
    propArrayId : "idEstadoCivil",
    propArrayOp : "masculino",
    nameModal : "Estados Civiles"
};
export const propsModalEstudios = {
    propArrayId : "iDestudios",
    propArrayOp : "estudiosNivel",
    nameModal : "Estudios"
};
export const propsModalEstado = {
    propArrayId : "idEstado",
    propArrayOp : "nombreEstado",
    nameModal : "Estado"
};
export const propsModalFormasdePagos = {
    propArrayId : "iDformadePago",
    propArrayOp : "nombreFormadePago",
    nameModal : "Formas de Pago"
};
export const propsModalCargos = {
    propArrayId : "iDcargo",
    propArrayOp : "nombreCargo",
    nameModal : "Cargos"
}

export const propsModalCalles = {
    propArrayId : "idCalle",
    propArrayOp : "calle",
    nameModal : "Calle"
};
// export const propsModalMotivosdeEgresos = {
//     propArrayId : "idFormaPago",
//     propArrayOp : "nombreFormaPago",
//     nameModal : "Formas de Pago"
// };
// export const propsModalParentesco = {
//     propArrayId : "iDparentesco",
//     propArrayOp : "nombreParentesco",
//     nameModal : "Parentescos"
// };
export const propsModalTiposDocumento = {
    propArrayId : "iDtipoDocumento",
    propArrayOp : "tipoDocumento",
    nameModal : "Tipos Documento"
}
export const objectEstadosCiviles = [
	{
		"label": "Masculino",
		"placeholder": "Casado",
        "idInput" : "masculino",
        "nameInput" : "masculino",
        "sexo" : "M"
	},
	{
		"label": "Femenino",
		"placeholder": "Casada",
        "idInput" : "femenino",
        "nameInput" : "femenino",
        "sexo" : "F"
	}
]
export const objectEstudios = [
	{
	"label": "Nivel de Estudios",
	"placeholder": "Universitario",
    "idInput": "estudiosNivel",
    "nameInput": "estudiosNivel"
	}
]
export const objectTipoDocumento = [
    {
      "label": "Tipo de Documento",
      "placeholder": "DNI",
      "idInput": "tipoDocumento",
      "nameInput": "tipoDocumento"
    }
  ]