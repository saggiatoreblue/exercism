export const translate = (codons) => {
  if (!codons) return [];
  let results = [];
  codons = codons.match(/.{1,3}/g);
  for (let i=0; i < codons.length; i++) {
    if (RNA[codons[i] === 'STOP') break;
    if (!RNA[codons[i]) throw new Error("Invalid codon");
    results.push(RNA[codons[i]]);
  }
  return results;
};
export const RNA = {'AUG' : 'Methionine', 'UUU' : 'Phenylalanine', 'UUC' : 'Phenylalanine', 'UUA' : 'Leucine', 'UUG' : 'Leucine', 'UCU' : 'Serine', 'UCC' : 'Serine', 'UCA' : 'Serine', 'UCG' : 'Serine', 'UAU' : 'Tyrosine', 'UAC' : 'Tyrosine', 'UGU' : 'Cysteine', 'UGC' : 'Cysteine', 'UGG' : 'Tryptophan', 'UAA' : 'STOP', 'UAG' : 'STOP', 'UGA' : 'STOP'};
