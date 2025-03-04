--- Condition of the problem:

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in 
biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), 
Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine. 
In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. 
All input is guaranteed to be valid, i.e. each input string will only ever 
consist of 'G', 'C', 'A' and/or 'T'.
*/

--- MY SOLUTION: ---
clever: 0

  function DNAtoRNA(dna) {
    let result = '';
    for (let char of dna) {
      if (char === 't' || char === 'T') {
        result += 'U';
      } else {
        result += char;
      }
    }
    return result
  }


  
--- OTHER SOLUTIONS: ---

1) clever: 1252

  function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }

2) clever: 361

  function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }

3) clever: 83

  const DNAtoRNA = dna => dna.replace(/T/g, 'U');

4) clever: 68

  function DNAtoRNA(dna) {
    var hold = "";
    for (var i = 0; i < dna.length; i++) {
      if (dna[i] == "T") {
        hold += "U";
      } else {
        hold += dna[i];
      }
    }
    return hold;
  }
  
5) clever: 61

  function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
  }