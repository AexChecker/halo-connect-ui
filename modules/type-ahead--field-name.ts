import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { fieldName } = request.params;

  
  let response: Record<string, unknown>[];

  switch (fieldName) {
    case 'aeCode':
      response = [
        { key: 'SUSAMP', value: '; SUNRISE HOUSE SAMPLE - SUSAMP' },
        { key: 'SU103', value: '; SUNRISE HOUSE SAMPLE - SUSAMP' },
        { key: 'BT100', value: 'MELISSA ANDERSON - BT100' },
        { key: '009', value: 'Affan Ahmad - 009' },
      ];
      break;
    case 'teamCode':
      response = [
        { key: 'BT100', value: 'BT100' },
        { key: 'SU103', value: 'SU103' },
      ];
      break;
    case 'customerId':
      response = [
        { key: '26388', value: 'AMAZON CORPORATE LLC - 509627' },
        { key: '172433', value: 'CAPITAL ONE - 576545' },
        { key: '355863', value: 'CAPITAL ONE - 522350' },
        { key: '164330', value: 'AMAZON CORPORATE LLC *CC* - 531254' },
      ];
      break;
    case 'customerGroup':
      response = [];
      break;
    case 'assigneeUserId':
      response = [];
      break;
    case 'supplierId':
      response = [
        { key: '1', value: 'SANMAR' },
        { key: '7808', value: 'SS TRADERS/FORMERLY TISHANSOFT' },
        { key: '318133', value: '' },
        { key: '2454', value: 'AB DECO' },
        { key: '911', value: 'GILL STUDIOS INC' },
        { key: '12207', value: 'SR-SSBELLA' },
      ];
      break;
    case 'orderStatus':
      response = [
        { key: 'Invoiced', value: 'Invoiced' },
        { key: 'In Billing', value: 'In Billing' },
      ];
      break;
    case 'projectId':
      response = [];
      break;
    case 'priority':
      response = [
        { key: 'Normal', value: 'Normal' },
        { key: 'Rush', value: 'Rush' },
      ];
      break;
    case 'orderErpNum':
      response = [
        { key: '942862', value: 'W3382660' },
        { key: '300305', value: 'W3169588' },
        { key: '297933', value: 'W3166342' },
        { key: '372624', value: 'W3391929' },
        { key: '336874', value: 'W3321264' },
        { key: '956983', value: 'W3407615' },
        { key: '211749', value: 'W3248076' },
        { key: '341438', value: 'W3325255' },
        { key: '309041', value: 'W3178343' },
        { key: '305920', value: 'W3180188' },
        { key: '978521', value: 'W3433320' },
        { key: '251943', value: 'W3304478' },
      ];
      break;
    case 'orderType':
      response = [
        { key: 'Regular Order', value: 'Regular Order' },
      ];
      break;
    case 'orderTagId':
      response = [
        { key: '12', value: 'Apparel/Blank Goods Order' },
        { key: '13', value: 'Hard Goods order' },
        { key: '14', value: 'Customer PO' },
        { key: '6', value: 'Customer PO' },
        { key: '10', value: 'Apparel/Blank Goods Order' },
      ];
      break;
    case 'purchaseOrderErpNum':
      response = [];
      break;
    default:
      response = [{ key: 'test', value: 'test' }];
  }

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}
