let checkIcon = '<div class="check-background"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="26" viewBox="0 0 28 28" class="svg-icon--white progress__complete-icon" fill="white"><path d="M26.109 8.844c0 .391-.156.781-.438 1.062L12.233 23.344c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438l-7.781-7.781c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062l2.125-2.125c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l4.594 4.609 10.25-10.266c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l2.125 2.125c.281.281.438.672.438 1.062z"></path></svg></div>'
let oldHref = document.location.href;

const InsertTemplateDom = () => {
console.log('dom', checkIcon, oldHref)
}

export default InsertTemplateDom