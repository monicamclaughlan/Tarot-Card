////////////////////////////
// Global Variables
///////////////////////////

const cards = [
        'https://www.trustedtarot.com/img/cards/the-fool.png',
        'https://www.trustedtarot.com/img/cards/the-magician.png',
        'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
        'https://www.trustedtarot.com/img/cards/the-empress.png',
        'https://www.trustedtarot.com/img/cards/the-emperor.png',
        'https://www.trustedtarot.com/img/cards/the-heirophant.png',
        'https://www.trustedtarot.com/img/cards/the-chariot.png',
        'https://www.trustedtarot.com/img/cards/strength.png',
        'https://www.trustedtarot.com/img/cards/the-hermit.png',
        'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
        'https://www.trustedtarot.com/img/cards/justice.png',
        'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
        'https://www.trustedtarot.com/img/cards/death.png',
        'https://www.trustedtarot.com/img/cards/temperance.png',
        'https://www.trustedtarot.com/img/cards/the-tower.png',
        'https://www.trustedtarot.com/img/cards/the-moon.png'
      ]

const $divclick = $('div').eq(1).css("background-color", "black").width('165px').height('275px') // made the card wider and taller to match the height of the cards
$divclick.text('Add a Card')

$divclick.on('click', (event) => {
        const randomcard = cards[Math.floor(Math.random() * cards.length)]    
        $('.container').append($('<img>').attr("src", randomcard))
        const $img = $('img')
        $img.addClass('card')     
})  




$('.card').on('click', (event) => { 
        $img.remove()
})

  $('form').on('submit', (event) => { 
    event.preventDefault()
    cards.push($("input[name='url']").val())
    console.log(cards)
    $("input[name='url']").val(null) 
  })


 