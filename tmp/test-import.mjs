import { TABS } from '../index.js';
import { generateIRPF } from '../irpf_to_pdf/index.js';
import {mockRicardo2025} from '../irpf_to_pdf/mocks/fullData.js'

console.log('TABS keys count', Object.keys(TABS).length);
console.log('generateIRPF type', typeof generateIRPF);

// quick no-data call (should handle empty data)
try {
  const pdf = generateIRPF(2025, 'Test', '00000000000', mockRicardo2025);
  console.log('generateIRPF returned', typeof pdf);
} catch (err) {
  console.error('Error calling generateIRPF:', err && err.stack ? err.stack : err);
}
