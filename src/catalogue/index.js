import {MNR_NO_CATALOGUE_PHOTO} from "../utils/constants";

const data = [
    {id: 1, nm_produto: 'BOBINA DE PAPEL PARA PRESENTE TAMANHOS E ESTAMPAS VARIADOS', descricao: ' - ', vl_unitario: '', vl_promocional: '', nm_foto: 'http://sistema.mercadonarede.com.br/catalago/img/7214288.jpg'},
    {id: 2, nm_produto: 'MOLA MESTRA TRAS KMB0398-01BB', descricao: '80 X 14 X 1900 - CIMO/FAB./CIND.', vl_unitario: '196,90', vl_promocional: '', nm_foto: 'http://sistema.mercadonarede.com.br/catalago/img/6618545.jpg'},
    {id: 3, nm_produto: 'DETERGENTE 500 ML', descricao: ' - YPE', vl_unitario: '', vl_promocional: '', nm_foto: 'http://sistema.mercadonarede.com.br/catalago/img/7214267.jpg'},
    {id: 4, nm_produto: 'FILTRO RACCOR', descricao: '127 - TESTE', vl_unitario: '200,00', vl_promocional: '189,00', nm_foto: MNR_NO_CATALOGUE_PHOTO},
    {id: 5, nm_produto: 'FILTRO RACCOR', descricao: '127 - TESTE', vl_unitario: '200,00', vl_promocional: '189,00', nm_foto: MNR_NO_CATALOGUE_PHOTO},
    {id: 6, nm_produto: 'MOLA MESTRA TRAS KMB0398-01BB', descricao: '80 X 14 X 1900 - CIMO/FAB./CIND.', vl_unitario: '196,90', vl_promocional: '35,60', nm_foto: 'http://sistema.mercadonarede.com.br/catalago/img/6618545.jpg'},
    {id: 7, nm_produto: 'DETERGENTE 5 LITROS', descricao: ' - Q ÓTIMO', vl_unitario: '196,90', vl_promocional: '35,60', nm_foto: 'http://sistema.mercadonarede.com.br/catalago/img/7214265.jpg'},
    {id: 8, nm_produto: 'DETERGENTE 5 LITROS', descricao: '222 - YPE', vl_unitario: '', vl_promocional: '', nm_foto: 'http://sistema.mercadonarede.com.br/catalago/img/7214269.jpg'},
];

export const getCatalogue = () => data;