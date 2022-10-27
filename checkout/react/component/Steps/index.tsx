var checkIcon = '<div class="check-background"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="26" viewBox="0 0 28 28" class="svg-icon--white progress__complete-icon" fill="white"><path d="M26.109 8.844c0 .391-.156.781-.438 1.062L12.233 23.344c-.281.281-.672.438-1.062.438s-.781-.156-1.062-.438l-7.781-7.781c-.281-.281-.438-.672-.438-1.062s.156-.781.438-1.062l2.125-2.125c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l4.594 4.609 10.25-10.266c.281-.281.672-.438 1.062-.438s.781.156 1.062.438l2.125 2.125c.281.281.438.672.438 1.062z"></path></svg></div>'

const Steps = () => {
    const progressNode1 = document.querySelector<HTMLElement | any>('.progress__step.first')
    const progressNode2 = document.querySelector<HTMLElement | any>('.progress__step.second')
    const progressNode3 = document.querySelector<HTMLElement | any>('.progress__step.third')

    if (window.location.hash === '#/email' ||
      window.location.hash === '#/profile') {
      progressNode1.classList.remove('full')

      progressNode2.classList.add('inactive')
      progressNode2.classList.remove('progress__step--active')

      progressNode3.classList.add('inactive')
      progressNode3.classList.remove('progress__step--active')
      document.querySelectorAll('.progress__node')[0].innerHTML = ''
      document.querySelectorAll('.progress__node')[1].innerHTML = ''
    }

    if (window.location.hash === '#/shipping') {
      progressNode1.classList.add('full')
      progressNode2.classList.remove('inactive')
      progressNode2.classList.add('progress__step--active')
      progressNode2.classList.remove('full')
      progressNode3.classList.remove('inactive')
      progressNode3.classList.add('active')
      progressNode3.classList.remove('progress__step--active')
      document.querySelectorAll('.progress__node')[1].innerHTML = ''
      document.querySelectorAll<HTMLElement | any>('.progress__node')[0].innerHTML = checkIcon
    }

    if (window.location.hash === '#/payment') {
      progressNode1.classList.add('full')
      progressNode2.classList.add('full')
      progressNode2.classList.remove('inactive')
      progressNode2.classList.add('progress__step--active')
      progressNode3.classList.add('progress__step--active')
      progressNode3.classList.remove('inactive')
      document.querySelectorAll('.progress__node')[0].innerHTML = checkIcon
      document.querySelectorAll('.progress__node')[1].innerHTML = checkIcon

    }
  }

export default Steps