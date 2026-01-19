namespace apiConsuming.srv;
using { API_PARTNERCOMPANY_SRV as p } from './external/API_PARTNERCOMPANY_SRV';
service consumesrv {
    entity partner as projection on p.A_PartnerCompany;
}
annotate consumesrv.partner with @cds.persistence:{
    table,skip:false
    };



