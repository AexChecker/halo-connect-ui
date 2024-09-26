import { ZuploRequest, ZuploContext } from '@zuplo/runtime';

interface OrderFilterTypeAheadOption {
  key: string;
  value: string;
}

interface OrderFilterTypeAheadResponse {
  dropdownOptions: OrderFilterTypeAheadOption[];
  hasMore: boolean;
}

const handler = async (request: ZuploRequest, context: ZuploContext) => {
  const { fieldName } = request.params;

  let dropdownOptions: OrderFilterTypeAheadOption[] = [];

  switch (fieldName) {
    case 'aeCode':
      dropdownOptions = [
        { key: 'SUSAMP', value: '; SUNRISE HOUSE SAMPLE - SUSAMP' },
        { key: 'SU103', value: '; SUNRISE HOUSE SAMPLE - SUSAMP' },
        { key: 'BT100', value: 'MELISSA ANDERSON - BT100' },
        { key: '009', value: 'Affan Ahmad - 009' },
      ];
      break;
    case 'teamCode':
      dropdownOptions = [
        { key: 'BT100', value: 'BT100' },
        { key: 'SU103', value: 'SU103' },
      ];
      break;
    case 'customerId':
      dropdownOptions = [
        { key: '26388', value: 'AMAZON CORPORATE LLC - 509627' },
        { key: '172433', value: 'CAPITAL ONE - 576545' },
        { key: '355863', value: 'CAPITAL ONE - 522350' },
        { key: '164330', value: 'AMAZON CORPORATE LLC *CC* - 531254' },
      ];
      break;
    case 'customerGroup':
      dropdownOptions = [];
      break;
    case 'assigneeUserId':
      dropdownOptions = [];
      break;
    case 'supplierId':
      dropdownOptions = [
        { key: '1', value: 'SANMAR' },
        { key: '7808', value: 'SS TRADERS/FORMERLY TISHANSOFT' },
        { key: '318133', value: '' },
        { key: '2454', value: 'AB DECO' },
        { key: '911', value: 'GILL STUDIOS INC' },
        { key: '12207', value: 'SR-SSBELLA' },
      ];
      break;
    case 'orderStatus':
      dropdownOptions = [
        { key: 'Invoiced', value: 'Invoiced' },
        { key: 'In Billing', value: 'In Billing' },
      ];
      break;
    case 'projectId':
      dropdownOptions = [];
      break;
    case 'priority':
      dropdownOptions = [
        { key: 'Normal', value: 'Normal' },
        { key: 'Rush', value: 'Rush' },
      ];
      break;
    case 'orderErpNum':
      dropdownOptions = [
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
      dropdownOptions = [
        { key: 'Regular Order', value: 'Regular Order' },
      ];
      break;
    case 'orderTagId':
      dropdownOptions = [
        { key: '12', value: 'Apparel/Blank Goods Order' },
        { key: '13', value: 'Hard Goods order' },
        { key: '14', value: 'Customer PO' },
        { key: '6', value: 'Customer PO' },
        { key: '10', value: 'Apparel/Blank Goods Order' },
      ];
      break;
    case 'purchaseOrderErpNum':
      dropdownOptions = [];
      break;
    default:
      dropdownOptions = [{ key: 'test', value: 'test' }];
  }

  const response: OrderFilterTypeAheadResponse = {
    dropdownOptions,
    hasMore: false,
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export default handler;