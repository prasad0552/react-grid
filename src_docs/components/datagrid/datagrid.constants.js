import * as VALIDATE from './datagrid.validators';

export const GRID = {
  id: 'TestGrid',
  idKeyPath: ['id'],
  defaultSortColumn: 'float',
  defaultSortOrder: 'asc',
  language: 'en',
  dateFormat: 'DD/MM/YYYY',
  decimalSeparator: '.',
  thousandSeparator: '',
};

export const selectOptions = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' },
];

export const columns = [
  {
    header: 'Text',
    valueKeyPath: ['text'],
    valueType: 'text',
    componentType: 'text',
    isRequired: true,
    isLocked: true,
    validators: [
      { unique: true },
      { validate: VALIDATE.isRequired },
    ],
  },
  {
    header: 'Text2',
    valueKeyPath: ['text2'],
    valueType: 'text',
    componentType: 'text',
    isRequired: true,
    isHidden: true,
    validators: [
      { unique: true },
      { validate: VALIDATE.isRequired },
    ],
  },
  {
    header: 'Text3',
    valueKeyPath: ['text3'],
    valueType: 'text',
    componentType: 'text',
    isHidden: true,
  },
  {
    header: 'Text4',
    valueKeyPath: ['text4'],
    valueType: 'text',
    componentType: 'text',
  },
  {
    header: 'Number',
    valueKeyPath: ['number'],
    valueType: 'number',
    componentType: 'number',
    isRequired: true,
    width: 80,
    defaultValue: 123,
    validators: [
      { validate: VALIDATE.isRequired },
    ],
  },
  {
    header: 'Float',
    valueKeyPath: ['float'],
    valueType: 'float',
    isRequired: true,
    componentType: 'float',
    width: 100,
    validators: [
      { validate: VALIDATE.isRequired },
    ],
  },
  {
    header: 'Boolean',
    valueKeyPath: ['boolean'],
    valueType: 'boolean',
    componentType: 'boolean',
    width: 100,
  },
  {
    header: 'Date',
    valueKeyPath: ['date'],
    valueType: 'date',
    componentType: 'date',
    isRequired: true,
    width: 120,
    validators: [
      { validate: VALIDATE.isRequired },
    ],
  },
  {
    header: 'Select',
    valueKeyPath: ['select'],
    valueType: 'text',
    componentType: 'select',
    selectComponentOptions: selectOptions,
  },
];

export const data = [
  {
    id: 1,
    text: 'Text 1',
    text2: 'Some text 2',
    number: 1,
    float: 5.5,
    boolean: true,
    date: '2011-04-20T00:00:00Z',
    select: 'Option 1',
  },
  {
    id: 2,
    text: 'Text 2',
    text2: 'Some text 2',
    number: 2,
    float: 4.4,
    boolean: false,
    date: '2012-04-20T00:00:00Z',
    select: 'Option 2',
  },
  {
    id: 3,
    text: 'Text 3',
    text2: 'Some text 3',
    number: 3,
    float: 3.3,
    boolean: false,
    date: '2013-04-20T00:00:00Z',
    select: 'Option 3',
  },
  {
    id: 4,
    text: 'Text 4',
    text2: 'Some text 4',
    number: 4,
    float: 2.2,
    boolean: false,
    date: '2014-04-20T00:00:00Z',
    select: 'Option 4',
  },
  {
    id: 5,
    text: 'Text 5',
    text2: 'Some text 5',
    number: 5,
    float: 1.1,
    boolean: false,
    date: '2015-04-20T00:00:00Z',
    select: 'Option 5',
  },
  {
    id: 6,
    text: undefined,
    text2: undefined,
    number: undefined,
    float: undefined,
    boolean: undefined,
    date: undefined,
    select: undefined,
  },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 },
  { id: 26 },
  { id: 27 },
  { id: 28 },
  { id: 29 },
  { id: 30 },
];
