export type TokenCategory = 'color' | 'typography' | 'space' | 'shape' | 'motion' | 'elevation' | 'opacity' | 'layout';

export interface TokenDefinition {
  name: string;
  value: string;
  category: TokenCategory;
  description: string;
}

export const semanticTokenGroups = [
  {
    id: 'primary',
    label: 'Primary action',
    tokens: ['--primary', '--on-primary', '--primary-container', '--on-primary-container'],
  },
  {
    id: 'secondary',
    label: 'Secondary action',
    tokens: ['--secondary', '--on-secondary', '--secondary-container', '--on-secondary-container'],
  },
  {
    id: 'tertiary',
    label: 'Tertiary accent',
    tokens: ['--tertiary', '--on-tertiary', '--tertiary-container', '--on-tertiary-container'],
  },
  {
    id: 'surfaces',
    label: 'Surface hierarchy',
    tokens: ['--surface-lowest', '--surface-low', '--surface-default', '--surface-high', '--surface-highest'],
  },
  {
    id: 'status',
    label: 'Status feedback',
    tokens: ['--status-info', '--status-success', '--status-warning', '--status-danger'],
  },
] as const;

export const foundationTokens: TokenDefinition[] = [
  { name: '--font-display', value: "'Outfit'", category: 'typography', description: 'Expressive display and heading type.' },
  { name: '--font-body', value: "'Lexend'", category: 'typography', description: 'Readable body and interface type.' },
  { name: '--font-mono', value: "'JetBrains Mono'", category: 'typography', description: 'Technical labels, code, and metadata.' },
  { name: '--space-4', value: '1rem', category: 'space', description: 'Base spacing unit in the 8pt rhythm.' },
  { name: '--radius-md', value: '6px', category: 'shape', description: 'Default control and compact surface radius.' },
  { name: '--dur-2', value: '160ms', category: 'motion', description: 'Standard interaction transition duration.' },
  { name: '--shadow-1', value: 'tokenized', category: 'elevation', description: 'Low elevation for cards and controls.' },
  { name: '--opacity-disabled', value: '0.48', category: 'opacity', description: 'Disabled content and control opacity.' },
  { name: '--container-wide', value: 'var(--container)', category: 'layout', description: 'Maximum width for application shells.' },
];

export const chartTokenNames = [
  '--chart-1', '--chart-2', '--chart-3', '--chart-4',
  '--chart-5', '--chart-6', '--chart-7', '--chart-8',
] as const;
