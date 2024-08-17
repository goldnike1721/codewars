--- Condition of the problem:

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus 
of cells and carries the "instructions" for the development 
and functioning of living organisms.
If you want to know more: http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". Your function receives one side of the DNA (string, except 
for Haskell); you need to return the other complementary side. DNA strand is 
never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

--- MY SOLUTION: ---
clever: 0

  function dnaStrand(dna) {
    let strand = dna.replaceAll('A', 'X')
                    .replaceAll('T', 'A')
                    .replaceAll('X', 'T')
                    .replaceAll('C', 'Y')
                    .replaceAll('G', 'C')
                    .replaceAll('Y', 'G');
    return strand;
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 1540

  function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

2) clever: 502

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

  function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }

3) clever: 252

  let pairs = {A:'T',T:'A',C:'G',G:'C'};
  const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

4) clever: 248

function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
  }

5) clever: 189

  const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);

6) clever: 176

  function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
  }