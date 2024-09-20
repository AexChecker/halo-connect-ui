import { ZuploContext, ZuploRequest } from '@zuplo/runtime';

export default async function(request: ZuploRequest, context: ZuploContext) {
  return {
    'accountExecutives': [
      {
        'id': 'h9843fh9348f',
        'name': 'Account Executive Name',
      },
      {
        'id': 'h934f4389094',
        'name': 'Account Executive 2',
      },
      {
        'id': 'h934f43890943231',
        'name': 'Account Executive 3',
      },
      {
        'id': 'h934f43890945555',
        'name': 'Account Executive 4',
      },
    ],
    'teamCodes': [
      {
        'id': '9h384hg94f',
        'name': 'FEG',
      },
      {
        'id': '9h384hg94fgg11gg',
        'name': 'FEG 2',
      },
      {
        'id': '4h743243242fdf',
        'name': 'MEG',
      },
      {
        'id': '4h789432432',
        'name': 'MEG 2',
      },
    ],
    'assignees': [
      {
        'id': 'h9843fh9348f',
        'name': 'Assignee Name',
      },
      {
        'id': 'h934f4389094',
        'name': 'Assignee Name 2',
      },
      {
        'id': 'h934f43890943231',
        'name': 'Assignee Name 3',
      },
      {
        'id': 'h934f43890945555',
        'name': 'Assignee Name 4',
      },
    ],
    'customers': [
      {
        'id': '4h3897t4f4',
        'name': 'Budget Blinds of West Essex',
      },
      {
        'id': '1234567',
        'name': 'Budget Blinds of West Essex 2',
      },
      {
        'id': '1234566',
        'name': 'Budget Blinds of West Essex 3',
      },
      {
        'id': '1234565',
        'name': 'Budget Blinds of West Essex 4',
      },
    ],
    'customerContacts': [
      {
        'id': '4h3897t4f443242',
        'name': 'Contact 1',
      },
      {
        'id': '1234567hg2fh34',
        'name': 'Contact 2',
      },
      {
        'id': '123456642314',
        'name': 'Contact 3',
      },
      {
        'id': '1234565hg2fh323',
        'name': 'Contact 4',
      },
    ],
    'customerGroups': [
      {
        'id': '4h3897543533',
        'name': 'Groups 1',
      },
      {
        'id': '12345654353',
        'name': 'Groups 2',
      },
      {
        'id': '12345543543',
        'name': 'Groups 3',
      },
      {
        'id': '1234565h432432',
        'name': 'Groups 4',
      },
    ],
    'suppliers': [
      {
        'name': 'Goldstar',
        'id': '1',
      },
      {
        'name': 'Goldstar 2',
        'id': '2',
      },
      {
        'name': 'Goldstar 3',
        'id': '3',
      },
      {
        'name': 'Goldstar 4',
        'id': '4',
      },
      {
        'name': 'Test supplier',
        'id': '5',
      },
    ],
    'statuses': [
      {
        'id': 'submitted',
        'name': 'Submitted',
      },
      {
        'id': 'active',
        'name': 'Active',
      },
      {
        'id': 'proofing',
        'name': 'Proofing',
      },
      {
        'id': 'inProduction',
        'name': 'In Production',
      },
      {
        'id': 'shipping',
        'name': 'Shipping',
      },
      {
        'id': 'billing',
        'name': 'Billing',
      },
    ],
    'projects': [
      {
        'id': '4h389754311',
        'name': '2024 May Exhibit',
      },
      {
        'id': '123456543543',
        'name': '2023 May Exhibit',
      },
      {
        'id': '12345543543',
        'name': '2021 May Exhibit',
      },
      {
        'id': '1234565h43552',
        'name': '2022 May Exhibit',
      },
    ],
    'priorities': [
      {
        'id': 'rush',
        'name': 'Rush Orders',
      },
      {
        'id': 'expedited',
        'name': 'Expedited Orders',
      },
    ],
    'orderNumbers': [
      {
        'id': '1000000',
        'name': '1000000',
      },
      {
        'id': '1000001',
        'name': '1000001',
      },
      {
        'id': '1000002',
        'name': '1000002',
      },
      {
        'id': '1000004',
        'name': '1000004',
      },
    ],
    'orderTypes': [
      {
        'id': '9h384hg94f',
        'name': 'order type 1',
      },
      {
        'id': '4h789fn499',
        'name': 'order type 2',
      },
      {
        'id': '4h789fn4559',
        'name': 'order type 3',
      },
    ],
    'orderTags': [
      {
        'id': '123',
        'name': 'Some Tag',
      },
      {
        'id': '1234',
        'name': 'Another Tag',
      },
    ],
    'purchaseOrderNumbers': [
      {
        'id': '123432',
        'name': 'W674722602',
      },
      {
        'id': '1234543',
        'name': 'W674722601',
      },
    ],
    'shipDates': [
      {
        'id': '1',
        'name': '0-7 past',
      },
      {
        'id': '2',
        'name': '8-14 past',
      },
      {
        'id': '3',
        'name': '15-30 past',
      },
      {
        'id': '4',
        'name': '31-60 past',
      },
      {
        'id': '5',
        'name': '61+ past',
      },
    ],
  };
}