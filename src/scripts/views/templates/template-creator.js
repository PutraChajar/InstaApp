import CONFIG from '../../globals/config.js';

const templateSelectCust = (value) => `
    <option value="${value.KODE_CUST}">${value.NAMA_CUST}</option>
`;

const templateSelectIsc = (value) => `
    <option value="${value.KODE_ISC}">${value.NAMA_ISC}</option>
`;

const templateSelectAe = (value) => `
    <option value="${value.NO_INDUK}">${value.NAMA}</option>
`;

const templateSelectWarna = (value) => `
    <option value="${value.WARNA}">${value.WARNA}</option>
`;

const classBatch = (value, from) => {
    let html = ``;
    if (from === 'order') {
        html = `detail`;
    }
    return html;
}

const valueBatch = (value, from) => {
    let html = ``;
    if (from === 'order') {
        html = `
            nobatch="${value.NO_BATCH}" status="${value.STATUS}"
        `;
    }
    return html;
}

const buttonBatch = (value, from) => {
    let html = ``;
    if (from === 'batch') {
        html = `
            <button class="hapus" nobatch="${value.NO_BATCH}"><i class="fa fa-times"></i></button>
            <button class="edit" nobatch="${value.NO_BATCH}" tanggal_awal="${value.DATE_START2}" tanggal_akhir="${value.DATE_END2}"><i class="fa fa-pencil"></i></button>
            <button class="detail" nobatch="${value.NO_BATCH}"><i class="fa fa-list"></i></button>
        `;
    }
    return html;
}

const templateBatch = (value, from) => `
    <div class="batch-item ${classBatch(value, from)}" ${valueBatch(value, from)}>
        <div class="batch-no">#${value.NO_BATCH}</div>
        <div class="batch-date">
            <span class="batch-date-start">${value.DATE_START}</span>
            <span class="batch-date-sprt">s/d</span>
            <span class="batch-date-end">${value.DATE_END}</span>
        </div>
        <div class="batch-status ${value.STATUS}">${value.STATUS}</div>
        ${buttonBatch(value, from)}
    </div>
`;

const buttonProduct = (value, from) => {
    let html = ``;
    if (from === 'batch_detail') {
        html = `
            <span class="edit" nobatch="${value.NO_BATCH}" subbatch="${value.SUB_BATCH}" mainprod="${value.MAIN_PROD}" modelid="${value.MODELID}" productid="${value.PRODUCTID}" kadar="${value.KADAR}" plating="${value.PLATING}" warna="${value.WARNA}" size="${value.SIZEE}" grmunit="${value.GRM_UNIT}" berat="${value.BERAT}" stok="${value.STOK}" foto="${value.FOTO}"><i class="fa fa-pencil"></i></span>
            <span class="hapus" nobatch="${value.NO_BATCH}" subbatch="${value.SUB_BATCH}"><i class="fa fa-times"></i></span>
        `;
    } else if (from === 'order_detail') {
        html = `
            <span class="share" nobatch="${value.NO_BATCH}" subbatch="${value.SUB_BATCH}" model="${value.MODELID}-${value.PRODUCTID}" foto="${value.FOTO}" carat="${value.CARAT}" warna="${value.WARNA}" berat="${value.BERAT}"><i class="fa fa-share-alt"></i></span>
            <span class="add" nobatch="${value.NO_BATCH}" subbatch="${value.SUB_BATCH}"><i class="fa fa-plus"></i></span>
        `;
    } else if (from === 'realization_input') {
        html = `
            <span class="add" mainprod="${value.MAIN_PROD}" modelid="${value.MODELID}" productid="${value.PRODUCTID}" kadar="${value.KADAR}" plating="${value.PLATING}" warna="${value.WARNA}" stok="${value.STOK}"><i class="fa fa-plus"></i></span>
        `;
    } else if (from === 'realization_over') {
        html = `
            <span class="add" mainprod="${value.MAIN_PROD}" modelid="${value.MODELID}" productid="${value.PRODUCTID}" kadar="${value.KADAR}" plating="${value.PLATING}" warna="${value.WARNA}" stok="${value.STOK}"><i class="fa fa-minus"></i></span>
        `;
    }
    return html;
}

const infoProduct = (value, from) => {
    let html = ``;
    if (from === 'batch_detail') {
        html = `
            <div class="row row-detail">
                <div class="col col-detail">Stok</div>
                <div class="col col-detail">${value.STOK}</div>
            </div>
        `;
    } else if (from === 'order_detail') {
        html = `
            <div class="row row-detail">
                <div class="col col-detail">Stok</div>
                <div class="col col-detail">${value.STOK}</div>
            </div>
            <hr>
            <div class="row row-detail" style="display: flex; align-items: center;">
                <div class="col col-detail">CUST</div>
                <div class="col col-detail">QTY</div>
                <div class="col col-detail">AKSI</div>
            </div>
            <div class="isc_qty" id="isc_qty${value.SUB_BATCH}"></div>
        `;
    } else if (from === 'orderlist_detail') {
        html = `
            <div class="row row-detail">
                <div class="col col-detail">Qty</div>
                <div class="col col-detail">${value.QTY}</div>
            </div>
        `;
    } else if (from === 'realization_detail') {
        html = `
            <div class="row row-detail">
                <div class="col col-detail">Qty</div>
                <div class="col col-detail">${value.QTY}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Realisasi</div>
                <div class="col col-detail">${value.REALISASI}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Varian</div>
                <div class="col col-detail">${value.VARIAN}</div>
            </div>
        `;
    } else if (from === 'realization_input') {
        html = `
            <div class="row row-detail">
                <div class="col col-detail">Sisa Stok</div>
                <div class="col col-detail">${value.STOK}</div>
            </div>
        `;
    } else if (from === 'realization_over') {
        html = `
            <div class="row row-detail">
                <div class="col col-detail">Kelebihan</div>
                <div class="col col-detail">${value.STOK}</div>
            </div>
        `;
    }
    return html;
}

const templateProduct = (value, from) => `
    <div class="product-item">
        <div class="product-photo">
            ${buttonProduct(value, from)}
            <img src="${CONFIG.BASE_URL_IMAGE + value.FOTO}" alt="foto_produk">
        </div>
        <div class="product-detail">
            <div class="row row-detail">
                <div class="col col-detail">Mainprod</div>
                <div class="col col-detail">${value.MAIN_PROD}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Modelid</div>
                <div class="col col-detail">${value.MODELID}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Productid</div>
                <div class="col col-detail">${value.PRODUCTID}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Kadar</div>
                <div class="col col-detail">${value.CARAT}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Est Berat</div>
                <div class="col col-detail">${value.BERAT}</div>
            </div>
            <div class="row row-detail hide">
                <div class="col col-detail">Plating</div>
                <div class="col col-detail">${value.PLATING}</div>
            </div>
            <div class="row row-detail">
                <div class="col col-detail">Warna</div>
                <div class="col col-detail">${value.WARNA}</div>
            </div>
            <div class="row row-detail hide">
                <div class="col col-detail">Size</div>
                <div class="col col-detail">${value.SIZEE}</div>
            </div>
            <div class="row row-detail hide">
                <div class="col col-detail">Gram Unit</div>
                <div class="col col-detail">${value.GRM_UNIT}</div>
            </div>
            ${infoProduct(value, from)}
        </div>
    </div>
`;

export { templateSelectIsc, templateSelectAe, templateSelectWarna, templateProduct, templateBatch, templateSelectCust };