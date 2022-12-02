import React from 'react'

const CreateTaxRow = () => {
  if (!document.querySelector('.tax')) {
    const taxRow = document.createElement('tr')
    const taxTextTd = document.createElement('td')
    const taxNumberTd = document.createElement('td')
    taxTextTd.innerText = 'Tax'
    taxTextTd.classList.add('tax')
    taxNumberTd.innerText = '-'
    taxNumberTd.classList.add('tax-number')
    taxRow.appendChild(taxTextTd)
    taxRow.appendChild(taxNumberTd)
    document.querySelector('.totalizers-list')?.appendChild(taxRow)
  }
}

export default CreateTaxRow
